import React from 'react'
import { StyleSheet, css } from 'aphrodite'

type PropTypes = {
  roundness: 'none' | 'all' | 'left' | 'right'
};

const styles = StyleSheet.create({
  normal: {
    background: '#fff',
    border: '1px solid #bbb',
    cursor: 'pointer',
    font: '16px/1.5 sans-serif',
    padding: '12px 24px'
  },
  hover: {
    ':hover': {
      background: '#eee'
    }
  }
})

function getBorderRadius(roundness) {
  let r = 8

  switch (roundness) {
  case 'none':
    return 0
  case 'left':
    return `${r}px 0 0 ${r}px`
  case 'right':
    return `0 ${r}px ${r}px 0`
  default:
    return r
  }
}

export default function Button({ roundness = 'all', children }: PropTypes) {
  let borderRadius = getBorderRadius(roundness)

  return <button
    className={css(styles.normal, styles.hover)}
    style={{borderRadius: borderRadius}}>
    {children}
  </button>
}
