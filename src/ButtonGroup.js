import React, { cloneElement } from 'react'
import Button from './Button'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'inline-block'
  },
  item: {
    float: 'left',
    marginLeft: -1
  },
  itemFirst: {
    marginLeft: 0
  }
})

function isFirst(index, length) {
  return index === 0
}

function isLast(index, length) {
  return index === (length - 1)
}

export default function ButtonGroup({ children }) {
  const length = React.Children.count(children)
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (isFirst(index, length) && isLast(index, length)) {
      return <li className={css(styles.item, styles.itemFirst)}>{ cloneElement(child, { roundness: 'all' }) }</li>
    } else if (isFirst(index, length)) {
      return <li className={css(styles.item, styles.itemFirst)}>{ cloneElement(child, { roundness: 'left' }) }</li>
    } else if (isLast(index, length)) {
      return <li className={css(styles.item)}>{ cloneElement(child, { roundness: 'right' }) }</li>
    } else {
      return <li className={css(styles.item)}>{ cloneElement(child, { roundness: 'none' }) }</li>
    }
  });

  return <ul className={css(styles.list)}>
    {childrenWithProps}
  </ul>
}
