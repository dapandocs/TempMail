export async function request(url: string, options: Record<string, any>) {
  const { headers = {}, ...restOpt } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 10 * 60 * 1000);

  const fetchOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    cache: "no-store",
    signal: controller.signal,
    ...restOpt,
  };

  try {
    const res = await fetch(url, fetchOptions);

    if (res.status === 401) {
      // to prevent browser prompt for credentials
      const newHeaders = new Headers(res.headers);
      newHeaders.delete("www-authenticate");
      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: newHeaders,
      });
    }

    return res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}
