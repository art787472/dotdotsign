import StepBar from "../components/StepBar";
import UploadSection from "../components/UploadSection";

import { Box } from '@chakra-ui/react'

function Upload () {
  return (
    <>
      <StepBar />
      <Box h="100%" bg="#EFEFEF" display="flex" justifyContent="center">
        <UploadSection />
      </Box>
    </>
  )
}

export default Upload