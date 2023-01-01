import { Box, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Box
      className="animate__animated animate__fadeInDown "
      py={8}
      bgColor="blackAlpha.400"
      height="12vh"
      width="100vw"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text flexGrow="1" fontSize="4xl" px={5}>
        NM
      </Text>

      <HStack
        gap="30px"
        fontSize="2xl"
        className="header-menu animate__animated animate__fadeInDown "
      >
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Experience</Text>
        <Text>Contact</Text>
        <a
          href="pdf/Ninad_Maladkar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            p={4}
            color="teal.300"
            borderColor="teal.400"
          >
            Resume
          </Button>
        </a>
      </HStack>
      <Box mx={10} className="animate__animated animate__fadeInDown ">
        <ColorModeSwitcher />
      </Box>
    </Box>
  );
};

export default Header;
