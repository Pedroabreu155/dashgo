import { Flex, Button, Stack, Text } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" flexDir="column" align="center" justify="center">
      <Text fontSize="6xl" fontWeight="bold" letterSpacing="tight" mb="8">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="form"
        w="100%"
        flexDir="column"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
