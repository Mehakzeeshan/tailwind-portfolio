import React from 'react'
import NavLink from './navLink'; // Assuming NavLink is a custom component

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link: Link, index: number) => (
        <NavLink key={index} href={link.path} title={link.title} />
      ))}
    </ul>
  );
};

export default MenuOverlay;
