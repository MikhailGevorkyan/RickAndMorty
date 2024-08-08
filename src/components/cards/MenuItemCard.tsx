import { MenuItem } from '@mui/material';

interface MenuItemCardProps {
  name: string;
}

const MenuItemCard = (item: MenuItemCardProps) => (
  <MenuItem value={item.name.toLowerCase()}>{item.name}</MenuItem>
);

export default MenuItemCard;
