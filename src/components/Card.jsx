import "../style/Card.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from "../images/1.webp"
export default function Card(id,url,name,price) {
  return (
    <>
      <div className="card-container">
        <img src={Image} alt="img" />
        <div className="product-detail">
            <div>
                <p className="product-name">Zenith Smoothie - Tiered Discounts</p>
                <p>$25.50 | $30</p>
            </div>
            <div className="add-button">
                <AddCircleIcon/>
            </div>
        </div>
      </div>
    </>
  )
}
