import { Box, Image } from '@chakra-ui/react'

const ContentBanner = () => (
  <Box>
    <Image
      w='343px'
      h='240px'
      right='40px'
      zIndex={-1}
      pos='absolute'
      src='/dots.png'
    />
    <Box
      pos='absolute'
      w='745px'
      h='422px'
      top='250px'
      bgColor='green.500'
      zIndex={-1}
    />
    <Image w='743px' h='560px' src='/hero-2.png' />
  </Box>
)

export default ContentBanner
