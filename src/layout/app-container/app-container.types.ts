export interface IRoute {
  path: string
  element: JSX.Element
}
export interface IAppContainer {
  routes: IRoute[]
}
