import React, { forwardRef } from 'react';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MKButtonRoot = styled(Button)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { color, variant, size, circular, iconOnly } = ownerState;

  const { white, text, transparent, gradients, dark } = palette;
  const { boxShadow, linearGradient, pxToRem, rgba } = functions;
  const { borderRadius } = borders;
  const { colored } = boxShadows;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    // backgroundColor value when button is focused
    const focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus;

    // boxShadow value
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], [3, 0], palette[color].main, 0.15)}, ${boxShadow(
          [0, 3],
          [1, -2],
          palette[color].main,
          0.2,
        )}, ${boxShadow([0, 1], [5, 0], palette[color].main, 0.15)}`
      : 'none';

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], [26, -12], palette[color].main, 0.4)}, ${boxShadow(
          [0, 4],
          [23, 0],
          palette[color].main,
          0.15,
        )}, ${boxShadow([0, 8], [10, -5], palette[color].main, 0.2)}`
      : 'none';

    // color value
    let colorValue = white.main;

    if (color === 'default' || !palette[color]) {
      colorValue = text.primary;
    } else if (color === 'white' || color === 'light') {
      colorValue = dark.main;
    }

    // color value when button is focused
    let focusedColorValue = white.main;

    if (color === 'default') {
      focusedColorValue = text.primary;
    } else if (color === 'white') {
      focusedColorValue = dark.main;
    } else if (color === 'primary' || color === 'error' || color === 'dark') {
      focusedColorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      '&:hover': {
        backgroundColor: backgroundValue,
        boxShadow: hoveredBoxShadowValue,
      },

      '&:focus:not(:hover)': {
        backgroundColor: focusedBackgroundValue,
        boxShadow: palette[color]
          ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
          : boxShadow([0, 0], [0, 3.2], white.main, 0.5),
      },

      '&:disabled': {
        backgroundColor: backgroundValue,
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with variant="outlined"
  const outlinedStyles = () => {
    // background color value
    const backgroundValue = color === 'white' ? rgba(white.main, 0.1) : transparent.main;

    // color value
    const colorValue = palette[color] ? palette[color].main : white.main;

    // boxShadow value
    const boxShadowValue = palette[color]
      ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
      : boxShadow([0, 0], [0, 3.2], white.main, 0.5);

    // border color value
    let borderColorValue = palette[color] ? palette[color].main : rgba(white.main, 0.75);

    if (color === 'white') {
      borderColorValue = rgba(white.main, 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,

      '&:hover': {
        background: transparent.main,
        borderColor: colorValue,
      },

      '&:focus:not(:hover)': {
        background: transparent.main,
        boxShadow: boxShadowValue,
      },

      '&:active:not(:hover)': {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85,
      },

      '&:disabled': {
        color: colorValue,
        borderColor: colorValue,
      },
    };
  };

  // styles for the button with variant="gradient"
  const gradientStyles = () => {
    // background value
    const backgroundValue =
      color === 'white' || !gradients[color]
        ? white.main
        : linearGradient(gradients[color].main, gradients[color].state);

    // boxShadow value
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], [3, 0], palette[color].main, 0.15)}, ${boxShadow(
          [0, 3],
          [1, -2],
          palette[color].main,
          0.2,
        )}, ${boxShadow([0, 1], [5, 0], palette[color].main, 0.15)}`
      : 'none';

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], [26, -12], palette[color].main, 0.4)}, ${boxShadow(
          [0, 4],
          [23, 0],
          palette[color].main,
          0.15,
        )}, ${boxShadow([0, 8], [10, -5], palette[color].main, 0.2)}`
      : 'none';

    // color value
    let colorValue = white.main;

    if (color === 'white') {
      colorValue = text.primary;
    } else if (color === 'light') {
      colorValue = gradients.dark.state;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      '&:hover': {
        backgroundColor: white.main,
        boxShadow: hoveredBoxShadowValue,
      },

      '&:focus:not(:hover)': {
        boxShadow: boxShadowValue,
      },

      '&:disabled': {
        background: backgroundValue,
        color: colorValue,
      },
    };
  };

  // styles for the button with variant="text"
  const textStyles = () => {
    // color value
    const colorValue = palette[color] ? palette[color].main : white.main;

    // color value when button is focused
    const focusedColorValue = palette[color] ? palette[color].focus : white.focus;

    return {
      color: colorValue,

      '&:hover': {
        color: focusedColorValue,
      },

      '&:focus:not(:hover)': {
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with circular={true}
  const circularStyles = () => ({
    borderRadius: borderRadius.section,
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === 'small') {
      sizeValue = pxToRem(25.4);
    } else if (size === 'large') {
      sizeValue = pxToRem(52);
    }

    // padding value
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === 'small') {
      paddingValue = pxToRem(4.5);
    } else if (size === 'large') {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,

      '& .material-icons': {
        marginTop: 0,
      },

      '&:hover, &:focus, &:active': {
        transform: 'none',
      },
    };
  };

  return {
    ...(variant === 'contained' && containedStyles()),
    ...(variant === 'outlined' && outlinedStyles()),
    ...(variant === 'gradient' && gradientStyles()),
    ...(variant === 'text' && textStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});

const MKButton = forwardRef(({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
  <MKButtonRoot
    {...rest}
    ref={ref}
    color="primary"
    variant={variant === 'gradient' ? 'contained' : variant}
    size={size}
    ownerState={{ color, variant, size, circular, iconOnly }}
  >
    {children}
  </MKButtonRoot>
));

// Setting default values for the props of MKButton
MKButton.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'white',
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MKButton
MKButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'gradient']),
  color: PropTypes.oneOf([
    'default',
    'white',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MKButton;
