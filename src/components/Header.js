import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
} from '@chakra-ui/react';

import React, { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { GiHamburgerMenu, GiBriefcase } from 'react-icons/gi';
import { AiFillHome, AiFillProject, AiFillPhone } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
      <Image
        alt="logo"
        src="images/logo.png"
        h={{ base: '80%', lg: '170%' }}
        ml={2}
      />

      <HStack
        display={{ base: 'none', lg: 'flex' }}
        gap="30px"
        fontSize="2xl"
        className="header-menu animate__animated animate__fadeInDown "
      >
        <a href="#home" className="link-arrow">
          Home
        </a>
        <a href="#about">
          <Text>About</Text>
        </a>
        <a href="#projects">
          <Text>Projects</Text>
        </a>
        <a href="#experience">
          <Text>Experience</Text>
        </a>
        <a href="#contact">
          <Text>Contact</Text>
        </a>
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
      <Box
        mx={10}
        className="animate__animated animate__fadeInDown "
        display={{ base: 'none', lg: 'flex' }}
      >
        {/* <ColorModeSwitcher /> */}
      </Box>
      <Box display={{ base: 'flex', lg: 'none' }}>
        <Button
          ref={btnRef}
          colorScheme="teal"
          variant="ghost"
          onClick={onOpen}
        >
          <GiHamburgerMenu size={40} />
        </Button>
        <Drawer
          autoFocus
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>{/* <ColorModeSwitcher /> */}</DrawerHeader>

            <DrawerBody fontSize="xl">
              <Stack direction="column" alignItems="start" rowGap={4} mt={6}>
                <a href="#home">
                  <Button
                    color="teal.300"
                    variant="ghost"
                    leftIcon={<AiFillHome />}
                    w="100%"
                  >
                    Home
                  </Button>
                </a>

                <a href="#about">
                  <Button
                    color="teal.300"
                    variant="ghost"
                    leftIcon={<MdAccountCircle />}
                    w="100%"
                  >
                    About
                  </Button>
                </a>

                <a href="#projects">
                  <Button
                    variant="ghost"
                    color="teal.300"
                    leftIcon={<AiFillProject />}
                    w="100%"
                  >
                    Projects
                  </Button>
                </a>
                <a href="#experience">
                  <Button
                    variant="ghost"
                    color="teal.300"
                    leftIcon={<GiBriefcase />}
                    w="100%"
                  >
                    Experience
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="ghost"
                    color="teal.300"
                    leftIcon={<AiFillPhone />}
                    w="100%"
                  >
                    Contact
                  </Button>
                </a>
              </Stack>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
