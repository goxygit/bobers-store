import s from "./catalogProduct.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addInBasket, productType } from '../../store/slices/basketSlice'
import { useAppDispatch } from "../../store/store";
import classNames from "classnames";
type catalogType = {
  imageUrl: string
  title: string
  price: number
  inStock: boolean
  id: number
}
const BoberEl: React.FC<catalogType> = ({ imageUrl, title, price, inStock, id }) => {
  const dispatch = useAppDispatch()
  const addInBasketEl = () => {
    const product: productType = {
      id,
      imageUrl,
      title,
      price,
      inStock,
      productQuality: 1
    }
    dispatch(addInBasket(product))
  }
  return (
    <div className={s.boberEl}>
      <div className={s.imgEl}>
        <img className={s.boberImg} src={imageUrl} alt="" />
        <div className={s.boberName}>{title}</div>
      </div>
      <div className={s.inStock} > {inStock ? <span> В наявності</span>
        : <span>Не в наявності</span>}
      </div>
      <div className={s.buyPanel}>
        <div className={s.price}>{price} грн</div>
        <button disabled={!inStock} onClick={addInBasketEl} className={classNames(s.addInbasket)}>Купити</button>
      </div>
    </div>
  );
};
export default BoberEl;
