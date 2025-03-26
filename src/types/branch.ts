export interface Branch {
  id: number;
  name: string;
  imageUrl: string;
  phone: string;
  address: string;
  mapUrl: string;
}

export interface BranchResponse {
  data: Branch[];
}
