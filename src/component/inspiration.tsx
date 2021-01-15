import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'

const Inspiration = () => (
  <Box
    pos='relative'
    py={4}
    px={8}
    bg='white'
    shadow='lg'
    maxW='xs'
    bottom={-250}
    left={60}
  >
    <Image
      right='1px'
      top='-20px'
      pos='absolute'
      src='/mail.png'
      w='50px'
      h='50px'
    />
    <Heading fontSize='xl'>
      New Inspiration ! <span>🎨</span>{' '}
    </Heading>
    <Text mt={2} fontSize='sm' color='gray.400'>
      10 min ago
    </Text>
    <Divider border='3px' borderStyle='dashed' my={4} />
    <Flex align='center'>
      <Image src='/dropdop.png' w='37px' h='37px' />
      <Box fontSize='sm' ml={4}>
        <Text>Qareluv wa Upload</Text>
        <Text fontWeight='bold'>Modern House!</Text>
      </Box>
    </Flex>
  </Box>
)

export default Inspiration
