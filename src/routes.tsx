import React from 'react'
import { IRoute } from 'layout/app-container/app-container.types'
import { Homepage } from 'pages/homepage'

export const appRoutes:IRoute[] = [
  {
   path: '',
   element: <Homepage />
  }
]