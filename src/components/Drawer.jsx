import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, List, ListItem, ListIcon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'; // Ensure react-icons is installed

const DrawerComponent = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader>Navigation</DrawerHeader>
      <DrawerBody>
        <List>
          <ListItem><ListIcon as={AiOutlineHome} /><Link to="/hostel-management">Hostel Management System</Link></ListItem>
          {/* Add more ListItems for other navigation options */}
        </List>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default DrawerComponent;
