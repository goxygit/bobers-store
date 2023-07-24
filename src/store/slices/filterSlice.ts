import { createSlice } from "@reduxjs/toolkit";


export type sortType = {
    name: string
    sort: string
}
type inititalStateType = {
    categoryId: number
    sort: sortType
}
const initialState: inititalStateType = {
    categoryId: 0,
    sort: { name: 'Популярність', sort: 'popularity' }
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, actions) {
            state.categoryId = actions.payload
        },
        setSort(state, actions) {
            state.sort = actions.payload
        }
    }
})
export const { setCategory, setSort } = filterSlice.actions
export default filterSlice.reducer