import { Heading, Flex, Box, Text } from "@chakra-ui/react"
import NFTMintCard from "../components/NFT/NFTMintCard"
import { useAccount } from "wagmi"
import { ST7 } from '../components/NFT/ABI/ST7' 
import { ST1155 } from '../components/NFT/ABI/ST1155'

const ERC721List = [
    {
        nftAddress: ST7.contractAddress,
        nftABI: ST7.abi,
        blockExplorer: "https://sepolia.etherscan.io",
        chain: 11155111
    }
]
const ERC1155List = [
    {
        nftAddress: ST1155.contractAddress,
        nftABI: ST1155.abi,
        blockExplorer: "https://sepolia.etherscan.io",
        chain: 11155111
    }
]

export default function NFT() {
    const { isConnected } = useAccount();

    return(<Flex alignItems={'center'} flexDirection={'column'} gap={'1rem'}>
    <Heading>NFT Faucet</Heading>
    { isConnected ? 
    <>
    <Heading size={'md'}>ERC721</Heading>
    <Box>
        {ERC721List && ERC721List.map((itm, ind)=>
        <NFTMintCard key={`nft-${itm.nftAddress}-${ind}`} nftType={"ERC721"} nftAddress={itm.nftAddress} nftABI={itm.nftABI} blockExplorer={itm.blockExplorer} chain={itm.chain} />)}
    </Box>
    
    <Heading size={'md'}>ERC1155</Heading>
    <Box>
        {ERC1155List && ERC1155List.map((itm, ind)=><NFTMintCard key={`nft-${itm.nftAddress}-${ind}`} nftType={"ERC1155"} nftAddress={itm.nftAddress} nftABI={itm.nftABI} blockExplorer={itm.blockExplorer} chain={itm.chain} />)}
    </Box>
    </>
    :
    <Text>Please Connect Your Wallet</Text>
    }
    </Flex>)
}