import "./Canada.css"

import { MdOutlineSupportAgent } from "react-icons/md";
import { GiCheckedShield } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { CiMedal } from "react-icons/ci";
import { PiHandshakeLight } from "react-icons/pi";

const Canada = () => {
  return (
    <div className='Canada-sec'>
      <div className="container">
          <div className="head-sec">
      <h1 className="h1">WHAT MAKES US THE #1 <br />
      ONLINE MARIJUANA <br />
      DISPANSARY IN CANADA?
      </h1>
      <p className="head-p">When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax <br />lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the <br />six prioritized features that we feel makes us a cut above the rest.</p>
        </div>

    <div className="carts-sec">
        <div className="cart-1">
            <MdOutlineSupportAgent className="log" />
            <h3>
                CUSTOMER SERVICE
            </h3>
            <p>
                Whether it is answering any questions you <br />
                have before making a purchase, helping out <br />
                with the buying process itself or taking your <br />
                feedback under consideration, we are proud <br />
                to provide high quality customer service that <br />
                makes you – the customer – the most <br />
                important person in the transaction.
            </p>
        </div>    
        <div className="cart-2">
            <GiCheckedShield className="log" />
            <h3>
                SECURITY
            </h3>
            <p>
                When it comes to security, we only keep what <br />
                details are necessary for you to have an <br />
                account with us and make an order. When it <br />
                comes to shipping your mail order marijuana <br />
                out, we use only tamper-proof and discrete <br />
                packaging so then what you’ve purchased is <br />
                your business only.
            </p>
        </div>    
        <div className="cart-3">
            <IoDiamondOutline className="log" />
            <h3>
                BEST VALUE
            </h3>
            <p>
                We are continually adjusting what we supply <br />
                and our prices to ensure that we maintain an <br />
                optimal balance of affordable and quality for <br />
                our products. We invest in the best quality <br />
                strains that we can find and are always on the <br />
                lookout for new, affordable and high quality <br />
                weed products.
            </p>
        </div>    
        <div className="cart-4">
            <TbTruckDelivery className="log" />
            <h3>
                DELIVERY INSURANCE
            </h3>
            <p>
              If your mail order marijuana becomes lost, <br /> 
              stolen, or damaged during transit, we will <br />
              send you a replacement completely free of <br />
              charge. Free Canada Post Xpress shipping on <br />
              all orders over $120
            </p>
        </div>    
        <div className="cart-5">
            <CiMedal className="log" />
            <h3>
                HIGHEST QUALITY
            </h3>
            <p>
            All of our cannabis products are tested to <br />
            ensure that they are the highest quality <br />
            possible. We work with expert suppliers and <br />
            are always revising what makes a quality <br />
            cannabis product to ensure that we have only <br />
            the best available.
            </p>
        </div>    
        <div className="cart-6">
            <PiHandshakeLight className="log"/>
            <h3>
                TRUST
            </h3>
            <p>
           With over 15 years in the weed business, you <br />
           can rest assured that you will be taken care <br />
           of. You can guarantee that we have your best <br />
           interests in mind. Feel free to check out <br />
           our reviews.
            </p>
        </div>    
    </div>
      </div>
    </div>
  )
}

export default Canada