import {
Box,
Flex,
Text,
Link,
useColorModeValue,
Hide
} from '@chakra-ui/react'
import { FaHome, FaCalculator, FaEthereum, FaImage } from 'react-icons/fa'
import { Link as ReactLink, NavLink} from 'react-router-dom'

const navColor = '#5CB9FE';
export function MobileNavigation(){

    return(
        <Hide above='lg'>
            <Box bg={useColorModeValue('gray.200', 'gray.700')} h={"3.5rem"} w={'100dvw'} p={'1rem'} position={'fixed'} bottom={0} zIndex={10} >
                <Flex flexDirection={'row'} gap={'1rem'} justifyContent={'space-evenly'} >
                    <NavLink to='/' style={({isActive})=> isActive ? {color: navColor} : {}} > 
                        <FaHome style={{margin: 'auto'}} />
                        <Text fontSize={'x-small'}>Home</Text>
                    </NavLink>
                    <NavLink to='/nft' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <FaImage style={{margin: 'auto'}} />
                        <Text fontSize={'x-small'}>NFT</Text>
                    </NavLink>
                    <NavLink to='/token' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <FaEthereum style={{margin: 'auto'}} />
                        <Text fontSize={'x-small'}>Token</Text>
                    </NavLink>
                    <NavLink to='/calculator' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <FaCalculator style={{margin: 'auto'}} />
                        <Text fontSize={'x-small'}>Coming Soon</Text>
                    </NavLink>
                </Flex>
            </Box>
        </Hide>
    )
}

export function Navigation(){
    return(
        <Hide below='lg'>
            <Box>
                <Flex flexDirection={'row'} gap={'1rem'} justifyContent={'space-evenly'} >
                    <NavLink to='/' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <Flex flexDirection={'row'} gap={'0.2rem'}>
                            <FaHome style={{margin: 'auto'}} />
                            <Text fontSize={'medium'}>Home</Text>
                        </Flex>
                    </NavLink>
                    <NavLink to='/nft' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <Flex flexDirection={'row'} gap={'0.2rem'}>
                            <FaImage style={{margin: 'auto'}} />
                            <Text fontSize={'medium'}>NFT</Text>
                        </Flex>
                    </NavLink>
                    <NavLink to='/token' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <Flex flexDirection={'row'} gap={'0.2rem'}>
                            <FaEthereum style={{margin: 'auto'}} />
                            <Text fontSize={'medium'}>Token</Text>
                        </Flex>
                    </NavLink>
                    <NavLink to='/calculator' style={({isActive})=> isActive ? {color: navColor} : {}} >
                        <Flex flexDirection={'row'} gap={'0.2rem'}>
                            <FaCalculator style={{margin: 'auto'}} />
                            <Text fontSize={'medium'}>Coming Soon</Text>
                        </Flex>
                    </NavLink>
                </Flex>
            </Box>
        </Hide>
    )
}