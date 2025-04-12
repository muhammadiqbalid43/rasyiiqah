export interface Gallery {
  id: number;
  title: string;
  image: string | File;
}

export interface GetGallery {
  id: number;
  title: string;
  imageUrl: File | string;
}

export interface GalleryResponse {
  data: GetGallery[];
  per_page: number;
  page: number;
}
