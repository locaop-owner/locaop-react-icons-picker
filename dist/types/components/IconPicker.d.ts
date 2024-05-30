/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
export type StyleType = SerializedStyles;
import { IconType } from './iconList';
import React from 'react';
interface IconPickerProps {
    value: IconType | '';
    onChange: (value: IconType) => void;
    hideSearch?: boolean;
    containerStyles?: StyleType;
    pickerContainerStyles?: StyleType;
}
declare const IconPicker: React.FC<IconPickerProps>;
export { IconPicker };
