import { Box, Flex } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import AboutUs from '@/component/about-us'
import AboutUsBanner from '@/component/about-us-banner'
import Advantages from '@/component/advantages'
import Content from '@/component/content'
import ContentBanner from '@/component/content-banner'
import Footer from '@/component/footer'
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

    <Footer />
  </>
)

export default Index
