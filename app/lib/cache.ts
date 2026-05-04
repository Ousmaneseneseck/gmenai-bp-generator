// app/lib/cache.ts
export interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export class MemoryCache {
  private cache: Map<string, CacheItem<any>> = new Map();
  private defaultTTL: number = 3600000; // 1 heure

  async get<T>(key: string, fetcher: () => Promise<T>, ttl?: number): Promise<T> {
    const cached = this.cache.get(key);
    const now = Date.now();
    const ttlMs = ttl || this.defaultTTL;

    if (cached && (now - cached.timestamp) < ttlMs) {
      console.log(`Cache hit: ${key}`);
      return cached.data as T;
    }

    console.log(`Cache miss: ${key}`);
    const data = await fetcher();
    this.set(key, data, ttlMs);
    return data;
  }

  set<T>(key: string, data: T, ttl?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });

    // Nettoyage automatique après TTL
    setTimeout(() => {
      this.cache.delete(key);
    }, ttl || this.defaultTTL);
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cache = new MemoryCache();
