import React from 'react'
import styles from './ShoppingCart.module.css'
import { appContent } from '../AppState'
/*  */
interface Props {}

interface State {
  isOpen: Boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <appContent.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button
                onClick={(e) => {
                  this.setState({
                    isOpen: !this.state.isOpen,
                  })
                }}
                className={styles.button}
              >
                购物车 {value.shoppingCard.items.length} (件)
              </button>
              <div
                style={{
                  display: this.state.isOpen ? 'block' : 'none',
                }}
                className={styles.cartDropDown}
              >
                <ul>
                  {value.shoppingCard.items.map((i) => (
                    <li>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </appContent.Consumer>
    )
  }
}

export default ShoppingCart
