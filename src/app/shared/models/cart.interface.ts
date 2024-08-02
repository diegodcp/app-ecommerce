import { ProductVariation } from "./product.interface";
import { User } from "./user.interface";

export interface Cart {
  id: number;
  cartData: {};
  createdAt: Date;
  totalPrice: number;
  errorMessage: string;
  status: number;
  user: User;
  companyId: number;
  cartItem: CartItem[];
}

export interface CartItem{
  id: number;
  productVariation: ProductVariation;
  createdAt: Date;
  quantity: number;
  isOrder: boolean;
  errorMessage: string;
  status: number;
}
