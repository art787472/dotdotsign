import Navbar from './../components/Navbar'
import StatusBar from './../components/StatusBar'
import SelectBar from './../components/SelectBar'
import DocumentSection from './../components/DocumentSection'
import CardContainer from './../components/CardContainer'

import { Box } from '@chakra-ui/react'

function Home () {
  return (
    <>
      <Navbar />
      <StatusBar />
      <DocumentSection>
        <SelectBar />
        <CardContainer />
      </DocumentSection>
    </>
  )
}

export default Home