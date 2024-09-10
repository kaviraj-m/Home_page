import React, { useState } from 'react';
import {
  Box,
  Switch,
  Text,
  VStack,
  Divider,
  Stack,
  Select,
  Button,
  Input,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AppBar from '../components/AppBar'; // Adjust the path as needed
import BottomNavigationBar from '../components/BottomNavigationBar'; // Adjust the path as needed

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [password, setPassword] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('Public');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [backupData, setBackupData] = useState(false);
  
  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleNotificationsToggle = () => setNotifications(!notifications);
  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleTwoFactorAuthToggle = () => setTwoFactorAuth(!twoFactorAuth);
  const handleProfileVisibilityChange = (event) => setProfileVisibility(event.target.value);
  const handleEmailNotificationsToggle = () => setEmailNotifications(!emailNotifications);
  const handleBackupDataClick = () => setBackupData(true); // Handle backup data logic here
  
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar /> {/* Add the AppBar component */}
      <Box p={isDesktop ? 8 : 4} flex="1" overflow="auto">
        <Text fontSize={isDesktop ? '3xl' : '2xl'} fontWeight="bold" mb={4} textAlign="center">
          Settings
        </Text>
        <VStack spacing={isDesktop ? 6 : 4} align="stretch" mx="auto" maxW={isDesktop ? "container.md" : "full"}>
          {/* Display Settings */}
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize={isDesktop ? 'lg' : 'md'} fontWeight="bold">Display Settings</Text>
            <Stack spacing={isDesktop ? 4 : 2}>
              <Box>
                <Text>Dark Mode</Text>
                <Switch size={isDesktop ? 'md' : 'lg'} isChecked={darkMode} onChange={handleDarkModeToggle} />
              </Box>
              <Box>
                <Text>Notifications</Text>
                <Switch size={isDesktop ? 'md' : 'lg'} isChecked={notifications} onChange={handleNotificationsToggle} />
              </Box>
            </Stack>
          </Box>
          <Divider my={isDesktop ? 6 : 4} />

         
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize={isDesktop ? 'lg' : 'md'} fontWeight="bold">Language</Text>
            <Select value={language} onChange={handleLanguageChange} placeholder="Select Language" size={isDesktop ? 'md' : 'lg'}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
             
            </Select>
          </Box>
          <Divider my={isDesktop ? 6 : 4} />

      
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize={isDesktop ? 'lg' : 'md'} fontWeight="bold">Account Security</Text>
            <Stack spacing={isDesktop ? 4 : 3}>
              <Box>
                <Text fontWeight="bold">Change Password</Text>
                <Input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={handlePasswordChange}
                  size={isDesktop ? 'md' : 'lg'}
                />
              </Box>
              <Box>
                <Text fontWeight="bold">Two-Factor Authentication</Text>
                <Switch size={isDesktop ? 'md' : 'lg'} isChecked={twoFactorAuth} onChange={handleTwoFactorAuthToggle} />
              </Box>
            </Stack>
          </Box>
          <Divider my={isDesktop ? 6 : 4} />

          {/* Privacy Settings */}
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize={isDesktop ? 'lg' : 'md'} fontWeight="bold">Privacy Settings</Text>
            <Stack spacing={isDesktop ? 4 : 2}>
              <Box>
                <Text fontWeight="bold">Profile Visibility</Text>
                <Select value={profileVisibility} onChange={handleProfileVisibilityChange} size={isDesktop ? 'md' : 'lg'}>
                  <option value="Public">Public</option>
                  <option value="Friends">Friends</option>
                  <option value="Only Me">Only Me</option>
                </Select>
              </Box>
              <Box>
                <Text fontWeight="bold">Activity Visibility</Text>
                <Select size={isDesktop ? 'md' : 'lg'}>
                  <option value="Public">Public</option>
                  <option value="Friends">Friends</option>
                  <option value="Only Me">Only Me</option>
                </Select>
              </Box>
            </Stack>
          </Box>
          <Divider my={isDesktop ? 6 : 4} />

          {/* App Preferences */}
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize={isDesktop ? 'lg' : 'md'} fontWeight="bold">App Preferences</Text>
            <Stack spacing={isDesktop ? 4 : 2}>
              <Box>
                <Text fontWeight="bold">Email Notifications</Text>
                <Switch size={isDesktop ? 'md' : 'lg'} isChecked={emailNotifications} onChange={handleEmailNotificationsToggle} />
              </Box>
              <Button colorScheme="blue" variant="outline" size={isDesktop ? 'md' : 'lg'} onClick={handleBackupDataClick}>
                Backup Data
              </Button>
            </Stack>
          </Box>
          <Divider my={isDesktop ? 6 : 4} />

          {/* Help and Support */}
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text fontSize={isDesktop ? 'lg' : 'md'} fontWeight="bold">Help and Support</Text>
            <Stack spacing={isDesktop ? 4 : 2}>
              <Link to="/help">
                <Button colorScheme="blue" variant="outline" size={isDesktop ? 'md' : 'lg'}>
                  Help Center
                </Button>
              </Link>
              <Link to="/contact-support">
                <Button colorScheme="blue" variant="outline" size={isDesktop ? 'md' : 'lg'}>
                  Contact Support
                </Button>
              </Link>
              <Link to="/manage-devices">
                <Button colorScheme="blue" variant="outline" size={isDesktop ? 'md' : 'lg'}>
                  Manage Devices
                </Button>
              </Link>
            </Stack>
          </Box>
          <Divider my={isDesktop ? 6 : 4} />

          {/* Log Out */}
          <Box>
            <Button colorScheme="red" variant="outline" size={isDesktop ? 'md' : 'lg'}>
              Log Out
            </Button>
          </Box>
        </VStack>
      </Box>
      <BottomNavigationBar /> {/* Add the BottomNavigationBar component */}
    </Box>
  );
};

export default Settings;
