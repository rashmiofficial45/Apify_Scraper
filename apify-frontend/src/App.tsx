import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Play,
  History,
  Search,
  Filter,
  Database,
  Terminal,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  ExternalLink,
  Instagram,
  Heart,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  HelpCircle,
  Copy,
  Check,
  User,
  Lock,
  Mail,
  LogOut,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  LogIn,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { scrapeApi } from './services/api';
import type { ScrapeRequest, ScrapeLog } from './services/api';

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');

  // History and API status states
  const [requests, setRequests] = useState<ScrapeRequest[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Trigger Scrape states
  const [triggerMode, setTriggerMode] = useState<'instagram' | 'generic'>('instagram');
  const [instagramUsernames, setInstagramUsernames] = useState('');
  const [instagramResultsType, setInstagramResultsType] = useState('posts');
  const [instagramResultsLimit, setInstagramResultsLimit] = useState(3);

  const [genericActorName, setGenericActorName] = useState('apify/web-scraper');
  const [genericInputData, setGenericInputData] = useState('{\n  "startUrls": [{"url": "https://crawlee.dev"}],\n  "maxRequestsPerCrawl": 10\n}');

  const [triggering, setTriggering] = useState(false);
  const [triggerSuccess, setTriggerSuccess] = useState<string | null>(null);

  // Search, Filter, Pagination states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [actorFilter, setActorFilter] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Detail Dialog states
  const [selectedRequest, setSelectedRequest] = useState<ScrapeRequest | null>(null);
  const [selectedLogs, setSelectedLogs] = useState<ScrapeLog[]>([]);
  const [selectedResults, setSelectedResults] = useState<any[] | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [detailsTab, setDetailsTab] = useState<'results' | 'logs' | 'config'>('results');

  // Polling toggle
  const [isPolling, setIsPolling] = useState(true);

  // Copy helper state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Authentication & View States
  const [user, setUser] = useState<{ email: string; name?: string } | null>(() => {
    const saved = localStorage.getItem('apify_auth_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [isBackendOnline, setIsBackendOnline] = useState(true);

  // Auth Handlers
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    if (!authEmail || !authPassword || !authName) {
      setAuthError('All fields are required.');
      setAuthLoading(false);
      return;
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem('apify_users') || '[]');
      if (existingUsers.some((u: any) => u.email === authEmail)) {
        setAuthError('An account with this email already exists.');
        setAuthLoading(false);
        return;
      }

      const newUser = { email: authEmail, password: authPassword, name: authName };
      existingUsers.push(newUser);
      localStorage.setItem('apify_users', JSON.stringify(existingUsers));

      // Auto login
      const sessionUser = { email: authEmail, name: authName };
      localStorage.setItem('apify_auth_user', JSON.stringify(sessionUser));
      setUser(sessionUser);
      setAuthEmail('');
      setAuthPassword('');
      setAuthName('');
    } catch (err) {
      setAuthError('Failed to sign up. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    if (!authEmail || !authPassword) {
      setAuthError('Please enter both email and password.');
      setAuthLoading(false);
      return;
    }

    if (authEmail === 'admin@apify.io' && authPassword === 'admin123') {
      const sessionUser = { email: authEmail, name: 'Apify Administrator' };
      localStorage.setItem('apify_auth_user', JSON.stringify(sessionUser));
      setUser(sessionUser);
      setAuthEmail('');
      setAuthPassword('');
      setAuthLoading(false);
      return;
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem('apify_users') || '[]');
      const matchedUser = existingUsers.find((u: any) => u.email === authEmail && u.password === authPassword);

      if (!matchedUser) {
        setAuthError('Invalid email or password.');
        setAuthLoading(false);
        return;
      }

      const sessionUser = { email: matchedUser.email, name: matchedUser.name };
      localStorage.setItem('apify_auth_user', JSON.stringify(sessionUser));
      setUser(sessionUser);
      setAuthEmail('');
      setAuthPassword('');
    } catch (err) {
      setAuthError('Failed to login. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('apify_auth_user');
    setUser(null);
    setShowAuth(false);
  };

  // Load history function
  const loadHistory = useCallback(async (silent = false) => {
    if (!user) return;
    if (!silent) setLoadingHistory(true);
    try {
      const data = await scrapeApi.getAllScrapeRequests();
      setRequests(data);
      setIsBackendOnline(true);
      setError(null);
    } catch (err: any) {
      console.error('Error loading history:', err);
      setIsBackendOnline(false);
      setError(err.message || 'Failed to fetch scrape requests history.');
    } finally {
      if (!silent) setLoadingHistory(false);
    }
  }, [user]);

  // Fetch history on load and setup polling
  useEffect(() => {
    if (user) {
      loadHistory();
    }
  }, [loadHistory, user]);

  // Polling logic for running or pending scraping jobs
  useEffect(() => {
    if (!isPolling || !user) return;

    // Check if there are any pending or running requests
    const hasActiveRequests = requests.some(r => r.status === 'RUNNING' || r.status === 'PENDING');

    // If we have active requests, poll more frequently (every 5 seconds)
    // If not, we still poll but less frequently (every 15 seconds) to catch webhooks or external runs
    const intervalTime = hasActiveRequests ? 5000 : 15000;

    const interval = setInterval(() => {
      loadHistory(true);

      // Also update selected request details in real-time if it is open and active
      if (selectedRequest && (selectedRequest.status === 'RUNNING' || selectedRequest.status === 'PENDING')) {
        refreshSelectedRequestDetails(selectedRequest.id);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPolling, requests, selectedRequest, loadHistory, user]);

  // Refresh active request details when Dialog is open
  const refreshSelectedRequestDetails = async (id: string) => {
    try {
      const requestDetails = await scrapeApi.getScrapeStatus(id);
      setSelectedLogs(requestDetails.logs || []);

      // Update its status inside requests state list
      setRequests(prev => prev.map(req => req.id === id ? { ...req, status: requestDetails.status } : req));

      // If status changed to COMPLETED, fetch dataset results
      if (requestDetails.status === 'COMPLETED') {
        const results = await scrapeApi.getScrapeResults(id);
        setSelectedResults(results.data || []);
      }
    } catch (err) {
      console.error('Error updating status during dialog open:', err);
    }
  };

  // View request details handler
  const handleViewDetails = async (request: ScrapeRequest) => {
    setSelectedRequest(request);
    setSelectedLogs([]);
    setSelectedResults(null);
    setLoadingDetails(true);
    setDetailsTab('results'); // default to results tab

    try {
      // 1. Fetch current status & logs
      const reqStatus = await scrapeApi.getScrapeStatus(request.id);
      setSelectedLogs(reqStatus.logs || []);

      // 2. Fetch results if COMPLETED
      if (reqStatus.status === 'COMPLETED') {
        const results = await scrapeApi.getScrapeResults(request.id);
        setSelectedResults(results.data || []);
      } else {
        setSelectedResults([]);
      }
    } catch (err: any) {
      console.error('Error fetching details:', err);
      // Fallback: show what we have in request object
      setSelectedLogs(request.logs || []);
      setSelectedResults([]);
    } finally {
      setLoadingDetails(false);
    }
  };

  // Submit trigger scraping handler
  const handleTriggerScrape = async (e: React.FormEvent) => {
    e.preventDefault();
    setTriggering(true);
    setTriggerSuccess(null);
    setError(null);

    try {
      let result;
      if (triggerMode === 'instagram') {
        const usernamesArray = instagramUsernames
          .split(',')
          .map(u => u.trim())
          .filter(u => u.length > 0);

        if (usernamesArray.length === 0) {
          throw new Error('Please enter at least one Instagram username.');
        }

        result = await scrapeApi.triggerInstagramScrape(
          usernamesArray,
          instagramResultsType,
          instagramResultsLimit
        );
      } else {
        // Generic mode
        let parsedInput;
        try {
          parsedInput = JSON.parse(genericInputData);
        } catch (e) {
          throw new Error('Invalid JSON input format. Please verify your brackets and syntax.');
        }

        if (!genericActorName.trim()) {
          throw new Error('Actor Name is required.');
        }

        result = await scrapeApi.triggerGenericScrape(genericActorName.trim(), parsedInput);
      }

      setTriggerSuccess(`Request submitted successfully! Job status: ${result.status}. Job ID: ${result.requestId}`);

      // Clear forms
      if (triggerMode === 'instagram') {
        setInstagramUsernames('');
      }

      // Reload history and automatically route user to history tab
      await loadHistory();
      setTimeout(() => {
        setActiveTab('history');
        setTriggerSuccess(null);
      }, 2000);

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to submit scraping request.');
    } finally {
      setTriggering(false);
    }
  };

  // Copy to clipboard helper
  const handleCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // Download results handler (JSON)
  const handleDownloadJSON = (request: ScrapeRequest, data: any[]) => {
    if (!data) return;
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `scrape_${request.id.substring(0, 8)}_results.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Download results handler (CSV)
  const handleDownloadCSV = (request: ScrapeRequest, data: any[]) => {
    if (!data || data.length === 0) return;

    // Find all unique keys
    const keys = Array.from(new Set(data.flatMap(item => Object.keys(item))));
    const csvRows = [];

    // Header row
    csvRows.push(keys.join(','));

    // Value rows
    for (const item of data) {
      const values = keys.map(key => {
        const val = item[key];
        // Handle nested JSON strings or escape quotes
        if (val === null || val === undefined) return '';
        const escaped = ('' + val).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    const csvContent = `data:text/csv;charset=utf-8,${encodeURIComponent(csvRows.join('\n'))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', csvContent);
    downloadAnchor.setAttribute('download', `scrape_${request.id.substring(0, 8)}_results.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Memoized lists of unique actors for filters
  const uniqueActors = useMemo(() => {
    const actors = requests.map(r => r.actorName);
    return Array.from(new Set(actors));
  }, [requests]);

  // Filtering and Searching Logic
  const filteredRequests = useMemo(() => {
    return requests.filter(request => {
      // 1. Search filter
      const matchesSearch =
        request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.actorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (request.runId && request.runId.toLowerCase().includes(searchTerm.toLowerCase())) ||
        JSON.stringify(request.inputData).toLowerCase().includes(searchTerm.toLowerCase());

      // 2. Status filter
      const matchesStatus = statusFilter === 'ALL' || request.status === statusFilter;

      // 3. Actor filter
      const matchesActor = actorFilter === 'ALL' || request.actorName === actorFilter;

      return matchesSearch && matchesStatus && matchesActor;
    });
  }, [requests, searchTerm, statusFilter, actorFilter]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage) || 1;
  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRequests.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredRequests, currentPage, itemsPerPage]);

  // Reset pagination if page index exceeds total pages
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // UI Status Badges
  const renderStatusBadge = (status: ScrapeRequest['status']) => {
    switch (status) {
      case 'COMPLETED':
        return <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">COMPLETED</Badge>;
      case 'RUNNING':
        return (
          <Badge className="bg-sky-500/10 text-sky-400 border border-sky-500/30 animate-pulse flex items-center gap-1 font-medium">
            <Loader2 className="h-3 w-3 animate-spin" />
            RUNNING
          </Badge>
        );
      case 'PENDING':
        return <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium">PENDING</Badge>;
      case 'FAILED':
        return <Badge className="bg-rose-500/10 text-rose-400 border border-rose-500/30 font-medium">FAILED</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans antialiased">
      {/* Background radial effects for premium aesthetics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-950/10 blur-[120px]" />
      </div>

      {!user ? (
        showAuth ? (
          /* ================= AUTHENTICATION PAGE ================= */
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
            <Card className="w-full max-w-md bg-zinc-950/70 backdrop-blur-md border-zinc-800/80 shadow-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500" />
              
              <div className="flex flex-col items-center mb-6">
                <div className="p-3 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-xl shadow-lg shadow-purple-500/20 mb-3">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white">Welcome to Antigravity</h2>
                <p className="text-xs text-zinc-500 mt-1">Apify Scraping Dashboard & Console</p>
              </div>

              {authError && (
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3 flex items-start gap-2.5 mb-4">
                  <AlertCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-rose-300 font-medium leading-relaxed">{authError}</span>
                </div>
              )}

              <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 mb-6">
                <button
                  type="button"
                  onClick={() => { setAuthMode('login'); setAuthError(null); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
                    authMode === 'login' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <LogIn className="h-3.5 w-3.5" />
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setAuthMode('signup'); setAuthError(null); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
                    authMode === 'signup' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <UserPlus className="h-3.5 w-3.5" />
                  Create Account
                </button>
              </div>

              <form onSubmit={authMode === 'login' ? handleLogin : handleSignUp} className="space-y-4">
                {authMode === 'signup' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        className="bg-zinc-900/50 border-zinc-800 focus:ring-purple-500 text-zinc-200 h-10 pl-9"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                    <Input
                      type="email"
                      placeholder="admin@apify.io"
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="bg-zinc-900/50 border-zinc-800 focus:ring-purple-500 text-zinc-200 h-10 pl-9"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="bg-zinc-900/50 border-zinc-800 focus:ring-purple-500 text-zinc-200 h-10 pl-9"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={authLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold h-10 shadow-lg shadow-purple-500/10 mt-6"
                >
                  {authLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : authMode === 'login' ? (
                    'Access Dashboard'
                  ) : (
                    'Register & Login'
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Demo Mode Active
                </span>
                <button
                  type="button"
                  onClick={() => setShowAuth(false)}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  ← Back to landing
                </button>
              </div>

              {authMode === 'login' && (
                <div className="mt-4 p-2.5 rounded-lg bg-purple-950/20 border border-purple-900/30 text-[10px] text-purple-300 font-mono text-center">
                  Demo User: <span className="text-white font-bold">admin@apify.io</span> / <span className="text-white font-bold">admin123</span>
                </div>
              )}
            </Card>
          </div>
        ) : (
          /* ================= LANDING PAGE ================= */
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            {/* Nav Header */}
            <header className="border-b border-zinc-900 px-6 py-4 flex items-center justify-between bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-xl shadow-md">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white">Antigravity Scraper</span>
              </div>
              <Button
                onClick={() => { setShowAuth(true); setAuthMode('login'); }}
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold h-8 px-4"
              >
                Launch Console
              </Button>
            </header>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Next-Gen Cloud Scraper Integration
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Unleash the Power of{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  Automated Web Scraping
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                A professional React & Tailwind dashboard built to configure, trigger, and manage scraping operations. Streamline Instagram extractions and custom Apify cloud actions with live tracking.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Button
                  onClick={() => { setShowAuth(true); setAuthMode('login'); }}
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white font-bold h-11 px-8 rounded-lg shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2"
                >
                  Enter Cloud Console
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => { setShowAuth(true); setAuthMode('signup'); }}
                  className="w-full sm:w-auto border-zinc-800 text-zinc-300 hover:text-white bg-zinc-900/40 h-11 px-8 rounded-lg"
                >
                  Create Free Account
                </Button>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24 text-left">
                <div className="bg-zinc-950/40 border border-zinc-850 p-6 rounded-xl backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-4">
                    <Instagram className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">Instagram Extractions</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Instantly scrape usernames, posts, carousels, video reels, captions, and comments. Optimized templates ready to trigger.
                  </p>
                </div>

                <div className="bg-zinc-950/40 border border-zinc-850 p-6 rounded-xl backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Code2 className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">Custom Actors</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Trigger any web scraper or custom cloud agent on Apify. Input parameters with structured raw JSON payloads.
                  </p>
                </div>

                <div className="bg-zinc-950/40 border border-zinc-850 p-6 rounded-xl backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">Live Console Logs</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Tails active logs from cloud executions in real-time. Built-in severity highlighting and scroll locks.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-900 bg-zinc-950/30 py-8 px-6 text-center text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-zinc-650 font-mono">Antigravity Scraper Platform © {new Date().getFullYear()}</span>
              <div className="flex gap-4">
                <span className="hover:text-zinc-400 transition cursor-pointer">Terms of Service</span>
                <span className="hover:text-zinc-400 transition cursor-pointer">Privacy Policy</span>
              </div>
            </footer>
          </div>
        )
      ) : (
        /* ================= MAIN DASHBOARD CONTENT ================= */
        <>
        <div className="relative z-10 flex flex-col md:flex-row min-h-screen w-full">

          {/* Sidebar Nav */}
          <aside className="w-full md:w-64 bg-zinc-950/70 backdrop-blur-md border-b md:border-b-0 md:border-r border-zinc-800/80 p-6 flex flex-col justify-between">
            <div>
              {/* Header / Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-xl shadow-lg shadow-purple-500/20">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-white m-0 leading-none">Antigravity</h1>
                  <span className="text-[11px] font-semibold tracking-wider text-purple-400 uppercase">Apify Scraper</span>
                </div>
              </div>

              {/* Nav Menu */}
              <nav className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'dashboard'
                      ? 'bg-purple-600/15 text-purple-400 border-l-2 border-purple-500'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                    }`}
                >
                  <Play className="h-4 w-4" />
                  Scraper Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('history')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'history'
                      ? 'bg-purple-600/15 text-purple-400 border-l-2 border-purple-500'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                    }`}
                >
                  <History className="h-4 w-4" />
                  Scrape History
                </button>
              </nav>
            </div>

            <div>
              {/* User Profile Card */}
              <div className="mt-8 border-t border-zinc-900 pt-6">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/80 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
                    {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-white truncate">{user.name || 'User'}</p>
                    <p className="text-[10px] text-zinc-500 truncate">{user.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    title="Sign Out"
                    className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-850 transition shrink-0"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Connection Details in Sidebar Footer */}
              <div className="pt-6 border-t border-zinc-900">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span className="flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${isPolling ? 'bg-purple-500 animate-pulse' : 'bg-zinc-600'}`} />
                    Polling Active
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPolling(!isPolling)}
                    className="text-[10px] text-purple-400 hover:text-purple-300 font-semibold uppercase tracking-wider bg-purple-500/5 hover:bg-purple-500/10 px-2 py-0.5 rounded transition"
                  >
                    {isPolling ? 'Pause' : 'Resume'}
                  </button>
                </div>
                <div className="text-[11px] text-zinc-500">
                  Backend Status:{' '}
                  {isBackendOnline ? (
                    <span className="text-emerald-400 font-semibold">Online</span>
                  ) : (
                    <span className="text-rose-400 font-semibold">Offline</span>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Pane */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">

          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                {activeTab === 'dashboard' ? 'Trigger New Scraper' : 'Scrape History & Analytics'}
              </h2>
              <p className="text-zinc-400 text-sm">
                {activeTab === 'dashboard'
                  ? 'Initiate a scraping job with predefined templates or custom settings.'
                  : 'Monitor scraping requests, browse results datasets, and examine execution logs.'}
              </p>
            </div>

            {/* Quick Stats / Refresh */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => loadHistory(false)}
                disabled={loadingHistory}
                className="bg-zinc-900/50 hover:bg-zinc-900 border-zinc-800 text-zinc-300 font-medium h-9"
              >
                <RefreshCw className={`mr-2 h-3.5 w-3.5 ${loadingHistory ? 'animate-spin' : ''}`} />
                Refresh History
              </Button>
            </div>
          </header>

          {/* Messages Alerts */}
          {error && (
            <div className="bg-rose-950/20 border border-rose-500/30 text-rose-400 px-4 py-3.5 rounded-xl flex items-start gap-3 text-sm mb-6 max-w-4xl shadow-lg">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-rose-300 block mb-0.5">Error Occurred</span>
                {error}
              </div>
            </div>
          )}

          {triggerSuccess && (
            <div className="bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 px-4 py-3.5 rounded-xl flex items-start gap-3 text-sm mb-6 max-w-4xl shadow-lg animate-fade-in">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-emerald-300 block mb-0.5">Scraping Job Queued</span>
                {triggerSuccess}
              </div>
            </div>
          )}

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl">

              {/* Form Card (2/3 width) */}
              <div className="lg:col-span-2">
                <Card className="bg-zinc-950/40 backdrop-blur-md border-zinc-800/80 shadow-2xl overflow-hidden">
                  <CardHeader className="border-b border-zinc-900/80 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-white font-bold">Scraping Configuration</CardTitle>
                        <CardDescription className="text-zinc-400 text-xs">Configure the input parameters for the scraper actor.</CardDescription>
                      </div>
                      <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
                        <button
                          onClick={() => setTriggerMode('instagram')}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide transition-all ${triggerMode === 'instagram'
                              ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/20'
                              : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                        >
                          <Instagram className="h-3.5 w-3.5" />
                          Instagram Scraper
                        </button>
                        <button
                          onClick={() => setTriggerMode('generic')}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide transition-all ${triggerMode === 'generic'
                              ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/20'
                              : 'text-zinc-400 hover:text-zinc-200'
                            }`}
                        >
                          <Code2 className="h-3.5 w-3.5" />
                          Custom Actor
                        </button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <form onSubmit={handleTriggerScrape} className="space-y-6">

                      {/* INSTAGRAM FORM */}
                      {triggerMode === 'instagram' && (
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300 flex items-center justify-between">
                              <span>Target Instagram Usernames / Profiles</span>
                              <span className="text-xs text-zinc-500 font-normal">Separate values with commas</span>
                            </label>
                            <Input
                              value={instagramUsernames}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstagramUsernames(e.target.value)}
                              placeholder="e.g. instagram, crystal_clean_scrapes"
                              required
                              className="bg-zinc-900/50 border-zinc-800/80 focus-visible:ring-purple-500 text-zinc-200 placeholder:text-zinc-600 h-10"
                            />
                            <p className="text-[11px] text-zinc-500">
                              Input the usernames without the '@' sign, or direct profile links (e.g. `https://instagram.com/username`).
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-zinc-300">Results Type</label>
                              <Select
                                value={instagramResultsType}
                                onValueChange={setInstagramResultsType}
                              >
                                <SelectTrigger className="bg-zinc-900/50 border-zinc-800/80 focus:ring-purple-500 text-zinc-200 h-10">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
                                  <SelectItem value="posts">Posts</SelectItem>
                                  <SelectItem value="details">Profile Details Only</SelectItem>
                                  <SelectItem value="comments">Comments</SelectItem>
                                  <SelectItem value="hashtags">Hashtags</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-zinc-300 flex justify-between">
                                <span>Results Limit</span>
                                <span className="text-purple-400 font-bold">{instagramResultsLimit} items</span>
                              </label>
                              <div className="flex items-center gap-4 h-10">
                                <Slider
                                  value={[instagramResultsLimit]}
                                  onValueChange={(val: number[]) => setInstagramResultsLimit(val[0])}
                                  min={1}
                                  max={50}
                                  step={1}
                                  className="flex-1 py-4"
                                />
                                <Input
                                  type="number"
                                  value={instagramResultsLimit}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstagramResultsLimit(Math.max(1, Number(e.target.value)))}
                                  className="w-16 text-center bg-zinc-900/50 border-zinc-800/80 text-zinc-200 h-9 p-1"
                                />
                              </div>
                              <p className="text-[11px] text-zinc-500">
                                The maximum number of scraped items to download per profile target.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* GENERIC ACTOR FORM */}
                      {triggerMode === 'generic' && (
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300">
                              Apify Actor Name / ID
                            </label>
                            <Input
                              value={genericActorName}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGenericActorName(e.target.value)}
                              placeholder="e.g. apify/google-maps-scraper"
                              required
                              className="bg-zinc-900/50 border-zinc-800/80 focus-visible:ring-purple-500 text-zinc-200 placeholder:text-zinc-600 h-10"
                            />
                            <p className="text-[11px] text-zinc-500">
                              The unique Apify registry name or ID of the Actor.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300 flex justify-between">
                              <span>Actor Input JSON Configuration</span>
                              <span className="text-xs text-zinc-500 font-normal">Must be valid JSON syntax</span>
                            </label>
                            <textarea
                              value={genericInputData}
                              onChange={(e) => setGenericInputData(e.target.value)}
                              placeholder='{\n  "key": "value"\n}'
                              required
                              rows={8}
                              className="w-full bg-zinc-900/40 border border-zinc-800/80 rounded-lg p-3 text-sm text-zinc-200 font-mono focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      )}

                      <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-end">
                        <Button
                          type="submit"
                          disabled={triggering}
                          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-6 py-2 h-10 rounded-lg shadow-lg shadow-purple-500/20 transition-all flex items-center gap-2"
                        >
                          {triggering ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Triggering Apify Actor...
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 fill-current" />
                              Run Scraping Request
                            </>
                          )}
                        </Button>
                      </div>

                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Informative Side Card (1/3 width) */}
              <div className="space-y-6">
                <Card className="bg-zinc-950/40 backdrop-blur-md border-zinc-800/80 shadow-2xl">
                  <CardHeader className="px-6 py-4">
                    <CardTitle className="text-base text-zinc-200 font-bold flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-purple-400" />
                      Instagram Scraper Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3.5 text-xs text-zinc-400">
                    <p>
                      The Instagram Actor Scraper utilizes Apify's high-performance proxy networks to crawl public profiles securely.
                    </p>
                    <div className="bg-zinc-900/60 border border-zinc-800/40 p-3 rounded-lg text-[11px] space-y-1">
                      <span className="font-semibold text-zinc-300 block mb-1">Supported Formats:</span>
                      <div>• Single Username: <code className="text-purple-400">cristiano</code></div>
                      <div>• Multiple Usernames: <code className="text-purple-400">nasa, natgeo</code></div>
                      <div>• Direct URLs: <code className="text-purple-400">https://www.instagram.com/zuck/</code></div>
                    </div>
                    <p className="leading-relaxed">
                      Once triggered, the scraper is assigned an Apify Run ID and begins processing in the cloud. We poll the database state and display the scraped posts visually with high fidelity once finished.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-950/40 backdrop-blur-md border-zinc-800/80 shadow-2xl">
                  <CardHeader className="px-6 py-4">
                    <CardTitle className="text-base text-zinc-200 font-bold flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-indigo-400" />
                      How It Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-zinc-400 space-y-3">
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</div>
                      <p>Frontend requests trigger route through local API server.</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</div>
                      <p>Backend triggers Apify Actor run and attaches state webhooks.</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</div>
                      <p>Fallback background polling verifies job status updates.</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</div>
                      <p>Completed dataset is cached in local Postgres DB and loaded.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          )}

          {/* TAB 2: HISTORY TABLE */}
          {activeTab === 'history' && (
            <Card className="bg-zinc-950/40 backdrop-blur-md border-zinc-800/80 shadow-2xl max-w-7xl">
              <CardHeader className="border-b border-zinc-900/80 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-lg text-white font-bold">Scraping History & Logs</CardTitle>
                  <CardDescription className="text-zinc-400 text-xs">A comprehensive log of all triggered scraping runs and their results.</CardDescription>
                </div>

                {/* Search and Filters panel */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Search input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-600" />
                    <Input
                      value={searchTerm}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                      placeholder="Search ID, Actor, Input..."
                      className="bg-zinc-900/40 border-zinc-800/80 focus-visible:ring-purple-500 text-zinc-200 placeholder:text-zinc-600 pl-9 h-9 text-xs"
                    />
                  </div>

                  {/* Status filter */}
                  <div className="flex items-center gap-1.5">
                    <Filter className="h-3.5 w-3.5 text-zinc-500" />
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="bg-zinc-900/40 border-zinc-800/80 text-zinc-200 w-32 h-9 text-xs">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200 text-xs">
                        <SelectItem value="ALL">All Statuses</SelectItem>
                        <SelectItem value="COMPLETED">Completed</SelectItem>
                        <SelectItem value="RUNNING">Running</SelectItem>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="FAILED">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Actor filter */}
                  <Select value={actorFilter} onValueChange={setActorFilter}>
                    <SelectTrigger className="bg-zinc-900/40 border-zinc-800/80 text-zinc-200 w-44 h-9 text-xs">
                      <SelectValue placeholder="Actor" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200 text-xs">
                      <SelectItem value="ALL">All Actors</SelectItem>
                      {uniqueActors.map(actor => (
                        <SelectItem key={actor} value={actor}>{actor}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-zinc-900/30 border-b border-zinc-900/80">
                    <TableRow className="border-b border-zinc-800/60 hover:bg-transparent">
                      <TableHead className="w-[120px] text-zinc-400 font-bold text-xs py-3.5 pl-6">Request ID</TableHead>
                      <TableHead className="text-zinc-400 font-bold text-xs py-3.5">Actor Name</TableHead>
                      <TableHead className="text-zinc-400 font-bold text-xs py-3.5">Status</TableHead>
                      <TableHead className="text-zinc-400 font-bold text-xs py-3.5">Triggered At</TableHead>
                      <TableHead className="text-zinc-400 font-bold text-xs py-3.5">Apify Run ID</TableHead>
                      <TableHead className="w-[150px] text-right text-zinc-400 font-bold text-xs py-3.5 pr-6">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loadingHistory && requests.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-12 text-zinc-500">
                          <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-purple-500" />
                          Loading scraper request history...
                        </TableCell>
                      </TableRow>
                    ) : paginatedRequests.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-12 text-zinc-500 text-sm">
                          No matching scrape requests found in history.
                        </TableCell>
                      </TableRow>
                    ) : (
                      paginatedRequests.map((request) => (
                        <TableRow key={request.id} className="border-b border-zinc-900/60 hover:bg-zinc-900/20 transition-all">
                          <TableCell className="font-mono text-zinc-400 text-xs py-3.5 pl-6">
                            <span className="flex items-center gap-1.5">
                              {request.id.substring(0, 8)}...
                              <button
                                onClick={() => handleCopyToClipboard(request.id, request.id)}
                                className="text-zinc-600 hover:text-zinc-400 transition"
                                title="Copy full ID"
                              >
                                {copiedId === request.id ? (
                                  <Check className="h-3 w-3 text-emerald-500" />
                                ) : (
                                  <Copy className="h-3 w-3" />
                                )}
                              </button>
                            </span>
                          </TableCell>
                          <TableCell className="py-3.5 text-xs">
                            <div className="font-medium text-zinc-200">
                              {request.actorName === 'apify/instagram-scraper' ? (
                                <span className="flex items-center gap-1.5">
                                  <Instagram className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                                  Instagram Scraper
                                </span>
                              ) : (
                                <span className="flex items-center gap-1.5 text-indigo-400">
                                  <Code2 className="h-3.5 w-3.5 shrink-0" />
                                  {request.actorName}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-zinc-600 font-mono block mt-0.5 truncate max-w-xs">
                              {JSON.stringify(request.inputData)}
                            </span>
                          </TableCell>
                          <TableCell className="py-3.5 text-xs">
                            {renderStatusBadge(request.status)}
                          </TableCell>
                          <TableCell className="text-zinc-400 text-xs py-3.5">
                            {new Date(request.createdAt).toLocaleString()}
                          </TableCell>
                          <TableCell className="font-mono text-zinc-500 text-[11px] py-3.5">
                            {request.runId ? (
                              <span className="flex items-center gap-1">
                                {request.runId.substring(0, 10)}...
                                <a
                                  href={`https://console.apify.com/actors/runs/${request.runId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-zinc-600 hover:text-purple-400 transition"
                                  title="View on Apify Console"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </span>
                            ) : (
                              'N/A'
                            )}
                          </TableCell>
                          <TableCell className="text-right py-3.5 pr-6">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewDetails(request)}
                              className="bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800 text-zinc-300 font-semibold text-xs h-8"
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between border-t border-zinc-900/80 px-6 py-4 bg-zinc-950/20">
                  <div className="text-xs text-zinc-500">
                    Showing <span className="font-semibold text-zinc-400">{filteredRequests.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</span> to <span className="font-semibold text-zinc-400">{Math.min(currentPage * itemsPerPage, filteredRequests.length)}</span> of <span className="font-semibold text-zinc-400">{filteredRequests.length}</span> requests
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="border-zinc-800 text-zinc-300 h-8 w-8 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <span className="text-xs text-zinc-400 font-semibold px-2">
                      Page {currentPage} of {totalPages}
                    </span>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="border-zinc-800 text-zinc-300 h-8 w-8 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

        </main>
      </div>

      {/* DETAIL DRAWER / MODAL DIALOG */}
      <Dialog open={selectedRequest !== null} onOpenChange={(open: boolean) => !open && setSelectedRequest(null)}>
        <DialogContent className="bg-zinc-950 border-zinc-800/80 text-zinc-100 max-w-none sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[70vw] w-full h-[90vh] md:h-[85vh] flex flex-col p-0 overflow-hidden shadow-2xl">

          {selectedRequest && (
            <>
              {/* Header */}
              <DialogHeader className="border-b border-zinc-900 p-6 flex flex-row items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <DialogTitle className="text-lg font-bold text-white tracking-tight">Scrape Request Details</DialogTitle>
                    {renderStatusBadge(selectedRequest.status)}
                  </div>
                  <DialogDescription className="text-zinc-500 text-xs font-mono select-all">
                    ID: {selectedRequest.id}
                  </DialogDescription>
                </div>

                {/* Download Buttons for completed runs */}
                {selectedRequest.status === 'COMPLETED' && selectedResults && selectedResults.length > 0 && (
                  <div className="flex items-center gap-2 pr-6">
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={() => handleDownloadJSON(selectedRequest, selectedResults)}
                      className="bg-zinc-900 hover:bg-zinc-900 border-zinc-800 text-zinc-300 text-[11px] h-7 px-2.5 font-semibold"
                    >
                      <Download className="mr-1 h-3.5 w-3.5" />
                      JSON
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={() => handleDownloadCSV(selectedRequest, selectedResults)}
                      className="bg-zinc-900 hover:bg-zinc-900 border-zinc-800 text-zinc-300 text-[11px] h-7 px-2.5 font-semibold"
                    >
                      <Download className="mr-1 h-3.5 w-3.5" />
                      CSV
                    </Button>
                  </div>
                )}
              </DialogHeader>

              {/* Tabs list inside dialog */}
              <div className="border-b border-zinc-900 px-6 bg-zinc-950 overflow-x-auto scrollbar-none flex-nowrap scroll-smooth">
                <Tabs value={detailsTab} onValueChange={(val: any) => setDetailsTab(val)} className="w-full">
                  <TabsList className="bg-transparent border-b-0 p-0 flex gap-6 h-12 justify-start flex-nowrap w-full">
                    <TabsTrigger
                      value="results"
                      className={`shrink-0 rounded-none bg-transparent hover:text-white px-0 border-b-2 h-full text-xs font-bold transition-all ${detailsTab === 'results'
                          ? 'border-purple-500 text-purple-400'
                          : 'border-transparent text-zinc-400'
                        }`}
                    >
                      <Database className="mr-1.5 h-3.5 w-3.5" />
                      Scraped Results ({selectedResults?.length || 0})
                    </TabsTrigger>
                    <TabsTrigger
                      value="logs"
                      className={`shrink-0 rounded-none bg-transparent hover:text-white px-0 border-b-2 h-full text-xs font-bold transition-all ${detailsTab === 'logs'
                          ? 'border-purple-500 text-purple-400'
                          : 'border-transparent text-zinc-400'
                        }`}
                    >
                      <Terminal className="mr-1.5 h-3.5 w-3.5" />
                      Execution Logs ({selectedLogs.length})
                    </TabsTrigger>
                    <TabsTrigger
                      value="config"
                      className={`shrink-0 rounded-none bg-transparent hover:text-white px-0 border-b-2 h-full text-xs font-bold transition-all ${detailsTab === 'config'
                          ? 'border-purple-500 text-purple-400'
                          : 'border-transparent text-zinc-400'
                        }`}
                    >
                      <FileText className="mr-1.5 h-3.5 w-3.5" />
                      Config Parameters
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Body Content */}
              <div className="flex-1 overflow-y-auto p-6 min-h-0 bg-[#0c0c0e]">

                {/* Loader in dialog */}
                {loadingDetails && (
                  <div className="flex flex-col items-center justify-center py-24 text-zinc-500">
                    <Loader2 className="h-8 w-8 animate-spin text-purple-500 mb-3" />
                    Fetching scrape details...
                  </div>
                )}

                {!loadingDetails && (
                  <>
                    {/* RESULTS TAB */}
                    {detailsTab === 'results' && (
                      <div className="space-y-4">
                        {selectedRequest.status !== 'COMPLETED' ? (
                          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500">
                            <Clock className="h-8 w-8 mx-auto mb-2 text-zinc-600" />
                            <p className="font-semibold text-zinc-400 mb-1">Results not available yet</p>
                            <p className="text-xs">
                              {selectedRequest.status === 'RUNNING'
                                ? 'The scraping job is currently running in the cloud. Check back in a few moments.'
                                : selectedRequest.status === 'FAILED'
                                  ? 'This scraping run failed. Inspect the execution logs tab to debug.'
                                  : 'This request is pending execution.'}
                            </p>
                          </div>
                        ) : !selectedResults || selectedResults.length === 0 ? (
                          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 text-center text-zinc-500">
                            <AlertCircle className="h-8 w-8 mx-auto mb-2 text-zinc-600" />
                            <p className="font-semibold text-zinc-400 mb-1">No items found</p>
                            <p className="text-xs">
                              The scraper successfully connected and exited but returned an empty dataset.
                            </p>
                          </div>
                        ) : selectedRequest.actorName === 'apify/instagram-scraper' ? (
                          /* Visual display for Instagram scraper */
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedResults.map((item: any, idx: number) => (
                              <Card key={item.id || idx} className="bg-zinc-950 border-zinc-800 overflow-hidden group hover:border-purple-500/50 transition-all flex flex-col justify-between">
                                <div>
                                  {/* Media Thumbnail Container */}
                                  <div className="aspect-square bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                                    {item.displayUrl || item.imageUrl ? (
                                      <img
                                        src={item.displayUrl || item.imageUrl}
                                        alt="Scraped Instagram Post"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                                        loading="lazy"
                                        onError={(e) => {
                                          // hide image on load error (e.g. instagram CDN blocker) and show icon
                                          (e.target as HTMLElement).style.display = 'none';
                                        }}
                                      />
                                    ) : null}
                                    {/* Fallback Icon overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/30 text-white pointer-events-none">
                                      <Instagram className="h-8 w-8 text-purple-400/80" />
                                    </div>
                                    <span className="absolute top-2.5 right-2.5 bg-black/60 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                      {item.type || 'post'}
                                    </span>
                                  </div>

                                  {/* Caption and content */}
                                  <div className="p-3">
                                    <p className="text-zinc-300 text-xs line-clamp-3 mb-3 leading-relaxed">
                                      {item.caption || 'No caption.'}
                                    </p>
                                  </div>
                                </div>

                                {/* Metrics panel */}
                                <div className="px-3 pb-3 pt-2 border-t border-zinc-900 bg-zinc-950/40 flex items-center justify-between text-[11px] text-zinc-500">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1 text-rose-500/80">
                                      <Heart className="h-3.5 w-3.5 fill-current" />
                                      {item.likesCount !== undefined ? item.likesCount.toLocaleString() : '0'}
                                    </span>
                                    {item.commentsCount !== undefined && (
                                      <span className="flex items-center gap-1 text-sky-400/80">
                                        <MessageSquare className="h-3.5 w-3.5 fill-current" />
                                        {item.commentsCount.toLocaleString()}
                                      </span>
                                    )}
                                  </div>
                                  {item.url && (
                                    <a
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold"
                                    >
                                      Visit
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  )}
                                </div>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          /* Raw JSON viewer for non-Instagram or custom scrapers */
                          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-4 overflow-x-auto text-xs font-mono">
                            <pre className="text-emerald-400 whitespace-pre-wrap select-text">
                              {JSON.stringify(selectedResults, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>
                    )}

                    {/* LOGS TAB */}
                    {detailsTab === 'logs' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-400 font-semibold">Parsed logs from database execution history:</span>
                          <span className="text-[11px] text-zinc-600 font-mono">Real-time polling: active</span>
                        </div>

                        <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-4 h-96 overflow-y-auto text-xs font-mono space-y-1.5 flex flex-col justify-start">
                          {selectedLogs.length === 0 ? (
                            <div className="text-zinc-600 py-12 text-center select-none">
                              No log statements recorded for this scraping run.
                            </div>
                          ) : (
                            selectedLogs.map((log) => {
                              let levelColor = 'text-zinc-500';
                              if (log.level === 'WARN') levelColor = 'text-amber-500';
                              if (log.level === 'ERROR') levelColor = 'text-rose-500';
                              if (log.level === 'INFO') levelColor = 'text-zinc-300';

                              return (
                                <div key={log.id} className="leading-relaxed hover:bg-zinc-900/35 px-1 py-0.5 rounded transition">
                                  <span className="text-zinc-600">[{new Date(log.createdAt).toLocaleTimeString()}]</span>{' '}
                                  <span className={`font-bold ${levelColor}`}>[{log.level}]</span>{' '}
                                  <span className="text-zinc-200">{log.message}</span>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    )}

                    {/* CONFIG TAB */}
                    {detailsTab === 'config' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-4 space-y-3">
                            <h3 className="text-sm font-bold text-zinc-300">Run Metadata</h3>
                            <div className="text-xs space-y-2 text-zinc-400 font-mono">
                              <div><span className="text-zinc-600">Actor Name:</span> {selectedRequest.actorName}</div>
                              <div><span className="text-zinc-600">Status:</span> {selectedRequest.status}</div>
                              <div><span className="text-zinc-600">Dataset ID:</span> {selectedRequest.datasetId || 'N/A'}</div>
                              <div><span className="text-zinc-600">Apify Run ID:</span> {selectedRequest.runId || 'N/A'}</div>
                              <div><span className="text-zinc-600">Created:</span> {new Date(selectedRequest.createdAt).toLocaleString()}</div>
                              <div><span className="text-zinc-600">Last Update:</span> {new Date(selectedRequest.updatedAt).toLocaleString()}</div>
                            </div>
                          </div>

                          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-4 space-y-2">
                            <h3 className="text-sm font-bold text-zinc-300">Target Config Parameters</h3>
                            <pre className="text-xs text-purple-400 font-mono bg-zinc-900/30 p-2.5 rounded border border-zinc-900 overflow-x-auto whitespace-pre-wrap select-all">
                              {JSON.stringify(selectedRequest.inputData, null, 2)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}

                  </>
                )}

              </div>
            </>
          )}

        </DialogContent>
      </Dialog>
        </>
      )}
    </div>
  );
}
