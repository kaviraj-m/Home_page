import { Box, Grid, useDisclosure, IconButton, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome, FaUniversity, FaBook, FaFingerprint, FaCalendarAlt, FaBus, FaHotel, FaUsers, FaMoneyCheck, FaClipboardList, FaClipboard, FaQuestionCircle } from 'react-icons/fa'; // Add appropriate icons
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import BottomNavigationBar from '../components/BottomNavigationBar';
import FloatingActionButton from '../components/FloatingActionButton';

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pages = [
    { name: 'Hostel Management', path: '/hostel-management', icon: FaHotel },
    { name: 'Class Committee', path: '/class-committee', icon: FaClipboardList },
    { name: 'Aakam360', path: '/aakam360', icon: FaUniversity },
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

  return (
    <Box>
      <AppBar />
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Box as="main" p={4}>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
          {pages.map((page) => (
            <Link to={page.path} key={page.name}>
              <VStack
                p={4}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
                _hover={{ bg: 'gray.100', cursor: 'pointer' }}
                alignItems="center"
              >
                <IconButton
                  icon={<page.icon />}
                  aria-label={page.name}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  isRound
                />
                <Text fontSize="md" fontWeight="bold">
                  {page.name}
                </Text>
              </VStack>
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
