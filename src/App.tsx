import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import 'animate.css';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Box p={3} display="flex" flexDir="column" justifyContent="center">
          <Home />
          <About />
          {/* <Projects /> */}
          <Experience />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
