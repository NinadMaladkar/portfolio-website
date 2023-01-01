import { Box, Button, Text, Heading } from '@chakra-ui/react';
import React from 'react';

import ScrollDownComponent from './ScrollDownComponent';
const Home = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        className="section"
        display="flex"
        alignItems="start"
        flexDirection="column"
        w="70vw"
        // bgColor="whiteAlpha.300"
        pl={16}
      >
        {/* Change font */}
        <Text
          fontFamily="SF Mono"
          color="teal.300"
          className="animate__animated animate__fadeInRight animate__slow animate__delay-1s "
        >
          Hi, my name is
        </Text>
        <Box mb="4vh" textAlign="start" className="heading-container">
          <Heading my={4} size="4xl" className="heading typing-animation">
            Ninad Maladkar.
            <br />
            I'm a full stack web developer.
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
      </Box>
    </Box>
  );
};

export default Home;
