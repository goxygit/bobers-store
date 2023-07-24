import BoberEl from "./boberEl";
import { useState, useEffect } from 'react'
import s from "./catalogProduct.module.css";
import MyLoader from "../myLoader";
import { useSelector } from "react-redux";

type categoryType = {
  category: number
}
const CatalogProductComponent: React.FC<categoryType> = () => {
  const { items, status } = useSelector((state: any) => state.bober)
  return (
    <div className={s.catalogProduct}>
      <div className={s.filter}>Всі бобри</div>
      <div className={s.catalog}>


        {
          status === "Loading"
            ? [...new Array(24)].map((_, i) => <MyLoader key={i} />)
            : items.map((obj: any) =>
              <BoberEl key={obj.id} {...obj} />
            )
        }

      </div>
    </div>
  );
};

export default CatalogProductComponent;
