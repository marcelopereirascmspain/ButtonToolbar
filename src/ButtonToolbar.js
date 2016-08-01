import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  group: {
    display: 'inline-block',
    margin: '0 5px'
  }
})

export default function ButtonToolbar({ children }) {
  let groups = React.Children.map(children, child => {
    return <div className={css(styles.group)}>{ child }</div>
  })

  return <div>
    { groups }
  </div>
}