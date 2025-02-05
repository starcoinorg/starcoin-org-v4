---
title: "新航向的前奏： 什么是 FlexiDAG？"
meta_description: "了解 FlexiDAG 及其对区块链的变革性影响，为全新的 Starcoin 发展奠定基础。"
date: 2023-05-10
summary: "中本聪共识的起源 在中本聪共识中，设置了10分钟的区块时间，以确保网络安全和稳定。这个时间间隔确保所有网络矿工有足够的时间进行验证，避免网络拥堵带来的安全风险。 如果区块时间太短，矿工将不断..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"
image: https://miro.medium.com/v2/resize:fit:1400/1*r3gcmuS68tAE7CcVHZOZdA.png
---

![img](https://miro.medium.com/v2/resize:fit:1400/1*r3gcmuS68tAE7CcVHZOZdA.png)

## **中本聪共识的起源**

在中本聪共识中，设置了10分钟的区块时间，以确保网络安全和稳定。这个时间间隔确保所有网络矿工有足够的时间进行验证，避免网络拥堵带来的安全风险。

如果区块时间太短，矿工将不断尝试计算许多无法添加到区块链上的孤块，导致网络拥堵。这种拥堵反过来又会产生更多的孤块。因此，中本聪共识中的区块时间设置是一个保守的决定，为了设计的简单性和安全性而牺牲了性能。

虽然较短的区块时间可以提高系统的吞吐量和交易速度，但它也增加了网络拥堵的风险和网络攻击的可能性。因此，在确保网络安全的同时，实现更多的性能改进和更短的块状时间是很困难的。

然而，正在进行的研究和开发将会实现共识机制的改进，从而提高性能和网络安全。

## **叔块的思维**

在中本聪共识中，网络吞吐量可以通过增加区块大小或缩短区块间隔来增加。这两种方法都会增加网络中出现的竞争区块的概率。

在这些竞争区块中，最多只有一个区块可以进入主链，为交易处理作出贡献并增加吞吐量，而其他区块则成为孤块。

随着区块大小变大，区块间隔变短，孤块的数量增加。然而，增加无主区块率将降低双倍消费攻击的难度。因此，有必要将无主区块率限制在一个阈值之内。

同时，无主区块率可用于评估网络拥堵情况，并可相应地动态调整共识参数。

## **Starcoin 中的叔块**

Starcoin的重要改进之一是引入了叔块。我们将竞争失败的区块打包成叔块，使用**叔块率**评估网络拥堵情况，并动态调整区块时间和区块大小，以充分利用网络，提高吞吐量，并避免因区块过大或区块时间过短而造成过多的孤块，从而提高安全性。

然而，叔块中的交易并未被添加到区块链中，而是存储在内存池中，等待其他节点再次打包它们，并将其最终添加到最长的链中。因此，从整体的角度来看，即使引入了叔块，区块生成仍然是串行的。矿工不能在同一时间向链上添加多个区块。叔块只起到衡量网络拥堵的作用。它们使系统具有可扩展性，能够快速响应网络条件和采矿能力的变化，而整个系统仍然以串行方式产生区块。

## **并行产生区块**

中本聪共识并行化的一种方式是将所有符合区块创建规则的叔块同时打包到区块链上。交易不会被重放到交易池中，这意味着叔块也是已经被共识确认的有效区块。

如果基于某个时间点可以同时创建多个有效区块，那么每个新区块都可以被看作是最近创建的几个区块的子区块，所以它们都指向它们。基于此，我们的区块链拓扑结构将从单一链，变成一个有向无环图（DAG）。

然而，在实施这种方法时，需要解决几个问题：

1. 我们如何区分恶意的或非法的区块，并确定哪些区块是有效的？我们如何抵御51%的攻击？
2. 我们如何确认DAG中区块的顺序？

如果这些问题能够得到解决，那么我们就可以实现并行的PoW共识，矿工可以同时打包多个区块。网络中的孤块的数量将减少。

## **FlexiDAG**

**FlexiDAG，这是一项突破性的创新研发，旨在优化改变 PoW共识，真正去中心化的全球共识环境下的区块链性能和可扩展性问题。**

“FlexiDAG”的命名 — — “Flexible”和“DAG”的结合 — — 表示这项技术在区块链生态系统中的灵活的适应性和可扩展性。它有望实现并行块创建和高效共识，显着提高吞吐量和整体系统性能。

在传统的中本聪共识中，目标是根据最高的攻击成本来确定一条用于构建后续区块的链 — — 这被称为最长链。

相反，FlexiDAG 共识旨在专注于识别连接良好的子图，其中可以根据最高攻击成本构建后续块。该子图应显示强连通性，具有最少的孤块和节点之间的紧密连接。目标是在 FlexiDAG 中精确定位最相互关联的子图，这将成为添加到链中的一组确认块。

通过在 FlexiDAG 中组织区块，我们旨在实现并行区块创建，从而在保证安全性的同时提高整个系统的吞吐量。关注我们，探索 Starcoin 的 FlexiDAG 技术的变革潜力，一起期待一个非凡的区块链性能和可扩展性的新时代。
