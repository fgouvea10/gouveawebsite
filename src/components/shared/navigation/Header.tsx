import { FiInstagram, FiDribbble } from 'react-icons/fi';

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  Link as ChakraLink,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const router = useRouter();

  return (
    <Box as="header" px={4} py={5} maxW={1440} w="100%" mx="auto">
      <Flex height={16} align="center" justify="space-between">
        <Box>gouvea</Box>
        <Flex align="center">
          <Stack direction="row" spacing={5}>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="@fgouvea10 on Instagram"
                icon={<FiInstagram size={20} />}
                bg="transparent"
              />
              <IconButton
                aria-label="@fgouvea10 on Dribbble"
                icon={<FiDribbble size={20} />}
                bg="transparent"
              />
            </Stack>
            <Button
              bg="none"
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
              onClick={onOpen}
            >
              <Flex w="2px" h={5} bg="gray.800" />
              <Flex w="2px" h={5} bg="gray.800" />
            </Button>
            <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton bg="transparent" color="gray.50" />
                  <DrawerBody>
                    <Flex bg="gray.900" w="100%" height="100vh">
                      <Stack
                        w="100%"
                        direction="column"
                        alignItems={isLargerThan768 ? 'flex-start' : 'center'}
                        justifyContent="center"
                        rowGap={2}
                        px={isLargerThan768 ? 150 : 0}
                      >
                        {MENU_MOCK.map((item, index) => (
                          <Link key={String(index)} href={item.path}>
                            <ChakraLink
                              color={
                                router.pathname === item.path
                                  ? 'gray.50'
                                  : 'gray.300'
                              }
                              fontSize={['2xl', '4xl']}
                              fontWeight={
                                router.pathname === item.path
                                  ? 'bold'
                                  : 'medium'
                              }
                              textDecor="none"
                            >
                              {item.title}
                            </ChakraLink>
                          </Link>
                        ))}
                      </Stack>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

const MENU_MOCK = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Works',
    path: '/works',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];
