import React from 'react'
import styles from './Robot.module.css'
import { appContent, appSetStateContent } from '../AppState'
import { useContext } from 'react'
import { withAddToCart } from './AddToCart'

// 这里导出是为HOC组件添加类型统一使用
export interface RobotProps {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContent)

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
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

export default withAddToCart(Robot)
