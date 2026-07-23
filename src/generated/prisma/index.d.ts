
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ScrapeRequest
 * 
 */
export type ScrapeRequest = $Result.DefaultSelection<Prisma.$ScrapeRequestPayload>
/**
 * Model ScrapeResponse
 * 
 */
export type ScrapeResponse = $Result.DefaultSelection<Prisma.$ScrapeResponsePayload>
/**
 * Model ScrapeLog
 * 
 */
export type ScrapeLog = $Result.DefaultSelection<Prisma.$ScrapeLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ScrapeRequests
 * const scrapeRequests = await prisma.scrapeRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ScrapeRequests
   * const scrapeRequests = await prisma.scrapeRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.scrapeRequest`: Exposes CRUD operations for the **ScrapeRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeRequests
    * const scrapeRequests = await prisma.scrapeRequest.findMany()
    * ```
    */
  get scrapeRequest(): Prisma.ScrapeRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapeResponse`: Exposes CRUD operations for the **ScrapeResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeResponses
    * const scrapeResponses = await prisma.scrapeResponse.findMany()
    * ```
    */
  get scrapeResponse(): Prisma.ScrapeResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapeLog`: Exposes CRUD operations for the **ScrapeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeLogs
    * const scrapeLogs = await prisma.scrapeLog.findMany()
    * ```
    */
  get scrapeLog(): Prisma.ScrapeLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ScrapeRequest: 'ScrapeRequest',
    ScrapeResponse: 'ScrapeResponse',
    ScrapeLog: 'ScrapeLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "scrapeRequest" | "scrapeResponse" | "scrapeLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ScrapeRequest: {
        payload: Prisma.$ScrapeRequestPayload<ExtArgs>
        fields: Prisma.ScrapeRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>
          }
          findFirst: {
            args: Prisma.ScrapeRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>
          }
          findMany: {
            args: Prisma.ScrapeRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>[]
          }
          create: {
            args: Prisma.ScrapeRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>
          }
          createMany: {
            args: Prisma.ScrapeRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>[]
          }
          delete: {
            args: Prisma.ScrapeRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>
          }
          update: {
            args: Prisma.ScrapeRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>
          }
          deleteMany: {
            args: Prisma.ScrapeRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>[]
          }
          upsert: {
            args: Prisma.ScrapeRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeRequestPayload>
          }
          aggregate: {
            args: Prisma.ScrapeRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeRequest>
          }
          groupBy: {
            args: Prisma.ScrapeRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeRequestCountAggregateOutputType> | number
          }
        }
      }
      ScrapeResponse: {
        payload: Prisma.$ScrapeResponsePayload<ExtArgs>
        fields: Prisma.ScrapeResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>
          }
          findFirst: {
            args: Prisma.ScrapeResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>
          }
          findMany: {
            args: Prisma.ScrapeResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>[]
          }
          create: {
            args: Prisma.ScrapeResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>
          }
          createMany: {
            args: Prisma.ScrapeResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>[]
          }
          delete: {
            args: Prisma.ScrapeResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>
          }
          update: {
            args: Prisma.ScrapeResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>
          }
          deleteMany: {
            args: Prisma.ScrapeResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>[]
          }
          upsert: {
            args: Prisma.ScrapeResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeResponsePayload>
          }
          aggregate: {
            args: Prisma.ScrapeResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeResponse>
          }
          groupBy: {
            args: Prisma.ScrapeResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeResponseCountAggregateOutputType> | number
          }
        }
      }
      ScrapeLog: {
        payload: Prisma.$ScrapeLogPayload<ExtArgs>
        fields: Prisma.ScrapeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          findFirst: {
            args: Prisma.ScrapeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          findMany: {
            args: Prisma.ScrapeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>[]
          }
          create: {
            args: Prisma.ScrapeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          createMany: {
            args: Prisma.ScrapeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>[]
          }
          delete: {
            args: Prisma.ScrapeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          update: {
            args: Prisma.ScrapeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          deleteMany: {
            args: Prisma.ScrapeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>[]
          }
          upsert: {
            args: Prisma.ScrapeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeLogPayload>
          }
          aggregate: {
            args: Prisma.ScrapeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeLog>
          }
          groupBy: {
            args: Prisma.ScrapeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeLogCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    scrapeRequest?: ScrapeRequestOmit
    scrapeResponse?: ScrapeResponseOmit
    scrapeLog?: ScrapeLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScrapeRequestCountOutputType
   */

  export type ScrapeRequestCountOutputType = {
    responses: number
    logs: number
  }

  export type ScrapeRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | ScrapeRequestCountOutputTypeCountResponsesArgs
    logs?: boolean | ScrapeRequestCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ScrapeRequestCountOutputType without action
   */
  export type ScrapeRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequestCountOutputType
     */
    select?: ScrapeRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScrapeRequestCountOutputType without action
   */
  export type ScrapeRequestCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeResponseWhereInput
  }

  /**
   * ScrapeRequestCountOutputType without action
   */
  export type ScrapeRequestCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ScrapeRequest
   */

  export type AggregateScrapeRequest = {
    _count: ScrapeRequestCountAggregateOutputType | null
    _min: ScrapeRequestMinAggregateOutputType | null
    _max: ScrapeRequestMaxAggregateOutputType | null
  }

  export type ScrapeRequestMinAggregateOutputType = {
    id: string | null
    actorName: string | null
    status: string | null
    runId: string | null
    datasetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScrapeRequestMaxAggregateOutputType = {
    id: string | null
    actorName: string | null
    status: string | null
    runId: string | null
    datasetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScrapeRequestCountAggregateOutputType = {
    id: number
    actorName: number
    status: number
    inputData: number
    runId: number
    datasetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScrapeRequestMinAggregateInputType = {
    id?: true
    actorName?: true
    status?: true
    runId?: true
    datasetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScrapeRequestMaxAggregateInputType = {
    id?: true
    actorName?: true
    status?: true
    runId?: true
    datasetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScrapeRequestCountAggregateInputType = {
    id?: true
    actorName?: true
    status?: true
    inputData?: true
    runId?: true
    datasetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScrapeRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeRequest to aggregate.
     */
    where?: ScrapeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeRequests to fetch.
     */
    orderBy?: ScrapeRequestOrderByWithRelationInput | ScrapeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeRequests
    **/
    _count?: true | ScrapeRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeRequestMaxAggregateInputType
  }

  export type GetScrapeRequestAggregateType<T extends ScrapeRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeRequest[P]>
      : GetScalarType<T[P], AggregateScrapeRequest[P]>
  }




  export type ScrapeRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeRequestWhereInput
    orderBy?: ScrapeRequestOrderByWithAggregationInput | ScrapeRequestOrderByWithAggregationInput[]
    by: ScrapeRequestScalarFieldEnum[] | ScrapeRequestScalarFieldEnum
    having?: ScrapeRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeRequestCountAggregateInputType | true
    _min?: ScrapeRequestMinAggregateInputType
    _max?: ScrapeRequestMaxAggregateInputType
  }

  export type ScrapeRequestGroupByOutputType = {
    id: string
    actorName: string
    status: string
    inputData: JsonValue
    runId: string | null
    datasetId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ScrapeRequestCountAggregateOutputType | null
    _min: ScrapeRequestMinAggregateOutputType | null
    _max: ScrapeRequestMaxAggregateOutputType | null
  }

  type GetScrapeRequestGroupByPayload<T extends ScrapeRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeRequestGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorName?: boolean
    status?: boolean
    inputData?: boolean
    runId?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responses?: boolean | ScrapeRequest$responsesArgs<ExtArgs>
    logs?: boolean | ScrapeRequest$logsArgs<ExtArgs>
    _count?: boolean | ScrapeRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeRequest"]>

  export type ScrapeRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorName?: boolean
    status?: boolean
    inputData?: boolean
    runId?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scrapeRequest"]>

  export type ScrapeRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorName?: boolean
    status?: boolean
    inputData?: boolean
    runId?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scrapeRequest"]>

  export type ScrapeRequestSelectScalar = {
    id?: boolean
    actorName?: boolean
    status?: boolean
    inputData?: boolean
    runId?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScrapeRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorName" | "status" | "inputData" | "runId" | "datasetId" | "createdAt" | "updatedAt", ExtArgs["result"]["scrapeRequest"]>
  export type ScrapeRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | ScrapeRequest$responsesArgs<ExtArgs>
    logs?: boolean | ScrapeRequest$logsArgs<ExtArgs>
    _count?: boolean | ScrapeRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScrapeRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScrapeRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScrapeRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeRequest"
    objects: {
      responses: Prisma.$ScrapeResponsePayload<ExtArgs>[]
      logs: Prisma.$ScrapeLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorName: string
      status: string
      inputData: Prisma.JsonValue
      runId: string | null
      datasetId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scrapeRequest"]>
    composites: {}
  }

  type ScrapeRequestGetPayload<S extends boolean | null | undefined | ScrapeRequestDefaultArgs> = $Result.GetResult<Prisma.$ScrapeRequestPayload, S>

  type ScrapeRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeRequestCountAggregateInputType | true
    }

  export interface ScrapeRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeRequest'], meta: { name: 'ScrapeRequest' } }
    /**
     * Find zero or one ScrapeRequest that matches the filter.
     * @param {ScrapeRequestFindUniqueArgs} args - Arguments to find a ScrapeRequest
     * @example
     * // Get one ScrapeRequest
     * const scrapeRequest = await prisma.scrapeRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeRequestFindUniqueArgs>(args: SelectSubset<T, ScrapeRequestFindUniqueArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeRequestFindUniqueOrThrowArgs} args - Arguments to find a ScrapeRequest
     * @example
     * // Get one ScrapeRequest
     * const scrapeRequest = await prisma.scrapeRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestFindFirstArgs} args - Arguments to find a ScrapeRequest
     * @example
     * // Get one ScrapeRequest
     * const scrapeRequest = await prisma.scrapeRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeRequestFindFirstArgs>(args?: SelectSubset<T, ScrapeRequestFindFirstArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestFindFirstOrThrowArgs} args - Arguments to find a ScrapeRequest
     * @example
     * // Get one ScrapeRequest
     * const scrapeRequest = await prisma.scrapeRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeRequests
     * const scrapeRequests = await prisma.scrapeRequest.findMany()
     * 
     * // Get first 10 ScrapeRequests
     * const scrapeRequests = await prisma.scrapeRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeRequestWithIdOnly = await prisma.scrapeRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeRequestFindManyArgs>(args?: SelectSubset<T, ScrapeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeRequest.
     * @param {ScrapeRequestCreateArgs} args - Arguments to create a ScrapeRequest.
     * @example
     * // Create one ScrapeRequest
     * const ScrapeRequest = await prisma.scrapeRequest.create({
     *   data: {
     *     // ... data to create a ScrapeRequest
     *   }
     * })
     * 
     */
    create<T extends ScrapeRequestCreateArgs>(args: SelectSubset<T, ScrapeRequestCreateArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeRequests.
     * @param {ScrapeRequestCreateManyArgs} args - Arguments to create many ScrapeRequests.
     * @example
     * // Create many ScrapeRequests
     * const scrapeRequest = await prisma.scrapeRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeRequestCreateManyArgs>(args?: SelectSubset<T, ScrapeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeRequests and returns the data saved in the database.
     * @param {ScrapeRequestCreateManyAndReturnArgs} args - Arguments to create many ScrapeRequests.
     * @example
     * // Create many ScrapeRequests
     * const scrapeRequest = await prisma.scrapeRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeRequests and only return the `id`
     * const scrapeRequestWithIdOnly = await prisma.scrapeRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapeRequest.
     * @param {ScrapeRequestDeleteArgs} args - Arguments to delete one ScrapeRequest.
     * @example
     * // Delete one ScrapeRequest
     * const ScrapeRequest = await prisma.scrapeRequest.delete({
     *   where: {
     *     // ... filter to delete one ScrapeRequest
     *   }
     * })
     * 
     */
    delete<T extends ScrapeRequestDeleteArgs>(args: SelectSubset<T, ScrapeRequestDeleteArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeRequest.
     * @param {ScrapeRequestUpdateArgs} args - Arguments to update one ScrapeRequest.
     * @example
     * // Update one ScrapeRequest
     * const scrapeRequest = await prisma.scrapeRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeRequestUpdateArgs>(args: SelectSubset<T, ScrapeRequestUpdateArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeRequests.
     * @param {ScrapeRequestDeleteManyArgs} args - Arguments to filter ScrapeRequests to delete.
     * @example
     * // Delete a few ScrapeRequests
     * const { count } = await prisma.scrapeRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeRequestDeleteManyArgs>(args?: SelectSubset<T, ScrapeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeRequests
     * const scrapeRequest = await prisma.scrapeRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeRequestUpdateManyArgs>(args: SelectSubset<T, ScrapeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeRequests and returns the data updated in the database.
     * @param {ScrapeRequestUpdateManyAndReturnArgs} args - Arguments to update many ScrapeRequests.
     * @example
     * // Update many ScrapeRequests
     * const scrapeRequest = await prisma.scrapeRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapeRequests and only return the `id`
     * const scrapeRequestWithIdOnly = await prisma.scrapeRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapeRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapeRequest.
     * @param {ScrapeRequestUpsertArgs} args - Arguments to update or create a ScrapeRequest.
     * @example
     * // Update or create a ScrapeRequest
     * const scrapeRequest = await prisma.scrapeRequest.upsert({
     *   create: {
     *     // ... data to create a ScrapeRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeRequest we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeRequestUpsertArgs>(args: SelectSubset<T, ScrapeRequestUpsertArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestCountArgs} args - Arguments to filter ScrapeRequests to count.
     * @example
     * // Count the number of ScrapeRequests
     * const count = await prisma.scrapeRequest.count({
     *   where: {
     *     // ... the filter for the ScrapeRequests we want to count
     *   }
     * })
    **/
    count<T extends ScrapeRequestCountArgs>(
      args?: Subset<T, ScrapeRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeRequestAggregateArgs>(args: Subset<T, ScrapeRequestAggregateArgs>): Prisma.PrismaPromise<GetScrapeRequestAggregateType<T>>

    /**
     * Group by ScrapeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeRequestGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeRequest model
   */
  readonly fields: ScrapeRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responses<T extends ScrapeRequest$responsesArgs<ExtArgs> = {}>(args?: Subset<T, ScrapeRequest$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends ScrapeRequest$logsArgs<ExtArgs> = {}>(args?: Subset<T, ScrapeRequest$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeRequest model
   */
  interface ScrapeRequestFieldRefs {
    readonly id: FieldRef<"ScrapeRequest", 'String'>
    readonly actorName: FieldRef<"ScrapeRequest", 'String'>
    readonly status: FieldRef<"ScrapeRequest", 'String'>
    readonly inputData: FieldRef<"ScrapeRequest", 'Json'>
    readonly runId: FieldRef<"ScrapeRequest", 'String'>
    readonly datasetId: FieldRef<"ScrapeRequest", 'String'>
    readonly createdAt: FieldRef<"ScrapeRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ScrapeRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeRequest findUnique
   */
  export type ScrapeRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeRequest to fetch.
     */
    where: ScrapeRequestWhereUniqueInput
  }

  /**
   * ScrapeRequest findUniqueOrThrow
   */
  export type ScrapeRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeRequest to fetch.
     */
    where: ScrapeRequestWhereUniqueInput
  }

  /**
   * ScrapeRequest findFirst
   */
  export type ScrapeRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeRequest to fetch.
     */
    where?: ScrapeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeRequests to fetch.
     */
    orderBy?: ScrapeRequestOrderByWithRelationInput | ScrapeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeRequests.
     */
    cursor?: ScrapeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeRequests.
     */
    distinct?: ScrapeRequestScalarFieldEnum | ScrapeRequestScalarFieldEnum[]
  }

  /**
   * ScrapeRequest findFirstOrThrow
   */
  export type ScrapeRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeRequest to fetch.
     */
    where?: ScrapeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeRequests to fetch.
     */
    orderBy?: ScrapeRequestOrderByWithRelationInput | ScrapeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeRequests.
     */
    cursor?: ScrapeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeRequests.
     */
    distinct?: ScrapeRequestScalarFieldEnum | ScrapeRequestScalarFieldEnum[]
  }

  /**
   * ScrapeRequest findMany
   */
  export type ScrapeRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeRequests to fetch.
     */
    where?: ScrapeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeRequests to fetch.
     */
    orderBy?: ScrapeRequestOrderByWithRelationInput | ScrapeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeRequests.
     */
    cursor?: ScrapeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeRequests.
     */
    distinct?: ScrapeRequestScalarFieldEnum | ScrapeRequestScalarFieldEnum[]
  }

  /**
   * ScrapeRequest create
   */
  export type ScrapeRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ScrapeRequest.
     */
    data: XOR<ScrapeRequestCreateInput, ScrapeRequestUncheckedCreateInput>
  }

  /**
   * ScrapeRequest createMany
   */
  export type ScrapeRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeRequests.
     */
    data: ScrapeRequestCreateManyInput | ScrapeRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeRequest createManyAndReturn
   */
  export type ScrapeRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapeRequests.
     */
    data: ScrapeRequestCreateManyInput | ScrapeRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeRequest update
   */
  export type ScrapeRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ScrapeRequest.
     */
    data: XOR<ScrapeRequestUpdateInput, ScrapeRequestUncheckedUpdateInput>
    /**
     * Choose, which ScrapeRequest to update.
     */
    where: ScrapeRequestWhereUniqueInput
  }

  /**
   * ScrapeRequest updateMany
   */
  export type ScrapeRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeRequests.
     */
    data: XOR<ScrapeRequestUpdateManyMutationInput, ScrapeRequestUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeRequests to update
     */
    where?: ScrapeRequestWhereInput
    /**
     * Limit how many ScrapeRequests to update.
     */
    limit?: number
  }

  /**
   * ScrapeRequest updateManyAndReturn
   */
  export type ScrapeRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * The data used to update ScrapeRequests.
     */
    data: XOR<ScrapeRequestUpdateManyMutationInput, ScrapeRequestUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeRequests to update
     */
    where?: ScrapeRequestWhereInput
    /**
     * Limit how many ScrapeRequests to update.
     */
    limit?: number
  }

  /**
   * ScrapeRequest upsert
   */
  export type ScrapeRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ScrapeRequest to update in case it exists.
     */
    where: ScrapeRequestWhereUniqueInput
    /**
     * In case the ScrapeRequest found by the `where` argument doesn't exist, create a new ScrapeRequest with this data.
     */
    create: XOR<ScrapeRequestCreateInput, ScrapeRequestUncheckedCreateInput>
    /**
     * In case the ScrapeRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeRequestUpdateInput, ScrapeRequestUncheckedUpdateInput>
  }

  /**
   * ScrapeRequest delete
   */
  export type ScrapeRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
    /**
     * Filter which ScrapeRequest to delete.
     */
    where: ScrapeRequestWhereUniqueInput
  }

  /**
   * ScrapeRequest deleteMany
   */
  export type ScrapeRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeRequests to delete
     */
    where?: ScrapeRequestWhereInput
    /**
     * Limit how many ScrapeRequests to delete.
     */
    limit?: number
  }

  /**
   * ScrapeRequest.responses
   */
  export type ScrapeRequest$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    where?: ScrapeResponseWhereInput
    orderBy?: ScrapeResponseOrderByWithRelationInput | ScrapeResponseOrderByWithRelationInput[]
    cursor?: ScrapeResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapeResponseScalarFieldEnum | ScrapeResponseScalarFieldEnum[]
  }

  /**
   * ScrapeRequest.logs
   */
  export type ScrapeRequest$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    where?: ScrapeLogWhereInput
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    cursor?: ScrapeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeRequest without action
   */
  export type ScrapeRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeRequest
     */
    select?: ScrapeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeRequest
     */
    omit?: ScrapeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeRequestInclude<ExtArgs> | null
  }


  /**
   * Model ScrapeResponse
   */

  export type AggregateScrapeResponse = {
    _count: ScrapeResponseCountAggregateOutputType | null
    _min: ScrapeResponseMinAggregateOutputType | null
    _max: ScrapeResponseMaxAggregateOutputType | null
  }

  export type ScrapeResponseMinAggregateOutputType = {
    id: string | null
    scrapeRequestId: string | null
    createdAt: Date | null
  }

  export type ScrapeResponseMaxAggregateOutputType = {
    id: string | null
    scrapeRequestId: string | null
    createdAt: Date | null
  }

  export type ScrapeResponseCountAggregateOutputType = {
    id: number
    scrapeRequestId: number
    data: number
    createdAt: number
    _all: number
  }


  export type ScrapeResponseMinAggregateInputType = {
    id?: true
    scrapeRequestId?: true
    createdAt?: true
  }

  export type ScrapeResponseMaxAggregateInputType = {
    id?: true
    scrapeRequestId?: true
    createdAt?: true
  }

  export type ScrapeResponseCountAggregateInputType = {
    id?: true
    scrapeRequestId?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type ScrapeResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeResponse to aggregate.
     */
    where?: ScrapeResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeResponses to fetch.
     */
    orderBy?: ScrapeResponseOrderByWithRelationInput | ScrapeResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeResponses
    **/
    _count?: true | ScrapeResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeResponseMaxAggregateInputType
  }

  export type GetScrapeResponseAggregateType<T extends ScrapeResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeResponse[P]>
      : GetScalarType<T[P], AggregateScrapeResponse[P]>
  }




  export type ScrapeResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeResponseWhereInput
    orderBy?: ScrapeResponseOrderByWithAggregationInput | ScrapeResponseOrderByWithAggregationInput[]
    by: ScrapeResponseScalarFieldEnum[] | ScrapeResponseScalarFieldEnum
    having?: ScrapeResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeResponseCountAggregateInputType | true
    _min?: ScrapeResponseMinAggregateInputType
    _max?: ScrapeResponseMaxAggregateInputType
  }

  export type ScrapeResponseGroupByOutputType = {
    id: string
    scrapeRequestId: string
    data: JsonValue
    createdAt: Date
    _count: ScrapeResponseCountAggregateOutputType | null
    _min: ScrapeResponseMinAggregateOutputType | null
    _max: ScrapeResponseMaxAggregateOutputType | null
  }

  type GetScrapeResponseGroupByPayload<T extends ScrapeResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeResponseGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scrapeRequestId?: boolean
    data?: boolean
    createdAt?: boolean
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeResponse"]>

  export type ScrapeResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scrapeRequestId?: boolean
    data?: boolean
    createdAt?: boolean
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeResponse"]>

  export type ScrapeResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scrapeRequestId?: boolean
    data?: boolean
    createdAt?: boolean
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeResponse"]>

  export type ScrapeResponseSelectScalar = {
    id?: boolean
    scrapeRequestId?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type ScrapeResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scrapeRequestId" | "data" | "createdAt", ExtArgs["result"]["scrapeResponse"]>
  export type ScrapeResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }
  export type ScrapeResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }
  export type ScrapeResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }

  export type $ScrapeResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeResponse"
    objects: {
      scrapeRequest: Prisma.$ScrapeRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scrapeRequestId: string
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["scrapeResponse"]>
    composites: {}
  }

  type ScrapeResponseGetPayload<S extends boolean | null | undefined | ScrapeResponseDefaultArgs> = $Result.GetResult<Prisma.$ScrapeResponsePayload, S>

  type ScrapeResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeResponseCountAggregateInputType | true
    }

  export interface ScrapeResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeResponse'], meta: { name: 'ScrapeResponse' } }
    /**
     * Find zero or one ScrapeResponse that matches the filter.
     * @param {ScrapeResponseFindUniqueArgs} args - Arguments to find a ScrapeResponse
     * @example
     * // Get one ScrapeResponse
     * const scrapeResponse = await prisma.scrapeResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeResponseFindUniqueArgs>(args: SelectSubset<T, ScrapeResponseFindUniqueArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeResponseFindUniqueOrThrowArgs} args - Arguments to find a ScrapeResponse
     * @example
     * // Get one ScrapeResponse
     * const scrapeResponse = await prisma.scrapeResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseFindFirstArgs} args - Arguments to find a ScrapeResponse
     * @example
     * // Get one ScrapeResponse
     * const scrapeResponse = await prisma.scrapeResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeResponseFindFirstArgs>(args?: SelectSubset<T, ScrapeResponseFindFirstArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseFindFirstOrThrowArgs} args - Arguments to find a ScrapeResponse
     * @example
     * // Get one ScrapeResponse
     * const scrapeResponse = await prisma.scrapeResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeResponses
     * const scrapeResponses = await prisma.scrapeResponse.findMany()
     * 
     * // Get first 10 ScrapeResponses
     * const scrapeResponses = await prisma.scrapeResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeResponseWithIdOnly = await prisma.scrapeResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeResponseFindManyArgs>(args?: SelectSubset<T, ScrapeResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeResponse.
     * @param {ScrapeResponseCreateArgs} args - Arguments to create a ScrapeResponse.
     * @example
     * // Create one ScrapeResponse
     * const ScrapeResponse = await prisma.scrapeResponse.create({
     *   data: {
     *     // ... data to create a ScrapeResponse
     *   }
     * })
     * 
     */
    create<T extends ScrapeResponseCreateArgs>(args: SelectSubset<T, ScrapeResponseCreateArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeResponses.
     * @param {ScrapeResponseCreateManyArgs} args - Arguments to create many ScrapeResponses.
     * @example
     * // Create many ScrapeResponses
     * const scrapeResponse = await prisma.scrapeResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeResponseCreateManyArgs>(args?: SelectSubset<T, ScrapeResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeResponses and returns the data saved in the database.
     * @param {ScrapeResponseCreateManyAndReturnArgs} args - Arguments to create many ScrapeResponses.
     * @example
     * // Create many ScrapeResponses
     * const scrapeResponse = await prisma.scrapeResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeResponses and only return the `id`
     * const scrapeResponseWithIdOnly = await prisma.scrapeResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapeResponse.
     * @param {ScrapeResponseDeleteArgs} args - Arguments to delete one ScrapeResponse.
     * @example
     * // Delete one ScrapeResponse
     * const ScrapeResponse = await prisma.scrapeResponse.delete({
     *   where: {
     *     // ... filter to delete one ScrapeResponse
     *   }
     * })
     * 
     */
    delete<T extends ScrapeResponseDeleteArgs>(args: SelectSubset<T, ScrapeResponseDeleteArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeResponse.
     * @param {ScrapeResponseUpdateArgs} args - Arguments to update one ScrapeResponse.
     * @example
     * // Update one ScrapeResponse
     * const scrapeResponse = await prisma.scrapeResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeResponseUpdateArgs>(args: SelectSubset<T, ScrapeResponseUpdateArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeResponses.
     * @param {ScrapeResponseDeleteManyArgs} args - Arguments to filter ScrapeResponses to delete.
     * @example
     * // Delete a few ScrapeResponses
     * const { count } = await prisma.scrapeResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeResponseDeleteManyArgs>(args?: SelectSubset<T, ScrapeResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeResponses
     * const scrapeResponse = await prisma.scrapeResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeResponseUpdateManyArgs>(args: SelectSubset<T, ScrapeResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeResponses and returns the data updated in the database.
     * @param {ScrapeResponseUpdateManyAndReturnArgs} args - Arguments to update many ScrapeResponses.
     * @example
     * // Update many ScrapeResponses
     * const scrapeResponse = await prisma.scrapeResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapeResponses and only return the `id`
     * const scrapeResponseWithIdOnly = await prisma.scrapeResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapeResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapeResponse.
     * @param {ScrapeResponseUpsertArgs} args - Arguments to update or create a ScrapeResponse.
     * @example
     * // Update or create a ScrapeResponse
     * const scrapeResponse = await prisma.scrapeResponse.upsert({
     *   create: {
     *     // ... data to create a ScrapeResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeResponse we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeResponseUpsertArgs>(args: SelectSubset<T, ScrapeResponseUpsertArgs<ExtArgs>>): Prisma__ScrapeResponseClient<$Result.GetResult<Prisma.$ScrapeResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapeResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseCountArgs} args - Arguments to filter ScrapeResponses to count.
     * @example
     * // Count the number of ScrapeResponses
     * const count = await prisma.scrapeResponse.count({
     *   where: {
     *     // ... the filter for the ScrapeResponses we want to count
     *   }
     * })
    **/
    count<T extends ScrapeResponseCountArgs>(
      args?: Subset<T, ScrapeResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeResponseAggregateArgs>(args: Subset<T, ScrapeResponseAggregateArgs>): Prisma.PrismaPromise<GetScrapeResponseAggregateType<T>>

    /**
     * Group by ScrapeResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeResponseGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeResponse model
   */
  readonly fields: ScrapeResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrapeRequest<T extends ScrapeRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScrapeRequestDefaultArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeResponse model
   */
  interface ScrapeResponseFieldRefs {
    readonly id: FieldRef<"ScrapeResponse", 'String'>
    readonly scrapeRequestId: FieldRef<"ScrapeResponse", 'String'>
    readonly data: FieldRef<"ScrapeResponse", 'Json'>
    readonly createdAt: FieldRef<"ScrapeResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeResponse findUnique
   */
  export type ScrapeResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeResponse to fetch.
     */
    where: ScrapeResponseWhereUniqueInput
  }

  /**
   * ScrapeResponse findUniqueOrThrow
   */
  export type ScrapeResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeResponse to fetch.
     */
    where: ScrapeResponseWhereUniqueInput
  }

  /**
   * ScrapeResponse findFirst
   */
  export type ScrapeResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeResponse to fetch.
     */
    where?: ScrapeResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeResponses to fetch.
     */
    orderBy?: ScrapeResponseOrderByWithRelationInput | ScrapeResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeResponses.
     */
    cursor?: ScrapeResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeResponses.
     */
    distinct?: ScrapeResponseScalarFieldEnum | ScrapeResponseScalarFieldEnum[]
  }

  /**
   * ScrapeResponse findFirstOrThrow
   */
  export type ScrapeResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeResponse to fetch.
     */
    where?: ScrapeResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeResponses to fetch.
     */
    orderBy?: ScrapeResponseOrderByWithRelationInput | ScrapeResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeResponses.
     */
    cursor?: ScrapeResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeResponses.
     */
    distinct?: ScrapeResponseScalarFieldEnum | ScrapeResponseScalarFieldEnum[]
  }

  /**
   * ScrapeResponse findMany
   */
  export type ScrapeResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeResponses to fetch.
     */
    where?: ScrapeResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeResponses to fetch.
     */
    orderBy?: ScrapeResponseOrderByWithRelationInput | ScrapeResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeResponses.
     */
    cursor?: ScrapeResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeResponses.
     */
    distinct?: ScrapeResponseScalarFieldEnum | ScrapeResponseScalarFieldEnum[]
  }

  /**
   * ScrapeResponse create
   */
  export type ScrapeResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a ScrapeResponse.
     */
    data: XOR<ScrapeResponseCreateInput, ScrapeResponseUncheckedCreateInput>
  }

  /**
   * ScrapeResponse createMany
   */
  export type ScrapeResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeResponses.
     */
    data: ScrapeResponseCreateManyInput | ScrapeResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeResponse createManyAndReturn
   */
  export type ScrapeResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapeResponses.
     */
    data: ScrapeResponseCreateManyInput | ScrapeResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapeResponse update
   */
  export type ScrapeResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a ScrapeResponse.
     */
    data: XOR<ScrapeResponseUpdateInput, ScrapeResponseUncheckedUpdateInput>
    /**
     * Choose, which ScrapeResponse to update.
     */
    where: ScrapeResponseWhereUniqueInput
  }

  /**
   * ScrapeResponse updateMany
   */
  export type ScrapeResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeResponses.
     */
    data: XOR<ScrapeResponseUpdateManyMutationInput, ScrapeResponseUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeResponses to update
     */
    where?: ScrapeResponseWhereInput
    /**
     * Limit how many ScrapeResponses to update.
     */
    limit?: number
  }

  /**
   * ScrapeResponse updateManyAndReturn
   */
  export type ScrapeResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * The data used to update ScrapeResponses.
     */
    data: XOR<ScrapeResponseUpdateManyMutationInput, ScrapeResponseUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeResponses to update
     */
    where?: ScrapeResponseWhereInput
    /**
     * Limit how many ScrapeResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapeResponse upsert
   */
  export type ScrapeResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the ScrapeResponse to update in case it exists.
     */
    where: ScrapeResponseWhereUniqueInput
    /**
     * In case the ScrapeResponse found by the `where` argument doesn't exist, create a new ScrapeResponse with this data.
     */
    create: XOR<ScrapeResponseCreateInput, ScrapeResponseUncheckedCreateInput>
    /**
     * In case the ScrapeResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeResponseUpdateInput, ScrapeResponseUncheckedUpdateInput>
  }

  /**
   * ScrapeResponse delete
   */
  export type ScrapeResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
    /**
     * Filter which ScrapeResponse to delete.
     */
    where: ScrapeResponseWhereUniqueInput
  }

  /**
   * ScrapeResponse deleteMany
   */
  export type ScrapeResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeResponses to delete
     */
    where?: ScrapeResponseWhereInput
    /**
     * Limit how many ScrapeResponses to delete.
     */
    limit?: number
  }

  /**
   * ScrapeResponse without action
   */
  export type ScrapeResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeResponse
     */
    select?: ScrapeResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeResponse
     */
    omit?: ScrapeResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeResponseInclude<ExtArgs> | null
  }


  /**
   * Model ScrapeLog
   */

  export type AggregateScrapeLog = {
    _count: ScrapeLogCountAggregateOutputType | null
    _min: ScrapeLogMinAggregateOutputType | null
    _max: ScrapeLogMaxAggregateOutputType | null
  }

  export type ScrapeLogMinAggregateOutputType = {
    id: string | null
    scrapeRequestId: string | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ScrapeLogMaxAggregateOutputType = {
    id: string | null
    scrapeRequestId: string | null
    level: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ScrapeLogCountAggregateOutputType = {
    id: number
    scrapeRequestId: number
    level: number
    message: number
    createdAt: number
    _all: number
  }


  export type ScrapeLogMinAggregateInputType = {
    id?: true
    scrapeRequestId?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type ScrapeLogMaxAggregateInputType = {
    id?: true
    scrapeRequestId?: true
    level?: true
    message?: true
    createdAt?: true
  }

  export type ScrapeLogCountAggregateInputType = {
    id?: true
    scrapeRequestId?: true
    level?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ScrapeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeLog to aggregate.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeLogs
    **/
    _count?: true | ScrapeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeLogMaxAggregateInputType
  }

  export type GetScrapeLogAggregateType<T extends ScrapeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeLog[P]>
      : GetScalarType<T[P], AggregateScrapeLog[P]>
  }




  export type ScrapeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeLogWhereInput
    orderBy?: ScrapeLogOrderByWithAggregationInput | ScrapeLogOrderByWithAggregationInput[]
    by: ScrapeLogScalarFieldEnum[] | ScrapeLogScalarFieldEnum
    having?: ScrapeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeLogCountAggregateInputType | true
    _min?: ScrapeLogMinAggregateInputType
    _max?: ScrapeLogMaxAggregateInputType
  }

  export type ScrapeLogGroupByOutputType = {
    id: string
    scrapeRequestId: string
    level: string
    message: string
    createdAt: Date
    _count: ScrapeLogCountAggregateOutputType | null
    _min: ScrapeLogMinAggregateOutputType | null
    _max: ScrapeLogMaxAggregateOutputType | null
  }

  type GetScrapeLogGroupByPayload<T extends ScrapeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeLogGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeLogGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scrapeRequestId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeLog"]>

  export type ScrapeLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scrapeRequestId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeLog"]>

  export type ScrapeLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scrapeRequestId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeLog"]>

  export type ScrapeLogSelectScalar = {
    id?: boolean
    scrapeRequestId?: boolean
    level?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ScrapeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scrapeRequestId" | "level" | "message" | "createdAt", ExtArgs["result"]["scrapeLog"]>
  export type ScrapeLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }
  export type ScrapeLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }
  export type ScrapeLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapeRequest?: boolean | ScrapeRequestDefaultArgs<ExtArgs>
  }

  export type $ScrapeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeLog"
    objects: {
      scrapeRequest: Prisma.$ScrapeRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scrapeRequestId: string
      level: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["scrapeLog"]>
    composites: {}
  }

  type ScrapeLogGetPayload<S extends boolean | null | undefined | ScrapeLogDefaultArgs> = $Result.GetResult<Prisma.$ScrapeLogPayload, S>

  type ScrapeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeLogCountAggregateInputType | true
    }

  export interface ScrapeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeLog'], meta: { name: 'ScrapeLog' } }
    /**
     * Find zero or one ScrapeLog that matches the filter.
     * @param {ScrapeLogFindUniqueArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeLogFindUniqueArgs>(args: SelectSubset<T, ScrapeLogFindUniqueArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeLogFindUniqueOrThrowArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogFindFirstArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeLogFindFirstArgs>(args?: SelectSubset<T, ScrapeLogFindFirstArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogFindFirstOrThrowArgs} args - Arguments to find a ScrapeLog
     * @example
     * // Get one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeLogs
     * const scrapeLogs = await prisma.scrapeLog.findMany()
     * 
     * // Get first 10 ScrapeLogs
     * const scrapeLogs = await prisma.scrapeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeLogWithIdOnly = await prisma.scrapeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeLogFindManyArgs>(args?: SelectSubset<T, ScrapeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeLog.
     * @param {ScrapeLogCreateArgs} args - Arguments to create a ScrapeLog.
     * @example
     * // Create one ScrapeLog
     * const ScrapeLog = await prisma.scrapeLog.create({
     *   data: {
     *     // ... data to create a ScrapeLog
     *   }
     * })
     * 
     */
    create<T extends ScrapeLogCreateArgs>(args: SelectSubset<T, ScrapeLogCreateArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeLogs.
     * @param {ScrapeLogCreateManyArgs} args - Arguments to create many ScrapeLogs.
     * @example
     * // Create many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeLogCreateManyArgs>(args?: SelectSubset<T, ScrapeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeLogs and returns the data saved in the database.
     * @param {ScrapeLogCreateManyAndReturnArgs} args - Arguments to create many ScrapeLogs.
     * @example
     * // Create many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeLogs and only return the `id`
     * const scrapeLogWithIdOnly = await prisma.scrapeLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapeLog.
     * @param {ScrapeLogDeleteArgs} args - Arguments to delete one ScrapeLog.
     * @example
     * // Delete one ScrapeLog
     * const ScrapeLog = await prisma.scrapeLog.delete({
     *   where: {
     *     // ... filter to delete one ScrapeLog
     *   }
     * })
     * 
     */
    delete<T extends ScrapeLogDeleteArgs>(args: SelectSubset<T, ScrapeLogDeleteArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeLog.
     * @param {ScrapeLogUpdateArgs} args - Arguments to update one ScrapeLog.
     * @example
     * // Update one ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeLogUpdateArgs>(args: SelectSubset<T, ScrapeLogUpdateArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeLogs.
     * @param {ScrapeLogDeleteManyArgs} args - Arguments to filter ScrapeLogs to delete.
     * @example
     * // Delete a few ScrapeLogs
     * const { count } = await prisma.scrapeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeLogDeleteManyArgs>(args?: SelectSubset<T, ScrapeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeLogUpdateManyArgs>(args: SelectSubset<T, ScrapeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeLogs and returns the data updated in the database.
     * @param {ScrapeLogUpdateManyAndReturnArgs} args - Arguments to update many ScrapeLogs.
     * @example
     * // Update many ScrapeLogs
     * const scrapeLog = await prisma.scrapeLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapeLogs and only return the `id`
     * const scrapeLogWithIdOnly = await prisma.scrapeLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapeLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapeLog.
     * @param {ScrapeLogUpsertArgs} args - Arguments to update or create a ScrapeLog.
     * @example
     * // Update or create a ScrapeLog
     * const scrapeLog = await prisma.scrapeLog.upsert({
     *   create: {
     *     // ... data to create a ScrapeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeLog we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeLogUpsertArgs>(args: SelectSubset<T, ScrapeLogUpsertArgs<ExtArgs>>): Prisma__ScrapeLogClient<$Result.GetResult<Prisma.$ScrapeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogCountArgs} args - Arguments to filter ScrapeLogs to count.
     * @example
     * // Count the number of ScrapeLogs
     * const count = await prisma.scrapeLog.count({
     *   where: {
     *     // ... the filter for the ScrapeLogs we want to count
     *   }
     * })
    **/
    count<T extends ScrapeLogCountArgs>(
      args?: Subset<T, ScrapeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeLogAggregateArgs>(args: Subset<T, ScrapeLogAggregateArgs>): Prisma.PrismaPromise<GetScrapeLogAggregateType<T>>

    /**
     * Group by ScrapeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeLogGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeLog model
   */
  readonly fields: ScrapeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrapeRequest<T extends ScrapeRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScrapeRequestDefaultArgs<ExtArgs>>): Prisma__ScrapeRequestClient<$Result.GetResult<Prisma.$ScrapeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeLog model
   */
  interface ScrapeLogFieldRefs {
    readonly id: FieldRef<"ScrapeLog", 'String'>
    readonly scrapeRequestId: FieldRef<"ScrapeLog", 'String'>
    readonly level: FieldRef<"ScrapeLog", 'String'>
    readonly message: FieldRef<"ScrapeLog", 'String'>
    readonly createdAt: FieldRef<"ScrapeLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeLog findUnique
   */
  export type ScrapeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog findUniqueOrThrow
   */
  export type ScrapeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog findFirst
   */
  export type ScrapeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeLogs.
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeLogs.
     */
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeLog findFirstOrThrow
   */
  export type ScrapeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeLog to fetch.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeLogs.
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeLogs.
     */
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeLog findMany
   */
  export type ScrapeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeLogs to fetch.
     */
    where?: ScrapeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeLogs to fetch.
     */
    orderBy?: ScrapeLogOrderByWithRelationInput | ScrapeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeLogs.
     */
    cursor?: ScrapeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeLogs.
     */
    distinct?: ScrapeLogScalarFieldEnum | ScrapeLogScalarFieldEnum[]
  }

  /**
   * ScrapeLog create
   */
  export type ScrapeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ScrapeLog.
     */
    data: XOR<ScrapeLogCreateInput, ScrapeLogUncheckedCreateInput>
  }

  /**
   * ScrapeLog createMany
   */
  export type ScrapeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeLogs.
     */
    data: ScrapeLogCreateManyInput | ScrapeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeLog createManyAndReturn
   */
  export type ScrapeLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapeLogs.
     */
    data: ScrapeLogCreateManyInput | ScrapeLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapeLog update
   */
  export type ScrapeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ScrapeLog.
     */
    data: XOR<ScrapeLogUpdateInput, ScrapeLogUncheckedUpdateInput>
    /**
     * Choose, which ScrapeLog to update.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog updateMany
   */
  export type ScrapeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeLogs.
     */
    data: XOR<ScrapeLogUpdateManyMutationInput, ScrapeLogUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeLogs to update
     */
    where?: ScrapeLogWhereInput
    /**
     * Limit how many ScrapeLogs to update.
     */
    limit?: number
  }

  /**
   * ScrapeLog updateManyAndReturn
   */
  export type ScrapeLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * The data used to update ScrapeLogs.
     */
    data: XOR<ScrapeLogUpdateManyMutationInput, ScrapeLogUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeLogs to update
     */
    where?: ScrapeLogWhereInput
    /**
     * Limit how many ScrapeLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapeLog upsert
   */
  export type ScrapeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ScrapeLog to update in case it exists.
     */
    where: ScrapeLogWhereUniqueInput
    /**
     * In case the ScrapeLog found by the `where` argument doesn't exist, create a new ScrapeLog with this data.
     */
    create: XOR<ScrapeLogCreateInput, ScrapeLogUncheckedCreateInput>
    /**
     * In case the ScrapeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeLogUpdateInput, ScrapeLogUncheckedUpdateInput>
  }

  /**
   * ScrapeLog delete
   */
  export type ScrapeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
    /**
     * Filter which ScrapeLog to delete.
     */
    where: ScrapeLogWhereUniqueInput
  }

  /**
   * ScrapeLog deleteMany
   */
  export type ScrapeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeLogs to delete
     */
    where?: ScrapeLogWhereInput
    /**
     * Limit how many ScrapeLogs to delete.
     */
    limit?: number
  }

  /**
   * ScrapeLog without action
   */
  export type ScrapeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeLog
     */
    select?: ScrapeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeLog
     */
    omit?: ScrapeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScrapeRequestScalarFieldEnum: {
    id: 'id',
    actorName: 'actorName',
    status: 'status',
    inputData: 'inputData',
    runId: 'runId',
    datasetId: 'datasetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScrapeRequestScalarFieldEnum = (typeof ScrapeRequestScalarFieldEnum)[keyof typeof ScrapeRequestScalarFieldEnum]


  export const ScrapeResponseScalarFieldEnum: {
    id: 'id',
    scrapeRequestId: 'scrapeRequestId',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type ScrapeResponseScalarFieldEnum = (typeof ScrapeResponseScalarFieldEnum)[keyof typeof ScrapeResponseScalarFieldEnum]


  export const ScrapeLogScalarFieldEnum: {
    id: 'id',
    scrapeRequestId: 'scrapeRequestId',
    level: 'level',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ScrapeLogScalarFieldEnum = (typeof ScrapeLogScalarFieldEnum)[keyof typeof ScrapeLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ScrapeRequestWhereInput = {
    AND?: ScrapeRequestWhereInput | ScrapeRequestWhereInput[]
    OR?: ScrapeRequestWhereInput[]
    NOT?: ScrapeRequestWhereInput | ScrapeRequestWhereInput[]
    id?: StringFilter<"ScrapeRequest"> | string
    actorName?: StringFilter<"ScrapeRequest"> | string
    status?: StringFilter<"ScrapeRequest"> | string
    inputData?: JsonFilter<"ScrapeRequest">
    runId?: StringNullableFilter<"ScrapeRequest"> | string | null
    datasetId?: StringNullableFilter<"ScrapeRequest"> | string | null
    createdAt?: DateTimeFilter<"ScrapeRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ScrapeRequest"> | Date | string
    responses?: ScrapeResponseListRelationFilter
    logs?: ScrapeLogListRelationFilter
  }

  export type ScrapeRequestOrderByWithRelationInput = {
    id?: SortOrder
    actorName?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    runId?: SortOrderInput | SortOrder
    datasetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responses?: ScrapeResponseOrderByRelationAggregateInput
    logs?: ScrapeLogOrderByRelationAggregateInput
  }

  export type ScrapeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapeRequestWhereInput | ScrapeRequestWhereInput[]
    OR?: ScrapeRequestWhereInput[]
    NOT?: ScrapeRequestWhereInput | ScrapeRequestWhereInput[]
    actorName?: StringFilter<"ScrapeRequest"> | string
    status?: StringFilter<"ScrapeRequest"> | string
    inputData?: JsonFilter<"ScrapeRequest">
    runId?: StringNullableFilter<"ScrapeRequest"> | string | null
    datasetId?: StringNullableFilter<"ScrapeRequest"> | string | null
    createdAt?: DateTimeFilter<"ScrapeRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ScrapeRequest"> | Date | string
    responses?: ScrapeResponseListRelationFilter
    logs?: ScrapeLogListRelationFilter
  }, "id">

  export type ScrapeRequestOrderByWithAggregationInput = {
    id?: SortOrder
    actorName?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    runId?: SortOrderInput | SortOrder
    datasetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScrapeRequestCountOrderByAggregateInput
    _max?: ScrapeRequestMaxOrderByAggregateInput
    _min?: ScrapeRequestMinOrderByAggregateInput
  }

  export type ScrapeRequestScalarWhereWithAggregatesInput = {
    AND?: ScrapeRequestScalarWhereWithAggregatesInput | ScrapeRequestScalarWhereWithAggregatesInput[]
    OR?: ScrapeRequestScalarWhereWithAggregatesInput[]
    NOT?: ScrapeRequestScalarWhereWithAggregatesInput | ScrapeRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapeRequest"> | string
    actorName?: StringWithAggregatesFilter<"ScrapeRequest"> | string
    status?: StringWithAggregatesFilter<"ScrapeRequest"> | string
    inputData?: JsonWithAggregatesFilter<"ScrapeRequest">
    runId?: StringNullableWithAggregatesFilter<"ScrapeRequest"> | string | null
    datasetId?: StringNullableWithAggregatesFilter<"ScrapeRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScrapeRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScrapeRequest"> | Date | string
  }

  export type ScrapeResponseWhereInput = {
    AND?: ScrapeResponseWhereInput | ScrapeResponseWhereInput[]
    OR?: ScrapeResponseWhereInput[]
    NOT?: ScrapeResponseWhereInput | ScrapeResponseWhereInput[]
    id?: StringFilter<"ScrapeResponse"> | string
    scrapeRequestId?: StringFilter<"ScrapeResponse"> | string
    data?: JsonFilter<"ScrapeResponse">
    createdAt?: DateTimeFilter<"ScrapeResponse"> | Date | string
    scrapeRequest?: XOR<ScrapeRequestScalarRelationFilter, ScrapeRequestWhereInput>
  }

  export type ScrapeResponseOrderByWithRelationInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    scrapeRequest?: ScrapeRequestOrderByWithRelationInput
  }

  export type ScrapeResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapeResponseWhereInput | ScrapeResponseWhereInput[]
    OR?: ScrapeResponseWhereInput[]
    NOT?: ScrapeResponseWhereInput | ScrapeResponseWhereInput[]
    scrapeRequestId?: StringFilter<"ScrapeResponse"> | string
    data?: JsonFilter<"ScrapeResponse">
    createdAt?: DateTimeFilter<"ScrapeResponse"> | Date | string
    scrapeRequest?: XOR<ScrapeRequestScalarRelationFilter, ScrapeRequestWhereInput>
  }, "id">

  export type ScrapeResponseOrderByWithAggregationInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: ScrapeResponseCountOrderByAggregateInput
    _max?: ScrapeResponseMaxOrderByAggregateInput
    _min?: ScrapeResponseMinOrderByAggregateInput
  }

  export type ScrapeResponseScalarWhereWithAggregatesInput = {
    AND?: ScrapeResponseScalarWhereWithAggregatesInput | ScrapeResponseScalarWhereWithAggregatesInput[]
    OR?: ScrapeResponseScalarWhereWithAggregatesInput[]
    NOT?: ScrapeResponseScalarWhereWithAggregatesInput | ScrapeResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapeResponse"> | string
    scrapeRequestId?: StringWithAggregatesFilter<"ScrapeResponse"> | string
    data?: JsonWithAggregatesFilter<"ScrapeResponse">
    createdAt?: DateTimeWithAggregatesFilter<"ScrapeResponse"> | Date | string
  }

  export type ScrapeLogWhereInput = {
    AND?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    OR?: ScrapeLogWhereInput[]
    NOT?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    id?: StringFilter<"ScrapeLog"> | string
    scrapeRequestId?: StringFilter<"ScrapeLog"> | string
    level?: StringFilter<"ScrapeLog"> | string
    message?: StringFilter<"ScrapeLog"> | string
    createdAt?: DateTimeFilter<"ScrapeLog"> | Date | string
    scrapeRequest?: XOR<ScrapeRequestScalarRelationFilter, ScrapeRequestWhereInput>
  }

  export type ScrapeLogOrderByWithRelationInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    scrapeRequest?: ScrapeRequestOrderByWithRelationInput
  }

  export type ScrapeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    OR?: ScrapeLogWhereInput[]
    NOT?: ScrapeLogWhereInput | ScrapeLogWhereInput[]
    scrapeRequestId?: StringFilter<"ScrapeLog"> | string
    level?: StringFilter<"ScrapeLog"> | string
    message?: StringFilter<"ScrapeLog"> | string
    createdAt?: DateTimeFilter<"ScrapeLog"> | Date | string
    scrapeRequest?: XOR<ScrapeRequestScalarRelationFilter, ScrapeRequestWhereInput>
  }, "id">

  export type ScrapeLogOrderByWithAggregationInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ScrapeLogCountOrderByAggregateInput
    _max?: ScrapeLogMaxOrderByAggregateInput
    _min?: ScrapeLogMinOrderByAggregateInput
  }

  export type ScrapeLogScalarWhereWithAggregatesInput = {
    AND?: ScrapeLogScalarWhereWithAggregatesInput | ScrapeLogScalarWhereWithAggregatesInput[]
    OR?: ScrapeLogScalarWhereWithAggregatesInput[]
    NOT?: ScrapeLogScalarWhereWithAggregatesInput | ScrapeLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapeLog"> | string
    scrapeRequestId?: StringWithAggregatesFilter<"ScrapeLog"> | string
    level?: StringWithAggregatesFilter<"ScrapeLog"> | string
    message?: StringWithAggregatesFilter<"ScrapeLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScrapeLog"> | Date | string
  }

  export type ScrapeRequestCreateInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ScrapeResponseCreateNestedManyWithoutScrapeRequestInput
    logs?: ScrapeLogCreateNestedManyWithoutScrapeRequestInput
  }

  export type ScrapeRequestUncheckedCreateInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ScrapeResponseUncheckedCreateNestedManyWithoutScrapeRequestInput
    logs?: ScrapeLogUncheckedCreateNestedManyWithoutScrapeRequestInput
  }

  export type ScrapeRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ScrapeResponseUpdateManyWithoutScrapeRequestNestedInput
    logs?: ScrapeLogUpdateManyWithoutScrapeRequestNestedInput
  }

  export type ScrapeRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ScrapeResponseUncheckedUpdateManyWithoutScrapeRequestNestedInput
    logs?: ScrapeLogUncheckedUpdateManyWithoutScrapeRequestNestedInput
  }

  export type ScrapeRequestCreateManyInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScrapeRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeResponseCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    scrapeRequest: ScrapeRequestCreateNestedOneWithoutResponsesInput
  }

  export type ScrapeResponseUncheckedCreateInput = {
    id?: string
    scrapeRequestId: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScrapeResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrapeRequest?: ScrapeRequestUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ScrapeResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scrapeRequestId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeResponseCreateManyInput = {
    id?: string
    scrapeRequestId: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScrapeResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scrapeRequestId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogCreateInput = {
    id?: string
    level: string
    message: string
    createdAt?: Date | string
    scrapeRequest: ScrapeRequestCreateNestedOneWithoutLogsInput
  }

  export type ScrapeLogUncheckedCreateInput = {
    id?: string
    scrapeRequestId: string
    level: string
    message: string
    createdAt?: Date | string
  }

  export type ScrapeLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrapeRequest?: ScrapeRequestUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ScrapeLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scrapeRequestId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogCreateManyInput = {
    id?: string
    scrapeRequestId: string
    level: string
    message: string
    createdAt?: Date | string
  }

  export type ScrapeLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scrapeRequestId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ScrapeResponseListRelationFilter = {
    every?: ScrapeResponseWhereInput
    some?: ScrapeResponseWhereInput
    none?: ScrapeResponseWhereInput
  }

  export type ScrapeLogListRelationFilter = {
    every?: ScrapeLogWhereInput
    some?: ScrapeLogWhereInput
    none?: ScrapeLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScrapeResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScrapeLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScrapeRequestCountOrderByAggregateInput = {
    id?: SortOrder
    actorName?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    runId?: SortOrder
    datasetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScrapeRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    actorName?: SortOrder
    status?: SortOrder
    runId?: SortOrder
    datasetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScrapeRequestMinOrderByAggregateInput = {
    id?: SortOrder
    actorName?: SortOrder
    status?: SortOrder
    runId?: SortOrder
    datasetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ScrapeRequestScalarRelationFilter = {
    is?: ScrapeRequestWhereInput
    isNot?: ScrapeRequestWhereInput
  }

  export type ScrapeResponseCountOrderByAggregateInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeResponseMinOrderByAggregateInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogCountOrderByAggregateInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeLogMinOrderByAggregateInput = {
    id?: SortOrder
    scrapeRequestId?: SortOrder
    level?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapeResponseCreateNestedManyWithoutScrapeRequestInput = {
    create?: XOR<ScrapeResponseCreateWithoutScrapeRequestInput, ScrapeResponseUncheckedCreateWithoutScrapeRequestInput> | ScrapeResponseCreateWithoutScrapeRequestInput[] | ScrapeResponseUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeResponseCreateOrConnectWithoutScrapeRequestInput | ScrapeResponseCreateOrConnectWithoutScrapeRequestInput[]
    createMany?: ScrapeResponseCreateManyScrapeRequestInputEnvelope
    connect?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
  }

  export type ScrapeLogCreateNestedManyWithoutScrapeRequestInput = {
    create?: XOR<ScrapeLogCreateWithoutScrapeRequestInput, ScrapeLogUncheckedCreateWithoutScrapeRequestInput> | ScrapeLogCreateWithoutScrapeRequestInput[] | ScrapeLogUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeLogCreateOrConnectWithoutScrapeRequestInput | ScrapeLogCreateOrConnectWithoutScrapeRequestInput[]
    createMany?: ScrapeLogCreateManyScrapeRequestInputEnvelope
    connect?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
  }

  export type ScrapeResponseUncheckedCreateNestedManyWithoutScrapeRequestInput = {
    create?: XOR<ScrapeResponseCreateWithoutScrapeRequestInput, ScrapeResponseUncheckedCreateWithoutScrapeRequestInput> | ScrapeResponseCreateWithoutScrapeRequestInput[] | ScrapeResponseUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeResponseCreateOrConnectWithoutScrapeRequestInput | ScrapeResponseCreateOrConnectWithoutScrapeRequestInput[]
    createMany?: ScrapeResponseCreateManyScrapeRequestInputEnvelope
    connect?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
  }

  export type ScrapeLogUncheckedCreateNestedManyWithoutScrapeRequestInput = {
    create?: XOR<ScrapeLogCreateWithoutScrapeRequestInput, ScrapeLogUncheckedCreateWithoutScrapeRequestInput> | ScrapeLogCreateWithoutScrapeRequestInput[] | ScrapeLogUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeLogCreateOrConnectWithoutScrapeRequestInput | ScrapeLogCreateOrConnectWithoutScrapeRequestInput[]
    createMany?: ScrapeLogCreateManyScrapeRequestInputEnvelope
    connect?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScrapeResponseUpdateManyWithoutScrapeRequestNestedInput = {
    create?: XOR<ScrapeResponseCreateWithoutScrapeRequestInput, ScrapeResponseUncheckedCreateWithoutScrapeRequestInput> | ScrapeResponseCreateWithoutScrapeRequestInput[] | ScrapeResponseUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeResponseCreateOrConnectWithoutScrapeRequestInput | ScrapeResponseCreateOrConnectWithoutScrapeRequestInput[]
    upsert?: ScrapeResponseUpsertWithWhereUniqueWithoutScrapeRequestInput | ScrapeResponseUpsertWithWhereUniqueWithoutScrapeRequestInput[]
    createMany?: ScrapeResponseCreateManyScrapeRequestInputEnvelope
    set?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    disconnect?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    delete?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    connect?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    update?: ScrapeResponseUpdateWithWhereUniqueWithoutScrapeRequestInput | ScrapeResponseUpdateWithWhereUniqueWithoutScrapeRequestInput[]
    updateMany?: ScrapeResponseUpdateManyWithWhereWithoutScrapeRequestInput | ScrapeResponseUpdateManyWithWhereWithoutScrapeRequestInput[]
    deleteMany?: ScrapeResponseScalarWhereInput | ScrapeResponseScalarWhereInput[]
  }

  export type ScrapeLogUpdateManyWithoutScrapeRequestNestedInput = {
    create?: XOR<ScrapeLogCreateWithoutScrapeRequestInput, ScrapeLogUncheckedCreateWithoutScrapeRequestInput> | ScrapeLogCreateWithoutScrapeRequestInput[] | ScrapeLogUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeLogCreateOrConnectWithoutScrapeRequestInput | ScrapeLogCreateOrConnectWithoutScrapeRequestInput[]
    upsert?: ScrapeLogUpsertWithWhereUniqueWithoutScrapeRequestInput | ScrapeLogUpsertWithWhereUniqueWithoutScrapeRequestInput[]
    createMany?: ScrapeLogCreateManyScrapeRequestInputEnvelope
    set?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    disconnect?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    delete?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    connect?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    update?: ScrapeLogUpdateWithWhereUniqueWithoutScrapeRequestInput | ScrapeLogUpdateWithWhereUniqueWithoutScrapeRequestInput[]
    updateMany?: ScrapeLogUpdateManyWithWhereWithoutScrapeRequestInput | ScrapeLogUpdateManyWithWhereWithoutScrapeRequestInput[]
    deleteMany?: ScrapeLogScalarWhereInput | ScrapeLogScalarWhereInput[]
  }

  export type ScrapeResponseUncheckedUpdateManyWithoutScrapeRequestNestedInput = {
    create?: XOR<ScrapeResponseCreateWithoutScrapeRequestInput, ScrapeResponseUncheckedCreateWithoutScrapeRequestInput> | ScrapeResponseCreateWithoutScrapeRequestInput[] | ScrapeResponseUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeResponseCreateOrConnectWithoutScrapeRequestInput | ScrapeResponseCreateOrConnectWithoutScrapeRequestInput[]
    upsert?: ScrapeResponseUpsertWithWhereUniqueWithoutScrapeRequestInput | ScrapeResponseUpsertWithWhereUniqueWithoutScrapeRequestInput[]
    createMany?: ScrapeResponseCreateManyScrapeRequestInputEnvelope
    set?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    disconnect?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    delete?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    connect?: ScrapeResponseWhereUniqueInput | ScrapeResponseWhereUniqueInput[]
    update?: ScrapeResponseUpdateWithWhereUniqueWithoutScrapeRequestInput | ScrapeResponseUpdateWithWhereUniqueWithoutScrapeRequestInput[]
    updateMany?: ScrapeResponseUpdateManyWithWhereWithoutScrapeRequestInput | ScrapeResponseUpdateManyWithWhereWithoutScrapeRequestInput[]
    deleteMany?: ScrapeResponseScalarWhereInput | ScrapeResponseScalarWhereInput[]
  }

  export type ScrapeLogUncheckedUpdateManyWithoutScrapeRequestNestedInput = {
    create?: XOR<ScrapeLogCreateWithoutScrapeRequestInput, ScrapeLogUncheckedCreateWithoutScrapeRequestInput> | ScrapeLogCreateWithoutScrapeRequestInput[] | ScrapeLogUncheckedCreateWithoutScrapeRequestInput[]
    connectOrCreate?: ScrapeLogCreateOrConnectWithoutScrapeRequestInput | ScrapeLogCreateOrConnectWithoutScrapeRequestInput[]
    upsert?: ScrapeLogUpsertWithWhereUniqueWithoutScrapeRequestInput | ScrapeLogUpsertWithWhereUniqueWithoutScrapeRequestInput[]
    createMany?: ScrapeLogCreateManyScrapeRequestInputEnvelope
    set?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    disconnect?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    delete?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    connect?: ScrapeLogWhereUniqueInput | ScrapeLogWhereUniqueInput[]
    update?: ScrapeLogUpdateWithWhereUniqueWithoutScrapeRequestInput | ScrapeLogUpdateWithWhereUniqueWithoutScrapeRequestInput[]
    updateMany?: ScrapeLogUpdateManyWithWhereWithoutScrapeRequestInput | ScrapeLogUpdateManyWithWhereWithoutScrapeRequestInput[]
    deleteMany?: ScrapeLogScalarWhereInput | ScrapeLogScalarWhereInput[]
  }

  export type ScrapeRequestCreateNestedOneWithoutResponsesInput = {
    create?: XOR<ScrapeRequestCreateWithoutResponsesInput, ScrapeRequestUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ScrapeRequestCreateOrConnectWithoutResponsesInput
    connect?: ScrapeRequestWhereUniqueInput
  }

  export type ScrapeRequestUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<ScrapeRequestCreateWithoutResponsesInput, ScrapeRequestUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ScrapeRequestCreateOrConnectWithoutResponsesInput
    upsert?: ScrapeRequestUpsertWithoutResponsesInput
    connect?: ScrapeRequestWhereUniqueInput
    update?: XOR<XOR<ScrapeRequestUpdateToOneWithWhereWithoutResponsesInput, ScrapeRequestUpdateWithoutResponsesInput>, ScrapeRequestUncheckedUpdateWithoutResponsesInput>
  }

  export type ScrapeRequestCreateNestedOneWithoutLogsInput = {
    create?: XOR<ScrapeRequestCreateWithoutLogsInput, ScrapeRequestUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ScrapeRequestCreateOrConnectWithoutLogsInput
    connect?: ScrapeRequestWhereUniqueInput
  }

  export type ScrapeRequestUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ScrapeRequestCreateWithoutLogsInput, ScrapeRequestUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ScrapeRequestCreateOrConnectWithoutLogsInput
    upsert?: ScrapeRequestUpsertWithoutLogsInput
    connect?: ScrapeRequestWhereUniqueInput
    update?: XOR<XOR<ScrapeRequestUpdateToOneWithWhereWithoutLogsInput, ScrapeRequestUpdateWithoutLogsInput>, ScrapeRequestUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ScrapeResponseCreateWithoutScrapeRequestInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScrapeResponseUncheckedCreateWithoutScrapeRequestInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScrapeResponseCreateOrConnectWithoutScrapeRequestInput = {
    where: ScrapeResponseWhereUniqueInput
    create: XOR<ScrapeResponseCreateWithoutScrapeRequestInput, ScrapeResponseUncheckedCreateWithoutScrapeRequestInput>
  }

  export type ScrapeResponseCreateManyScrapeRequestInputEnvelope = {
    data: ScrapeResponseCreateManyScrapeRequestInput | ScrapeResponseCreateManyScrapeRequestInput[]
    skipDuplicates?: boolean
  }

  export type ScrapeLogCreateWithoutScrapeRequestInput = {
    id?: string
    level: string
    message: string
    createdAt?: Date | string
  }

  export type ScrapeLogUncheckedCreateWithoutScrapeRequestInput = {
    id?: string
    level: string
    message: string
    createdAt?: Date | string
  }

  export type ScrapeLogCreateOrConnectWithoutScrapeRequestInput = {
    where: ScrapeLogWhereUniqueInput
    create: XOR<ScrapeLogCreateWithoutScrapeRequestInput, ScrapeLogUncheckedCreateWithoutScrapeRequestInput>
  }

  export type ScrapeLogCreateManyScrapeRequestInputEnvelope = {
    data: ScrapeLogCreateManyScrapeRequestInput | ScrapeLogCreateManyScrapeRequestInput[]
    skipDuplicates?: boolean
  }

  export type ScrapeResponseUpsertWithWhereUniqueWithoutScrapeRequestInput = {
    where: ScrapeResponseWhereUniqueInput
    update: XOR<ScrapeResponseUpdateWithoutScrapeRequestInput, ScrapeResponseUncheckedUpdateWithoutScrapeRequestInput>
    create: XOR<ScrapeResponseCreateWithoutScrapeRequestInput, ScrapeResponseUncheckedCreateWithoutScrapeRequestInput>
  }

  export type ScrapeResponseUpdateWithWhereUniqueWithoutScrapeRequestInput = {
    where: ScrapeResponseWhereUniqueInput
    data: XOR<ScrapeResponseUpdateWithoutScrapeRequestInput, ScrapeResponseUncheckedUpdateWithoutScrapeRequestInput>
  }

  export type ScrapeResponseUpdateManyWithWhereWithoutScrapeRequestInput = {
    where: ScrapeResponseScalarWhereInput
    data: XOR<ScrapeResponseUpdateManyMutationInput, ScrapeResponseUncheckedUpdateManyWithoutScrapeRequestInput>
  }

  export type ScrapeResponseScalarWhereInput = {
    AND?: ScrapeResponseScalarWhereInput | ScrapeResponseScalarWhereInput[]
    OR?: ScrapeResponseScalarWhereInput[]
    NOT?: ScrapeResponseScalarWhereInput | ScrapeResponseScalarWhereInput[]
    id?: StringFilter<"ScrapeResponse"> | string
    scrapeRequestId?: StringFilter<"ScrapeResponse"> | string
    data?: JsonFilter<"ScrapeResponse">
    createdAt?: DateTimeFilter<"ScrapeResponse"> | Date | string
  }

  export type ScrapeLogUpsertWithWhereUniqueWithoutScrapeRequestInput = {
    where: ScrapeLogWhereUniqueInput
    update: XOR<ScrapeLogUpdateWithoutScrapeRequestInput, ScrapeLogUncheckedUpdateWithoutScrapeRequestInput>
    create: XOR<ScrapeLogCreateWithoutScrapeRequestInput, ScrapeLogUncheckedCreateWithoutScrapeRequestInput>
  }

  export type ScrapeLogUpdateWithWhereUniqueWithoutScrapeRequestInput = {
    where: ScrapeLogWhereUniqueInput
    data: XOR<ScrapeLogUpdateWithoutScrapeRequestInput, ScrapeLogUncheckedUpdateWithoutScrapeRequestInput>
  }

  export type ScrapeLogUpdateManyWithWhereWithoutScrapeRequestInput = {
    where: ScrapeLogScalarWhereInput
    data: XOR<ScrapeLogUpdateManyMutationInput, ScrapeLogUncheckedUpdateManyWithoutScrapeRequestInput>
  }

  export type ScrapeLogScalarWhereInput = {
    AND?: ScrapeLogScalarWhereInput | ScrapeLogScalarWhereInput[]
    OR?: ScrapeLogScalarWhereInput[]
    NOT?: ScrapeLogScalarWhereInput | ScrapeLogScalarWhereInput[]
    id?: StringFilter<"ScrapeLog"> | string
    scrapeRequestId?: StringFilter<"ScrapeLog"> | string
    level?: StringFilter<"ScrapeLog"> | string
    message?: StringFilter<"ScrapeLog"> | string
    createdAt?: DateTimeFilter<"ScrapeLog"> | Date | string
  }

  export type ScrapeRequestCreateWithoutResponsesInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: ScrapeLogCreateNestedManyWithoutScrapeRequestInput
  }

  export type ScrapeRequestUncheckedCreateWithoutResponsesInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: ScrapeLogUncheckedCreateNestedManyWithoutScrapeRequestInput
  }

  export type ScrapeRequestCreateOrConnectWithoutResponsesInput = {
    where: ScrapeRequestWhereUniqueInput
    create: XOR<ScrapeRequestCreateWithoutResponsesInput, ScrapeRequestUncheckedCreateWithoutResponsesInput>
  }

  export type ScrapeRequestUpsertWithoutResponsesInput = {
    update: XOR<ScrapeRequestUpdateWithoutResponsesInput, ScrapeRequestUncheckedUpdateWithoutResponsesInput>
    create: XOR<ScrapeRequestCreateWithoutResponsesInput, ScrapeRequestUncheckedCreateWithoutResponsesInput>
    where?: ScrapeRequestWhereInput
  }

  export type ScrapeRequestUpdateToOneWithWhereWithoutResponsesInput = {
    where?: ScrapeRequestWhereInput
    data: XOR<ScrapeRequestUpdateWithoutResponsesInput, ScrapeRequestUncheckedUpdateWithoutResponsesInput>
  }

  export type ScrapeRequestUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ScrapeLogUpdateManyWithoutScrapeRequestNestedInput
  }

  export type ScrapeRequestUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ScrapeLogUncheckedUpdateManyWithoutScrapeRequestNestedInput
  }

  export type ScrapeRequestCreateWithoutLogsInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ScrapeResponseCreateNestedManyWithoutScrapeRequestInput
  }

  export type ScrapeRequestUncheckedCreateWithoutLogsInput = {
    id?: string
    actorName: string
    status: string
    inputData: JsonNullValueInput | InputJsonValue
    runId?: string | null
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ScrapeResponseUncheckedCreateNestedManyWithoutScrapeRequestInput
  }

  export type ScrapeRequestCreateOrConnectWithoutLogsInput = {
    where: ScrapeRequestWhereUniqueInput
    create: XOR<ScrapeRequestCreateWithoutLogsInput, ScrapeRequestUncheckedCreateWithoutLogsInput>
  }

  export type ScrapeRequestUpsertWithoutLogsInput = {
    update: XOR<ScrapeRequestUpdateWithoutLogsInput, ScrapeRequestUncheckedUpdateWithoutLogsInput>
    create: XOR<ScrapeRequestCreateWithoutLogsInput, ScrapeRequestUncheckedCreateWithoutLogsInput>
    where?: ScrapeRequestWhereInput
  }

  export type ScrapeRequestUpdateToOneWithWhereWithoutLogsInput = {
    where?: ScrapeRequestWhereInput
    data: XOR<ScrapeRequestUpdateWithoutLogsInput, ScrapeRequestUncheckedUpdateWithoutLogsInput>
  }

  export type ScrapeRequestUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ScrapeResponseUpdateManyWithoutScrapeRequestNestedInput
  }

  export type ScrapeRequestUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inputData?: JsonNullValueInput | InputJsonValue
    runId?: NullableStringFieldUpdateOperationsInput | string | null
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ScrapeResponseUncheckedUpdateManyWithoutScrapeRequestNestedInput
  }

  export type ScrapeResponseCreateManyScrapeRequestInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScrapeLogCreateManyScrapeRequestInput = {
    id?: string
    level: string
    message: string
    createdAt?: Date | string
  }

  export type ScrapeResponseUpdateWithoutScrapeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeResponseUncheckedUpdateWithoutScrapeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeResponseUncheckedUpdateManyWithoutScrapeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogUpdateWithoutScrapeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogUncheckedUpdateWithoutScrapeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeLogUncheckedUpdateManyWithoutScrapeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}