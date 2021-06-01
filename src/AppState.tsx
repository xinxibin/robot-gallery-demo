import React, { useState } from 'react'

// 定义数据类型
interface AppStateValue {
  username: string
  shoppingCard: { items: { id: number; name: string }[] }
}
// 初始化数据
const contextValue: AppStateValue = {
  username: '阿莱克斯',
  shoppingCard: { items: [] },
}

// 创建context 并导出·
export const appContent = React.createContext(contextValue)
export const appSetStateContent =
  React.createContext<
    React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
  >(undefined)

// 创建函数式组件
export const AppStateProvider = (props) => {
  const [state, setState] = useState(contextValue)
  return (
    <appContent.Provider value={state}>
      <appSetStateContent.Provider value={setState}>
        {props.children}
      </appSetStateContent.Provider>
    </appContent.Provider>
  )
}
