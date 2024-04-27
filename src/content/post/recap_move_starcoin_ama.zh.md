---
title: "回顾 Move & Starcoin [AMA 07.23.2022]"
date: 2022-07-26
summary: "Web3领域经常提到Move具体是指什么，它有什么意义？ Tim: 包括3个层面含义 Move语言。Move是一门专门为数字资产而设计的智能合约语言，它对数字资产提供安全的保护，同时在编程模型上具有先进性； Move..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/ama1.png)

> 1. # Web3领域经常提到Move具体是指什么，它有什么意义？
>
>    Tim:
>
>    包括3个层面含义
>
>    1. Move语言。Move是一门专门为数字资产而设计的智能合约语言，它对数字资产提供安全的保护，同时在编程模型上具有先进性；
>    2. Move VM。Move VM是Move的运行环境，它提供运行时期安全检查，对数字资产提供增强的保护；
>    3. Move应用生态。Move生态是指采用Move语言开发的智能合约以及Web3应用，它通过简单适配之后可以在多个链上运行，并能够充分享受Move语言的强大以及Move VM的保护。
>
>    # Starcoin与Move有什么关系？
>
>    Tim: Starcoin is a proof-of-work blockchain that enables secure smart contracts to power services in decentralized finance, gaming and NFTs
>
>    Starcoin是第一个基于Move体系的无许可区块链，在利用Move强大的特性的基础上，也实现了很多独特的设计：
>
>    1. Easy gas 机制，可以利用平台上任意 token 支付 gas 费用
>    2. auto accept token 特性，防止空投机制进行欺骗及垃圾骚扰
>    3. 第一次在 Move 语言中实现了 Map(table) 功能
>    4. 第一个在Move生态实现了通过投票实现链上自动升级的治理机制，在整个行业也具有领先性。
>
>    # 近期move生态L1大爆发，有Aptos、Sui等，如何看待这些新型的公链的发展？
>
>    Tim：我们观察到Move几条链都在解决一个基础架构性能层面的问题，搭建满足未来Web3时代需要的基础设施，不过大家采用的是不同的路线。Aptos以及Sui的做法是通过优化L1，包括改进共识算法，提升节点的并行处理能力，让L1的TPS可以达到十万甚至更高级别。Starcoin采用的是另外一条路线，Starcoin L1主要聚焦于解决去中心化以及安全的问题，更高的性能通过L2来实现。
>
>    目前没法简单结论这些路线之间优劣，它也是行业内广泛接受的解决可扩展问题的不同尝试。
>
>    # **Starcoin L2 的扩展性解决方案有哪些创新？**
>
>    Tim: 目前Layer 2发展很快，很好的解决了Layer 1的可扩展问题，但如果我们放在Web3的大环境来考虑，它还存在2个问题：
>
>    1. Layer 2没有解决智能合约之间调用的可组合及可交互问题，每个Layer 2是一个孤岛，它需要通过类似跨链桥相似的做法来让token在一层二层之间流动，同时对于做市商来说，目前的Layer 2还存在流动性割裂的问题。
>    2. Layer 2的扩展存在性能上限，由于Layer 2需要依赖Layer 1来保存rollup数据，多个Layer 2都在抢夺Layer 1的访问资源，所以Layer 2的性能扩展实际上也存在性能的上限。
>
>    Starcoin是一个从头设计的分层区块链网络，因此多层之间可以无缝的集成在一起，并且实现协议的可组合性及可交互性。另外为了解决Layer 2的性能上限问题，Starcoin也有进一步的Layer 3解决方案，真正实现性能无上限的可扩展性。
>
>    # Starcoin过去一年有哪些进展？
>
>    Tim:
>
>    1. 制定了Move领域的Oracle, NFT 等标准
>    2. 上线了第一个 Move-EVM 跨链桥
>    3. 启动了第一个 Move Layer 2 rollup 实现 OMO
>    4. 上线了第一批 Move Dapp 包括 Starswap(DEX), BFly(Stablecoin), Kiko(Metaverse) 等
>    5. Move 领域第一个基于 SBT 的 DAO
>
>    # Move在2022年对行业用户有哪些机会？
>
>    Tim:
>
>    对于普通用户：可以挖掘 Starcoin 生态 Starswap 等高收益 DeFi 项目，也可以参与 Aptos, Sui 等 Move 生态新项目的测试网激励活动。
>
>    对于开发者：Move还处于一个生态早期，目前进入可以享受赛道的红利。开发者利用Move机会有2个思路，一是移植其他链上成熟的应用到Move生态；或者是利用Move独特的优势进行创新。
>
>    # Starcoin 近期有哪些营销激励奖励？
>
>    根据上周公布的roadmap更新，Starcoin接下来会有价值20万美元的Grant用于开发者扶持。感兴趣的开发者可以通过 [grant.starcoin.org](http://grant.starcoin.org/) 申请。