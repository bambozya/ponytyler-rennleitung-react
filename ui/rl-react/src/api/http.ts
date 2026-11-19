/** Base of all API paths. In development it is the page origin; Vite proxies /api to the backend. */
export const apiUrl: string = import.meta.env.VITE_API_URL || "/";

/** Plain object (not an Error) so it survives JSON.stringify in error snackbars. */
export interface ApiError {
  status: number;
  statusText: string;
  url: string;
  error: unknown;
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  const url = `${apiUrl}${path}`;
  let response: Response;
  try {
    response = await fetch(url, {
      method,
      headers: body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch (cause) {
    throw { status: 0, statusText: String(cause), url, error: null } satisfies ApiError;
  }

  const text = await response.text();
  let parsed: unknown = null;
  if (text) {
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }
  }

  if (!response.ok) {
    throw { status: response.status, statusText: response.statusText, url, error: parsed } satisfies ApiError;
  }
  return parsed as T;
}

export const http = {
  get: <T>(path: string) => request<T>("GET", path),
  post: <T>(path: string, body: unknown) => request<T>("POST", path, body),
  patch: <T>(path: string, body: unknown) => request<T>("PATCH", path, body),
  delete: <T>(path: string) => request<T>("DELETE", path),
};
