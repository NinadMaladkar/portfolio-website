import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineDown } from 'react-icons/ai';

const ScrollDownComponent = () => {
  return (
    <Box
      className="animate__animated animate__bounce animate__repeat-3 animate__delay-3s "
      mt={8}
    >
      <AiOutlineDown />
    </Box>
  );
};

export default ScrollDownComponent;
