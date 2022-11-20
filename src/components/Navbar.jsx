import { Tabs, TabList, TabPanels, Tab, TabPanel, Avatar, Box, Image } from '@chakra-ui/react'
import { QuestionOutlineIcon, TriangleDownIcon, SearchIcon, BellIcon, CopyIcon } from '@chakra-ui/icons'
import logo from './../assets/Logo.png'

function Navbar () {
  return (
    <Tabs>
      <TabList display="flex" alignContent={"center"} justifyItems={"center"} height="68px" borderBottom="none" boxShadow="lg">
        <Box display="flex" alignItems="center" marginRight="auto" marginLeft="32px">
          <Image width="90px" height="31px" src={logo} alt="logo" />
        </Box>

        <Tab><CopyIcon marginRight="8px"/>文件</Tab>
        <Tab><SearchIcon  marginRight="8px"/>搜尋</Tab>
        <Tab><BellIcon  marginRight="8px"/>通知</Tab>
        <Box display="flex" alignItems="center" marginLeft="auto">
          <QuestionOutlineIcon />
          <Avatar size="sm" marginLeft="30px" bg="#DCECFF" />
          <Box marginLeft="8px" marginRight="14px">
            Jenny Wu
          </Box>
          <TriangleDownIcon marginRight="38px"/>
        </Box>
      </TabList>
    </Tabs>
  )
}

export default Navbar