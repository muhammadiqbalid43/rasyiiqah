declare namespace Branch {
  namespace Response {
    type Get = APIResponse<Root[]>;
  }

  interface Root {
    id: number;
    name: string;
    phone: string;
    address: string;
    imageUrl: string;
    mapUrl: string;
  }
}
