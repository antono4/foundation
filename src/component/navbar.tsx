import { Button, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import routes from '@/routes'
import siteConfig from '~/site-config'

const Navbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      top={0}
      flexDir='row'
      px={{ base: 10, md: 20 }}
      py={8}
      align='center'
      justify='space-between'
      background='white'
      zIndex={99}
    >
      <HStack spacing={6} justify='center'>
        <Flex align='center' mr={4}>
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
        {routes.map(([text, href]) => (
          <div key={href}>
            <NextLink href={href} key={href}>
              <Link href={href}>{text}</Link>
            </NextLink>
          </div>
        ))}
      </HStack>
      <Button px={6} py={6} colorScheme='green'>
        Contact Us
      </Button>
    </Flex>
  )
}

export default Navbar
