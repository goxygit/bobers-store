import s from './catalog.module.css';
import HeaderComponent from '../header/headerComponent';
import CategoryComponent from './category/categoryComponent';
import CatalogProductComponent from './catalogProduct/catalogProductComponent';
import BasketComponent from '../basket/basketComponent';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBober } from '../store/slices/bobersSlice'
import { useAppDispatch } from '../store/store';

type CatalogComponentType = {
    openBasket: boolean
    setOpenBasket: (bool: boolean) => void
}
export type catalogType = {
    id: number
    imageUrl: string
    title: string
    price: number
    inStock: boolean
}
export type sortNameType = {
    name: string
    sort: string
}
const CatalogComponent: React.FC<CatalogComponentType> = ({ openBasket, setOpenBasket }) => {
    const category = useSelector((state: any) => state.filter.categoryId)
    const sort = useSelector((state: any) => state.filter.sort)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBober({ category, sort }))
    }, [category, sort])
    return (
        <div className={s.catalogComponent}>
            {openBasket &&
                <div className={s.dark}>
                </div>
            }
            <div className={s.backgroundBlock}>


                <div className={s.catalog}>
                    <HeaderComponent setOpenBasket={setOpenBasket} />
                    <CategoryComponent sortName={sort} category={category} />
                    <CatalogProductComponent category={category} />
                </div>
                <BasketComponent openBasket={openBasket} setOpenBasket={setOpenBasket} />

            </div>
        </div>

    );
}

export default CatalogComponent;
