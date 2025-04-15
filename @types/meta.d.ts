interface Meta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

interface APIResponse<T> {
  data: T;
  meta: Meta | null;
  message: string;
  status: number;
}
