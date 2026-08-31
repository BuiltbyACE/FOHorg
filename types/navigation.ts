export interface NavDropdownChild {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
  children?: NavDropdownChild[];
}

export interface NavDropdownSection {
  title: string;
  items: NavDropdownItem[];
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownSection[];
}
