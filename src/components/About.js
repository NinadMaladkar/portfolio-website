import {
  Box,
  Button,
  Spacer,
  Tag,
  Text,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import ScrollDownComponent from './ScrollDownComponent';

const About = () => {
  return (
    <div className="section" id="about">
      <img src="images/Ninad_Maladkar.png" alt="Ninad" />
      <Box
        ml="30px"
        display="flex"
        flexDir="column"
        alignItems="start"
        justifyContent="start"
        rowGap="10px"
      >
        <Heading size="4xl" mb={6} class="heading">
          About me
        </Heading>
        <Box
          fontFamily="calibre.400"
          color="whiteAlpha.600"
          display="flex"
          flexDir="column"
          alignItems="start"
          justifyContent="start"
          rowGap={4}
        >
          <Text fontSize="2xl">
            👋 I'm Ninad. I have been coding for nearly 8 years.{' '}
          </Text>
          <Text fontSize="2xl">
            I'm a full-stack engineer who loves to learn new technologies and
            build web apps.
          </Text>

          <Text fontSize="2xl">
            When I'm not coding, I'm a semi-professional Table Tennis player and
            coach 🏓
          </Text>
          <Text fontSize="2xl">
            A proud father of a naughty newborn baby girl 👨‍👩‍👧
          </Text>
          <Text mt={12} fontSize="2xl">
            Few technologies I have been recently working with 👨🏻‍💻
          </Text>
        </Box>
        <HStack ml={12} mt={6} gap={16}>
          <VStack gap={2}>
            <Tag
              borderRadius="full"
              size="lg"
              colorScheme="green"
              variant="solid"
              maxW="15vw"
            >
              Typescript
            </Tag>
            <Spacer />
            <Tag
              borderRadius="full"
              size="lg"
              colorScheme="green"
              variant="solid"
              maxW="15vw"
            >
              JavaScript
            </Tag>
          </VStack>

          <VStack gap={2} alignItems="start">
            <Tag
              borderRadius="full"
              size="lg"
              colorScheme="green"
              variant="solid"
              maxW="15vw"
            >
              ReactJS
            </Tag>
            <Spacer />
            <Tag
              borderRadius="full"
              size="lg"
              colorScheme="green"
              variant="solid"
              maxW="15vw"
            >
              Chakra UI
            </Tag>
          </VStack>
          <VStack gap={2} alignItems="start">
            <Tag
              borderRadius="full"
              size="lg"
              colorScheme="green"
              variant="solid"
              maxW="15vw"
            >
              Node.js / Express.js
            </Tag>
            <Spacer />

            <Tag
              borderRadius="full"
              size="lg"
              colorScheme="green"
              variant="solid"
              maxW="15vw"
            >
              PostgreSQL
            </Tag>
          </VStack>
        </HStack>
        <HStack ml={12} mt={16} gap={16}>
          <Button
            rightIcon={<SiGithub />}
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
            rightIcon={<SiLinkedin />}
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
        </HStack>
        <HStack ml={44}>
          <a href="#projects" className="link-arrow">
            <ScrollDownComponent />
          </a>
        </HStack>
      </Box>
    </div>
  );
};

export default About;
