import { Box, Tab, Tabs, TabList, TabPanels, TabPanel, Button, Text, Stack, Flex, Divider, Container, Input } from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Step = {
  ONE: 0,
  TWO: 1,
  THREE: 2,
  FOUR: 3
}

function StepOne ({ nextStep }) {
  return (
    <Tabs  bg="white">
        <TabList h="71px" pt="40px" px={{base:"16px", lg:"60px"}} >
          <Tab pb="8px" mr="32px">上傳檔案</Tab>
          <Tab pb="8px" mr="32px">掃描檔案</Tab>
          <Tab pb="8px">歷史上傳</Tab>
        </TabList>
        <TabPanels py="40px" px={{base: "16px",lg:"60px"}}>
          <TabPanel >
            <Box border="1.5px dashed #DADBE1" borderRadius="4px" height='280px' display="grid" justifyContent="center" alignContent="center" gap="24px">
              <Button variant="outline" colorScheme="blue" onClick={nextStep}>選擇檔案（PDF/png）</Button>
              <Text>或直接拖放檔案進來</Text>
            </Box>
            <Text textAlign="left" mt="16px" color="#78797D">檔案大小不得超過 10 MB</Text>
          </TabPanel>
            <TabPanel >
            <Box  borderRadius="2px" height='311px' >

                <Flex p="16px" bg="#F1F2F5">
                  <Text flexBasis="540px" textAlign="left">檔案名稱</Text>
                  <Text textAlign="left">上傳時間</Text>
                </Flex>
              <Stack align="stretch" divider={<Divider w="95%" h="1px" bg="#F1F2F5" alignSelf="center"/> } spacing="0">
               <Flex alignItems="center" p="16px">
                  <Text flexBasis="540px"  textAlign="left">10 月報價單</Text>
                  <Flex justifyContent="space-between" alignItems="center" flexGrow="1">
                    <Text>2022-11-11 16:30</Text>
                    <Button variant="outline" colorScheme="blue">使用文件</Button>
                    <DeleteIcon />
                  </Flex>
                </Flex>
                <Flex alignItems="center" p="16px">
                  <Text flexBasis="540px"  textAlign="left">10 月報價單</Text>
                  <Flex justifyContent="space-between" alignItems="center" flexGrow="1">
                    <Text>2022-11-11 16:30</Text>
                    <Button variant="outline" colorScheme="blue">使用文件</Button>
                    <DeleteIcon />
                  </Flex>
                </Flex>
              </Stack>
            </Box>
            <Text textAlign="left" mt="16px" color="#78797D">檔案大小不得超過 10 MB</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
  )
}

function StepTwo ({setStep}) {
  return (
    <Container bg="white" maxW="1014px" px="34px" pt="40px" pb="240px" textAlign="left">
      <Text mb="8px">文件名稱<span style={{color: 'red'}}>*</span></Text>
      <Input mb="64px" placeholder='請輸入檔案名稱'/>
      <Text mb="8px">上傳文件<span style={{color: 'red'}}>*</span></Text>
      <Input mb="64px" />
      <Text mb="8px">建立標籤</Text>
      <Input mb="32px"  placeholder='請輸入標籤名稱'/>
      <Button onClick={() => setStep(Step.THREE)}>下一步</Button>
    </Container>
  )
}

function UploadSection () {
  const [step, setStep] = useState(Step.ONE)

  let component = step == Step.ONE ? <StepOne nextStep={() => {setStep(Step.TWO)}} /> :
                  step == Step.TWO ? <StepTwo setStep={setStep}/> :
                  step == Step.THREE ? <StepThree /> : <StepFour />



  return (
    <Box width={{base: '100%', lg: '1010px'}} mt={{base: "32px", lg: "116px"}}>
        {component}
    </Box>
  )
}

export default UploadSection