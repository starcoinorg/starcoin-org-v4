---
title: "Starcoin的第一个跨链桥，带来了MOVE和EVM之间的安全连接"
date: 2022-06-20
summary: "第一阶段，我们将支持 STC、ETH、USDT 这三种资产在 Starcoin 和 Ethereum 两条公链之间的互跨。 理论上目前 Poly 跨链桥已经支持的基础设施（近三十条公链）上的各种加密资产都很容易添加到支持列表中...."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![starcoin_bridge](/images/hackathon/starcoin_bridge.jpeg)

第一阶段，我们将支持 STC、ETH、USDT 这三种资产在 Starcoin 和 Ethereum 两条公链之间的互跨。

理论上目前 Poly 跨链桥已经支持的基础设施（近三十条公链）上的各种加密资产都很容易添加到支持列表中，实现这些加密资产在 Starcoin 和其他公链之间的互跨。虽然目前我们暂时只支持同质化代币，但接下来有可能会增加 NFT 的支持。

我们相信未来是多链的世界，每一个公链都因其拥有的独特价值而存在，跨链桥连通各个公链，是公链价值的倍增器。

比如，我们可以将 ETH 和 USDT 从 Ethereum 跨入 Starcoin，然后在 Starswap（一个 Starcoin 上的 DEX，去中心化交易所）中添加 ETH/STC、USDT/STC 等流动性池子，这将会大大增加 Starcoin 上的加密资产的流动性。Starswap 的流动性提供者除了或者 Swap 手续费收益之外，还可以将获得 LP Tokens 抵押到 Starswap 的 Farms 中，通过 farming 获得额外的收益（Starcoin 上的 STAR 代币）。

当然，用户也可以将 STC 从 Starcoin 跨到以太坊上，在以太坊丰富的 DeFi 生态中进一步挖掘 STC 的使用价值。

> **资产的跨链是如何实现的呢？**

很多人都知道，某个 Token 是某个链上的“原生资产”，比如 ETH 是以太坊上的原生资产。严格意义上来说，在其他链上是没有真正的 ETH 存在的，那么 ETH 又是怎么跨到其他链上的呢？

这里我们借用一下 Poly 为描述加密资产的跨链过程定义的“资产本位”的概念：一个 Token 在不同的链上有不同的表现形式，但是它们有同一个“本位”，具备相同的价值。用 USDT 去理解这个概念就清楚了：我们知道，USDT 在以太坊上发行的是 ERC20 版本的 UDST、在 TRON 上发行的 TRC20 版本的 USDT，但不管是在哪个链上发行的一个 USDT，都具备同样的“一美元”的价值。

然后我们引入“映射资产”的概念。某个链上的原生资产在另外一个链上（严格意义上来说）可能本身是不存在的，但是我们可以在这“另外一个链上”创建这个资产的“映射资产”，只要这个映射资产具备和原生资产一样的价值（比如说，持有映射资产的人总是可以拿着它换回原生资产），那么不管是原生还是映射的资产，都是同一个“本位”的资产。

比如说，我们可以在 Starcoin 上创建 ETH 的映射资产，并称之为 XETH。

当我们需要将 ETH 从 Ethereum 跨到 Starcoin 的时候，实际上我们是将 ETH 发送到（锁定在） Ethereum 的一个智能合约（Poly 把这个合约叫做 LockProxy），然后在 Starcoin 上的另一个智能合约会铸造（mint）出同等数量的 ETH 的映射资产 XETH，然后将 XETH 发送给 Starcoin 上的“目标账号”。

也就是说，用户在 Starcoin 上持有的是 ETH 的映射 XETH。当然，持有 XETH 的用户总是可以通过在 Starcoin 上销毁 XETH（也就是将 XETH 发送给 Starcoin 上的一个智能合约），然后在 Ethereum 上重新获得（解锁）同等数量的 ETH。于是我们可以认为：一个 ETH 和一个 XETH 具有同样的价值。

> **跨链桥的安全是重中之重**

这次 Elements Studio 和 Poly 的合作，双方特意在安全性上做了增强的考虑：

1.Starcoin 链上合约使用的 Move 语言是目前最安全的智能合约语言。

2.我们为 Starcoin-Poly 跨链在 Ethereum 上独立部署了 LockProxy 合约（相当于使用独立的金库），避免受到其他链上的不安全因素的影响。

3.Elements Studio 团队开发了跨链资金的监控服务。