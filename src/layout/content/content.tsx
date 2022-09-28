import React, { FC } from 'react'
import { IContent } from './content.types'
import styles from './content.module.scss'

export const Content: FC<IContent> = ({ element }) => {
  return (
    <div className={styles.contentContainer}>{ element }</div>
  )
}