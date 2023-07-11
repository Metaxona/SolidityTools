import {
Box,
Flex,
Card,
Button,
Heading,
Text,
Input,
Link,
Badge,
Tooltip
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useContractWrite, useAccount, useNetwork } from 'wagmi'
import { readContracts, writeContract, watchContractEvent} from "@wagmi/core"
import { FaCopy, FaCube } from 'react-icons/fa';
import shortenAddress from '../../utils/shortenAddress';
import { formatEther } from 'viem';

export default function TokenMintCard({tokenAddress, tokenABI, blockExplorer, chain}){
    
    const { address } = useAccount()
    const [isMinting, setIsMinting] = useState(false);
    const [tokenName, setTokenName] = useState("Token")
    const [tokenSymbol, setTokenSymbol] = useState("TKN")
    const [tokenDecimals, setTokenDecimals] = useState(18)
    const [tokenBalance, setTokenBalance] = useState(0)
    const { chain: currentChain } = useNetwork()

    const tokenInfo = {
        address: tokenAddress,
        abi: tokenABI
    }

    useEffect(()=>{
        async function tokenData(){
            const [_name, _symbol, _decimals, _balance] = await readContracts({
                contracts: [
                    {
                        ...tokenInfo,
                        functionName: "name"
                    },
                    {
                        ...tokenInfo,
                        functionName: "symbol"
                    },
                    {
                        ...tokenInfo,
                        functionName: "decimals"
                    },
                    {
                        ...tokenInfo,
                        functionName: "balanceOf",
                        args: [address] 
                    }
                ]
            })

            setTokenName(_name.result) 
            setTokenSymbol(_symbol.result) 
            setTokenDecimals(_decimals.result) 
            setTokenBalance(_balance.result) 
        }

        tokenData()

    }, [isMinting, address, tokenBalance])

    async function Mint(){
        setIsMinting(true);
        
        const { hash } = await writeContract({
            ...tokenInfo,
            functionName: "faucetMint",
            args: [address]
        })

        const unwatch = watchContractEvent({
            ...tokenInfo,
            eventName: "Transfer"
        },
        (data)=>{ 
            if(data[0].args.to === address) { setIsMinting(false); unwatch() }
         })
        
    }

    return(
    <>
    {(chain === currentChain.id) ? 
    <Card p={'1rem'} maxW={'20rem'}>
        <Flex flexDirection={'column'} gap={'1rem'} alignItems={'center'}>
            <Flex gap={'1rem'} flexWrap={'wrap'} justifyContent={'center'}>
                <Badge p={'0.2rem'}>Name: {tokenName}</Badge>
                <Badge p={'0.2rem'}>Symbol: {tokenSymbol}</Badge>
                <Badge p={'0.2rem'}>Decimals: {tokenDecimals}</Badge>
                <Badge p={'0.2rem'}>Type: ERC20</Badge>
                <Tooltip label={"View Token on Block Explorer"}>
                    <Link href={`${blockExplorer}/address/${tokenAddress}`} target='_blank'><FaCube /></Link>
                </Tooltip>
            </Flex>
            <Tooltip label={tokenAddress}>
                <Flex flexDirection={'row'} gap={'1rem'} alignItems={'center'}>
                    {shortenAddress(tokenAddress)} 
                    <FaCopy onClick={()=>{navigator.clipboard.writeText(tokenAddress)}} cursor={'pointer'} />
                </Flex>
            </Tooltip>
            <Heading size={'sm'}>Your Balance: {formatEther(tokenBalance)}</Heading>
            {<Button onClick={Mint} isLoading={isMinting} loadingText={"Minting"} spinnerPlacement='start' >Mint</Button>}
        </Flex>
    </Card> 
    : ""}
    </>
    )
}