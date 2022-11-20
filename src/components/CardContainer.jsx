import {  Stack, HStack, Card, CardBody, CardFooter, Text, Heading, Badge, IconButton, Avatar, Menu,
  MenuButton,
  MenuList,
  MenuItem } from '@chakra-ui/react'
import { BsThreeDotsVertical, BsTag } from 'react-icons/bs'
import { GrDocumentPdf } from 'react-icons/gr'
import { BiBox, BiTrash } from 'react-icons/bi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { Icon, InfoOutlineIcon, DownloadIcon, EditIcon } from '@chakra-ui/icons'

function DocCard () {
  return (
    <Card bg="white" w="316px" h="209px">
      <CardBody textAlign="left">
        <Heading size="md" mb="10px">產品測試文件</Heading>
        <HStack spacing="8px" mb="27px">
          <Badge bg="#FAEDCC" fontSize="14px">產品教學</Badge>
          <Badge bg="#DFEAFF" fontSize="14px">產品測試</Badge>
        </HStack>

        <Text>最後修改時間：2022-10-26</Text>
        <Menu>
          <MenuButton as={IconButton} aria-label='Card Options' icon={<BsThreeDotsVertical />} pos="absolute" top="8px" right="8px" cursor="pointer" bg="transparent" />
          <MenuList color="#78797D" >
            <MenuItem icon={<InfoOutlineIcon />} >
              簽署狀況
            </MenuItem>
            <MenuItem icon={<HiOutlineClipboardCheck />} >
              稽核軌跡
            </MenuItem>
            <MenuItem icon={<DownloadIcon />} >
              下載檔案
            </MenuItem>
            <MenuItem icon={<EditIcon />} >
              重新命名
            </MenuItem>
            <MenuItem icon={<BsTag />} >
              管理標籤
            </MenuItem>
            <MenuItem icon={<BiBox />} >
              封存
            </MenuItem>
            <MenuItem icon={<BiTrash />} >
              刪除
            </MenuItem>
          </MenuList>
        </Menu>
        <Icon as={ GrDocumentPdf } w="42px" h="64px" color="blue.600" pos="absolute" top="24px" right="64px"/>
      </CardBody>
      <CardFooter borderTop="1px solid #F1F2F5" alignItems="center">
        <Text mr="8px">簽署者：</Text>
        <Avatar mr="4px" size="sm" w="20px" h="20px"/>
        <Text>Jenny Wu</Text>
      </CardFooter>
    </Card>
  )
}

const cardData = {
  name: '產品測試文件',

}

function CardContainer() {
  return <Stack direction={['column', 'row']}  px="40px" pt="24px" spacing="32px">
    <DocCard />
    <DocCard />
  </Stack>
}

export default CardContainer;