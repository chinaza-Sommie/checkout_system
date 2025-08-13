import { useState, useEffect } from "react";
import {itemsData, itemsDataSet} from "../data/data";

export const useCart = () => {
    const [cart, setCart] = useState({});
    const [isMobile, setisMobile] = useState(window.innerWidth < 651);

    useEffect(()=>{
        const resizeHandler = () =>{
            setisMobile(window.innerWidth < 651);
        }

        window.addEventListener("resize", resizeHandler);
 
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])
   
    const addToCart = (product) => {
        setCart((prev) => ({
            ...prev, [product]: (prev[product] || 0) + 1,
        }));
    }

    const removeFromCart = (product) => {
        setCart((prev) => {
            if(!prev[product]) return prev;
            const updatedSet = { ...prev, [product]: prev[product] - 1, }
            if(updatedSet[product] <= 0) delete updatedSet[product];
            return updatedSet;
        })
    }

    const GetEachItemPriceTotal = (product, quantity) => {
        const productSet = itemsDataSet[product];

        if(!productSet) return 0;
        
        if(productSet.special){
            const numberOfSpecials = Math.floor( quantity / productSet.special.quantity );
            const remainingqty = quantity % productSet.special.quantity;
            const specialTotal = (remainingqty * productSet.price) + (numberOfSpecials * productSet.special.price)
            
            // console.log(specialTotal.toFixed(2));
            return specialTotal;
        }
        return quantity * productSet.price;
    }

    const calculateTotalPrice = (cart) => {
        return Object.entries(cart).reduce(
            (sum, [product, quantity]) => sum + GetEachItemPriceTotal(product, quantity), 0
        )
    }
    return { cart, setCart, addToCart, removeFromCart,itemsData, itemsDataSet, GetEachItemPriceTotal, calculateTotalPrice, isMobile };
}

