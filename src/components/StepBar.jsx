import { HStack, Badge, Button, Flex, Text, StackDivider, Box } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons"

function StepBar () {
  return (
    <Box display={{base: 'block', lg: 'flex'}} px="32px" shadow="lg">
      <Flex w="100%" alignItems="center" justifyContent="space-between" pr={{base: "0", lg: "31px"}}>
      <HStack h="76px"  spacing={{base: '6px', lg: '16px'}} divider={<Box w={{base: '20px', lg: '40px'}} h="1px" bg="#DADBE1"/>}>
        <Flex>
          <Badge w="24px" h="24px" borderRadius="50%" lineHeight="24px" mr={{base: '0', lg: '8px'}} colorScheme="blue">1</Badge>
          <Text display={{base: 'none', lg: 'block'}}>上傳檔案</Text>
        </Flex>
        <Flex>
          <Badge w="24px" h="24px" borderRadius="50%" lineHeight="24px" mr="8px" colorScheme="blue">2</Badge>
          <Text display={{base: 'none', lg: 'block'}}>確認上傳檔案</Text>
        </Flex>
        <Flex>
          <Badge w="24px" h="24px" borderRadius="50%" lineHeight="24px" mr="8px" colorScheme="blue">3</Badge>
          <Text display={{base: 'none', lg: 'block'}}>製作簽署檔案</Text>
        </Flex>
        <Flex>
          <Badge w="24px" h="24px" borderRadius="50%" lineHeight="24px" mr="8px" colorScheme="blue">4</Badge>
          <Text display={{base: 'none', lg: 'block'}}>下載簽署檔案</Text>
        </Flex>

      </HStack>
      <Box ml="auto">
        <QuestionOutlineIcon size="lg"/>
      </Box>
      </Flex>
      <Flex alignItems="center" h={{base: "66px", lg: 'auto'}}>
        <Text display={{base: 'block', lg: 'none'}} fontSize="20px">上傳檔案</Text>

          <Button variant="outline" colorScheme="blue" ml={{base:'auto', lg: "0"}}>取消</Button>
      </Flex>
    </Box>
  )
}

export default StepBar