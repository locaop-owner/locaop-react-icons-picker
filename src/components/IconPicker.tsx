/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from '@emotion/react';
export type StyleType = SerializedStyles;
import { IconPickerItem } from './IconPickerItem';
import { iconList, IconType } from './iconList';
import React, { useState, useEffect, useRef, useMemo } from 'react';

const styles = {
  container: css`
    position: relative;
    padding: 5px;
    width: 50px;
    min-height: 40px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #ccc;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dcebdc;
    :hover {
      cursor: pointer;
    }
  `,
  pickerContainer: css`
    position: absolute;
    top: 45px;
    min-width: 300px;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    background-color: #fff;
    padding: 5px;
    width: 200px;
    max-height: 300px;
    border-radius: 4px;
    border-width: 2px;
    border-color: #000;
    border-style: solid;
    z-index: 10;
  `,
  appInput: css`
    width: 100%;
    height: 44px;
    font-size: 16px;
  `,
  button: css``,
};

interface IconPickerProps {
  value: IconType | '';
  onChange: (value: IconType) => void;
  hideSearch?: boolean;
  containerStyles?: StyleType;
  pickerContainerStyles?: StyleType;
}

const IconPicker: React.FC<IconPickerProps> = ({
  value,
  onChange,
  hideSearch = false,
  containerStyles,
  pickerContainerStyles,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(false);
  const [searchString, setSearchString] = useState('');
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDisplay(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const buttonClick = () => setDisplay(!display);
  const onChangeSearch = (event: any) => {
    setSearchString(event.target.value);
  };

  const filteredAndMappedIconList = useMemo(() => {
    return iconList
      .filter((i: string) =>
        i.toLowerCase().includes(searchString.toLowerCase()),
      )
      .map((icon: any) => (
        <IconPickerItem
          key={icon}
          icon={icon}
          onClick={(value: any) => {
            onChange(value);
            setDisplay(false);
            setSearchString('');
          }}
        />
      ));
  }, [iconList, searchString, onChange]);

  return (
    <div
      css={[styles.container, styles.button, containerStyles]}
      ref={ref}
      onClick={() => buttonClick()}
    >
      <IconPickerItem icon={value} size={36} />
      {display && (
        <div
          css={[styles.pickerContainer, pickerContainerStyles]}
          onClick={(e: any) => e.stopPropagation()}
        >
          {!hideSearch && (
            <input
              css={styles.appInput}
              onChange={onChangeSearch}
              value={searchString}
              placeholder="Search"
            />
          )}
          {filteredAndMappedIconList}
        </div>
      )}
    </div>
  );
};

export { IconPicker };
