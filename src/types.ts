declare module "*.scss" {
  interface AnyStringMap {
    [key: string]: string
  }
  const content: AnyStringMap
  export default content
}
