"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [showLoaderOverlay, setShowLoaderOverlay] = useState(false)
  const [showAuthForm, setShowAuthForm] = useState(false)
  const [isCartSpecsModalOpen, setIsCartSpecsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [totalCartQnty, setTotalCartQnty] = useState(0);
  const [cartBooks, setCartBooks] = useState([])

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity + amount));
  };

  const openCartSpecsModal = () => {
    setIsCartSpecsModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartSpecsModalOpen((prev) => !prev);
  };

  const toggleShowAuthForm = () => { setShowAuthForm((prev) => !prev) };

  const calculateTotalPrice=(cartItems, selectedIds)=> {
    let totalPrice = 0;

    // Iterate over the array of selected IDs
    selectedIds.forEach(selectedId => {
        // Find the corresponding item in the cartItems array
        const selectedItem = cartItems.find(item => item._id === selectedId);
        if (selectedItem) {
            // If the item is found, add its price to the total
            totalPrice += selectedItem.price;
        }
    });

    return totalPrice;
}


  return (
    <StateContext.Provider
      value={{
        showAuthForm,
        setShowAuthForm,
        showLoaderOverlay,
        toggleShowAuthForm,
        setShowLoaderOverlay,
        openCartSpecsModal,
        closeCartModal,
        isCartSpecsModalOpen,
        handleQuantityChange,
        quantity,
        calculateTotalPrice,
        totalCartQnty, setTotalCartQnty,
        cartBooks, setCartBooks
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateContex = () => useContext(StateContext);
