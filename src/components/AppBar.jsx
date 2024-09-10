import React from 'react';
import { Flex, HStack, IconButton, Input, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, useDisclosure, Divider, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const AppBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      bg="blue.700"
      color="white"
      p={2}
      align="center"
      justify="space-between"
      boxShadow="sm"
      height="60px" // Reduced height
    >
      <HStack spacing={4} align="center">
        <IconButton
          icon={<SearchIcon />}
          aria-label="Search"
          variant="outline"
          colorScheme="whiteAlpha"
          size="sm" // Smaller size
        />
        <Input
          placeholder="Search"
          variant="outline"
          maxW="md"
          display={{ base: 'none', md: 'block' }}
        />
      </HStack>

      <Flex align="center" ml={4}>
        <Menu>
          <MenuButton as={Button} variant="unstyled" _focus={{ boxShadow: 'none' }}>
            <Avatar name="Kaviraj" size="sm" src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList
            bg="white"
            color="black"
            borderColor="blue.500"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            zIndex={2}
          >
            <MenuItem as={Link} to="/profile" _hover={{ bg: 'blue.100' }}>
              <Text fontWeight="bold">Profile</Text>
            </MenuItem>
            <MenuItem as={Link} to="/settings" _hover={{ bg: 'blue.100' }}>
              <Text fontWeight="bold">Settings</Text>
            </MenuItem>
            <MenuItem as={Link} to="/help" _hover={{ bg: 'blue.100' }}>
              <Text fontWeight="bold">Help</Text>
            </MenuItem>
            <Divider />
            <MenuItem as={Link} to="/" onClick={() => { /* Add logout logic */ }} _hover={{ bg: 'blue.100' }}>
              <Text fontWeight="bold" color="red.500">Logout</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default AppBar;
