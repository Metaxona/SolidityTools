import {
Heading,
Text,
Flex,
Box,
Card,
Button,
Link,
Image,
Badge
} from '@chakra-ui/react'
import { FaImage, FaEthereum, FaTools } from 'react-icons/fa'
import SolidityToolsOutlined from '../assets/SolidityToolsOutlined.svg'

export default function Home() {
    return(<Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
        <Image src={SolidityToolsOutlined} h={'15rem'} />
        <Heading>Solidity Tools</Heading>
        <Text>A Website For All Your Solidity Development Needs</Text>

        <Flex flexWrap={'wrap'} gap={'1rem'} justifyContent={'center'} mt={'2rem'}>
            <Card p={'1rem'} minWidth={'18rem'} maxW={'20rem'}>
                <Flex flexDirection={'column'} alignItems={'center'} gap={'1rem'}>
                    <FaImage />
                    <Text>NFTs</Text>
                </Flex>
            </Card>

            <Card p={'1rem'} minWidth={'18rem'} maxW={'20rem'}>
                <Flex flexDirection={'column'} alignItems={'center'} gap={'1rem'}>
                    <FaEthereum />
                    <Text>Tokens</Text>
                </Flex>
            </Card>

            <Card p={'1rem'} minWidth={'18rem'} maxW={'20rem'}>
                <Flex flexDirection={'column'} alignItems={'center'} gap={'1rem'}>
                    <FaTools />
                    <Text>Coming Soon</Text>
                </Flex>
            </Card>
        </Flex>

        <Card p={'1rem'} mt={'5rem'}>
            <Flex flexDirection={'column'} alignItems={'center'} gap={'1rem'}>
                <Heading size={'sm'}>Currently Supported Network/s</Heading>
                <Flex flexWrap={'wrap'} gap={'0.5rem'}>
                    <Text>Sepolia</Text> 
                    <Badge p={'0.2rem'} colorScheme='blue'>ERC20</Badge> 
                    <Badge p={'0.2rem'} colorScheme='blue'>ERC721</Badge> 
                    <Badge p={'0.2rem'} colorScheme='blue'>ERC1155</Badge> 
                </Flex>
            </Flex>
        </Card>
    </Flex>)
}