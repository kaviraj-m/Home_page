import React from 'react';
import { Box, HStack, VStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { FaHome, FaBell, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResponsiveNavigationBar = () => {
  // Responsive display for different screen sizes
  const display = useBreakpointValue({ base: 'flex', lg: 'flex' });

  return (
    // Smaller bottom navigation for both desktop and mobile
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      bg="blue.600"
      color="white"
      display={display}
      py={1} // Reduce padding
      boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
      borderTop="1px solid #e2e8f0"
      zIndex={1000}
    >
      <HStack justify="space-evenly" align="center" width="100%">
        <Link to="/">
          <VStack spacing={0.5}> {/* Reduce spacing between icon and text */}
            <IconButton
              icon={<FaHome size="20px" />} // Smaller icon
              aria-label="Home"
              colorScheme="teal"
              variant="ghost"
              _hover={{ bg: 'blue.700' }}
              size="md" // Smaller button size
            />
            <Text fontSize="xs" color="whiteAlpha.900">Home</Text>
          </VStack>
        </Link>

        <Link to="/notifications">
          <VStack spacing={0.5}>
            <IconButton
              icon={<FaBell size="20px" />}
              aria-label="Notifications"
              colorScheme="teal"
              variant="ghost"
              _hover={{ bg: 'blue.700' }}
              size="md"
            />
            <Text fontSize="xs" color="whiteAlpha.900">Notifications</Text>
          </VStack>
        </Link>

        <Link to="/settings">
          <VStack spacing={0.5}>
            <IconButton
              icon={<FaCog size="20px" />}
              aria-label="Settings"
              colorScheme="teal"
              variant="ghost"
              _hover={{ bg: 'blue.700' }}
              size="md"
            />
            <Text fontSize="xs" color="whiteAlpha.900">Settings</Text>
          </VStack>
        </Link>
      </HStack>
    </Box>
  );
};

export default ResponsiveNavigationBar;
