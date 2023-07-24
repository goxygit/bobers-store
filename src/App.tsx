import { useState } from 'react';
import s from './App.module.css';
import BasketComponent from './basket/basketComponent';
import CatalogComponent from './catalog/catalogComponent';
const App = () => {
  const [openBasket, setOpenBasket] = useState(false)
  return (
    <div className={s.App}>
      <CatalogComponent openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <BasketComponent openBasket={openBasket} setOpenBasket={setOpenBasket} />
    </div>
  );
}

export default App;
