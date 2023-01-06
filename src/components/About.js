import {
  Box,
  Button,
  Text,
  Divider,
  Heading,
  Image,
  Tag,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import ScrollDownComponent from './ScrollDownComponent';

const About = () => {
  const currentTechnologies = [
    'Typescript',
    'JavaScript',
    'ReactJS',
    'Chakra UI',
    'Node.js',
    'ExpressJS',
    'MongoDB',
    'PostgreSQL',
  ];
  return (
    <Box className="section" id="about" textAlign="start" flexDir="column">
      <Heading size="xl" mb="5%" className="heading">
        About me
      </Heading>
      <Box
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'start' }}
      >
        <Box
          w={{ base: '100vw', md: '50vw' }}
          display="flex"
          justifyContent={{ base: 'center', md: '' }}
          alignItems={{ md: 'start' }}
          h="auto"
        >
          <Image
            src="images/Ninad_Maladkar.png"
            alt="Ninad"
            maxW={{ base: '50%', md: '100%' }}
            fit="scale-down"
          />
        </Box>

        <Box
          maxW={{ base: '100vw', md: '60vw' }}
          mt={{ base: '5%', md: '0' }}
          ml={{ md: '5%' }}
          px={{ base: '10%', md: 0 }}
          fontFamily="calibre.400"
          color="whiteAlpha.600"
          display="flex"
          flexDir="column"
          alignItems="start"
          justifyContent="start"
          rowGap="10px"
          fontSize={{ base: 'md', md: '2xl' }}
        >
          <Text>👋 I'm Ninad. I have been coding for nearly 8 years. </Text>
          <Text>
            I'm a full-stack engineer who loves to learn new technologies and
            build web apps.
          </Text>

          <Text>
            When I'm not coding, I'm a semi-professional Table Tennis player and
            coach 🏓
          </Text>
          <Text>A proud father of a naughty newborn baby girl 👨‍👩‍👧</Text>
          <Text mt={12}>
            Few technologies I have been recently working with 👨🏻‍💻
          </Text>
          <Box
            ml={{ base: 0, md: 12 }}
            mt={6}
            gap={{ base: '8px', md: '' }}
            w={{ base: '100%', md: '70%' }}
            display="flex"
            flexWrap="wrap"
            justifyContent="start"
          >
            {currentTechnologies.map((tech, index) => (
              <Box key={index} w={{ base: '20vw' }}>
                <Tag
                  fontSize={{ base: 'sm', md: 'lg' }}
                  borderRadius="full"
                  size={{ base: 'sm', md: 'lg' }}
                  colorScheme="green"
                  variant="solid"
                  maxW={{ base: '20vw', md: '15vw' }}
                >
                  {tech}
                </Tag>
              </Box>
            ))}
          </Box>
          <Stack
            alignSelf={{ base: 'center', md: 'start' }}
            mt={16}
            gap={{ base: 0, md: 6 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Button
              size={{ base: 'sm', md: 'lg' }}
              rightIcon={<SiGithub color="white" />}
              borderColor="blue.400"
              color="blue.300"
              variant="outline"
              onClick={() =>
                window.open('https://www.github.com/NinadMaladkar', '_blank')
              }
            >
              My GitHub
            </Button>
            <Button
              size={{ base: 'sm', md: 'lg' }}
              rightIcon={<SiLinkedin color="#0072b1" />}
              borderColor="blue.400"
              color="blue.300"
              variant="outline"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/ninad-maladkar',
                  '_blank'
                )
              }
            >
              My LinkedIn
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box my={12}>
        <a href="#projects" className="link-arrow">
          <ScrollDownComponent />
        </a>
      </Box>
      <Divider w="80vw" alignSelf="center" />
    </Box>
  );
};

export default About;
