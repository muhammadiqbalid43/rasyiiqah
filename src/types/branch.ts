export interface Branch {
  id: number;
  name: string;
  image: string;
  phone: string;
  address: string;
  map_url: string | string;
}

export interface CreateBranchFormData {
  name: string;
  image: File | null;
  phone: string;
  address: string;
  map_url: string | string;
}

export interface PaginatedBranches {
  data: Branch[];
  total: number;
  page: number;
  per_page: number;
}
