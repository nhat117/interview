import React from "react";
import { styled } from '@stitches/react';

const StyledButton = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  });

export default StyledButton;
