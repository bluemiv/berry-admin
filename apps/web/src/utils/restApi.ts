const baseUrl = process.env.NEXT_PUBLIC_API_HOST_URL;

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
    const res = await fetch(`${baseUrl}${url}${!!queryString ? `?${queryString}` : ''}`, options);
    return res.json();
  },
};

export default restApi;
