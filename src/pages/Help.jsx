import React from 'react';
import { Box, Text, VStack, Button, Stack, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Help = () => (
  <Box
    p={6}
    textAlign="center"
    minHeight="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    bg="lightblue"  // Light blue background
    borderRadius="md"
    boxShadow="xl"
    border="1px solid rgba(0, 0, 0, 0.1)"
  >
    <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" color="teal.800">
      Help & Support
    </Text>

    <Text fontSize={{ base: 'lg', md: 'xl' }} mt={4} color="gray.700" px={4}>
      Here you can find FAQs and contact support for any issues you may be experiencing.
    </Text>

    <Box mt={6}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="teal.800">
        Frequently Asked Questions
      </Text>
      <Stack spacing={4} mt={4}>
        <Text color="gray.600">• How do I reset my password?</Text>
        <Text color="gray.600">• Where can I find my account settings?</Text>
        <Text color="gray.600">• How do I contact support?</Text>
        {/* Add more FAQs as needed */}
      </Stack>
    </Box>

    <Divider my={8} />

    <VStack spacing={6} align="stretch">
      <Link to="/contact-support">
        <Button 
          colorScheme="blue" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "blue.300" }}
          transition="background-color 0.3s ease"
        >
          Contact Support
        </Button>
      </Link>
      
      <Link to="/settings">
        <Button 
          colorScheme="teal" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "teal.300" }}
          transition="background-color 0.3s ease"
        >
          Go to Settings
        </Button>
      </Link>

      <Link to="/">
        <Button 
          colorScheme="gray" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "gray.300" }}
          transition="background-color 0.3s ease"
        >
          Go Back to Home Page
        </Button>
      </Link>
    </VStack>

    <Box mt={10} textAlign="center">
      <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
        If you have any additional questions, please reach out to our support team!
      </Text>
    </Box>
  </Box>
);

export default Help;
