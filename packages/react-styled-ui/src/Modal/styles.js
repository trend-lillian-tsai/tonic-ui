import { get } from '@styled-system/core';
import useColorMode from '../useColorMode';
import useTheme from '../useTheme';

const defaultSize = 'auto';

const getSizeProps = (size) => {
  size = size ?? defaultSize;

  return {
    xs: {
      width: 352,
      minHeight: 240,
    },
    sm: {
      width: 512,
      minHeight: 320,
    },
    md: {
      width: 672,
      minHeight: 320,
    },
    lg: {
      width: 832,
      minHeight: 320,
    },
    xl: {
      width: 992,
      minHeight: 320,
    },
    full: {
      maxWidth: '100%'
    },
    auto: {
      width: 'auto',
      height: 'auto',
    },
  }[size];
};

const useModalCloseButtonStyle = () => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();
  const color = {
    dark: 'white:tertiary',
    light: 'black:tertiary',
  }[colorMode];
  const hoverColor = {
    dark: 'white:emphasis',
    light: 'black:emphasis',
  }[colorMode];
  const activeColor = color;
  const focusColor = color;
  const focusHoverColor = hoverColor;
  const focusActiveColor = activeColor;
  const focusBorderColor = get(colors, 'blue:60');

  return {
    position: 'absolute',
    top: '2x',
    right: '2x',
    border: 1,
    borderColor: 'transparent',
    color: color,
    transition: 'all .2s',
    lineHeight: 1,
    width: '8x',
    height: '8x',
    px: 0,
    py: 0,
    _hover: {
      color: hoverColor,
    },
    _active: {
      color: activeColor,
    },
    _focus: {
      borderColor: focusBorderColor,
      boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
      color: focusColor,
    },
    _focusHover: {
      color: focusHoverColor,
    },
    _focusActive: {
      borderColor: focusBorderColor,
      boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
      color: focusActiveColor,
    },
  };
};

const useModalContentStyles = ({ size }) => {
  const { colorMode } = useColorMode();
  const baseStyle = {
    mx: 'auto',
    height: 'auto',
    maxHeight: '80vh',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
  };
  const colorModeStyles = {
    light: {
      color: 'black:primary',
      bg: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray:20',
      boxShadow: 'light.lg',
    },
    dark: {
      color: 'white:primary',
      bg: 'gray:90',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray:80',
      boxShadow: 'dark.lg',
    },
  }[colorMode];
  const sizeProps = getSizeProps(size);

  return {
    ...baseStyle,
    ...colorModeStyles,
    ...sizeProps,
  };
};

export {
  useModalCloseButtonStyle,
  useModalContentStyles,
};
