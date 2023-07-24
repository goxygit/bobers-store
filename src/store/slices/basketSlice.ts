import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type productType = {
    id: number
    imageUrl: string
    title: string
    price: number
    inStock: boolean
    productQuality: number
}
type initialStateType = {
    totalPrice: number
    products: productType[]
}
const initialState: initialStateType = {
    totalPrice: 0,
    products: [],
}
const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addInBasket(state, action) {
            const findItem = state.products.find(obj => obj.id === action.payload.id)

            if (findItem) {

                findItem.productQuality++
                if (!findItem.inStock)
                    findItem.productQuality = 0
            }

            else {
                if (!action.payload.inStock)
                    action.payload.productQuality = 0
                state.products.push(action.payload)
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (sum + obj.price * obj.productQuality)
            }, 0)


        },
        addProductQuality(state, action) {

            const findItem = state.products.findIndex(obj => obj.id === action.payload)
            state.products[findItem].productQuality += 1
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (sum + obj.price * obj.productQuality)
            }, 0)
        },
        decProductQuality(state, action) {

            const findItem = state.products.findIndex(obj => obj.id === action.payload)
            state.products[findItem].productQuality -= 1
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (sum + obj.price * obj.productQuality)
            }, 0)

        },
        removeFromBasket(state, action) {
            state.products = state.products.filter((obj: any) => obj.id !== action.payload)
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (sum + obj.price * obj.productQuality)
            }, 0)
        },
        removeAll(state) {
            state.products = []
        },
    }
})
export const { addInBasket, removeFromBasket, removeAll, addProductQuality, decProductQuality } = basketSlice.actions
export default basketSlice.reducer