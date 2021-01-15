/* eslint-disable react/no-unescaped-entities */
import 'swiper/swiper-bundle.min.css'

import { Avatar, Box, Heading, Text } from '@chakra-ui/react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation])

const Testimonials = () => {
  return (
    <Box pb={8} px={{ base: 10, md: 20 }}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <CardTestimonial
            ava='/ava-1.png'
            subtitle='Housing Seller in San Francisco'
            name='Roland Samuel'
            text={`“I'm looking for a house with good water, clean, and not too much pollution and noise. I saw the Grand Valley housing, first from the road access, the water is also good, accessibility is like a hospital, shopping is close. Then the marketing service also helped me, to simplify the process of purchasing the unit in Grand Valley.”`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTestimonial
            ava='/ava.png'
            subtitle='vtubers holo live'
            name='Amelia Watson'
            text={`“I'm looking for a house with good water, clean, and not too much pollution and noise. I saw the Grand Valley housing, first from the road access, the water is also good, accessibility is like a hospital, shopping is close. Then the marketing service also helped me, to simplify the process of purchasing the unit in Grand Valley.”`}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

const CardTestimonial = ({ ava, name, subtitle, text }) => (
  <Box
    d='grid'
    placeItems='center'
    p={8}
    shadow='lg'
    maxW='4xl'
    mx='auto'
    bgColor='white'
  >
    <Heading color='#FF7D00' pos='absolute' left={300} top={10}>
      “
    </Heading>
    <Avatar w='70px' h='70px' src={ava} name='kim jon un' />
    <Text mt={3} fontWeight='bold' fontSize='lg'>
      {name}
    </Text>
    <Text color='gray.500' fontSize='sm'>
      {subtitle}
    </Text>

    <Text maxW='xl' mt={6}>
      {text}
    </Text>
  </Box>
)

export default Testimonials
