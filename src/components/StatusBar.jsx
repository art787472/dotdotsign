import { Tabs, TabList, Tab,  Box, Button, Badge, Menu, MenuButton, MenuList, MenuItem, Heading, Text, Image } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import signPersonally from './../assets/Sign_personally.png'
import signInvitation from './../assets/Sign_invitation.png'

function StatusBar () {
  return (
    <Tabs>
      <TabList display="flex"  justifyItems={"center"} height="82px" borderBottom="none" >

        <Tab alignItems="end" pb="18px" ml="16px">待自己簽署</Tab>
        <Tab alignItems="end" pb="18px">
          <Box display="flex" alignItems="center">
            待他人簽署
            <Badge w="22px" h="22px" marginLeft="4px" borderRadius='50px'>2</Badge>
          </Box>


        </Tab>
        <Tab alignItems="end" pb="18px"> 已完成</Tab>
        <Tab alignItems="end" pb="18px">已取消</Tab>
        <Tab alignItems="end" pb="18px">草稿</Tab>
        <Tab alignItems="end" pb="18px">已封存</Tab>
        <Box display="flex" alignItems="center" marginLeft="auto" marginRight="32px">

          <Menu>
            <MenuButton as={Button} colorScheme="blue" px="20px" py="12px" bg='blue.600'>
              新增
              <AddIcon marginLeft="8px"/>
            </MenuButton>
            <MenuList w="350px">
              <Link to="/upload">
              <MenuItem>
                <Box display="flex">
                  <Image src={signPersonally} w="63px" h="58px" ml="16px" mt="16px" mr="24px"/>
                  <Box py="23px">
                    <Heading fontSize='md' mb="8px">自己簽署</Heading>
                    <Text  fontSize='sm' color="gray.500">你是文件唯一簽署者</Text>
                  </Box>
                </Box>
              </MenuItem>
              </Link>
              <MenuItem>
                <Box display="flex">
                  <Image src={signInvitation}  w="63px" h="58px" ml="16px" mt="16px" mr="24px"/>
                  <Box  py="23px">
                    <Heading fontSize='md' mb="8px">邀請他人簽署</Heading>
                    <Text  fontSize='sm'  color="gray.500">指派簽署欄位給其他簽署人</Text>
                  </Box>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </TabList>
    </Tabs>
  )
}

export default StatusBar