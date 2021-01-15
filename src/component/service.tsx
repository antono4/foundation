import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'

const Service = () => {
  return (
    <SimpleGrid
      px={{ base: 10, md: 20 }}
      columns={{ base: 1, md: 2, lg: 3 }}
      pb={16}
      spacing={10}
    >
      <Flex
        border='1px'
        borderColor='#DDDD'
        direction='column'
        textAlign='center'
        borderRadius='lg'
        borderBottomRadius='none'
      >
        <Image
          src='/service.png'
          h='255px'
          objectFit='cover'
          w='full'
          borderRadius='lg'
          borderBottomRadius='none'
        />
        <Box py={8}>
          <Text fontSize='xl' fontWeight='bold'>
            Building & Renovation
          </Text>
          <Button
            mt={2}
            bgColor='#FFA800'
            color='white'
            _hover={{ bgColor: '#FFA800' }}
          >
            Order Now
          </Button>
        </Box>
      </Flex>
      <Flex
        border='1px'
        borderColor='#DDDD'
        direction='column'
        textAlign='center'
        borderRadius='lg'
        borderBottomRadius='none'
      >
        <Image
          src='/service-4.png'
          h='255px'
          objectFit='cover'
          w='full'
          borderRadius='lg'
          borderBottomRadius='none'
        />
        <Box py={8}>
          <Text fontSize='xl' fontWeight='bold'>
            Made & Custom
          </Text>
          <Button
            mt={2}
            bgColor='#FFA800'
            color='white'
            _hover={{ backgroundColor: '#FFA800' }}
          >
            Order Now
          </Button>
        </Box>
      </Flex>
      <Flex
        border='1px'
        borderColor='#DDDD'
        direction='column'
        textAlign='center'
        borderRadius='lg'
        borderBottomRadius='none'
      >
        <Image
          src='/service-3.png'
          h='255px'
          objectFit='cover'
          w='full'
          borderRadius='lg'
          borderBottomRadius='none'
        />
        <Box py={8}>
          <Text fontSize='xl' fontWeight='bold'>
            Design & Planing
          </Text>
          <Button
            mt={2}
            bgColor='#FFA800'
            color='white'
            _hover={{ backgroundColor: '#FFA800' }}
          >
            Order Now
          </Button>
        </Box>
      </Flex>
    </SimpleGrid>
  )
}

export default Service
