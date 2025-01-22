export interface NavItem {
  label: string
  href?: string // Made href optional
  children?: NavItem[]
}

export interface NavbarProps {
  items: NavItem[]
}

