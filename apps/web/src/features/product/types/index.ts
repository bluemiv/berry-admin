export type TProduct = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  versions?: TProductVersion[];
};

export type TProductVersion = {
  id: number;
  version: string;
  createdAt: string;
  releaseAt?: string | null;
  updatedAt: string;
};
