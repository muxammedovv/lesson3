import "./Education.css"
import mistake from "../../assets/12mistakeimg.png"
import howto from "../../assets/howtoimg.png"
import ultimate from "../../assets/ultimateimg.png"
import React from 'react'

const Education = () => {
  return (
    <div>
      <div className="contanier">
      <div className="mistake">
        <img src={mistake} alt="" />
        <p className="date">January 24, 2023</p>
        <h2>12 Mistakes To Avoid When <br />  Buying Cannabis Online</h2>
        <p>Buying cannabis online can be a great way to <br /> get your hands on the products you need <br /> without leaving the comfort of your home. But …</p><br /><br />
        <p><a href="" className="read">read more</a></p>
      </div>
      <div className="howto">
        <img src={howto} alt="" />
         <p className="date">January 20, 2023</p>
         <h2>How To Store Cannabis and <br /> Keep it Fresh and Potent?</h2>
         <p>Cannabis packaging has advanced dramatically <br /> in recent years, whether your state has a <br /> medicinal marijuana programme, legal adult- <br />use weed, or both. Most ...</p><br /><br />
         <p><a href="">read more</a></p>
      </div>
      <div className="ultimate">
        <img src={ultimate} alt="" />
         <p className="date">January 19, 2023</p>
         <h2>The Ultimate Guide to Checking <br /> the Quality of Cannabis – 10 <br /> Industry Leading Tips</h2>
         <p>Quality cannabis is a term used to describe <br /> cannabis products that meet specific standards <br /> of excellence. It is essential to understand what <br />  quality cannabis means, …</p>
         <br /><br />
         <p><a href="">read more</a></p>
      </div>
      </div>
    </div>
  )
}

export default Education
