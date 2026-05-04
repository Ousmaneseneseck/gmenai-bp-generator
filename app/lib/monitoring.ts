// app/lib/monitoring.ts
export function logPerformance(name: string, duration: number) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Envoyer à Vercel Analytics
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, duration, timestamp: Date.now() }),
    }).catch(console.error);
  }
  
  // Log en développement
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance [${name}]: ${duration.toFixed(2)}ms`);
  }
}

export function measurePerformance<T>(name: string, fn: () => T): T {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  logPerformance(name, duration);
  return result;
}

export async function measurePerformanceAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start;
  logPerformance(name, duration);
  return result;
}
