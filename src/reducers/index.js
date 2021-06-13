import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
// import postReducer from './postReducer'

// export default combineReducers({

//     posts: postReducer
// })



const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export default reducers

