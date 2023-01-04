import { Box, Button, Center, Link } from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <Box>
      <Center w="100vw" h="12vh" bgColor="blackAlpha.200" gap={8}>
        <Link href="https://www.linkedin.com/in/ninad-maladkar" isExternal>
          <Button
            variant="link"
            size="xl"
            color="#0072b1"
            rightIcon={<SiLinkedin />}
          ></Button>
        </Link>
        <Link href="mailto:maladkar.ninad@gmail.com" isExternal>
          <Button
            variant="link"
            color="#de5246"
            size="xl"
            rightIcon={<SiGmail />}
          ></Button>
        </Link>
        <Link href="https://www.github.com/NinadMaladkar" isExternal>
          <Button variant="link" size="xl" rightIcon={<SiGithub />}></Button>
        </Link>
        <Link
          href="https://instagram.com/ninad.maladkar?igshid=ZDdkNTZiNTM"
          isExternal
        >
          <Button
            variant="link"
            size="xl"
            color="#d6249f"
            rightIcon={<SiInstagram />}
          ></Button>
        </Link>
      </Center>
    </Box>
  );
};

export default Footer;
