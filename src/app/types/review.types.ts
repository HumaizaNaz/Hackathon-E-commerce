export type Review = {
  id: number;
  productId: number;
  user: string; // Name of the reviewer
  rating: number; // Rating as a number
  content: string;
  date: string;
};