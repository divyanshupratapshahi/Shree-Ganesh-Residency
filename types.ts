
export interface Amenity {
  icon: React.ReactNode;
  label: string;
}

export interface RoomType {
  title: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}
