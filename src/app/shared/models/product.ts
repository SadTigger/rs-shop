export interface Product {
  id: string;
  name: string;
  imageUrls: Array<string>;
  rating: number;
  availableAmount: number;
  price: number;
  description: string;
  isInCart?: boolean;
  isFavorite?: boolean;
  category?: string;
  subCategory?: string;
  discount?: boolean;
}
