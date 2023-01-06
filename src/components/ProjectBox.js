import React, { useEffect } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  Image,
  Heading,
  Link,
  Tag,
  Box,
} from '@chakra-ui/react';

import { SiGithub } from 'react-icons/si';
import { BsFillPlayFill } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectBox = ({
  name,
  description,
  image,
  alignImage,
  githubLink,
  linkToApp,
  technologies,
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: 'spring', duration: 2, bounce: 0.3 },
      });
    }
    if (!inView) {
      const startPoint = alignImage === 'right' ? '-100vw' : '100vw';
      animation.start({
        x: startPoint,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <Card
          direction={{ base: 'column', md: 'row' }}
          variant="outlined"
          w="70vw"
          py={4}
          px={12}
          mb={4}
          borderRadius={24}
          border="1px"
          borderColor="gray.600"
          backgroundColor="blackAlpha.300"
          boxShadow="dark-lg"
          justifyContent="center"
        >
          <Image
            borderRadius={24}
            fit="scale-down"
            minW={{ base: '100%', md: '30%' }}
            maxW={{ base: '100%', md: '40%' }}
            src={image}
            alt={name}
          />

          <Stack>
            <CardBody textAlign={{ base: 'center', md: 'start' }} minW="100%">
              <Heading size="md" mb={4}>
                {name}
              </Heading>
              <Text py="2" fontSize={{ base: 'sm', md: '2xl' }} minW="100%">
                {description}
              </Text>
              <Box
                display="flex"
                flexWrap="wrap"
                flexDir={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'center', md: '' }}
                gap={2}
                mt={2}
              >
                {technologies.map(tech => (
                  <Tag
                    key={tech}
                    borderRadius="full"
                    size="sm"
                    colorScheme="green"
                    variant="solid"
                    maxW={{ base: '20vw', md: '25vw' }}
                  >
                    {tech}
                  </Tag>
                ))}
              </Box>
            </CardBody>

            <CardFooter
              display="flex"
              flexDir={{ base: 'column', md: 'row' }}
              gap={2}
            >
              <Link href={githubLink} isExternal>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  leftIcon={<SiGithub />}
                >
                  GitHub Repo
                </Button>
              </Link>
              <Link href={linkToApp} isExternal>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  leftIcon={<BsFillPlayFill />}
                >
                  Live Demo
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectBox;
