import Deals from "@/Components/Deals/Deals";
import Meals from "@/Components/Meals/Meals";
import Products from "@/Components/Products/Products";
import Order from "@/Components/Order/Order"
export default function Home() {
  return (
    <div>
      <Products />
      <Deals/>
      <Meals/>
      <Order/>
    </div>
  );
}
