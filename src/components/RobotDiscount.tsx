import React from 'react'
import styles from './Robot.module.css'
import { appContent } from '../AppState'
import { useContext } from 'react'
import { useAddToCart } from './AddToCart'

interface RobotProps {
  id: string
  name: string
  email: string
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContent)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <button
        onClick={() => {
          addToCart(id, name)
        }}
      >
        加入购物车
      </button>
    </div>
  )
}

export default RobotDiscount
