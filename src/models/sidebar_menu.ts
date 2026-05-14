export interface MenuItem {
  id: string //id элемента
  label: string //название элемемента на странице
  href?: string //ссылка на страницу
  children?: MenuItem[] //дети элемента
}
