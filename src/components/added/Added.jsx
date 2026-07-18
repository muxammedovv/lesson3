import "./Added.css";
import img1 from "../../assets/Image (2).svg";
import img2 from "../../assets/Image (3).svg";
import img3 from "../../assets/Image (4).svg";
import img4 from "../../assets/Image (5).svg";
import { FaStar } from "react-icons/fa";

const Added = () => {
  return (
    <div className="added">
      <div className="container">
        <div className="add-wr">
          <h2>RECENTLY ADDED</h2>
          <div className="add-product-wr">
            <div className="add-card">
              <img src={img1} alt="" />
              <p>2 Oz Deal Watermelon Zkittles + Purple Gushers</p>
              <b>
                <FaStar style={{ color: "gold" }} /> 4.6/5 | 135
              </b>
              <p className="price">
                $80.00 <span style={{ color: "#9D9EA2" }}>/ gram</span>
              </p>
              <button className="card-btn">Add to Cart</button>
            </div>
            <div className="add-card">
              <img src={img2} alt="" />
              <p>2 Oz Deal Ahi Tuna + Master Tuna</p>
              <b>
                <FaStar style={{ color: "gold" }} /> 4.6/5 | 135
              </b>
              <p className="price">
                $80.00 <span style={{ color: "#9D9EA2" }}>/ gram</span>
              </p>
              <button className="card-btn">Add to Cart</button>
            </div>
            <div className="add-card">
              <img src={img3} alt="" />
              <p>Mix And Match Shatter/Budder 28g (4 X 7G)</p>
              <b>
                <FaStar style={{ color: "gold" }} /> 4.6/5 | 135
              </b>
              <p className="price">
                $80.00 <span style={{ color: "#9D9EA2" }}>/ gram</span>
              </p>
              <button className="card-btn">Add to Cart</button>
            </div>
            <div className="add-card">
              <img src={img4} alt="" />
              <p>2 Oz Deal Watermelon Zkittles + Purple Gushers</p>
              <b>
                <FaStar style={{ color: "gold" }} /> 4.6/5 | 135
              </b>
              <p className="price">
                $80.00 <span style={{ color: "#9D9EA2" }}>/ gram</span>
              </p>
              <button className="card-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Added;
