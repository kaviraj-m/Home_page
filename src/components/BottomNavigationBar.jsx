import React from 'react';
import { Box, HStack, VStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { FaHome, FaBell, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BottomNavigationBar = () => {
  // Responsive display for different screen sizes
  const display = useBreakpointValue({ base: 'flex', lg: 'flex' });

  return (
    // Bottom navigation with improved design
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      bg="#224581" // Use dark blue for better contrast
      color="#FEFEFE" // White color for text and icons
      display={display}
      py={1} // Reduced padding for a lower height
      boxShadow="0px -2px 8px rgba(0, 0, 0, 0.2)"
      borderTop="1px solid #e2e8f0"
      zIndex={1000}
    >
      <HStack justify="space-evenly" align="center" width="100%">
        <Link to="/">
          <VStack spacing={0.5}> {/* Reduced spacing for a more compact look */}
            <IconButton
              icon={<FaHome size="20px" />} // Slightly smaller icon
              aria-label="Home"
              color="#CFAC56" // Gold color for icons
              variant="ghost"
              _hover={{ bg: '#1E3A8A', color: '#CFAC56' }} // Adjusted hover effects
              size="md" // Standard button size
            />
            <Text fontSize="xs" color="#FEFEFE">Home</Text> {/* Smaller font size */}
          </VStack>
        </Link>

        <Link to="/notifications">
          <VStack spacing={0.5}>
            <IconButton
              icon={<FaBell size="20px" />}
              aria-label="Notifications"
              color="#CFAC56"
              variant="ghost"
              _hover={{ bg: '#1E3A8A', color: '#CFAC56' }}
              size="md"
            />
            <Text fontSize="xs" color="#FEFEFE">Notifications</Text>
          </VStack>
        </Link>

        <Link to="/settings">
          <VStack spacing={0.5}>
            <IconButton
              icon={<FaCog size="20px" />}
              aria-label="Settings"
              color="#CFAC56"
              variant="ghost"
              _hover={{ bg: '#1E3A8A', color: '#CFAC56' }}
              size="md"
            />
            <Text fontSize="xs" color="#FEFEFE">Settings</Text>
          </VStack>
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomNavigationBar;
