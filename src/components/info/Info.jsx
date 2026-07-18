import "./Info.css";
const Info = () => {
  return (
    <div className="container">
  <div className="info">
      <div className="Reli">
        <h1>Reliable Shipping</h1>
        <img src="/img1.png" alt="" />
        <p>Green Society provides Canada Post <br/>
        Xpress Shipping right to your <br />
        doorstep! You can also opt in for <br />
        shipping insurance. For orders over <br />
        $149, shipping is free!</p>
      </div>

      <div className="You">
        <h1>You`re Safe With Us</h1>
        <img src="/img2.png" alt="" />
       <p>Our secure payment system accepts <br />
       the most common forms of payments <br />
       making the checkout process <br />
       quicker! The payments we accept are <br />
       debit, all major credit cards, and <br />
       cryptocurrency.</p>
      </div>

      <div className="Best">
        <h1>Best Quality & Pricing</h1>
        <img src="/img3.png" alt="" />
        <p>Here at Green Society, we take pride <br />
        in the quality of our products and <br />
        service. Our prices are set to ensure <br />
        you receive your medication at a <br />
        reasonable price and safely</p>
      </div>
    </div>
    </div>
  );
};
export default Info;
