import { Box, Switch, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Settings = () => (
  <Box p={4}>
    <Text fontSize="xl">Settings</Text>
    <Box mt={4}>
      <Text>Dark Mode</Text>
      <Switch size="lg" />
    </Box>
    <Link to="/notifications">Go to Notifications</Link>
  </Box>
);

export default Settings;
