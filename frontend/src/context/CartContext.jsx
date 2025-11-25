import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "ecom_cart_items";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse cart from storage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, options = {}) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product._id && JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product._id && JSON.stringify(item.options) === JSON.stringify(options)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          options,
        },
      ];
    });
  };

  const updateQuantity = (itemId, quantity, options = {}) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId && JSON.stringify(item.options) === JSON.stringify(options)
            ? { ...item, quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId, options = {}) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === itemId && JSON.stringify(item.options) === JSON.stringify(options))
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cartItems.length > 0 ? 9.99 : 0;
    const tax = subtotal * 0.2;
    const total = subtotal + shipping + tax;
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return { subtotal, shipping, tax, total, count };
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

