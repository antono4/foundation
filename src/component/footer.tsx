import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import siteConfig from '~/site-config'

const Footer = () => {
  return (
    <>
      <Flex
        color='white'
        maxW='6xl'
        mx='auto'
        bg='#10847D'
        justify='space-between'
        borderRadius='xl'
        py={16}
        my={20}
        direction={{ base: 'column', md: 'row' }}
        px={{ base: 10, md: 20 }}
      >
        <Heading>
          Get offers from rofessionals
          <span style={{ color: '#FFAC12' }}>right now</span>
        </Heading>
        <Button size='lg' colorScheme='orange'>
          Request Demo
        </Button>
      </Flex>

      <Divider color='black' border='2px' />
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        my={20}
        px={{ base: 10, md: 20 }}
        spacing={20}
      >
        <VStack spacing={4} align='start'>
          <Flex align='center'>
            <Image
              w='50px'
              h='40px'
              objectFit='cover'
              htmlHeight='40px'
              htmlWidth='50px'
              src='/logo.png'
              mr={4}
            />
            <Text fontSize='xl' fontWeight='bold'>
              {siteConfig.title}
            </Text>
          </Flex>
          <Text color='gray.400'>
            We commited to ensuring digital accessibility for individuals
          </Text>
          <HStack spacing={4}>
            <Image src='/paypal.png' h='20px' objectFit='cover' />
            <Image src='/visa.png' h='20px' objectFit='cover' />
            <Image src='/master-card.png' h='20px' objectFit='cover' />
          </HStack>
        </VStack>
        <VStack align='start' spacing={4}>
          <Heading fontSize='xl'>Support</Heading>
          <Link href='#'>Help Videos</Link>
          <Link href='#'>Accesories</Link>
          <Link href='#'>View Booking</Link>
          <Link href='#'>Features</Link>
          <Link href='#'>Terms & Policy</Link>
        </VStack>
        <VStack align='start' spacing={4}>
          <Heading fontSize='xl'>About</Heading>
          <Link href='#'>Payment & Tax</Link>
          <Link href='#'>Term of Service</Link>
          <Link href='#'>Contact</Link>
          <Link href='#'>Announcements</Link>
          <Link href='#'>News</Link>
        </VStack>
        <VStack align='start' spacing={4}>
          <Heading fontSize='xl'>Our Address</Heading>
          <Link href='#'>3444 Par Drive, San Francisco ,United States</Link>
        </VStack>
      </SimpleGrid>

      <Box color='white' textAlign='center' p={4} bgColor='#10847D'>
        <Text>Copyright ©Foundation 2020. All right reserved</Text>
      </Box>
    </>
  )
}

export default Footer
