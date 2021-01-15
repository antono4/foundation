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
import { NextSeo } from 'next-seo'

import AboutUs from '@/component/about-us'
import AboutUsBanner from '@/component/about-us-banner'
import Advantages from '@/component/advantages'
import Content from '@/component/content'
import ContentBanner from '@/component/content-banner'
import Patners from '@/component/patners'
import Portofolio from '@/component/portofolio'
import ProcesProject from '@/component/proces-project'
import Service from '@/component/service'
import Testimonials from '@/component/testimonials'
import TitleSeperator from '@/component/title-seperator'
import VideoPlayer from '@/component/video-player'
import siteConfig from '~/site-config'

const Index = (): JSX.Element => (
  <>
    <NextSeo
      title='Foundation • Easy way to get up your home'
      titleTemplate='%s'
      description={siteConfig.description}
    />

    <Flex align='center' justify='space-between'>
      <Content />
      <ContentBanner />
    </Flex>

    <Flex
      mt={-20}
      px={{ base: 10, md: 20 }}
      justify='space-around'
      align='center'
    >
      <AboutUsBanner />
      <AboutUs />
    </Flex>

    <TitleSeperator
      title='Advantages'
      text='There are many advantages to using our services, we are very professional and trusted by our partners and customers'
    />
    <Advantages />

    <TitleSeperator
      title='Service'
      text='Here are the services provided by us, which is of course reliable and makes it easy for all of our customers'
    />
    <Service />

    <VideoPlayer />

    <TitleSeperator
      title='Proccess On The Project'
      text='Only four easy steps proccess to get your dream home.'
    />
    <ProcesProject />

    <TitleSeperator title='Our Portofolio' text='' />
    <Portofolio />

    <Box bgColor='gray.50' py={8}>
      <TitleSeperator title='What Our Customers Says?' text='' />
      <Testimonials />
    </Box>

    <TitleSeperator title='Partners' text='' />
    <Patners />

    <Flex
      my={20}
      color='white'
      maxW='6xl'
      mx='auto'
      bg='#10847D'
      justify='space-between'
      borderRadius='xl'
      px={{ base: 10, md: 20 }}
      py={16}
    >
      <Heading>
        Get offers from rofessionals{' '}
        <span style={{ color: '#FFAC12' }}>right now</span>
      </Heading>
      <Button size='lg' colorScheme='orange'>
        Request Demo
      </Button>
    </Flex>

    <Divider color='black' border='2px' />
    <SimpleGrid columns={4} my={20} px={{ base: 10, md: 20 }} spacing={20}>
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

export default Index
