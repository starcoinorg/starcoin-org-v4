---
title: "Starcoin: First PoW Public Chain to Support “Easy Gas” in Move Ecosystem"
meta_description: "Starcoin becomes the first PoW blockchain to support 'Easy Gas' in the Move ecosystem, simplifying transactions with flexible gas payments and user-friendly features."
keywords: ""
twitter_card: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2023-01-24
summary: "Previous：Starcoin Easy Gas : More Flexible,More Easy Starcoin: A pioneer in the blockchain world, as the first PoW public chain to..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"
image: https://miro.medium.com/max/1400/1*to2FkMUPZKj-y7bg88CM5g.jpeg
---

![img](https://miro.medium.com/max/1400/1*to2FkMUPZKj-y7bg88CM5g.jpeg)

Previous：[Starcoin Easy Gas : More Flexible,More Easy](https://starcoin.medium.com/starcoin-easy-gas-more-flexible-more-easy-f242d7fb96b5)

**Starcoin: A pioneer in the blockchain world, as the first PoW public chain to support “Easy Gas” in the Move ecosystem. Making transactions easier and more user-friendly.**

Starcoin is a Pow public chain that supports user-defined Token payments for Gas and uses DAO governance to address the flexibility and ease of use of Gas payment for public chain transactions. Using the “Easy Gas” solution, users can pay for Gas fees, which are required to perform transactions on the blockchain, with any token supported on the platform. This eliminates the need for users to hold the native token of the blockchain network, making it easier for them to initiate transactions.

## Starcoin: Pioneering “Easy Gas” in the Move Ecosystem

The Move programming language is a new language designed to write safe smart contracts for use on blockchain platforms. It is platform-agnostic, meaning it can be used across different blockchains with different data and execution models. The critical feature of Move is its ability to define custom resource types with semantics inspired by linear logic, which allows for resources to be moved between program storage locations but not cloned or implicitly discarded. The Move also has a robust type system with linear resource types, runtime checks, and formal verification.

Starcoin is a Pow public chain in the Move ecosystem that supports user-defined Token payments for Gas and uses DAO governance to address the flexibility and ease of use of Gas payment for public chain transactions.

![img](https://miro.medium.com/max/1400/1*dchSgYpDtcBnlSYRXzFG6g.jpeg)

## How does Starcoin do Easy Gas?

Starcoin’s “Easy Gas” solution allows users to pay for Gas fees, which are required to perform transactions on the blockchain, with any token supported on the platform. This eliminates the need for users to hold the native token of the blockchain network, making it easier for them to initiate transactions.

![img](https://miro.medium.com/max/1400/1*txCAUHi8aHjPzjwqbQYaLg.jpeg)

We natively support any token on the chain for gas fee payment in Starcoin. By combining with Starcoin Dao, we can flexibly decide which tokens can be used for gas fee payment without the need for proxy nodes and modifying the user’s code logic. Instead, specify the token for gas fee payment directly in the transaction.

![img](https://miro.medium.com/max/1400/1*SSzclKiRS4nGOLvRuth5bg.jpeg)

As shown in the diagram, after a user submits a transaction for submission, the process of paying for Gas fees is handled through a series of steps：

- **Prologue:** Calculates the Gas fee required by the exchange and checks if the user has enough funds to pay.
- **Eprologue:** After the transaction is executed, the Gas Fee Token specified by the user is converted to STC and stored in the queue Gas Fee payment queue for future payment to the miner.
- **PriceOracle:** Oracle service for obtaining the price of the token. eprologue and eprologue will both rely on it to obtain the price to check and calculate if there is enough money to pay the Gas fee.
- **Dao&& GasOracleProposalPlugin:** Used to resolve which token can become a Gas Token and who can update the price of the gas price.

**As we can see, with Starcoin Dao, the complex work that needs to be done by intermediate proxy nodes in Ethernet is done in Starcoin stdlib. Starcoin is the first public chain in the Move ecosystem that achieves user-defined Token payment for Gas in combination with DAO governance, solving the problem of flexibility and ease of use of Gas payment for public chain transactions.**

# Why does the blockchain need Easy Gas?

Blockchain networks, such as Ethereum, require users to pay Gas fees to perform network transactions. These fees are used to compensate the network’s miners for the computational power and resources they use to process and validate the transactions.

![img](https://miro.medium.com/max/1400/1*Y9K6pew1QoHDXx9NKw74MQ.jpeg)

However, in most public blockchain networks, users must hold a specific Token in its native chain before they can pay for Gas fees. This can be a barrier to the promotion and use of web3 applications, as developers must educate users on how to use and buy the native token before they can use their DApps. Additionally, paying Gas fees can be confusing and difficult for some users, especially those new to blockchain technology.

This is where “Easy Gas” solutions like Starcoin come in. Starcoin’s “Easy Gas” solution natively supports any token on the chain for gas fee payment. By allowing users to pay for Gas fees with any token supported on the platform, these solutions make it easier for users to initiate transactions on the blockchain. It eliminates the need for users to hold the native token of the blockchain network, which can be a barrier to adoption. It also makes the process of paying for Gas fees more straightforward, more user-friendly, and accessible to a broader audience.

# Summary

Starcoin’s “Easy Gas” solution is a significant leap forward for the blockchain world, making transactions more straightforward and user-friendly. Easy Gas solutions also help to promote the use and development of decentralized applications (DApps) on the blockchain, as it removes one of the main obstacles to user adoption and engagement.

Starcoin’s commitment to security, decentralization, and user-friendliness makes it a leading project in the blockchain space. With a unique decentralized governance mechanism and core mechanisms like digital assets, Starcoin is set to revolutionize how we use blockchain technology.