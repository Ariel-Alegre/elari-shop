import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Product/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from "../components/icons/Icons";

export default function AllProducts() {
    return (
        <div>
            <Navbar/>
            <div>
            <Products/>
            </div>
   <Icons/>
        </div>
    )
}