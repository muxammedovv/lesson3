import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/banner/Banner.jsx";
import Info from "./components/info/Info.jsx";
import Card from "./components/card/Card.jsx";
import Testimonals from "./components/testimonials/Testimonals.jsx";
import Choose from "./components/choose/Choose.jsx";
import Refer from "./components/refer/Refer.jsx";
import Order from "./components/order/Order.jsx";
import Canada from "./components/canada/Canada.jsx";
import Added from "./components/added/Added.jsx";
import Product from "./components/product/Product.jsx";
import Education from "./components/education/Education.jsx";
import Unlock from "./components/unlock/Unlock.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Info />
      <Card />
      <Testimonals />
      <Choose />
      <Refer />
      <Order />
      <Canada />
      <Added />
      <Product />
      <Education />
      <Unlock />
      <Footer />
    </div>
  );
};

export default App;
