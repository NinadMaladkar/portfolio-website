import React from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Heading,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

import { AiFillCaretRight } from 'react-icons/ai';

import ScrollDownComponent from './ScrollDownComponent';

const Experience = () => {
  return (
    <Box className="section" display="flex" flexDir="column" mb={32}>
      <Divider w="80vw" mt={64} mb={32} alignSelf="center" />
      <Heading id="experience"> I've worked with </Heading>
      <Tabs
        mt={32}
        colorScheme="green"
        size="lg"
        orientation="vertical"
        w="60vw"
      >
        <TabList w="10vw">
          <Tab _hover={{ color: 'white', bg: 'teal' }}>PaketConcierge</Tab>
          <Tab _hover={{ color: 'white', bg: 'teal' }}>360X</Tab>
          <Tab _hover={{ color: 'white', bg: 'teal' }}>Lemontaps</Tab>
          <Tab _hover={{ color: 'white', bg: 'teal' }}>Advancity</Tab>
          <Tab _hover={{ color: 'white', bg: 'teal' }}>CeX WeBuy</Tab>
        </TabList>
        <TabPanels textAlign="start">
          <TabPanel>
            <Box mb={6}>
              <Heading mb={4} size="lg">
                Full-stack Engineer
              </Heading>
              <Heading size="sm">June 2022 - August 2022</Heading>
              <Divider w="50%" mt={4} />
            </Box>
            <List
              w="80%"
              spacing={4}
              ml={2}
              className="animate__animated animate__fadeIn delay-1s"
            >
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />I worked as
                a full-stack developer. Created a command line based application
                which collected information of paket stores around Berlin using
                different APIs and stored them in a single json file for future
                use.
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />
                Helped juniors with ReactJS and JavaScript related queries and
              </ListItem>

              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />
                Participated in discussions for creating a better architecture
                for bigger client base and automation of processes.
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Box mb={6}>
              <Heading mb={4} size="lg">
                Backend Engineer
              </Heading>
              <Heading size="sm">December 2021 - May 2022</Heading>
              <Divider w="50%" mt={4} />
            </Box>
            <List
              w="80%"
              spacing={4}
              ml={2}
              className="animate__animated animate__fadeIn delay-1s"
            >
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />I Redesigned
                the website which was initiaally created in Flutter, we moved it
                to Vue.js and vuetify. I used GraphQL for API calls and Node.js
                as the backend server.{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />
                As they are a web3 company, I integrated MetaMask 🦊 on their
                platform which confirmed orders with the node.js backend.
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />I also
                helped with integration of Solaris Digital Assets for token
                transfers.{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />
                Helped with creating user onboarding and authentication process
                creation.
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Box mb={6}>
              <Heading mb={4} size="lg">
                Full-stack Engineer (Internship)
              </Heading>
              <Heading size="sm">July 2021 - November 2021 </Heading>
              <Divider w="50%" mt={4} />
            </Box>
            <List
              w="80%"
              spacing={4}
              ml={2}
              className="animate__animated animate__fadeIn delay-1s"
            >
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Worked as a
                full stack developer with Node.js with Express.js as the backend
                technology and React.js as frontend technology.{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Worked with
                typescript with Node.js.{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Postgres
                SQL as Database.
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Implemented
                multiple backend services for different purposes.
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />
                Integrated OAuth services for user logins.{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Worked with
                AWS S3 bucket for data storage as well as AWS Elastic Beanstalk
                to deploy
              </ListItem>
              Applications
            </List>
          </TabPanel>
          <TabPanel>
            <Box mb={6}>
              <Heading mb={4} size="lg">
                Full-stack Engineer (Internship)
              </Heading>
              <Heading size="sm">August 2020 - November 2020</Heading>
              <Divider w="50%" mt={4} />
            </Box>
            <List
              w="80%"
              spacing={4}
              ml={2}
              className="animate__animated animate__fadeIn delay-1s"
            >
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Worked on
                both frontend and backend{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Vue.js with
                vuetify as frontend tool{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Node.js
                with Express as backend{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> AWS S3
                bucket for data storage{' '}
              </ListItem>

              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Integrated
                ziggeo video recorder and player on the platform to record and
                run videos.{' '}
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" /> Integrated
                other APIs for other uses like English grammar recognition,
                expression detection etc.
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Box mb={6}>
              <Heading mb={4} size="lg">
                Full-stack Engineer
              </Heading>
              <Heading size="sm">August 2013 - October 2019</Heading>
              <Divider w="50%" mt={4} />
            </Box>
            <List
              w="80%"
              spacing={4}
              ml={2}
              className="animate__animated animate__fadeIn delay-1s"
            >
              <ListItem>
                <ListIcon as={AiFillCaretRight} color="green.200" />I was single
                handedly handling their internal website which is used in all
                the CeX stores worldwide (more than 600 stores ).{' '}
              </ListItem>
              <ListItem>
                {' '}
                <ListIcon as={AiFillCaretRight} color="green.200" />I worked on
                their main website customer management system as well as the
                other management sysytem taking up on many projects for the
                same.
              </ListItem>
              <ListItem>
                {' '}
                <ListIcon as={AiFillCaretRight} color="green.200" />
                Learned Vue.js in short span of time to deliver a new product
                called kidx.com{' '}
              </ListItem>

              <ListItem>
                {' '}
                <ListIcon as={AiFillCaretRight} color="green.200" />
                After security breach on the website, I helped with fixing the
                issues with the website and encryption of important data. Also
                helped with following GDPR guidelines and hiding important
                information.{' '}
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <a href="#contact" className="link-arrow">
        <ScrollDownComponent />
      </a>
    </Box>
  );
};

export default Experience;
