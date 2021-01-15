import 'react-vertical-timeline-component/style.min.css'

import { Box } from '@chakra-ui/react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

const ProcesProject = () => (
  <Box px={{ base: 10, md: 20 }}>
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#23928B', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #23928B' }}
        iconStyle={{ background: '#23928B', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>
          01. ONLINE FORM FILLING
        </h3>
        <p>
          Costumers fill out an online for renovation, interior custom, or
          design & planning needs.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        iconStyle={{ background: '#23928B', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>
          02. LOCATION SURVEYS
        </h3>
        <p>
          Use team our technique that will come to your home location to review
          the building that will be renovated / decorated
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        iconStyle={{ background: '#23928B', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>
          03. Design & RAB OFFERS
        </h3>
        <p>
          After surveying the location team wil send image & design offers to
          customers
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        iconStyle={{ background: '#23928B', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>04. CONTRACT/SPK</h3>
        <p>
          And after the offer has been completed, team will draft a contract
          digitally to customers
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Box>
)

export default ProcesProject
