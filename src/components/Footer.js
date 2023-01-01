import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <Box>
      <Center w="100vw" h="12vh" bgColor="blackAlpha.200" gap={8}>
        <Button
          variant="link"
          size="xl"
          color="blue"
          rightIcon={<SiLinkedin />}
        ></Button>
        <Button
          variant="link"
          color="red"
          size="xl"
          rightIcon={<SiGmail />}
        ></Button>
        <Button variant="link" size="xl" rightIcon={<SiGithub />}></Button>
        <Button
          variant="link"
          size="xl"
          color="#d6249f"
          rightIcon={<SiInstagram />}
        ></Button>
      </Center>
    </Box>
  );
};

export default Footer;
