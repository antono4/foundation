import { Box, Flex, Image, Text } from '@chakra-ui/react'

import Inspiration from './inspiration'

const AboutUsBanner = () => (
  <Box d={{ base: 'none', lg: 'block' }}>
    <Inspiration />
    <Flex
      pos='relative'
      align='center'
      h='60px'
      w='150px'
      borderRadius='lg'
      bgGradient='linear(to-l, #F8862D, #FFD100)'
      right={10}
      bottom={-500}
    >
      <Text color='white' fontWeight='bold' mx='auto'>
        0% BOTH FEE
      </Text>
    </Flex>
    <Image
      h='530px'
      w='483px'
      objectFit='cover'
      borderRadius='lg'
      src='/inspiration.png'
    />
  </Box>
)

export default AboutUsBanner
