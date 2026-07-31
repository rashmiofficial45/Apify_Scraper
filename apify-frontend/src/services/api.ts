const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface ScrapeLog {
  id: string;
  scrapeRequestId: string;
  level: 'INFO' | 'WARN' | 'ERROR';
  message: string;
  createdAt: string;
}

export interface ScrapeRequest {
  id: string;
  actorName: string;
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  inputData: any;
  runId: string | null;
  datasetId: string | null;
  createdAt: string;
  updatedAt: string;
  logs?: ScrapeLog[];
}

export interface ScrapeResults {
  requestId: string;
  data: any[];
  createdAt: string;
}

const getHeaders = (headers: Record<string, string> = {}): Record<string, string> => {
  const saved = localStorage.getItem('apify_auth_user');
  let email = '';
  if (saved) {
    try {
      email = JSON.parse(saved).email || '';
    } catch (e) {}
  }
  return {
    ...headers,
    'x-user-email': email
  };
};

export const scrapeApi = {
  /**
   * Triggers an Instagram scrape run.
   */
  async triggerInstagramScrape(usernames: string[], resultsType: string = 'posts', resultsLimit: number = 3) {
    const response = await fetch(`${API_BASE_URL}/scrape/instagram`, {
      method: 'POST',
      headers: getHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ usernames, resultsType, resultsLimit })
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to trigger Instagram scrape.');
    }
    
    return response.json() as Promise<{
      message: string;
      requestId: string;
      status: string;
      runId: string;
    }>;
  },

  /**
   * Triggers a generic scrape run.
   */
  async triggerGenericScrape(actorName: string, inputData: any) {
    const response = await fetch(`${API_BASE_URL}/scrape/trigger`, {
      method: 'POST',
      headers: getHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ actorName, inputData })
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to trigger scraping.');
    }
    
    return response.json() as Promise<{
      message: string;
      requestId: string;
      status: string;
      runId: string;
    }>;
  },

  /**
   * Retrieves request details and logs.
   */
  async getScrapeStatus(id: string) {
    const response = await fetch(`${API_BASE_URL}/scrape/status/${id}`);
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to fetch status.');
    }
    
    return response.json() as Promise<ScrapeRequest>;
  },

  /**
   * Retrieves scraping results (dataset items).
   */
  async getScrapeResults(id: string) {
    const response = await fetch(`${API_BASE_URL}/scrape/results/${id}`);
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to fetch results.');
    }
    
    return response.json() as Promise<ScrapeResults>;
  },

  /**
   * Retrieves all scrape requests history.
   */
  async getAllScrapeRequests() {
    const response = await fetch(`${API_BASE_URL}/scrape/requests`, {
      headers: getHeaders()
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to fetch history.');
    }
    
    return response.json() as Promise<ScrapeRequest[]>;
  }
};
