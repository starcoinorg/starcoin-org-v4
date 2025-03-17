---
title: "Starcoin 2.0网络已正式启动开始试运行"
meta_description: "Starcoin 2.0试运行正式启动，借助FlexiDAG和TurboSTM技术大幅提升交易吞吐量和并行处理能力，标志着公链向可扩展性和商业化应用迈出了关键一步。"
keywords: "Starcoin 2.0, 试运行, FlexiDAG, TurboSTM, PoW, Web3, dApp, 区块链, 去中心化"
twitter_card: "summary_large_image"
twitter_title: "Starcoin 2.0网络已正式启动开始试运行"
twitter_description: "Starcoin 2.0试运行正式启动，通过升级FlexiDAG和TurboSTM技术，实现每秒130K交易，为高频复杂应用提供了稳定、高效的区块链基础。"
twitter_image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*4KmkqHPpPahw2UYr.jpeg"
date: 2024-06-26
summary: "Starcoin 2.0试运行正式启动，主网通过升级FlexiDAG和TurboSTM技术，实现每秒130K交易处理能力，并采用动态资源调整和社区治理机制，为高频Web3应用提供强大支持。"
author: "Starcoin中文"
tags: [
    "Starcoin 2.0",
    "试运行",
    "FlexiDAG",
    "TurboSTM",
    "PoW",
    "Web3"
]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*4KmkqHPpPahw2UYr.jpeg"
archives: "2024"
---

![封面图片](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*4KmkqHPpPahw2UYr.jpeg)

过去三年，Starcoin通过结合增强型PoW机制和Move语言，为区块链的去中心化和安全性奠定了坚实基础。现在，我们很高兴地宣布，**Starcoin 2.0** 已经正式进入试运行阶段，这标志着Starcoin向更高可扩展性和商业化应用迈出了关键一步，同时体现了我们不断追求卓越与创新的决心。

## Starcoin 2.0：可扩展的网络

Starcoin 2.0，代号“Tempus”，是我们主网的重大升级，旨在克服传统PoW共识的扩展性限制，同时保持去中心化的核心原则。“Tempus”意为“时间”，象征着我们对持续创新和进步的承诺。

通过升级 **FlexiDAG** 和 **TurboSTM** 并行化技术，Starcoin 2.0 在试运行环境下实现了：
- **Max BPS：** 1 block/s
- **Max Parallelism：** 2 blocks
- **Max TPS：** 130,000 tx/s

这些性能参数有效解决了交易拥堵和高手续费问题，使Starcoin 2.0能够轻松应对高频且复杂的Web3生态应用需求。

## 如何参与

- **节点下载：**  
  请使用Release v2.0.0版本进行下载。
  
- **主网启动参数：**  
  请参阅技术文档获取详细参数。

- **节点验证：**  
  用户可启动节点进行交易验证，成功参与算力证明的节点将获得新区块奖励。

- **钱包与交易：**  
  使用StarMask连接到Starcoin 2.0网络，进行交易发送和提交。

- **应用部署：**  
  开发者可在2.0网络上部署Move应用，体验全新功能。

- **激励机制：**  
  试运行阶段主要用于验证2.0的强大特性，目前无具体经济模型，也不会替代现有1.0版本。

### StarMask钱包连接2.0网络配置
- **Network Name：** vega  
- **RPC URL：** https://vega-seed.starcoin.org  
- **Chain ID：** 2  
- **Currency Symbol：** STC  

## Starcoin 2.0的优势

1. **高交易吞吐量：**  
   FlexiDAG将DAG结构与增强PoW共识结合，实现交易吞吐量提升17倍。

2. **并行区块生成：**  
   允许同时创建和添加多个区块，大幅缩短区块生产时间，相比1.0整体效率提升10倍，实现了秒级确认。

3. **动态资源调整：**  
   FlexiDAG根据网络交易量动态调整出块时间和资源分配，确保高效稳定交易，避免资源浪费。

4. **平衡并行处理与安全性：**  
   FlexiDAG能够识别高度互联的叔块，确保只有具备强健链接的合法区块被加入链中，从而既增强了可扩展性，又抵御了恶意攻击。

## Starcoin 2.0两大核心技术

### FlexiDAG：兼顾并行处理与安全性
- 动态调整出块时间、难度和奖励。
- 支持并行出块，多个矿工可同时创建区块。
- 社区治理机制支持实时参数调整，确保系统开放、灵活。

### TurboSTM：重塑智能合约执行
- 基于多线程内存计算的TurboSTM大幅提升智能合约执行能力。
- 采用多版本并发控制（MVCC）和乐观锁机制，降低执行瓶颈，提升交易吞吐量和响应速度。

## Starcoin的未来

Starcoin 2.0的发布标志着我们在构建可扩展、安全和去中心化的数字生态系统方面又迈出了重要一步。我们将继续推动区块链创新，为Web3应用提供坚实基础，并为数字经济的增长贡献力量。  
我们真诚邀请社区用户和区块链爱好者加入Starcoin 2.0时代，共同见证这一重要里程碑，并期待未来更多激动人心的更新。

了解更多详情，请访问 [Starcoin官网](https://starcoin.org)。