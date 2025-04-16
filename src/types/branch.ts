export interface Branch {
  id?: number;
  name: string;
  imageUrl?: string;
  phone: string;
  address: string;
  mapUrl: string;
}

export interface PaginationParams {
  page: number;
  per_page: number;
}
