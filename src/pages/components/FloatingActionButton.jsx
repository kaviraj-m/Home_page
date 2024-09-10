import {
    IconButton,
    useDisclosure,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Box,
  } from '@chakra-ui/react';
  import { AddIcon } from '@chakra-ui/icons';
  import { FaCalendarPlus, FaUtensils, FaWarehouse } from 'react-icons/fa'; // Importing relevant icons
  import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  } from '@chakra-ui/react';
  
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
        />
  
        {/* Drawer for Menu */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader textAlign="center" fontSize="xl" fontWeight="bold">
              Quick Actions
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={6} align="stretch">
                {/* Menu items with icons and better design */}
                <Menu>
                  <MenuButton as="button" colorScheme="blue">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="100%"
                      py={2}
                      borderRadius="md"
                      bg="blue.500"
                      color="white"
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{ bg: 'blue.600' }}
                    >
                      Open Actions
                    </Box>
                  </MenuButton>
                  <MenuList>
                    {/* Updated MenuItem with Icons */}
                    <MenuItem icon={<FaCalendarPlus />} onClick={() => console.log('Add Event')}>
                      Add Event
                    </MenuItem>
                    <MenuItem icon={<FaUtensils />} onClick={() => console.log('Order Food')}>
                      Order Food
                    </MenuItem>
                    <MenuItem icon={<FaWarehouse />} onClick={() => console.log('Manage Inventory')}>
                      Manage Inventory
                    </MenuItem>
                  </MenuList>
                </Menu>
  
                {/* Add any additional options here */}
                <Box textAlign="center">
                  <Text fontSize="sm" color="gray.500">
                    More actions coming soon!
                  </Text>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default FloatingActionButton;
  