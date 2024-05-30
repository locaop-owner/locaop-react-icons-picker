/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import * as React from 'react';
import { FontIcon, IconType } from './iconList';

type IconPickerItemProps = {
  icon: IconType | '';
  size?: number;
  color?: string;
  onClick?: (icon: string) => void;
};

const IconPickerItem: React.FC<IconPickerItemProps> = ({
  icon = '',
  size = 24,
  color = '#3a3a3a',
  onClick,
}) => {
  const iconDiv = icon ? React.createElement(FontIcon[icon]) : null;
  return (
    <div
      onClick={() => !!onClick && onClick(icon)}
      css={css`
        font-size: ${size}px;
        color: ${color};
        padding: 2px;
        line-height: 0;
      `}
    >
      {iconDiv}
    </div>
  );
};

export { IconPickerItem };
