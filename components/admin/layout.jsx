// components/Layout.js
import { Box, Flex, Text, Spacer, VStack, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Sidebar = () => (
  <Box
    as="nav"
    w="250px"
    h="100vh"
    bg="gray.800"
    color="white"
    p="4"
    position="fixed"
  >
    <VStack align="start" spacing={4}>
      <Link href="/admin/brands" passHref>
        <Button variant="link" colorScheme="teal">
          Brands
        </Button>
      </Link>
      <Link href="/admin/cars" passHref>
        <Button variant="link" colorScheme="teal">
          Cars
        </Button>
      </Link>
      <Link href="/admin/users" passHref>
        <Button variant="link" colorScheme="teal">
          Users
        </Button>
      </Link>
    </VStack>
  </Box>
);

const Layout = ({ children }) => (
  <Flex minH="100vh">
    <Sidebar />
    <Box ml="250px" p="6" w="full">
      {children}
    </Box>
  </Flex>
);

export default Layout;
