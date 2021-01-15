import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import siteConfig from '~/site-config'

const Content = () => {
  return (
    <Stack px={20} align='start' spacing={6} maxW='xl'>
      <Heading>Easy Ways to Get Up Your Home</Heading>
      <Text>{siteConfig.description}</Text>
      <Stack direction='row' spacing={8}>
        <Box>
          <Flex align='center'>
            <Text mr={1} fontSize='2xl' fontWeight='bold'>
              12
            </Text>
            <Text color='#FFA800'>k</Text>
          </Flex>
          <Text color='gray.400'>Apartement</Text>
        </Box>
        <Box>
          <Flex align='center'>
            <Text mr={1} fontSize='2xl' fontWeight='bold'>
              32
            </Text>
            <Text color='#FFA800'>k</Text>
          </Flex>
          <Text color='gray.400'>Visitors</Text>
        </Box>
        <Box>
          <Flex align='center'>
            <Text mr={1} fontSize='2xl' fontWeight='bold'>
              14
            </Text>
            <Text color='#FFA800'>k</Text>
          </Flex>
          <Text color='gray.400'>Transactions</Text>
        </Box>
      </Stack>
      <FormControl id='location' maxW='sm'>
        <FormLabel color='gray.400'>Location</FormLabel>
        <Input
          type='text'
          placeholder='Jakarta, Indonesia'
          value='Jakrata, Indonesia'
          bgColor='#F7F7F9'
          border='none'
        />
      </FormControl>
      <Button
        borderRadius='sm'
        px={6}
        py={6}
        colorScheme='green'
        variant='outline'
        border='2px'
      >
        Started Now
      </Button>
    </Stack>
  )
}

export default Content
