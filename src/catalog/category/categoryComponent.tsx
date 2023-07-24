import classNames from "classnames";
import s from "./category.module.css";
import { useEffect, useRef, useState } from 'react'
import { sortNameType } from "../catalogComponent";
import { useDispatch } from "react-redux";
import { setCategory, setSort } from '../../store/slices/filterSlice';
import { useClickAway } from "ahooks";

type CategoryComponentType = {
  category: number
  sortName: sortNameType
}
const CategoryComponent: React.FC<CategoryComponentType> = ({ category, sortName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const sort = [{ name: 'Популярність', sort: 'popularity' }, { name: 'Ціною', sort: 'price' }]
  const categories = [{ name: 'Всі', id: 0 }, { name: 'Милі', id: 1 }, { name: 'Пухкі', id: 2 }, { name: 'Тонкі', id: 3 }, { name: 'Звичайні', id: 4 }, { name: 'Легендарні', id: 5 },]
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null)


  useClickAway(
    () => {
      setIsOpen(false);
    },
    () => document.getElementById('use-click-away-button'),
  );

  return (
    <div className={s.backgroundCategory}>
      <div className={s.categoryAndFilter}>
        <div className={s.category}>
          {
            categories.map((text, i) =>
              <span onClick={() => dispatch(setCategory(text.id))} className={classNames(s.filterButton, category === i ? s.active : '')}>{text.name}</span>
            )
          }
        </div>

        <div className={s.filter}>
          <div>
            <span>Сортування за:</span>
            <span onClick={(e) => {
              e.stopPropagation()
              setIsOpen(open => !open)
            }} className={s.dropDownListLink}>{sortName.name}</span>
          </div>

          <div ref={dropDownMenuRef}>
            {isOpen &&
              <div id="use-click-away-button" className={s.dropDownListBackground}>
                {sort.map((obj, i) =>
                  <div className={s.sortParams} key={i} onClick={() => {
                    dispatch(setSort(obj))
                    setIsOpen(false)
                  }}>{obj.name}</div>
                )}
              </div>
            }
          </div>


        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
