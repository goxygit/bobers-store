import classNames from 'classnames'
import close from '../assets/img/close-basket.png'
import s from "./basket.module.css";
import BasketProductComponent from './basketProductComponent';
import { useSelector } from 'react-redux';

type CatalogComponentType = {
  openBasket: boolean
  setOpenBasket: (bool: boolean) => void
}
const BasketComponent: React.FC<CatalogComponentType> = ({ openBasket, setOpenBasket }) => {
  const { products, totalPrice } = useSelector((state: any) => state.basket)
  return (
    <span className={classNames(s.backgroundBasket, openBasket ? [s.openBasket] : s.none)}>
      <div className={s.headerBasketElement}>
        <span className={s.basketText}>Кошик</span>
        <img onClick={() => setOpenBasket(false)} className={s.closeImg} src={close} alt="" />
      </div>
      <div className={s.basketContent}>
        {products.map((product: any) =>
          <BasketProductComponent  {...product} />

        )}
        {products.length > 0 &&
          <div className={s.final}>
            <div className={s.totalPrice}>
              <span>До оплати: </span>
              <span>{totalPrice} грн</span>
            </div>
            <div className={s.transactionButton}>
              <span className={s.spanInButton}>Оформити замовлення</span>
            </div>
          </div>
        }


      </div>
    </span>
  );
};
export default BasketComponent;
