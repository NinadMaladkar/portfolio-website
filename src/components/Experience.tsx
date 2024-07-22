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
import { Organizations } from '../interfaces/organizations';

const Experience = () => {
  const orientation: 'horizontal' | 'vertical' | undefined = useBreakpointValue(
    {
      base: 'horizontal',
      md: 'vertical',
    },
    {
      fallback: 'lg',
    }
  );
  const organizations: Organizations[] = [
    {
      name: 'heyData GmbH',
      jobTitle: 'Full Stack Engineer',
      period: 'May 2023 - Current',
      experience: [
        'Designed and streamlined the usage of the i18n library, centralizing translations in JSON files. This enhanced collaboration between developers and product managers, reducing inefficiencies and saving time for everyone involved.',
        "Implemented ‘Share Certificate on LinkedIn’ & ‘Add certificate to profile’ functionality using the JIMP library. This generated certificate images for users to share on LinkedIn, enhancing the company's visibility and client reach, increasing platform traffic significantly.",
        'Developed backend CRUD services for client admins using NestJS, Express.js, and PostgreSQL. Enabled functionalities such as user invitations, document assignments and updates, deletions, and client offboarding.',
        'Used Ruby on Rails with the ActiveAdmin framework to execute migrations and add new database columns and tables. Contributed to the latest EU AI Act compliance project, gaining foundational knowledge of Ruby.',
        'Developed new pages for heyAcademy, a tool enabling clients to create courses for their employees. Utilized Nuxt.js and Vue.js with Vuetify.js on the frontend and NestJS with Express.js on the backend.',
        'Created RESTful API endpoints, ensuring efficient data exchange between front-end and back-end systems, improving overall application performance.',
        'Wrote comprehensive unit and integration tests using the Jest testing library, ensuring robust code quality and minimizing bugs in production.',
        'Managed Docker containers and implemented CI/CD pipelines, ensuring seamless deployment processes and reducing time-to-market for new features.',
        'Actively participated in code reviews and architecture discussions, contributing to continuous improvement in code quality and team knowledge sharing.',
      ],
    },
    {
      name: '360X',
      jobTitle: 'Backend Engineer',
      period: 'December 2021 - May 2022',
      experience: [
        'Planned and executed the transition of the main website from Flutter to a Single Page Application (SPA) using Vue.js and Vuetify. Integrated backend services with GraphQL, resulting in a faster, more visually appealing website.',
        'Designed backend services using Node.js, Express.js, and MySQL and MongoDB as databases. This improved data management and retrieval, enhancing overall application performance.',
        'Integrated MetaMask using web3.js and SDA (Solaris Digital Assets) for token payments in crypto tokens with the existing website using Vue.js, resulting in a seamless user experience and secure transactions.',
        'Collaborated with stakeholders to implement design improvements, ensuring the website meets user expectations and business requirements.',
        'Utilized GitLab and Bitbucket for version control, helping smooth collaboration among team members.',
        'Created and maintained comprehensive unit tests using the Jest testing library, ensuring high-quality code and reducing bugs in production.',
        'Engaged in regular code reviews, providing feedback to team members and helping improve code quality.',
        'Assisted in onboarding new team members, offering support to ensure their successful integration into the team.',
      ],
    },
    // {
    //   name: 'Lemontaps',
    //   jobTitle: 'Full Stack Engineer (Intern)',
    //   period: 'July 2021 - November 2021',
    //   experience: [
    //     'Worked as a full stack developer with Node.js with Express.js as the backend technology and React.js as frontend technology.',
    //     'Worked with typescript with Node.js.',
    //     'Postgres SQL as Database.',
    //     'Implemented  multiple backend services for different purposes.',
    //     'Integrated OAuth services for user logins.',
    //     'Worked with AWS S3 bucket for data storage as well as AWS Elastic Beanstalk to deploy Applications',
    //   ],
    // },
    // {
    //   name: 'Advancity',
    //   jobTitle: 'Full Stack Engineer (Intern)',
    //   period: 'September 2020 - November 2020',
    //   experience: [
    //     'Worked on both frontend with Vue.js & vuetify as and backend Node.js with Express',
    //     'AWS S3 bucket for data storage',
    //     'Integrated ziggeo video recorder and player on the platform to record and run videos.',
    //     'Integrated other APIs for other uses like English grammar recognition, expression detection etc.',
    //   ],
    // },
    {
      name: 'CeX',
      jobTitle: 'Software Engineer',
      period: 'August 2013 - October 2019',
      experience: [
        'Single-handedly maintained and developed the internal web application tool used by 600+ stores worldwide, ensuring smooth operations and functionality.',
        'Interacted with stakeholders for requirement gathering and finalizing technical specifications and software documentation, helping project kick-off.',
        'Developed the account management and product listing sections of a PWA website KidX using JavaScript, Vue.js, and RESTful web services, generating significant revenue for the organization.',
        'Identified Personally Identifiable Information (PII) within various tools and implemented encryption to comply with GDPR rules, enhancing data security and compliance.',
        'Utilized Agile methodologies, including Scrum and Kanban processes, to manage and execute development tasks efficiently.',
        'Helped with regular code reviews, providing feedback to team members and promoting continuous improvement.',
        'Collaborated effectively with a team of 4 developers, ensuring alignment with project goals and timelines.',
        'Participated in knowledge-sharing sessions, helping to onboard new team members and develop a collaborative team environment.',
      ],
    },
  ];
  return (
    <Box className="section" display="flex" flexDir="column" mb={20}>
      {/* <Divider w="80vw" mt={20} mb="5%" alignSelf="center" /> */}
      <Heading id="experience" size={{ base: 'xl', md: '3xl' }} mt={12}>
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
          overflowY={{ base: 'auto', md: 'hidden' }}
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
                <Heading
                  mb={4}
                  size="md"
                  textAlign={{ base: 'center', md: 'start' }}
                >
                  {jobTitle}
                </Heading>
                <Heading
                  size="sm"
                  color="whiteAlpha.600"
                  textAlign={{ base: 'center', md: 'start' }}
                >
                  {period}
                </Heading>
                <Divider w={{ base: '100%', md: '50%' }} my={'6%'} />
                <List
                  w="80%"
                  spacing={4}
                  ml={2}
                  className="animate__animated animate__fadeIn delay-1s"
                >
                  {experience.map((exp, index) => (
                    <ListItem key={index} color="whiteAlpha.600">
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
      <Divider mt={20} w="80%" alignSelf="center" />
    </Box>
  );
};

export default Experience;
