---
title: "Starcoin’s First MOVE-EVM Secure Cross-Chain Bridge - Starcoin"
meta_description: "Starcoin's first cross-chain bridge connects Move and EVM ecosystems securely and efficiently."
date: 2022-06-20
summary: "The theme of this year's Starcoin Hackathon is “All in Metaverse & Defi on Starcoin”, which aims to bring participants together for a limited period to brainstorm for new ideas in the field of Metaverse & Defi...."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![starcoin_bridge](/images/hackathon/starcoin_bridge.jpeg)

During the first phase, we will support the crossover of STC, ETH, and USDT between Starcoin and Ethereum.

Theoretically, various crypto assets on the infrastructure already supported by Poly Network (nearly thirty public chains) can easily be added to the support list, enabling interoperability of these crypto-assets between Starcoin and other public chains. While we currently only support limited tokens, for now, it is possible that NFT support may be added next.

We believe that the future is a multi-chain world and each public chain exists because of its unique value. The cross-chain bridge connects all public chains and is a multiplier of the value of public chains.

For instance, we could cross ETH and USDT from Ethereum into Starcoin and then add liquidity pools of ETH/STC, USDT/STC, etc. to Starswap (a DEX on Starcoin, a decentralized exchange), which would greatly increase the liquidity of crypto assets on Starcoin. Starswap’s liquidity providers can earn additional revenue by farming LP Tokens (STAR tokens on Starcoin) by pledging them to Starswap’s Farms, in addition to Swap handling fee revenue.

Of course, users can also cross over STCs from Starcoin to Ethereum to further exploit the value of STCs in Ethereum’s rich DeFi ecosystem.

**How is the cross-chaining of assets achieved?**

As many of you know, a Token is a “native asset” on a chain, for example, ETH is a native asset on Ethereum. Technically speaking, there is no real ETH on other chains, so how does ETH cross over to other chains?

Here we borrow the concept of “asset locality” defined by Poly to describe the cross-chain process of crypto assets: a Token has different manifestations on different chains, but they have the same “locality” and have the same value. It is clear to understand this concept in terms of USDT: we know that USDT is issued as the ERC20 version of UDST on Ether and the TRC20 version of USDT on TRON, but a USDT has the same value of “one dollar” regardless of the chain it is issued on.

Then we introduce the concept of “mapped assets”. A native asset on a chain may not exist on another chain (in the strict sense), but we can create a “mapped asset” of this asset on this “other chain”, as long as this mapped asset has the same value as the native asset (for example, the person holding the mapped asset can always exchange it for the native asset). As long as the mapped asset has the same value as the original asset (for example, the person holding the mapped asset can always exchange it for the original asset), then both the original and the mapped asset are the same “native” asset.

For example, we can create a mapped asset of ETH on Starcoin and call it XETH.

When we need to cross ETH from Ethereum to Starcoin, we actually send (lock) the ETH to a smart contract on Ethereum (Poly calls this contract LockProxy), and then another smart contract on Starcoin will mint the same amount of ETH as the mapped asset XETH, and then send the XETH to the “target account” on Starcoin. XETH, and then sends XETH to the “target account” on Starcoin.

Of course, a user holding XETH can always regain (unlock) the same amount of ETH on Ethereum by destroying XETH on Starcoin (i.e. sending XETH to a smart contract on Starcoin). So we can assume that an ETH and a XETH have the same value.

**The safety of cross-chain bridges is a top priority**

The partnership between Elements Studio and Poly has been deliberately designed with enhanced security in mind.

\1. The Move language used in the Starcoin contract is the most secure smart contract language available.

\2. We have deployed LockProxy contracts independently on Ethereum for Starcoin-Poly cross-chain (equivalent to using a separate vault) to avoid potential vulnerabilities on other chains.

\3. Elements Studio team will have a real-time monitoring service for cross-chain funds.