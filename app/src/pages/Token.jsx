import { Flex, Heading } from "@chakra-ui/react";
import TokenMintCard from "../components/Token/TokenMintCard";
import { SolidityToolsToken } from '../components/Token/ABI/STT_ABI'
import { useAccount } from "wagmi";

const tokenLists = [
    {
        tokenAddress : SolidityToolsToken.contractAddress, 
        tokenABI : SolidityToolsToken.abi,
        blockExplorer : "https://sepolia.etherscan.io",
        chain: 11155111
    }
]

export default function Token() {
    const { isConnected } = useAccount()

    return(<Flex alignItems={'center'} flexDirection={'column'} gap={'1rem'}>
    <Heading>Token Faucet</Heading>

    <Heading size={'md'}>ERC20</Heading>
    {isConnected ? 
    <Flex flexWrap={'wrap'} gap={'1rem'} justifyContent={'center'}>
        {
            tokenLists.map((item)=> 
            <TokenMintCard 
                key={`ERC20-${item.tokenAddress}`}
                tokenAddress={item.tokenAddress} 
                tokenABI={item.tokenABI} 
                blockExplorer={item.blockExplorer}
                chain={item.chain}
            />)
        }
         
    </Flex>
    : "Please Connect Your Wallet"}
 
    {/* <Heading size={'md'}>ERC777</Heading> */}
 
    </Flex>)
}