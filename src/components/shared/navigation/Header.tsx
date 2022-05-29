import { Box, Button, Flex, IconButton, Stack } from '@chakra-ui/react';
import { FiInstagram, FiDribbble } from 'react-icons/fi';

export function Header() {
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
            >
              <Flex w="2px" h={5} bg="gray.800" />
              <Flex w="2px" h={5} bg="gray.800" />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
