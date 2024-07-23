import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';

import ProjectBox from './ProjectBox';
import ScrollDownComponent from './ScrollDownComponent';

interface Project {
  name: string;
  description: string;
  image: string;
  alignImage: 'left' | 'right';
  githubLink: string;
  linkToApp: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: 'Talk-tischtennis',
    description:
      'This web app lets you connect with table tennis lovers. You can create your profile, chat one to one or create a group to share everything about table tennis, all in real time.',
    image: 'images/projects/talk-tischtennis.png',
    alignImage: 'right',
    githubLink: 'https://github.com/NinadMaladkar/Talk-Tischtennis',
    linkToApp: 'https://talk-tischtennis.netlify.app/',
    technologies: ['ReactJS', 'Chakra UI', 'Node.js', 'MongoDB', 'WebSockets'],
  },
  // {
  //   name: 'DNS entries checker',
  //   description:
  //     'This web app lets you query for any website URL and after checking its DNS entries, it will respond weather the site is a secure one or not depending on its email services, DMARC and SPF records.',
  //   image: 'images/pokemon.png',
  //   alignImage: 'left',
  //   githubLink: 'https://github.com/NinadMaladkar/DNS-entries-checker',
  //   linkToApp: 'https://github.com/NinadMaladkar/DNS-entries-checker',
  // },
  {
    name: 'Pokémonia',
    description:
      'This is a pokémon app based on pokeAPI. This app lets you view the information of all pokémons and sort them out by their weights and search through the list of all pokémons.',
    image: 'images/projects/pokemon.png',
    alignImage: 'left',
    githubLink: 'https://github.com/NinadMaladkar/Pokemon-app',
    linkToApp: 'https://pokemonia.netlify.app/',
    technologies: ['Typescript', 'ReactJS', 'Chakra UI', 'PokeAPI'],
  },
  {
    name: 'Tesla website clone',
    description:
      'This web app is a clone of the real Tesla website. It has all the animations, look of the real website.',
    image: 'images/projects/tesla-clone.png',
    alignImage: 'right',
    githubLink: 'https://github.com/NinadMaladkar/Tesla-clone',
    linkToApp: 'https://tesla-clone-ninad.netlify.app',
    technologies: ['ReactJS', 'Redux', 'React-reveal', 'Styled Components'],
  },
];

const Projects = () => {
  return (
    <VStack>
      <Heading size="2xl" className="heading" my={20} id="projects">
        Some of the recent projects I've built
      </Heading>

      <VStack className="section">
        {projects.map(
          ({
            name,
            description,
            image,
            alignImage,
            githubLink,
            linkToApp,
            technologies,
          }) => (
            <ProjectBox
              key={name}
              name={name}
              description={description}
              image={image}
              alignImage={alignImage}
              githubLink={githubLink}
              linkToApp={linkToApp}
              technologies={technologies}
            />
          )
        )}
      </VStack>
      <a href="#experience" className="link-arrow">
        <ScrollDownComponent />
      </a>
    </VStack>
  );
};

export default Projects;
