import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, addProductQuality, decProductQuality } from '../store/slices/basketSlice'
import bober from "../assets/img/bober.png";
import deletePng from "../assets/img/deletePng.png";
import s from "./basket.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
type basketType = {
  id: number
  imageUrl: string
  title: string
  price: number
  inStock: boolean
  productQuality: number
}
const BasketProductComponent: React.FC<basketType> = ({ id, imageUrl, title, price, inStock, productQuality }) => {
  const dispatch = useAppDispatch()


  return (
    <div className={s.productBlock}>
      <div className={s.productImgBlock}>
        <img className={s.productImg} src={imageUrl} alt="" />
      </div>

      <div className={s.productInfoBlock}>
        <div className={s.productName}>
          <span>{title}</span>
          <img onClick={() => dispatch(removeFromBasket(id))} className={s.deleteImg} src={deletePng} alt="" />
        </div>
        <span className={s.inStock}>{inStock ? <span>В наявності</span> : <span> Не в наявності</span>} </span>
        <div className={s.priceBlock}>
          <span className={s.price}>{price} грн</span>
          <div className={s.quantityProduct}>
            <div className={s.addProduct}>
              <button disabled={productQuality === 1} onClick={() => dispatch(decProductQuality(id))} className={s.quantityChange}>-</button>
              <span className={s.quantity}>{productQuality}</span>
              <button onClick={() => dispatch(addProductQuality(id))} className={s.quantityChange}>+</button>
            </div>
            <div>{productQuality * price} грн</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasketProductComponent;
