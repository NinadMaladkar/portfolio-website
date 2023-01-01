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
          direction="row"
          variant="outlined"
          w="60vw"
          py={4}
          px={12}
          mb={4}
          borderRadius={24}
          border="1px"
          borderColor="gray.600"
          backgroundColor="blackAlpha.300"
        >
          {alignImage === 'right' ? null : (
            <Image
              borderRadius={24}
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src={image}
              alt={name}
            />
          )}

          <Stack>
            <CardBody textAlign="start">
              <Heading size="md" mb={4}>
                {name}
              </Heading>
              <Text py="2">{description}</Text>
              <Box display="flex" wrap="wrap" gap={2} mt={2}>
                {technologies.map(tech => (
                  <Tag
                    borderRadius="full"
                    size="lg"
                    colorScheme="green"
                    variant="solid"
                    maxW="25vw"
                  >
                    {tech}
                  </Tag>
                ))}
              </Box>
            </CardBody>

            <CardFooter display="flex" gap={2}>
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
          {alignImage === 'right' ? (
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              borderRadius={24}
              src={image}
              alt={name}
            />
          ) : null}
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectBox;
