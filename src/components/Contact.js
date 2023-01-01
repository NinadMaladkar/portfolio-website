import React, { useRef } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

import '../App.css';

const Contact = () => {
  // Use @emailjs for emailing yourself
  //www.npmjs.com/package/@emailjs/nodejs
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_fopkfnw',
        formRef.current,
        '-3KYBa4-K7Srj304o'
      )
      .then(
        () => {
          alert('email sent!');
          window.location.reload(false);
        },
        () => {
          alert('Sending email failed, please try again!');
        }
      );
  };
  return (
    <Center
      className="section"
      w="60vw"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignSelf="center"
    >
      <Heading id="contact">Let's Get In Touch</Heading>
      <Text my={8} maxW="40vw">
        If you'd like to chat about a project or just want to get in touch with
        me, please fill in the form below. I aim to get back within couple of
        days.
      </Text>
      <VStack
        my={4}
        rowGap={6}
        border="1px"
        borderColor="teal.400"
        px="12"
        borderRadius={32}
      >
        <form ref={formRef} onSubmit={sendEmail}>
          <Box display="flex" gap={6} mt={16}>
            <FormControl isRequired>
              <Input
                name="name"
                variant="flushed"
                _placeholder={{ color: 'green.700', opacity: 1 }}
                focusBorderColor="teal.200"
                borderColor="teal.400"
                placeholder="Your name"
                h={16}
                w={80}
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                name="email"
                variant="flushed"
                _placeholder={{ color: 'green.700', opacity: 1 }}
                focusBorderColor="teal.200"
                borderColor="teal.400"
                placeholder="Your email"
                h={16}
                w={80}
              />
            </FormControl>
          </Box>
          <FormControl isRequired>
            <Input
              name="subject"
              variant="flushed"
              _placeholder={{ color: 'green.700', opacity: 1 }}
              focusBorderColor="teal.200"
              borderColor="teal.400"
              placeholder="Subject"
              h={16}
            />
          </FormControl>
          <FormControl isRequired>
            <Textarea
              name="message"
              variant="flushed"
              _placeholder={{ color: 'green.700', opacity: 1 }}
              focusBorderColor="teal.200"
              borderColor="teal.400"
              size="md"
              h={32}
              placeholder="Your message for me.."
              resize="vertical"
            />
          </FormControl>
          <Button
            my={12}
            variant="outline"
            color="teal.300"
            borderColor="teal.400"
            py={6}
            px={12}
          >
            Send Email
          </Button>
        </form>
      </VStack>
    </Center>
  );
};

export default Contact;
