export interface Branch {
  id?: number;
  name: string;
  image?: string;
  phone: string;
  address: string;
  map_url: string;
}

export interface PaginationParams {
  page: number;
  per_page: number;
}
