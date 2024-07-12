import '../style/Footer.css'
import AmericanExpress from "../images/american-express.png"
import ApplePay from "../images/apple-pay.png"
import DinerClub from "../images/diners-club.png"
import Discover from "../images/discover.png"
import Meta from "../images/meta.png"
import GooglePay from "../images/google-pay.png"
import MasterCard from "../images/shopping.png"
import Visa from "../images/visa.png"
import ShopPay from "../images/shop-pay.png"
export default function Footer() {
  return (
    <>
      <div>
        <section className="gradient-background">
            <p className="rating">Rated <span className="stars">⭐⭐⭐⭐⭐</span> on Shopify App Store</p>
            <h1>This store is powered by Loop subscriptions!</h1>
            <p>Turn your customers into subscribers and drive recurring revenue for your DTC brand.</p>
            <button className="btn">Book a Demo</button>
        </section>
    </div>
    <footer className="footer">
      <div className="footer-top">
        
        <div className='footer-row-one'>
            <div className="footer-row-one-content">
                <div className="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Widgets Gallery [New]</a></li>
                    <li><a href="#">Subscription Gamification</a></li>
                    <li><a href="#">Unbundling of Box Subscription</a></li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Migration</h3>
                <ul>
                    <li><a href="#">Recharge</a></li>
                    <li><a href="#">Bold</a></li>
                    <li><a href="#">Migration reviews</a></li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Compare Apps</h3>
                <ul>
                    <li><a href="#">Recharge vs Bold vs Loop</a></li>
                    <li><a href="#">Recharge vs Skio vs Loop</a></li>
                    <li><a href="#">Ordergroove vs Recharge vs Loop</a></li>
                </ul>
                </div>
            </div>
        </div>

        <div className='footer-row-second'>
            <div className='footer-row-second-content'> 
                <div className="footer-column">
                <h3>Integrations</h3>
                <ul>
                    <li><a href="#">Prediko for Inventory Management</a></li>
                    <li><a href="#">Upsell Widget Designer</a></li>
                    <li><a href="#">Littledata for BFCM analytics</a></li>
                    <li><a href="#">All Integrations</a></li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Help</h3>
                <ul>
                    <li><a href="#">Loop Help Centre</a></li>
                    <li><a href="#">How to setup subscription on Shopify</a></li>
                </ul>
                </div>
                <div className="footer-column">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Automatic Renewal Law (ARL)</a></li>
                </ul>
                </div>
            </div>
        </div>
        
      </div>
      <hr className='horizontal-line-footer' />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
        <div className='country-language'>
            <div className='footer-bottom-first-left'>
          <label htmlFor="country">Country/region</label>
            <select id="country" name="country">
            <option value="usd">USD $ | United States</option>
            <option value="usd">ALL L | Albania</option>
            <option value="usd">XCD $ | Angulia</option>
            </select>
            </div>
            <div className="footer-bottom-second-left">
            <label htmlFor="language">Language</label>
          <select id="language" name="language">
            <option value="english">English</option>
            <option value="english">Espanol</option>
          </select>
            </div>
            </div>
            <p>© 2024, Loop Demo Store Powered by Shopify</p>
        </div>
        <div className="footer-bottom-right">
          
          <div className="payment-icons" >
            <img className="american-express" src={AmericanExpress} alt="Amex" />
            <img className="apple-pay" src={ApplePay} alt="Apple Pay" />
            <img className="dinner-club" src={DinerClub} alt="Diners Club" />
            <img className="discover" src={Discover} alt="Discover" />
            <img className="meta" src={Meta} alt="Meta Pay" />
            <img className="google-pay" src={GooglePay} alt="Google Pay" />
            <img className="master-card" src={MasterCard} alt="MasterCard" />
            <img className="shop-pay" src={ShopPay} alt="ShopPay" />
            <img className="visa" src={Visa} alt="Visa" />
          </div>
        </div>
      </div>
    </footer>
 
    </>
  )
}
