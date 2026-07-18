import "./Testimonals.css";
import star from "../../assets/Star (1).svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonals = () => {
  return (
    <div className='wrapper'>
      <div className="google-card">
        <h2>
          VOTED BEST <br />
          ONLINE <br />
          DISPENSARY IN <br />
          CANADA
        </h2>

        <h3>Google</h3>

        <div className="stars">
          <img src={star} alt="" />
          <span>135 Reviews</span>
        </div>
      </div>

      <div className="user">
        <button className="arrow">
          <IoIosArrowBack />
        </button>
        <div className="user-card">
          <h4>Vikki Starr</h4>
          <div className="stars">
            <img src={star} alt="" />
          </div>
          <p>
            Absolutely love TopShelfBC; affordable on any budget and such fast
            delivery, straight to my door! I recommend them to all my friends
            and family.
          </p>
          <span>January 15, 2023</span>
        </div>
        <div className="user-card">
          <h4>Terry Baskey</h4>

          <div className="stars">
            <img src={star} alt="" />
          </div>
          <p>
            Best damn place to buy your cannabis at great prices. Fast shipping
            and excellent customer support.
          </p>
          <span>January 5, 2023</span>
        </div>
        <button className="arrow">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonals;
