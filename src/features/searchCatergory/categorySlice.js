import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "searchCategory",
    initialState: {category: "search-all"},
    reducers: {
        setActiveCategory: (state, action) => {
            state.category = action.payload;
        }
    }
})

export const {setActiveCategory} = categorySlice.actions;

export default categorySlice.reducer;