import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ShoppingCartContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ShoppingCartProvider = (props) => {
    const [shoppingCarts, setShoppingCarts] = useState([])
    const [newShoppingCart, setNewShoppingCart]= useState({})
    
    
const deleteShoppingCart = shoppingCartId => {
        return fetch(`http://localhost:8090/shoppingCarts/${shoppingCartId}`, {
            method: "DELETE"
        })
            .then(getShoppingCarts)
    }
const getShoppingCarts = () => {
    return fetch("http://localhost:8090/shoppingCarts")
            .then(res => res.json())
            .then(setShoppingCarts)
    }

const updateShoppingCart = shoppingCart => {
        return fetch(`http://localhost:8090/shoppingCarts/${shoppingCart.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shoppingCart)
        })
        .then(getShoppingCarts)
    }
    
const addShoppingCart = shoppingCart => {
        return fetch("http://localhost:8090/shoppingCarts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(shoppingCart)
            })
                .then(getShoppingCarts)
        }

    /*
        Load all saved charts when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getShoppingCarts()
    }, [])

    useEffect(() => {
        console.log("****  ShoppingCart APPLICATION STATE CHANGED  ****")
    }, [shoppingCarts])

    return (
        <ShoppingCartContext.Provider value={
            {
                shoppingCarts, addShoppingCart, deleteShoppingCart, updateShoppingCart, newShoppingCart, setNewShoppingCart
            }
        }>
            {props.children}
        </ShoppingCartContext.Provider>
    )
    }