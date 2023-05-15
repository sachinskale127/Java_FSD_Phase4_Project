import { CartItem } from "./cartItem";

export class Order  {
    
    id !: number;
    items !: CartItem[];
    totalPrice !: number;
    name !: string;
    address !: string;
    contact !: number;
    paymentId !: string;
    createdAt !: string;
    status !: string;

}