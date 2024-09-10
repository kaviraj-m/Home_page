import React from 'react';
import { IconButton, useDisclosure, VStack, Menu, MenuButton, MenuList, MenuItem, Text, Box } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FaCalendarPlus, FaUtensils, FaWarehouse } from 'react-icons/fa';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent } from '@chakra-ui/react';

const FloatingActionButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Floating Button with subtle shadow and animation */}
      <IconButton
        icon={<AddIcon />}
        aria-label="Open menu"
        position="fixed"
        bottom={4}
        right={4}
        size="lg"
        colorScheme="blue"
        boxShadow="lg"
        borderRadius="full"
        _hover={{ transform: 'scale(1.1)', transition: '0.2s' }} // Add hover effect
        _active={{ transform: 'scale(1)' }} // Scale back on click
        onClick={onOpen}
        zIndex={1100} // Higher zIndex to be above BottomNavigationBar
      />

      {/* Drawer for Menu */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Menu>
                <MenuButton as={Box} borderWidth="1px" borderRadius="md" p={2} boxShadow="md" _hover={{ bg: 'gray.100' }} width="100%">
                  <Text fontWeight="bold">Events</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FaCalendarPlus />}>Add Event</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton as={Box} borderWidth="1px" borderRadius="md" p={2} boxShadow="md" _hover={{ bg: 'gray.100' }} width="100%">
                  <Text fontWeight="bold">Food</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FaUtensils />}>Add Food</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton as={Box} borderWidth="1px" borderRadius="md" p={2} boxShadow="md" _hover={{ bg: 'gray.100' }} width="100%">
                  <Text fontWeight="bold">Supplies</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FaWarehouse />}>Add Supply</MenuItem>
                </MenuList>
              </Menu>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FloatingActionButton;
