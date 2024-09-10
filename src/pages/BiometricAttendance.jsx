import { Box, Text, Button, VStack, Stack, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BiometricAttendance = () => (
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
      Biometric Attendance
    </Text>

    {/* SVG Image using img tag */}
    <img 
      src="/src/assets/construction.svg" 
      alt="Under Construction" 
      style={{ 
        marginTop: '2rem', 
        marginBottom: '1rem', 
        width: 'auto', 
        maxWidth: '350px',
        borderRadius: '8px',
        boxShadow: 'lg'
      }} 
    />

    {/* Under Construction Message */}
    <Text fontSize={{ base: 'lg', md: 'xl' }} mt={4} color="gray.700" px={4}>
      This page is currently under construction. Please check back later!
    </Text>

    {/* Navigation Options */}
    <VStack mt={10} spacing={6} align="stretch">
      <Link to="/">
        <Button 
          colorScheme="teal" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "teal.300" }}
          transition="background-color 0.3s ease"
        >
          Go Back to Home Page
        </Button>
      </Link>
      
      <Link to="/settings">
        <Button 
          colorScheme="blue" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "blue.300" }}
          transition="background-color 0.3s ease"
        >
          Go to Settings
        </Button>
      </Link>
      
      <Link to="/help">
        <Button 
          colorScheme="purple" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "purple.300" }}
          transition="background-color 0.3s ease"
        >
          Help & Support
        </Button>
      </Link>

      <Link to="/notifications">
        <Button 
          colorScheme="orange" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md" 
          _hover={{ bg: "orange.300" }}
          transition="background-color 0.3s ease"
        >
          View Notifications
        </Button>
      </Link>

      <Divider my={8} />

      <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
        Stay tuned for more updates and features coming soon!
      </Text>
    </VStack>
  </Box>
);

export default BiometricAttendance;
