import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from 'layout/header/header'
import { Content } from 'layout/content/content'
import { IAppContainer } from './app-container.types'
import styles from './app-container.module.scss'

export const AppContainer: FC<IAppContainer> = ({ routes }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>{routes.map((route, index) => { 
          return <Route path={route.path} key={index} element={ <Content element={route.element}/> } />
        })}
      </Routes>
    </div>
  )
}