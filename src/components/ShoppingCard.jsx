import Row from "react-bootstrap/esm/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import formatCurrency from "../formatCurrency";
import "../style/ShoppingBox.css";
import { BsX } from "react-icons/bs";
import { clearCard, removeFromCard } from "../rtk/cardSlice";

const ShoppingCard = ({ handleClose, show }) => {
  const products = useSelector((state) => state.card.cardItems);
  const dispatch = useDispatch();
  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);


  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Card</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row>
          {products.map((pro) => {
            return (
              <div className="cardShop" key={pro.id}>
                <div className="img">
                  <img src={pro.image} alt="imageProduct" />
                </div>
                <div className="title">{pro.title.slice(0, 10)}...</div>
                <div className="num">{pro.quantity}</div>
                <div className="price">
                  Staring at <span>{formatCurrency(pro.price * pro.quantity)}</span>
                </div>
                <span
                  className="x"
                  onClick={() => dispatch(removeFromCard(pro))}
                >
                  {<BsX />}
                </span>
              </div>
            );
          })}
        </Row>
        <div className="total">
          TOTAL PRICE <span>{formatCurrency(totalPrice)}</span>
        </div>
        <div className="btns">
          <button onClick={() => dispatch(clearCard())}>Clear</button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCard;
