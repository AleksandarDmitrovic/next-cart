import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Your Cart - NextCart",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry cartItem={cartItem} key={cartItem.id} />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div><p className="mb-3 font-bold">Total: {formatPrice(cart?.subtotal || 0)}</p><button className="btn btn-primary">Checkout</button></div>
    </div>
  );
}
