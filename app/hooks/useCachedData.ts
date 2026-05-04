// app/hooks/useCachedData.ts
import { useState, useEffect } from 'react';

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  key: string;
}

export function useCachedData<T>(
  fetcher: () => Promise<T>,
  options: CacheOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Vérifier le cache localStorage
        const cached = localStorage.getItem(`cache_${options.key}`);
        if (cached) {
          const { data: cachedData, timestamp } = JSON.parse(cached);
          const now = Date.now();
          
          if (now - timestamp < (options.ttl || 3600000)) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }
        
        // Fetch new data
        const freshData = await fetcher();
        setData(freshData);
        
        // Mettre en cache
        localStorage.setItem(`cache_${options.key}`, JSON.stringify({
          data: freshData,
          timestamp: Date.now(),
        }));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetcher, options.key, options.ttl]);

  return { data, loading, error };
}
