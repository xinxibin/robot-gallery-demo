import React, { useContext } from 'react'
import { RobotProps } from './Robot'
import { appSetStateContent } from '../AppState'

// 高阶函数方式封装添加购物车方法
export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  return (props) => {
    const setState = useContext(appSetStateContent)
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCard: {
              items: [...state.shoppingCard.items, { id, name }],
            },
          }
        })
      }
    }
    return <ChildComponent {...props} addToCart={addToCart}></ChildComponent>
  }
}
// 自定义hook函数，封装添加购物车
export const useAddToCart = () => {
  const setState = useContext(appSetStateContent)
  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCard: {
            items: [...state.shoppingCard.items, { id, name }],
          },
        }
      })
    }
  }
  return addToCart
}
