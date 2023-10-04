import MenuItem from "./menuitems";

export interface MenuItemDescription {
  link?: string;
  icon: string;
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const generateMenuArray = (menuItems: MenuItemDescription[]) => {
  return menuItems.map((item, index) => ({
    link: item.link,
    onClick: item.onClick,
    children: (
      <>
        <MenuItem key={index} {...item} />
        {item.children}
      </>
    ),
  }));
};
