---
title: "Starcoin 区块链安全赏金计划"
meta_description: "探索 Starcoin 的尖端安全措施，以确保 Move 区块链生态系统的稳健性。"
keywords: ""
twitter_card: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2021-03-17
summary: "Starcoin 区块链主网即将上线，现启动安全赏金计划，该计划时间为2021年3月24日到2021年4月24日。"
author: "fikgol"
tags: [
    "security",
    "Starcoin"
]
archives: "2021"
---

Starcoin 区块链主网即将上线，现启动安全赏金计划，该计划时间为2021年3月24日到2021年4月24日。希望能够联合来自全球社区的安全研究员共同协作，通过检验 Starcoin 区块链测试网络系统存在的潜在漏洞，来不断增强 Starcoin 系统安全。活动结束的同时也将拉开 Starcoin 主网上线序幕。

Starcoin 是新一代分层的智能合约和分布式金融网络，它旨在提供一种安全的数字资产及去中心化金融运行平台，让区块链能够更低门槛应用在更多领域**其拥有以下特性**

* 增强的中本聪共识协议，在保证安全的基础上尽可能提高吞吐
* 灵活的去中心化链上治理体系，保证链的持续演进能力
* 新一代智能合约编程语言 Move、虚拟机和标准库，面向资产编程
* 分层网络模型，一二层共同解决区块链扩展性难题


活动时间： 2021.3.24 -- 2021.4.24
参与入口：[Starcoin github](https://github.com/starcoinorg/starcoin)
漏洞提交：[Starcoin github issue](https://github.com/starcoinorg/starcoin/issues)

本次活动不仅有包含USDT及STC主网币的丰厚奖金池，更将赠予每位参与用户一台Starcoin矿机。在主网上线后即可同步参与挖矿，第一时间掘得Starcoin主网币。

## 赏金说明

参与奖：凡活动时间内提交有效BUG≥1，均可获赠价值数千元 Starcoin矿机一台。每位用户限领一台。

L0: 5,000U+5,000STC;
漏洞导致需要通过硬分叉解决。

L1: 2,500U+2,500STC;
漏洞影响全网大多数节点，需其更新版本。

L2: 500U+500STC;
漏洞影响单节点，需其更新版本。

## 漏洞说明

包括但不限于

共识攻击

1. 全网不出块/出块很慢: 2小时内出块数量小于 100 个块。L1/L2
2. 全网交易无法上链: 2 小时内空块数量大于 100 个块。L1/L2
3. 非 51% 算力攻击下成功制造双花问题 L0

节点/p2p 网络攻击

1. 通过网络消息广播，协议攻击等，使得节点进入异常状态。异常状态的判定方式为: 
    1. 节点异常退出。L2
    2. 无法对外广播交易，广播新区块。L2
    3. 节点无法同步到共识区块。同步慢/同步错误区块。L2
    4. 非算力导致的不出块，无法接收/执行交易。L2
    5. 导致节点的 内存/cpu 占用异常。L2
    6. 人工判断，不属于以上的，但也导致节点异常/假死的。L2
2. 上述攻击能自动大规模感染网络中的其他节点。L1

Account 攻击

1. 成功盗取 account 的 private_key, password。L2
2. 成功盗取节点的 node_key 。 L2
3. 成功构造假签名。L2

智能合约漏洞攻击

1. 成功修改没有权限访的 account resource：如将 account 中的 starcoin 转出。 L0/L1
2. 审查攻击, 成功阻挠大多数人在时间窗口内提出挑战：绕过投票修改某个合约中的配置。 L0/L1
3. 假充值。L0
4. 破坏 Starcoin 的金融体系，如增发 token. L0

## 活动说明

* 该计划仅适用于 Starcoin (https://github.com/starcoinorg/starcoin) 。
* 必须在 Starcoin 官方指定页面提交，阐述已经完成的工作以及复现漏洞的步骤。
* 如多人报告相似漏洞，只奖励最先提交者。
* 奖金（USDT/STC）发放时间为 Starcoin 主网上线后一个月内。
* 本活动最终解释权归 Starcoin 所有。

