import React from 'react';
import { ChakraProvider, Box, theme, Divider } from '@chakra-ui/react';
import 'animate.css';
import { AiOutlineUp } from 'react-icons/ai';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Box p={3} display="flex" flexDir="column" justifyContent="center">
          {/* <VStack
            spacing={8}
            className="logo-class animate__animated animate__bounce"
          >
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn Chakra
              </Link>
            </VStack> */}

          <Home />
          <Divider w="80vw" alignSelf="center" />
          <About />
          <Divider w="80vw" alignSelf="center" />
          <Projects />

          <Experience />
          <Divider w="80vw" alignSelf="center" />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
