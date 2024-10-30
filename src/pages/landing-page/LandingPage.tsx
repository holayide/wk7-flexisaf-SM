import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Ribbon from "../ribbon/Ribbon";

function LandingPage() {
  return (
    <div>
      <Header />
      <Ribbon />
      <Products />
      <Footer />
    </div>
  );
}

export default LandingPage;
