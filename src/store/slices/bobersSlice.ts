import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sortType } from "./filterSlice";

type paramsType = {
    category: number
    sort: sortType
}
export const fetchBober = createAsyncThunk<itemsType, paramsType>('bober/fetchBober', async (params) => {
    const { category, sort } = params
    const { data } = await axios.get(`https://64a2912ab45881cc0ae55d40.mockapi.io/bobers?${category !== 0 ? `category=${category}` : ''}&sortBy=${sort.sort}&order=desc`)
    return data
})
type itemsType = {
    id: string
    imageUrl: string
    title: string
    price: number
    inStock: boolean
    popularity: number
    category: number
}

type initialStateType = {
    status: string,
    items: itemsType[]
}

const initialState: initialStateType = {
    status: '',
    items: []
}
const bobersSlice = createSlice({
    name: 'bober',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBober.pending, (state: any, action: any) => {
            state.items = []
            state.status = 'Loading'
        });
        builder.addCase(fetchBober.fulfilled, (state: any, action: any) => {
            state.items = action.payload
            state.status = 'Success'
        });
        builder.addCase(fetchBober.rejected, (state: any, action: any) => {
            state.items = []
            state.status = 'error'
        });
    }
})
export default bobersSlice.reducer