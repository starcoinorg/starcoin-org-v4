---
title: "Starcoin Move Language v6 版升级投票开始"
meta_description: "发掘 Move Language v6 的新功能，专为高级区块链开发量身打造。"
keywords: ""
twitter_card: "summary_large_image"
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2023-02-22
summary: "Starcoin Move Language v6 版升级投票开始。本次 Move Language v6升级，主要包含..."
author: "jolestar"
tags: [
    "Starcoin"
]
archives: "2023"
---

Starcoin Move Language v6 版升级投票开始。投票需要将客户端升级到[v1.13.0](https://github.com/starcoinorg/starcoin/releases/tag/v1.13.0).本次 Move Language v6升级，主要包含以下特性：


1. 支持Table, gas计费架构重构,字节码支持u16,u32,u256, 提升move安全性. (https://github.com/starcoinorg/starcoin/pull/3838)

## 升级提案信息

1. 提案 id：13
2. 提案交易: https://stcscan.io/main/transactions/detail/0x786d69ec448b787690244df0adb7051d5990e8db32f06f5c555cad5fb5b7d4f5
3. 提案发起账号：0xed9ea1f3533c14e1b52d9ff6475776ba

## 升级流程

1. 从今天发起升级提案开始，进行为期 7 天的投票。
2. 7 天后如果投票通过，则进入公示期，公示期 1 天。如果未通过，则提案失败。
3. 公示期过后，任何人都可以发起升级合约交易，将move的 v6 版本写入到链上。该升级交易执行后，新特性激活。由于新特性包含了硬分叉特性，届时尚未升级到 starcoin v1.13.0 版本的节点可能会和主网分叉。

请持币人在链上进行投票。投票时，会将当前账户的 STC 抵押到合约中，直到投票结束，当前投票周期为 7 天。期间主动退款则视为放弃投票。
**为了鼓励参与链上治理，未来会推出链上治理的激励措施。本次参与投票的用户会根据激励策略进行补偿。**

具体投票方法请参看：[Starcoin Move v6 升级投票指南](https://github.com/starcoinorg/starcoin/discussions/3852)

关于 Starcoin 治理的更多信息请参看：

* [Starcoin 技术白皮书中的治理部分](https://developer.starcoin.org/zh/sips/sip-2/)
* [链上治理的生命周期](https://developer.starcoin.org/zh/key_concepts/dao_governance/)
* [通过治理机制修改 DAO 的设置](https://developer.starcoin.org/zh/cli/modify_dao_config/)