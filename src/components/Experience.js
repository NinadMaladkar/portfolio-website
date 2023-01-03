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
  useBreakpointValue,
} from '@chakra-ui/react';

import { AiFillCaretRight } from 'react-icons/ai';

import ScrollDownComponent from './ScrollDownComponent';

const Experience = () => {
  const orientation = useBreakpointValue(
    {
      base: 'horizontal',
      md: 'vertical',
    },
    {
      fallback: 'lg',
    }
  );
  const organizations = [
    {
      name: 'PaketConcierge',
      jobTitle: 'Full Stack Engineer',
      period: 'June 2022 - August 2022',
      experience: [
        'I worked as a full-stack developer. Created a command line based application which collected information of paket stores around Berlin using different APIs and stored them in a single json file for future use.',
        'Helped juniors with ReactJS and JavaScript related queries and',
        'Participated in discussions for creating a better architecture for bigger client base and automation of processes.',
      ],
    },
    {
      name: '360X',
      jobTitle: 'Backend Engineer',
      period: 'December 2021 - May 2022',
      experience: [
        'I Redesigned the website which was initiaally created in Flutter, we moved it to Vue.js and vuetify. I used GraphQL for API calls and Node.js as the backend server.',
        'Integrated MetaMask 🦊 on their platform which confirmed orders with the node.js backend.',
        'Also helped with integration of Solaris Digital Assets for token transfers.',
        'Helped with creating user onboarding and authentication process creation.',
      ],
    },
    {
      name: 'Lemontaps',
      jobTitle: 'Full Stack Engineer (Intern)',
      period: 'July 2021 - November 2021',
      experience: [
        'Worked as a full stack developer with Node.js with Express.js as the backend technology and React.js as frontend technology.',
        'Worked with typescript with Node.js.',
        'Postgres SQL as Database.',
        'Implemented  multiple backend services for different purposes.',
        'Integrated OAuth services for user logins.',
        'Worked with AWS S3 bucket for data storage as well as AWS Elastic Beanstalk to deploy Applications',
      ],
    },
    {
      name: 'Advancity',
      jobTitle: 'Full Stack Engineer (Intern)',
      period: 'September 2020 - November 2020',
      experience: [
        'Worked on both frontend with Vue.js & vuetify as and backend Node.js with Express',
        'AWS S3 bucket for data storage',
        'Integrated ziggeo video recorder and player on the platform to record and run videos.',
        'Integrated other APIs for other uses like English grammar recognition, expression detection etc.',
      ],
    },
    {
      name: 'CeX WeBuy',
      jobTitle: 'Software Engineer',
      period: 'August 2013 - October 2019',
      experience: [
        'I was single handedly handling their internal website which is used in all the CeX stores worldwide (more than 600 stores ).',
        'I worked on their main website customer management system as well as the other management sysytem taking up on many projects for the same.',
        'Learned Vue.js in short span of time to deliver a new product called kidx.com',
        'After security breach on the website, I helped with fixing the issues with the website and encryption of important data. Also helped with following GDPR guidelines and  hiding important information.',
      ],
    },
  ];
  return (
    <Box className="section" display="flex" flexDir="column" mb={32}>
      <Divider w="80vw" mt={40} mb="5%" alignSelf="center" />
      <Heading id="experience" size={{ base: 'xl', md: '3xl' }}>
        I've worked with
      </Heading>
      <Tabs
        my={{ base: '8%', md: '10%' }}
        // mb={16}
        colorScheme="teal"
        size="lg"
        orientation={orientation}
        maxW={{ base: '90%', md: '80%' }}
        variant={{ base: 'line', md: 'solid-rounded' }}
      >
        <TabList
          gap="2%"
          w={{ base: '80vw', md: '40%' }}
          overflowY={{ base: 'auto', md: 'none' }}
        >
          {organizations.map(({ name }, index) => (
            <Tab _hover={{ color: 'white', bg: 'teal' }} key={index}>
              {name}
            </Tab>
          ))}
        </TabList>

        <TabPanels textAlign="start">
          {organizations.map(
            ({ jobTitle, experience, name, period }, index) => (
              <TabPanel key={index}>
                <Heading mb={4} size="md">
                  {jobTitle}
                </Heading>
                <Heading size="sm">{period}</Heading>
                <Divider w="50%" my={'2%'} />
                <List
                  w="80%"
                  spacing={4}
                  ml={2}
                  className="animate__animated animate__fadeIn delay-1s"
                >
                  {experience.map((exp, index) => (
                    <ListItem key={index}>
                      <ListIcon as={AiFillCaretRight} color="green.200" />
                      {exp}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
            )
          )}
        </TabPanels>
      </Tabs>
      <a href="#contact" className="link-arrow">
        <ScrollDownComponent />
      </a>
      <Divider my="5%" w="80%" alignSelf="center" />
    </Box>
  );
};

export default Experience;
