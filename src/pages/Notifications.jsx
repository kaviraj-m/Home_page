// src/pages/Notifications.jsx
import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import { FaBell, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import BottomNavigationBar from '../components/BottomNavigationBar';

const NotificationItem = ({ icon, title, description, time, status }) => {
  const statusColor = {
    info: 'blue.500',
    success: 'green.500',
    warning: 'yellow.500',
    error: 'red.500',
  }[status];

  return (
    <Box p={4} borderRadius="md" boxShadow="md" bg="white">
      <HStack spacing={4} align="start">
        <Avatar icon={<Icon as={icon} w={6} h={6} color={statusColor} />} bg={statusColor} />
        <VStack align="start" spacing={1}>
          <HStack spacing={2}>
            <Text fontWeight="bold" fontSize="md">{title}</Text>
            <Badge colorScheme={status === 'error' ? 'red' : 'green'}>{status}</Badge>
          </HStack>
          <Text fontSize="sm" color="gray.500">{description}</Text>
          <Text fontSize="xs" color="gray.400">{time}</Text>
        </VStack>
      </HStack>
      <Divider mt={3} />
    </Box>
  );
};

const Notifications = () => {
  const notifications = [
    {
      title: 'New Message from Admin',
      description: 'Your request has been approved.',
      time: '10 mins ago',
      status: 'success',
      icon: FaCheckCircle,
    },
    {
      title: 'System Update',
      description: 'A new system update will be available soon.',
      time: '30 mins ago',
      status: 'info',
      icon: FaInfoCircle,
    },
    {
      title: 'Payment Failed',
      description: 'Your payment could not be processed.',
      time: '1 hour ago',
      status: 'error',
      icon: FaExclamationCircle,
    },
    {
      title: 'New Event Scheduled',
      description: 'A meeting has been scheduled for tomorrow.',
      time: '2 hours ago',
      status: 'info',
      icon: FaBell,
    },
  ];

  return (
    <Box p={4} pt="70px" minHeight="100vh">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Notifications
      </Text>
      <VStack spacing={4} align="stretch">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            icon={notification.icon}
            title={notification.title}
            description={notification.description}
            time={notification.time}
            status={notification.status}
          />
        ))}
      </VStack>
      <BottomNavigationBar />
    </Box>
  );
};

export default Notifications;
