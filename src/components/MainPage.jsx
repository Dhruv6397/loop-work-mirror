import "../style/MainPage.css"
import Card from "./Card"
import { useEffect,useState } from "react";

export default function MainPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/src/Json/CardData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <div className="main-page-container">

          <div className="contact-container">
            <h7>
            #11850744027 <span className="active-icon">Active</span> <br/>
            $279.55 + $0 shipping<br/>
            Deliver every 1 month<br/>
            </h7>
          </div>


          <div className="next-order-container">
            <div className="heading-next-order-container">
              <p>Next order : <span>January 12, 2025</span> </p>
            </div>
            <div className="button-container">
              <button className="btns btns-one">Order Now</button>
              <button className="btns btns-rest">Skip Order</button>
              <button className="btns btns-rest">Re-schedule</button>
              <button className="btns btns-rest">Delay</button>
            </div>
          </div>


          <div className="divide-line">
            <hr/>
          </div>


          <div className="card-scroller">
            <div className="scroller-heading">
              <p>New launches, Sample packs, Special product drops</p>
            </div>
            <div className="scroller">
              
            {data.map(item => (
              <Card key={item.id} url= {item.url} name={item.name} price={item.price} />
             ))}
            </div>
          </div>
      </div>
    </>
  )
}
