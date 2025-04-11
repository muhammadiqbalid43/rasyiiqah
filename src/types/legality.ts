export interface Legality {
  id?: number;
  title: string;
  image?: File | string;
}

export interface GetLegality {
  id: number;
  title: string;
  imageUrl: File | string;
  type: string;
}

export interface LegalityResponse {
  data: GetLegality[];
  per_page: number;
  page: number;
}
