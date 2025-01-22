import React, { FC } from 'react';
import { SidebarWrapper } from './Sidebar.styled';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => (
 <SidebarWrapper data-testid="Sidebar">
    Sidebar Component
 </SidebarWrapper>
);

export default Sidebar;
