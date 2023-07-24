import s from "./header.module.css";
import bober from "../assets/img/bober.png";
import basket from "../assets/img/basket-white.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
type CatalogComponentType = {
  setOpenBasket: (bool: boolean) => void

}
const HeaderComponent: React.FC<CatalogComponentType> = ({ setOpenBasket }) => {
  const { totalPrice, products } = useSelector((state: any) => state.basket)
  return (
    <div className={s.backgroundHeader}>
      <div className={s.logoEl}>
        <div>
          <img src={bober} className={s.boberImg} />
        </div>
        <div className={s.textLogoEl}>
          <div className={s.headerLogoText}>Bober store</div>
          <div className={s.downHederTextEl}>
            Найякісніщі, та найгарніщі іграшкові бобри у світі
          </div>
        </div>
      </div>
      <div className={s.basketButton} onClick={() => setOpenBasket(true)}>
        <span className={s.priceSpan}>{totalPrice} грн</span>
        <span className={s.basketSpan}>
          <img className={s.basketImg} src={basket} alt="" />
          <span className={s.number}>{products.length}</span>
        </span>
      </div>

    </div>
  );
};

export default HeaderComponent;
