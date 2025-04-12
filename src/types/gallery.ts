export interface Gallery {
  id: string | number;
  title: string;
  image: string | File;
}

export interface GetGallery {
  id: string | number;
  title: string;
  imageUrl: File | string;
}

export interface GalleryResponse {
  data: GetGallery[];
  per_page: number;
  page: number;
}
