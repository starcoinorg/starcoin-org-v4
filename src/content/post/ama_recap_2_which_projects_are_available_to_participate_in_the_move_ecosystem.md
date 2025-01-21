---
title: "AMA Recap (2): Projects in the Move Ecosystem - Starcoin"
meta_description: "Discover opportunities for Chinese developers in the Move ecosystem from the AMA highlights."
keywords: ""
twitter_card: "summary_large_image"
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2022-08-10
summary: "1.What kind of projects can I experience in the Move ecosystem? Tim: Starcoin is the first public chain to go live in the move ecosystem, which has..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/amar2.png)

# 1.What kind of projects can I experience in the Move ecosystem?

**Tim:**

Starcoin is the first public chain to go live in the move ecosystem, which has made a lot of meaningful attempts in the Move ecosystem over the past year.

**Infrastructure:**

- Stcscan, data service products, blockchain browser.

**Wallet:**

- Starmask: A secure entrance where no one has to wait.StarMask is a non-custodial Starcoin Wallet in your Browser. It is a browser extension for efficient and fast access to Starcoin-enabled distributed applications or “Dapps” in your Chrome browser!
- Onekey: All-in-One Crypto Wallet Trusted by Millions. Near, Solana, ETH, BTC, Starcoin STC and more.

**DeFi and NFT projects:**

- **DEX:**

Starswap: The most feature-rich DEX on the Starcoin network and Move ecosystem, with security and stability of assets. Only 6 months online. It is available for cross-chain liquidity mining, with annualized returns approaching triple digits.

- **Stablecoin:**

BFly：The over-collateralized stablecoin on Starcoin. You can pledge Starcoin native token STC or ETH to participate in stablecoin and get FAI through pledge.

- **NFT**

KikiVerse: an NFT (non-fungible token) collection. A collection of digital artwork stored on the Ethereum and Starcoin blockchain.

**Platform for building DAOs:**

DAOSpace: A one-stop platform for codeless customization of DAOs through DAO templates and a combinable plugin mechanism.

Add a note, We have held several sessions of Startrek, which is a project based on **Learn to Earn** model, aimed at attracting students who are interested in learning about move, learning while gaining experience in move development, and will receive some rewards or project support after graduation.

# 2.What is the latest project of Starcoin ecosystem?

**Jolestar:**

DAOSpace, the beta version of which has been deployed to the Halley test network, takes advantage of some of the features of Move, such as how it can be used to design plug-in systems and provide extensions that third parties can implement. In Solidity, this feature is generally implemented through inheritance and dynamic calls, which is safer than solidity, while Move ensures the security and ease of use of the DAOSpace plug-in system. We have figured out a set of design patterns. If you are interested in this, you can check out the code in Starcoin-framework.

We expect to roll out the test at the end of August.

# 3.What are the other highlighted projects of Move ecosystem?

**Jiefeng Yang:**

I’ve been involved in developing applications on Starcoin, one of which is Oracle, and we know that there is a Chainlink in the EVM ecosystem, which is supposed to be the most significant “decentralized” Oracle network in terms of market share. At the moment, there is no equivalent in the Move ecosystem. There are some contracts on Starcoin that require data from external Oracle, such as putting some coin pair prices on the chain from an external exchange. Some projects rely on our Starcoin Core development team to provide what is a more centralized mechanism to feed prices to the contracts on the chain. Ideally, this should be done in a more decentralized way. Like Chainlink, they claim to be a decentralized Oracle network. But at the moment, the Starcoin Core team may not have the resources and energy to do this all the way. A more decentralized Oracle service is something that I think is necessary for the Move ecosystem.

Then we recently launched Starcoin and Poly cross-chain bridge project. Currently, we support a limited number of tokens (ETH, STC, and USDT) to cross between Ethereum and Starcoin. In addition to fungible tokens, Poly cross-chain bridge supports NFT crossing-chain. As you know, we now have some ecological projects on Starcoin, such as Kikoverse, which have very cheap NFTs. If we can cross these NFTs to other chains, maybe the price will be hyped up soon because it’s so cheap. So such a cross-chain bridge feature is also something that developers might consider participating in.

By adding some functionality to an existing project, developers may be able to cut into the Move application development space quickly. Because some projects have the primary contracts, our developers may have already done the general framework in the front, and it may not be challenging for later developers to add some features. They can see the output results quickly.

In addition, furthermore, Poly Network Cross-Chain Bridge is a generic framework for inter-chain messaging. You can think of it as an RPC bus, a framework where chains can invoke RPC calls to each other. Of course, such a framework may introduce security issues if it is too flexible. For example, if the source chain is allowed to call any contract on the target chain, it is likely to have security vulnerabilities. Poly Network bridge has whitelist, meaning that only certain contracts and certain methods may be allowed to call. But this whitelist is not to say that it cannot be added. Based on the inter-chain communication mechanism provided by the Poly Network cross-chain bridge, if the community is interested in doing some innovative features and applications, they can communicate with Poly Network “official”, and we can provide some help; the way is open. If it’s an exciting innovation, maybe I can also participate.

**Jolestar:**

Just a mention, there is no difficulty in moving from rust users to move, and rust developers are now generally focused on Move.

**Q.I would like to ask is if developers develop applications on Aptos, how to port to Starcoin, or port to each other, what is the difficulty of it?**

**Jolestar:**

This is something that the Move community has been discussing for a long time, and the fact that the EVM-based fork chain is largely unchanged from Solidity, which is considered to be one of the main attractions of keeping it as compatible as possible, has also limited the evolution of Solidity and EVM on different chains.

We believe that there is still a lot of room for evolution of the smart contract language, which is still very early, so Move provides the ability for different chains to extend the Move language. This may lead to some application compatibility issues, but we think it’s more important to keep the language evolving and we can share the Move ecosystem in other ways.

**Q:There are already mature applications in Starcoin ecosystem, such as Starswap, are there any future plans for Aptos? Will Kiko have plans for this as well?**

**Tim:**

For now, these projects do have different leaders who are thinking about this.It is critical for the core team at Westar, and actually it is an opportunity for the early developers who joined the Starcoin program.

Just mentioned kiko, the team has done a lot of innovation, the positioning of the launch is a meta-universe of this platform, not only to do some projects also issued NF, but also made a lot of innovative games, this in the field of Move I believe that many people still do not know how to write the game, but in Kiko has been online several versions of this game, so this piece including it is also integrated with the It is indeed a leading edge, including the integration of some DeFi features. We can explore both, and neither of these things is contradictory or conflicting.

**This is part two of the AMA recap on Twitter Space on July 30. Part 3 will be tweeted tomorrow. Stay tuned! Thanks!**