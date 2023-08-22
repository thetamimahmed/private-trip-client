import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from "../features/searchCatergory/categorySlice"
import searchReducer from "../features/searchCatergory/searchData"

const store = configureStore({
    reducer: {
        category : categoryReducer,
        searchData: searchReducer
    }
})

export default store