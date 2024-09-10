import React from 'react';
import { Box, Grid, useDisclosure, IconButton, Text, VStack, useBreakpointValue, AspectRatio } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaUniversity, FaBook, FaFingerprint, FaCalendarAlt, FaBus, FaHotel, FaUsers, FaMoneyCheck, FaClipboardList, FaClipboard, FaQuestionCircle } from 'react-icons/fa';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import BottomNavigationBar from '../components/BottomNavigationBar';
import FloatingActionButton from '../components/FloatingActionButton';

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pages = [
    { name: 'Hostel Management', path: '/hostel-management', icon: FaHotel },
    { name: 'Class Committee', path: '/class-committee', icon: FaClipboardList },
    { name: 'Aakam360', path: 'https://aakam360.com', icon: FaUniversity },
    { name: 'Library Management', path: '/library-management', icon: FaBook },
    { name: 'Biometric Attendance', path: '/biometric-attendance', icon: FaFingerprint },
    { name: 'Attendance Management', path: '/attendance-management', icon: FaClipboard },
    { name: 'Event Management', path: '/event-management', icon: FaCalendarAlt },
    { name: 'Transport Management', path: '/transport-management', icon: FaBus },
    { name: 'Hospitality Management', path: '/hospitality-management', icon: FaHotel },
    { name: 'Student Management', path: '/student-management', icon: FaUsers },
    { name: 'Fees Management', path: '/fees-management', icon: FaMoneyCheck },
    { name: 'Time Table Automation', path: '/time-table-automation', icon: FaClipboard },
    { name: 'Time Sheet Appraisal', path: '/time-sheet-appraisal', icon: FaClipboardList },
    { name: 'Help', path: '/help', icon: FaQuestionCircle },
  ];

  const gridTemplateColumns = useBreakpointValue({ base: 'repeat(auto-fill, minmax(160px, 1fr))', md: 'repeat(auto-fill, minmax(220px, 1fr))' });
  const iconSize = useBreakpointValue({ base: '24px', md: '32px' }); // Responsive icon size
  const fontSize = useBreakpointValue({ base: 'sm', md: 'lg' }); // Responsive font size

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#FEFEFE">
      <AppBar />
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Box as="main" flex="1" p={6} pb={20}> {/* Increased padding-bottom */}
        <Grid templateColumns={gridTemplateColumns} gap={6}>
          {pages.map((page) => (
            <Link to={page.path} key={page.name}>
              <AspectRatio ratio={1}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="lg"
                bg="white"
                _hover={{ 
                  bg: '#CFAC56', 
                  cursor: 'pointer', 
                  transform: 'scale(1.03)', 
                  transition: 'transform 0.2s, box-shadow 0.3s, background-color 0.3s',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}
                alignItems="center"
                borderColor="#224581"
              >
                <VStack
                  p={4}
                  spacing={4}
                  alignItems="center"
                >
                  <IconButton
                    icon={<page.icon size={iconSize} />} // Responsive icon size
                    aria-label={page.name}
                    size="lg"
                    variant="outline"
                    colorScheme="teal"
                    isRound
                  />
                  <Text fontSize={fontSize} fontWeight="bold" color="#2C2C2C" textAlign="center">
                    {page.name}
                  </Text>
                </VStack>
              </AspectRatio>
            </Link>
          ))}
        </Grid>
      </Box>
      <BottomNavigationBar />
      <FloatingActionButton onOpen={onOpen} />
    </Box>
  );
};

export default HomePage;
