---
title: "Starcoin 区块链发布 v0.3 版本"
meta_description: "探索最新 Starcoin v0.3 版本中引入的 Move 功能和改进。"
date: 2020-07-21
summary: "Starcoin 区块链发布 v0.3 版本，主要包含叔块，难度调整动态算法以及 Starcoin MoveVM stdlib 等主要更新。"
author: "jolestar"
tags: [
    "Epoch",
    "Starcoin"
]
archives: "2020"
---

Starcoin 区块链发布 v0.3 版本，主要包含叔块，难度调整动态算法以及 Starcoin MoveVM stdlib 等主要更新。

## 主要更新

1. 引入 Epoch 以及叔块机制，PoW 出块难度可以根据叔块率来动态调整。
2. 引入 `Package` 交易类型，支持批量部署多个 Module 以及附带初始化脚本。
3. Token 模块以及发行机制的稳定化，Token 的值从 u64 改为 u128，可以支持更大的总量以及更高的精度。
4. 实现了 Transaction fee 的分发合约。
5. Stdlib 增加了 SortedLinkedList，Math，BitOperators 模块。
6. 重构了 BlockReword 合约，以适应 Epoch 以及叔块机制。
7. 提供了 Module 升级机制，开发者可以自定义合约升级的策略。实现了升级 Module 的兼容性检查，保证升级时和旧的版本兼容。
8. 重构 Genesis，通过 Package 交易实现 Genesis 交易。简化 Genesis Account，只保留 0x1 一个 Genesis account。
9. 引入 network rpc 框架，简化 p2p 网络上的 rpc 接口实现。
10. 引入 Move 的覆盖率工具，统计 stdlib 的测试覆盖率。
11. 简化 Node 配置以及统一命令行参数格式。

## 依赖升级

1. move-vm bump to 821ac69a5e3ff3e323601c355d8de42f957d9c26 (July 14) .
2. libp2p bump to 0.22.
3. rust tool chain bump to 1.44.1.

更多详细的信息请参看 [release milestone](https://github.com/starcoinorg/starcoin/milestone/8) 。
