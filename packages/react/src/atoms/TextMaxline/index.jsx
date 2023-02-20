import React, { forwardRef } from 'react';
import { Typography, Link } from '@mui/material';
import { typography } from './typography';

// ----------------------------------------------------------------------
const TextMaxLine = forwardRef(
  ({ asLink, variant = 'body1', line = 2, persistent = false, children, sx, ...other }, ref) => {

    const style = {
      overflow: 'hidden',
      color: 'green',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: line,
      WebkitBoxOrient: 'vertical',
			...typography[variant],
      ...sx,
    };

    if (asLink) {
      return (
        <Link color="inherit" ref={ref} variant={variant} sx={{ ...style }} {...other}>
          {children}
        </Link>
      );
    }

    return (
      <Typography ref={ref} variant={variant} sx={{ ...style }} {...other}>
        {children}
      </Typography>
    );
  }
);

export default TextMaxLine;
