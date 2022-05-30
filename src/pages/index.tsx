import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

import type { NextPage } from 'next';

import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Head from 'next/head';

const Home: NextPage = () => {
  const [isLargerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Head>
        <title>Home - Felipe Gouvea</title>
      </Head>

      <Container maxW={1440} mx="auto" px={{ base: 2, md: 0 }}>
        <Stack
          as="section"
          align="center"
          spacing={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          mt={{ base: 10, md: 150 }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              as="h1"
              fontWeight="medium"
              fontSize={{ base: '5xl', md: '78px' }}
              lineHeight="62px"
              letterSpacing="-0.065em"
              maxW="5xl"
              textAlign={{ base: 'center', md: 'left' }}
            >
              uniting experience and passion with a single purpose
            </Heading>
            <Text
              as="p"
              fontWeight="400"
              letterSpacing="-0.065em"
              maxW="5xl"
              fontSize={{ base: '1xl', md: '2xl' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              iusto exercitationem aspernatur adipisci, et ducimus odit deleniti
              temporibus.
            </Text>
            <Button
              w={isLargerThan768 ? '100%' : '250px'}
              h="58px"
              bg="gray.900"
              borderRadius={0}
              color="gray.50"
              fontWeight="400"
              _hover={{
                background: 'gray.700',
              }}
            >
              <Text>My works</Text>
            </Button>
          </Stack>
          <Flex
            flex={1}
            justify="flex-end"
            align="center"
            position="relative"
            w="full"
            display={{ base: 'none', md: 'flex' }}
          >
            <Button
              w="110px"
              h="110px"
              bg="gray.900"
              color="gray.50"
              borderRadius="50%"
              _hover={{
                background: 'gray.700',
              }}
            >
              <FiArrowRight size={32} />
            </Button>
            <motion.img
              src="https://i.imgur.com/CEj7aHN.png"
              alt="Contact me"
              style={{
                position: 'absolute',
                right: '-5.5%',
                pointerEvents: 'none',
              }}
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 35, repeat: Infinity }}
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
