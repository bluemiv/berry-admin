const baseUrl = process.env.NEXT_PUBLIC_API_HOST_URL;

const restHeaders = {
  'Content-Type': 'application/json',
};

const restApi = {
  get: async ({
    url,
    params,
    options,
  }: {
    url: string;
    params?: { [key: string]: any };
    options?: RequestInit;
  }) => {
    const queryString = new URLSearchParams(params);
    const res = await fetch(`${baseUrl}${url}${!!queryString ? `?${queryString}` : ''}`, {
      method: 'GET',
      headers: restHeaders,
      ...options,
    });
    return res.json();
  },
  post: async ({
    url,
    params,
    options,
  }: {
    url: string;
    params?: { [key: string]: any };
    options?: RequestInit;
  }) => {
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: restHeaders,
      ...options,
    });
    return res.json();
  },
};

export default restApi;
