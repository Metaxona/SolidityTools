import {
Box,
Flex,
Card,
Heading,
Text,
Image,
useColorModeValue
} from '@chakra-ui/react';
import { FaGithub, FaDiscord } from 'react-icons/fa'
import SolidityTools from '../../assets/SolidityTools.svg';
export default function Footer(){
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} p={'1rem'} position={'absolute'} bottom={0} w={'100dvw'} h={'4rem'}>
            <Flex justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Image src={SolidityTools} w={'2rem'} h={'2rem'} />
                    <Heading size={'sm'}>Solidity</Heading>
                    <Heading size={'sm'}>Tools</Heading>
                </Flex>
                <Flex alignItems={'center'} gap={'0.2rem'}>
                    <Text>Metaxona</Text>
                    <Text>©</Text>
                    <Text>{new Date().getFullYear()}</Text>
                </Flex>
                <Flex gap={'1rem'} mr={'2rem'} alignItems={'center'}>
                    <FaGithub />
                    <FaDiscord />
                </Flex>
            </Flex>
        </Box>
    );
}