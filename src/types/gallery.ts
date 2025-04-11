import { GetLegality } from "./legality";

export interface Gallery {
  id: string;
  title: string;
  image: string;
}

export interface GetGallery {
  id: string;
  title: string;
  imageUrl: File;
}

export interface GalleryResponse {
  data: GetLegality[];
  per_page: number;
  page: number;
}
