import { useCallback, useEffect, useState, type DependencyList } from "react";

export interface LoadState<T> {
  data: T | undefined;
  error: unknown;
  reload: () => void;
}

/**
 * Runs an async loader on mount, whenever deps change and on reload().
 * Keeps the previous data while reloading; ignores results of superseded runs.
 */
export function useLoad<T>(loader: () => Promise<T>, deps: DependencyList): LoadState<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<unknown>(undefined);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;
    loader().then(
      (result) => {
        if (cancelled) return;
        setData(result);
        setError(undefined);
      },
      (cause) => {
        if (cancelled) return;
        console.error(cause);
        setError(cause);
      },
    );
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, version]);

  const reload = useCallback(() => setVersion((current) => current + 1), []);
  return { data, error, reload };
}
