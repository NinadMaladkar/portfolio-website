import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
// import { FaMoon } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Tooltip label={`Switch to ${text} mode`}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Tooltip>
  );
};
