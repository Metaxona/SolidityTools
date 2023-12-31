import {
Box,
Flex,
Button,
Link,
IconButton,
useColorModeValue,
useColorMode,
Text,
Tooltip,
color,
Icon,
Image,
Hide
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReactRouter } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Navigation } from './Navigation';
import { FaWallet } from 'react-icons/fa';
import { useAccount } from 'wagmi';
import SolidityTools from '../../assets/SolidityTools.svg'
import SolidityToolsOutlined from '../../assets/SolidityToolsOutlined.svg'

function Header() {

const { address, isConnected } = useAccount()
const {colorMode, toggleColorMode} = useColorMode()

return(<>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'sticky'} top={0} zIndex={10}>
        <Flex h={16} padding={"0.5rem"} py={"1rem"} alignItems={'center'} justifyContent={'space-between'}>
            <Link as={ReactRouter} to={'/'} _hover={{color: 'inherit'}}>
                <Flex flexDirection={'row'} alignItems={'center'}>
                    {colorMode == 'light' 
                    ? <Box><Image draggable={false} src={SolidityTools} alt="Solidity Tools" w={'3rem'} h={'3rem'} /></Box>
                    : <Box><Image draggable={false} src={SolidityToolsOutlined} alt="Solidity Tools" w={'3rem'} h={'3rem'} /></Box>}
                    <Hide below='md'><Text fontWeight={'bold'} fontSize={'x-large'} >S</Text></Hide>
                    <Hide below='md'><Text fontWeight={'bold'} fontSize={'x-large'} color={'#5CB9FE'}>T</Text></Hide>
                </Flex>
            </Link>
            <Navigation />
            <Flex gap={"1rem"}>
                <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} aria-label='Theme Mode' />                
                <Tooltip label={isConnected ? address : 'Connect Wallet'}>
                    <Box>
                        <ConnectButton label={<FaWallet/>} accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }} showBalance={{ smallScreen: false, largeScreen: true }} />
                    </Box>
                </Tooltip>
            </Flex>
        </Flex>
    </Box>
    </>)

}

export default Header
