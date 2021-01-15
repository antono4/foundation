import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import NextImage from 'next/image'

const Portofolio = () => {
  return (
    <Box mt={-4} px={{ base: 10, md: 20 }}>
      <SimpleGrid columns={4} spacing={8}>
        <CardPortofolio image='/portofolio-1.png' category='House' />
        <CardPortofolio image='/portofolio-2.png' category='Apartement' />
        <CardPortofolio image='/portofolio-3.png' category='Mansion' />
        <CardPortofolio image='/portofolio-4.png' category='Apartement' />
        <CardPortofolio image='/portofolio-5.png' category='Mansion' />
        <CardPortofolio image='/portofolio-6.png' category='Apartement' />
        <CardPortofolio image='/portofolio-7.png' category='Apartement' />
        <CardPortofolio image='/portofolio-8.png' category='Mansion' />
      </SimpleGrid>

      <Box my={8} d='grid' placeItems='center'>
        <Button
          bgColor='#FFAC12'
          color='white'
          size='lg'
          _hover={{
            bgColor: 'orange.600',
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  )
}

const CardPortofolio = ({ image, category }) => (
  <Box>
    <Box
      px={6}
      py={2}
      borderBottomRightRadius='2xl'
      pos='absolute'
      bgColor='white'
      color='#23928B'
      zIndex={2}
    >
      <Text>{category}</Text>
    </Box>
    <NextImage layout='responsive' src={image} width='287px' height='252px' />
  </Box>
)

export default Portofolio
