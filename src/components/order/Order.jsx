import "./Order.css";
import register from './register.svg'
import relax from './relax.svg'
import shop from './shop.svg'
import payment from './payment.svg'

const Order = () => {
  return <div className="marijuana container">
            <p className="marijuana-text-main">HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA</p>
            <p className="marijuana-text-info">Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.</p>
            <div className="marijuana-cards">
                <div className="marijuana-card">
                    <img className="marijuana-card-img" src={register} alt="" />
                    <p className="marijuana-card-main-text">REGISTER</p>
                    <p className="marijuana-card-info-text">Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.</p>
                </div>
                <div className="marijuana-card">
                    <img className="marijuana-card-img" src={shop} alt="" />
                    <p className="marijuana-card-main-text">SHOP</p>
                    <p className="marijuana-card-info-text">Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.</p>
                </div>
                <div className="marijuana-card">
                    <img className="marijuana-card-img" src={payment} alt="" />
                    <p className="marijuana-card-main-text">MAKE PAYMENT</p>
                    <p className="marijuana-card-info-text">Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.</p>
                </div>
                <div className="marijuana-card">
                    <img className="marijuana-card-img" src={relax} alt="" />
                    <p className="marijuana-card-main-text">RELAX</p>
                    <p className="marijuana-card-info-text">Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.</p>
                </div>
            </div>
            <button className="marijuana-btn">Choose your Weed</button>
        </div>;
};

export default Order;
