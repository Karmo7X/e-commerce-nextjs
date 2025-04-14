'use client'

import React, { createContext, useContext, useState } from 'react'

interface CartContextType {
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  cartItems: number[]
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<number[]>([])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId])
    openCart()
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(id => id !== productId))
  }

  return (
    <CartContext.Provider value={{ isCartOpen, openCart, closeCart, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 