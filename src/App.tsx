import React, { useEffect, useState } from 'react'
import logo, { ReactComponent } from './assets/icons/logo.svg'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'

import styles from './App.module.css'

import ShoppingCart from './components/ShoppingCart'

interface Props {}

interface State {
  robotGallery: any[]
}

interface robotModel {
  id: number
  name: string
  email: string
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ robotGallery: data }))
  // }
  useEffect(() => {
    document.title = `点击了${count}次`
  })
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => setRobotGallery(data))
  // }, [])

  // 如何在 effect 中使用 async await 异步模式
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setRobotGallery(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"></img>
        <h1>罗伯特机器人炫酷吊天罗伯特机器人炫酷吊炸天</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
      <span>count: {count}</span>
      <ShoppingCart></ShoppingCart>
      <div className={styles.robotList}>
        {robotGallery.map((r, index) =>
          index % 2 == 0 ? (
            <RobotDiscount
              id={r.id}
              email={r.email}
              name={r.name}
            ></RobotDiscount>
          ) : (
            <Robot id={r.id} email={r.email} name={r.name}></Robot>
          )
        )}
      </div>
    </div>
  )
}

export default App
