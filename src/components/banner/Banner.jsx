import "./Banner.css";

const Banner = () => {
  return <div>
    <div className="Banner-wrapper">
      <div className="Banner-text">
        <h3 className="Best-seller">BEST SELLER</h3>
        <h1>BEST DISPENSARY TO <br /> BUY WEED ONLINE </h1> <br />
        <h2>Vitamins & Supplements</h2>
          <br /><br /><br /><br />
        <div className="Banner-discount">
          <h4>Get 25 % off</h4>
          <span></span>
          <h4>Free Shiping</h4>
        </div>
          <br />
        <button>Shop All</button>
      </div>
        <div className="Banner-image">
          <img src="Banner.png" alt="" />
        </div>
    </div>

  </div>;
};

export default Banner;
