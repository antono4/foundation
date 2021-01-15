import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

import Advantages from './advantages'

interface CardAdvantagesProps {
  item: Advantages
}

const CardAdvantages = ({
  item: { isFirst, image, title, description },
}: CardAdvantagesProps) => (
  <Flex
    direction='column'
    justify={isFirst ? 'space-around' : ''}
    p={4}
    textAlign='center'
    bgColor={isFirst ? '#10847D' : 'white'}
    color={isFirst ? 'white' : 'black'}
    borderRadius='lg'
    border={isFirst ? 0 : '1px'}
    borderColor={isFirst ? '' : '#DDDD'}
    h={isFirst ? '430px' : '350px'}
  >
    <Image objectFit='cover' w='full' h='168px' src={image} borderRadius='lg' />
    <Box my={2}>
      <Heading fontSize='lg' mb={2}>
        {title}
      </Heading>
      <Text fontSize='sm'>{description}</Text>
    </Box>
  </Flex>
)

export default CardAdvantages
