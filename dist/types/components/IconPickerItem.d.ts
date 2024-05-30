/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { IconType } from './iconList';
type IconPickerItemProps = {
    icon: IconType | '';
    size?: number;
    color?: string;
    onClick?: (icon: string) => void;
};
declare const IconPickerItem: React.FC<IconPickerItemProps>;
export { IconPickerItem };
