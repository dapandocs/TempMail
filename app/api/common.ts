import { TempEmailHost, TempEmailType } from "@/utils/constant";

export const getRequestHeader = (emailType: TempEmailType) => {
  const x_rapidapi_key = process.env["X-RAPIDAPI-KEY"];
  if (!x_rapidapi_key) {
    return "Missing X-RAPIDAPI-KEY";
  }
  switch (emailType) {
    case "temp-email44":
      return {
        "x-rapidapi-key": x_rapidapi_key,
        "x-rapidapi-host": TempEmailHost.TempEmail44,
      };
    case "temp-email":
      return {
        "x-rapidapi-key": x_rapidapi_key,
        "x-rapidapi-host": TempEmailHost.TempEmail,
      };
    default:
      return "Invalid email type";
  }
};

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
