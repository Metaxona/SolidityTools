import {
Box,
Flex,
Card,
Button,
Heading,
Text,
Link,
Tooltip,
Select,
Input,
Badge
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useAccount, useNetwork } from 'wagmi';
import { readContract, readContracts, writeContract, watchContractEvent } from '@wagmi/core';
import shortenAddress from '../../utils/shortenAddress';
import { FaCopy, FaCube } from 'react-icons/fa';

export default function NFTMintCard({nftAddress, nftABI, nftType, blockExplorer, chain}){
    const { address } = useAccount()
    const [isMinting, setIsMinting] = useState(false);
    const [nftName, setNftName] = useState("NFT")
    const [nftBalance, setNftBalance] = useState(0)
    const { chain: currentChain } = useNetwork()
    const [amount, setAmount] = useState(1);
    const [nftId, setNftId] = useState(0);

    const nftInfo = {
        address: nftAddress,
        abi: nftABI
    }

    useEffect(()=>{
        async function nftData(){
            const balance = nftType === "ERC721" ? {
                ...nftInfo,
                functionName: "balanceOf",
                args: [address] 
            }
            :
            {
                ...nftInfo,
                functionName: "balanceOf",
                args: [address, nftId] 
            }

            const [_name, _balance] = await readContracts({
                contracts: [
                    {
                        ...nftInfo,
                        functionName: "name"
                    },
                    balance
                ]
            })

            setNftName(_name.result) 
            setNftBalance(_balance.result) 
        }

        nftData()

    }, [isMinting, address, nftBalance, nftId])

    async function Mint(){
        setIsMinting(true);
        
        const mintData = nftType === "ERC721" ? {
            ...nftInfo,
            functionName: "faucetMint",
            args: [amount]
        }
        :
        {
            ...nftInfo,
            functionName: "faucetMint",
            args: [nftId, amount, "0x0"]
        }

        const { hash } = await writeContract(mintData)

        const mintEvent = nftType === "ERC1155" ? "TransferSingle" : "Transfer"

        const unwatch = watchContractEvent({
            ...nftInfo,
            eventName: mintEvent
        },
        (data)=>{ 
            if(data[0].args.to === address) { setIsMinting(false); unwatch() }
         })
    }

    return(
    <Card p={'1rem'} minW={'18rem'} maxW={'20rem'}>
        <Flex flexDirection={'column'} gap={'1rem'} alignItems={'center'}>
            <Flex gap={'1rem'} flexWrap={'wrap'} justifyContent={'center'}>
                <Badge>Name: {nftName ? nftName : "NFT"}</Badge>
                <Badge>Type: {nftType ? nftType : "Unknown"}</Badge>
                <Tooltip label={"View NFT on Block Explorer"}>
                    <Link href={`${blockExplorer}/address/${nftAddress}`} target='_blank'><FaCube /></Link>
                </Tooltip>
            </Flex>
            <Tooltip label={nftAddress}>
                <Flex flexDirection={'row'} gap={'1rem'} alignItems={'center'}>
                    {shortenAddress(nftAddress)} 
                    <FaCopy onClick={()=>{navigator.clipboard.writeText(nftAddress)}} cursor={'pointer'} />
                </Flex>
            </Tooltip>
            {nftType === "ERC1155" && <>
            <Text>Token Id</Text>
            <Select onChange={(e)=>setNftId(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </Select>
            </>}
            {nftType === "ERC721" || nftType === "ERC1155" ? <Flex flexDirection={'row'} gap={'1rem'}>
                <Button onClick={()=>setAmount((prev)=>{return prev === 1 ? 1 : prev-1 })}>-</Button>
                <Input textAlign={'center'} type='number' w={'5rem'} value={amount} min={1} max={5} readOnly/>
                <Button onClick={()=>setAmount((prev)=>{ return prev === 5 ? 5 : prev+1})}>+</Button>
            </Flex> : ""}
            <Text>Your Balance {nftType === "ERC1155" ? `[ID: ${nftId}]` : "" } : {nftBalance ? parseFloat(nftBalance) : "0"}</Text>
            <Button onClick={Mint}>Mint</Button>
        </Flex>
    </Card>
    )
}