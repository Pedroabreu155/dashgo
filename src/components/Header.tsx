import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      w="90%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        align="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
          px="4"
          mr="4"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserLine} />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Pedro Abreu</Text>
            <Text color="gray.300" fontSize="sm">
              pedroliveirabreu@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Pedro Abreu"
            src="https://github.com/Pedroabreu155.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
