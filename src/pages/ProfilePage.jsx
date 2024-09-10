import React from 'react';
import { Box, Flex, Heading, Text, Avatar, Button, VStack, Stack, FormControl, FormLabel, Input, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // Responsive width and padding adjustments
  const boxWidth = useBreakpointValue({ base: 'full', md: '80%' });
  const padding = useBreakpointValue({ base: 4, md: 8 });

  return (
    <Box p={padding} bg="gray.100" minH="100vh" mx="auto" maxW="container.lg">
      <Flex direction="column" align="center" mb={6}>
        <Avatar name="Kaviraj" size="2xl" src="https://bit.ly/broken-link" mb={4} />
        <Heading mb={2}>Kaviraj</Heading>
        <Text fontSize="lg" color="gray.600">kaviraj@example.com</Text>
      </Flex>

      <Flex direction="column" align="center" w="full">
        <VStack spacing={6} align="stretch" w={boxWidth}>
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>Personal Information</Heading>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input defaultValue="Kaviraj" />
              </FormControl>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input defaultValue="kaviraj@example.com" />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input defaultValue="+1234567890" />
              </FormControl>
            </Stack>
          </Box>

          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>Account Settings</Heading>
            <Stack spacing={4}>
              <Button colorScheme="teal">Change Password</Button>
              <Button colorScheme="teal">Manage Subscriptions</Button>
              <Button colorScheme="teal" variant="outline">Delete Account</Button>
            </Stack>
          </Box>

          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>Recent Activity</Heading>
            <VStack spacing={4} align="stretch">
              <Text>Joined a new course: Advanced React</Text>
              <Text>Completed: Introduction to JavaScript</Text>
              <Text>Updated profile picture</Text>
            </VStack>
          </Box>
        </VStack>
      </Flex>

      <Flex justify="center" mt={6}>
        <Button as={Link} to="/" colorScheme="teal">Back to Home</Button>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
