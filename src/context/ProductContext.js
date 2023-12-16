import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react";
import reducer from '../reducer/ProductReducer';


const AppContext = createContext();
// API url modify with the help of setupProxy.js file 
const API = '/api/products';
// const API = "https://api.pujakaitem.com/api/products";

const initialState ={
    isLoading: false,
    isError : false,
    products : [],
    featureProducts: [],
    isSingleLoading : false,
    singleProduct : {},



}

const AppProvider = ({children}) =>{
// const [data, setData] = useState(null);


    const [state, dispatch] = useReducer(reducer, initialState);
    const getProduct = async(url) =>{
        dispatch({type : "SET_LOADING" });

       try {
         const res =  await axios.get(url);
         const products = await res.data;
 
         dispatch({
             type : "SET_API_DATA",
             payload : products,
         });
       } catch (error) {
        dispatch({type : "API_ERROR" });
        
       }

    };

    // second Api for singleProduct call

    const getSingleProduct = async(url) =>{
        dispatch({type : "SET_SINGLE_LOADING" });

        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;

            dispatch({
                type : "SET_SINGLE_PRODUCT",
                payload : singleProduct,
            });
            
        } catch (error) {
            dispatch({type : "SET_SINGLE_ERROR" });
            
        }
    }
    useEffect(() =>{
        getProduct(API);
        console.log(API)
      

    },[]);
return(

    <AppContext.Provider value = {{...state, getSingleProduct }}>{children}</AppContext.Provider>
    ) ;
};
const useGlobalContext = () =>{
    return useContext(AppContext);
};

export {AppProvider, AppContext, useGlobalContext};