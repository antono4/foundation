import { Box, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'

const VideoPlayer = () => (
  <Box d={{ base: 'none', md: 'block' }} py={8} maxW='6xl' mx='auto'>
    <Box
      pos='absolute'
      px={6}
      py={3}
      bgColor='white'
      borderBottomRightRadius='2xl'
    >
      <Text fontWeight='bold' color='#23928B'>
        Watch Our Process Video
      </Text>
    </Box>
    <Box d='grid' placeItems='center'>
      <Box pos='absolute' zIndex={4}>
        <IconButton
          bgColor='white'
          color='#FFA800'
          isRound
          size='lg'
          aria-label='play btn'
          icon={<Icon as={FaPlay} />}
        />
      </Box>
      <Image w='full' h='530px' objectFit='cover' src='/service-3.png' />
    </Box>
  </Box>
)

export default VideoPlayer
