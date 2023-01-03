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
          <Text>Over past 6+ years, working as an engineer, </Text>
          <Text>
            I have happily contributed to small startups as well as big
            companies.
          </Text>
          <Text>
            I like to build great UI experiences along with a strong backend.
          </Text>
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
        <a href="#about" className="link-arrow">
          <ScrollDownComponent />
        </a>
        <Divider />
      </Box>
    </Box>
  );
};

export default Home;
