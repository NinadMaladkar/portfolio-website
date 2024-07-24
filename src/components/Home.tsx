import { Box, Button, Text, Heading, Divider } from '@chakra-ui/react';
import React from 'react';

import ScrollDownComponent from './ScrollDownComponent';
const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent={{ base: 'start', lg: 'center' }}
      id="home"
    >
      <Box
        className="section"
        display="flex"
        alignItems={{ base: 'center ', lg: 'start' }}
        flexDirection="column"
        w={{ base: '80%', lg: '70%' }}
        pl={{ base: '5%', lg: '6%' }}
      >
        <Text
          mt={{ base: 12, lg: 40 }}
          fontFamily="SF Mono"
          color="teal.300"
          className="animate__animated animate__fadeInRight animate__slow animate__delay-1s "
          alignSelf={{ base: 'start' }}
        >
          Hi, my name is
        </Text>
        <Box mb="4vh" textAlign="start">
          <Heading
            my={4}
            maxW="80vw"
            size={{ lg: '4xl' }}
            className="heading typing-animation"
            display={{ base: 'none', lg: 'block' }}
          >
            Ninad Maladkar.
            <br />
            I'm a full stack developer.
          </Heading>
          <Heading
            textAlign="start"
            my={4}
            maxW="80vw"
            display={{ lg: 'none' }}
            size={{ base: '2xl' }}
            className="heading animate__animated animate__fadeInLeft animate__slow animate__delay-1s"
          >
            Ninad Maladkar.
            <br />
            I'm a full stack developer.
          </Heading>
        </Box>
        <Box
          fontFamily="calibre.400"
          color="whiteAlpha.600"
          textAlign="start"
          className="animate__animated animate__fadeInRight animate__slow animate__delay-1s "
        >
          <Text>
            Full-Stack Engineer with 6+ years of successful software delivery
            experience.
          </Text>
          <Text>
            Specializing in JavaScript, TypeScript, React, Vue, Node.js and
            NestJS.
          </Text>
          <Text>Interested in GraphQL, Testing, Web Performance.</Text>
        </Box>
        <Button
          className="animate__animated animate__fadeInRight animate_slow animate__delay-1s "
          mt="8vh"
          variant="outline"
          color="teal.300"
          borderColor="teal.400"
          onClick={() =>
            window.open('https://www.linkedin.com/in/ninad-maladkar', '_blank')
          }
        >
          Let's work together
        </Button>
        <Box alignSelf="center">
          <a href="#about" className="link-arrow">
            <ScrollDownComponent />
          </a>
        </Box>
        <Divider my={12} w="80vw" alignSelf="center" />
      </Box>
    </Box>
  );
};

export default Home;
