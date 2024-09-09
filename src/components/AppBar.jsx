import { Flex, HStack, IconButton, Input, Avatar, Text } from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <Flex
      as="header"
      bg="blue.700"
      color="white"
      p={4}
      align="center"
      justify="space-between"
    >
      <HStack spacing={4}>
        <IconButton
          icon={<SearchIcon />}
          aria-label="Search"
          variant="outline"
          colorScheme="whiteAlpha"
        />
        <IconButton
          icon={<BellIcon />}
          aria-label="Notifications"
          variant="outline"
          colorScheme="whiteAlpha"
        />
        <Input
          placeholder="Search"
          variant="outline"
          maxW="md"
          display={{ base: 'none', md: 'block' }}
        />
      </HStack>

      <Flex align="center">
        <Link to="/profile">
          <Avatar name="User Name" src="https://bit.ly/broken-link" />
        </Link>
        <Text ml={4}>User Name</Text>
      </Flex>
    </Flex>
  );
};

export default AppBar;
