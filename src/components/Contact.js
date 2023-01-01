import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

import '../App.css';

const Contact = () => {
  const toast = useToast();
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8pxmema',
        'template_fopkfnw',
        formRef.current,
        'VMxKIY5HoKr2XotMa'
      )
      .then(
        result => {
          toast({
            icon: '✅',
            title: 'Email sent successfully!',
            description:
              'Thanks for sending email! I will get back as soon as possible',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          window.location.reload(false);
        },
        error => {
          toast({
            icon: '❌',
            title: 'Oops! Something went wrong',
            description:
              'Please try again ' +
              'or send me an email directly at maladkar.ninad@gmail.com',
            status: 'warning',
            duration: 5000,
            isClosable: true,
          });
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
      <Heading>Let's Get In Touch</Heading>
      <Text my={8} maxW="40vw" id="contact">
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
                name="from_name"
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
                name="user_email"
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
            type="submit"
            value="Send"
          >
            Send Email
          </Button>
        </form>
      </VStack>
    </Center>
  );
};

export default Contact;
