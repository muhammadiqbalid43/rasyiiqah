export type TestimonyType = "image" | "video";

export interface Testimony {
  id: number;
  type: TestimonyType;
  url: string;
}

export interface TestimonyCreatePayload {
  type: TestimonyType;
  image?: File;
  url?: string;
}

export interface TestimonyResponse {
  data: Testimony[];
  per_page: number;
  page: number;
}
