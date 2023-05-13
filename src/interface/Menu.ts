interface menuItemProps {
    Icon: any;
    name: string;
    link?: string;
    submenu?: any[];
}

export type menuData = {
    data: menuItemProps[]
} 