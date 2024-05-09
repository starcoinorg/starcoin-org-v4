---
title: "Starcoin AMA Recap: Talk about the Move ecosystem project whitepaper (2)"
date: 2022-09-16
summary: "Starcoin actually did some experiments before we went live on the main network as to whether parallel execution could help with the overall TPS..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"
image: https://miro.medium.com/max/700/1*N5XwAUKw2EfGBD2T250Vhg.png
---

![img](https://miro.medium.com/max/700/1*N5XwAUKw2EfGBD2T250Vhg.png)

**Tim**

Starcoin actually did some experiments before we went live on the main network as to whether parallel execution could help with the overall TPS, but there are still some differences between a decentralised PoW network and some of the more centralised PoS.

**Jolestar**

The more transactions contained in a block, the more efficient the parallelism. For example, if a block contains 150,000 transactions and is executed in one second, the TPS will be 150,000. Splitting it across multiple cores and executing in parallel with tens of thousands of TPS per core will do the trick. The problem is how to put so many blocks into a network with uncertainty to broadcast synchronization, in fact, the problem will be here, this is the difference between the two essentially or two consensus methods, that is, the verification node is certain or uncertain is the essential difference between the two methods on a point. It is not that due to the transmission problem or bottleneck of the network.

**Tim**

In fact, for a network, it is very likely that the bottleneck is in node data synchronization or block data synchronization, rather than within a node.

**Jolestar**

Because of the uncertainty of the outgoing nodes, blocks are generally broadcast using the Gossip protocol. Since the current nodes do not know which nodes are likely to be out of the block, they will broadcast it to the public layer by layer as soon as possible, and there has to be a waiting time in the middle of the network broadcast. If the blocks are too large, or if the outgoing blocks are too short, this can lead to too frequent forks and then instability in the blockchain network. This is why Starcoin uses an optimised block-out strategy that allows it to maximise TPS without too many uncle blocks (representing the probability of a fork.) There is actually another bottleneck that occurs on disk. If a transaction is executed very fast, the bottleneck will end up on the write disk, so a good local disk will be required to finish the transaction, requiring a high level of hardware on the node device. From a crypto native perspective, it is desirable that the nodes do not require too much equipment, so that most people can run a full node.

**Tim**

The infrastructure also has a great need for optimisation, and there has been a lot of innovation in this area in the last few years in L1, such as the p2p network mentioned earlier where blocks or transaction data must be synchronised, and there are many solutions to accelerate optimisation. The real-time nature of the data will bring some business value, and thus will drive some participants to have a very strong motivation to optimise, as faster data transmission can bring packing priority and even some profit taking opportunities. If a node receives a new block and some of the transactions in it have not yet been synchronised, the verification process will be more passive, and it will not be able to compete in the packaging of the new block. Therefore there will also be a significant financial loss of out of block rewards

**Tim**

Fourthly, let’s talk about ease of use. The account model in Move is still different from the previous blockchain, which makes it easier for users to use and understand. Ease of use also includes the ability to be upgraded.

The Aptos white paper spends a lot of pages describing, one of them is node scalability and the other is configuration scalability on the chain. Public chains have many runtime parameters, and these are usually part of the consensus. A light node joins the network for verification by fast synchronisation and needs to get the latest configuration information quickly to ensure that the consensus and the whole network are the same.

The other is an on-chain upgrade, where the latest consensus code is used as a way to make the new code effective directly through governance, via a voting mechanism by on-chain users. In previous public chains such as Bitcoin and Ether, an important node consensus code modification would require all node operators to complete at an agreed time, and a node that did not upgrade would create a more serious problem such as a hard fork, as it could not identify the new consensus and data. For the Move ecological public chain, the ability to upgrade directly on the chain without updating the nodes has been experienced by everyone at Starcoin.

**Jolestar**

Since last year, Starcoin has upgraded its system contracts 10 times, basically to ensure this compatibility. We have moved some of the logic that was originally implemented on the chain, whether it is consensus or some of the account but verification methods, into the contract, so in most cases, if the contract can be upgraded, there is no need for a hard fork. The only case where a hard fork is needed is when the interface between the code on the chain and the contract changes, but in most other cases there is no need for a hard fork.

There are generally two ways to upgrade, the first way is the PoS verification node everyone voted to upgrade, and the other is the on-chain governance upgrade way. If the validation node votes, ordinary users have no way to participate in the way, but if it is the on-chain governance model, ordinary users may also be able to participate, which is the difference between these two ways, but the Aptos white paper has not yet described this piece in detail, maybe this to wait for the economic white paper out, may be described in the use of scenarios.

**Tim**

A very interesting question has just been raised: can upgrade decisions be initiated by the validator, or do they have to be negotiated by all the chains before they can be made? The boundary between what needs to be negotiated and what doesn’t is actually very difficult to distinguish. It is likely that the changes you make will be closely related to all the users on the chain, or even indirectly affect the benefits of some properties. If the node responsible for packaging the code can update it with a vote, it will affect the level of decentralisation and indirectly affect the security of the user’s property.

In the white paper, I said that we can look at how a public chain is designed in four ways according to its importance. What mechanisms does it have to ensure the security of user property and to ensure the security of smart contracts? The security we just discussed in detail is not much, because it is assumed that the public security capabilities inside move are shared by all Move projects.

The third point is performance, performance we have talked a lot about parallel execution, including its advantages and disadvantages. Performance is also important if the first two points can be done well and guaranteed.

The fourth point is ease of use. Blockchain projects need to be as simple as possible for users to use, so that ordinary people can easily understand and participate. For example, if you need to do some major upgrades on the chain by means of a DAO, there is a certain difficulty to decide whether the new upgrade will be approved or not through a vote.

Regarding decentralisation, Aptos has mentioned a light client design in the white paper to make participation easier and mentioned that it is possible to synchronise some of the block states and use some of the BFT timestamps to get some of the validation data, allowing validators to participate in the validator’s work more quickly.

**Jolestar**

Speaking of light nodes, there is another feature mentioned earlier on security that has something to do with this. Because recently many people reading the whitepaper would come to me and asked me what this piece means. One of the things it says is that for security purposes, it can pre-execute a transaction on the client side and show the output to the user. On Ethereum, when a transaction is executed, except for ETH transfer transactions, the result of the execution of other contract transactions is not very intuitive. When the wallet prompts, it is very difficult to prompt in detail, such as the change in the balance after the transaction. If it were very detailed, the wallet would need to be specially adapted for each contract, for example by parsing parameters. The Move pre-execution state output is very clear, which state has changed, will be prompted on the wallet, which Resource has changed, how the change, etc. Through the wallet list, you know what assets will be affected by the transaction, to avoid being cheated by malicious contracts. What is the relationship between this, and the light nodes mentioned earlier? Starcoin has now implemented a node that can connect to a remote node but uses a local virtual machine to execute transactions locally.

**Tim**

I’ve just been looking through the presentation material again and there was another interesting feature that I didn’t talk about on Twitter the other day.

Aptos is giving us some emphasis on the ability to manage NFTs in bulk, but not all current infrastructures support this, so I don’t know what the implementation mechanism is behind this Aptos feature.

I wonder what the implementation mechanism is behind this feature of Aptos. Jolestar can introduce it.

**Jolestar**

This piece is using the latest feature of Move, which is the implementation of Table, so it gives it the ability to aggregate large-scale NFTs under one account, and this is not a problem on Ethernet, where mapping can also store large-scale datasets.

Aptos probably means more for some competing chains, which haven’t implemented this very well.

**Tim**

Most of the participants in today’s live broadcast are industry practitioners or blockchain enthusiasts, and probably also writing some blockchain code, so the latest white papers like those in Move are still very good reading value for everyone. It is still quite inspiring for us to engage in some design and development in the blockchain.

That’s all for today, thanks for your participation.

> **Related content**

## [Starcoin AMA Recap: Talk about the Move ecosystem project whitepaper (1)](https://starcoin.medium.com/starcoin-ama-recap-talk-about-the-move-ecosystem-project-whitepaper-1-3595f33f6a79)

> **About Starcoin**

Starcoin provides the utmost security from the origin via its enhanced PoW consensus and Secure smart contract, using the language of Move. Through layered and flexible interoperability, it optimizes the building of ecosystems such as DeFi, NFTs, Gaming, etc., with higher efficiency and convenience. This process redefines value by empowering every participant in the ecosystem to enjoy the multiplication of values.

Follow Starcoin on social media to stay up to date with all the latest developments.

[**Website**](https://starcoin.org/en/) **|** [**Twitter**](https://twitter.com/StarcoinSTC) **|** [**Medium**](https://starcoin.medium.com/) **|** [**Discord**](https://discord.com/invite/starcoin)**|** [**Telegram**](https://t.me/Starcoin_STC)