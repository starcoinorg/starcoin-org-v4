---
title: "Starcoin 2.0进展更新：Move与DAG的全面升级"
meta_description: "了解Starcoin 2.0的最新进展更新，核心团队对Move框架和DAG共识机制进行了全面升级，大幅提升系统生态能力、兼容性与可扩展性。"
keywords: "Starcoin 2.0, Move升级, DAG共识, 区块链, 高性能, 可扩展性, 生态升级"
twitter_card: "summary_large_image"
twitter_title: "Starcoin 2.0进展更新：Move与DAG的全面升级"
twitter_description: "Starcoin 2.0最新进展：核心团队对Move框架和DAG共识机制进行全面升级，显著提升系统性能、兼容性及安全性。"
twitter_image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*SrcZRsN4f8eKzkr2uWJmAA.jpeg"
date: 2024-12-12
summary: "Starcoin 2.0经过全面升级，核心团队对Move框架进行重构和DAG共识进行改进，现已在Proxima测试网上成功部署，为构建高效、安全的区块链生态奠定了坚实基础。"
author: "Starcoin"
tags: [
    "Starcoin 2.0",
    "Move升级",
    "DAG共识",
    "区块链升级",
    "生态更新"
]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*SrcZRsN4f8eKzkr2uWJmAA.jpeg"
archives: "2024"
---

![封面图片](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*SrcZRsN4f8eKzkr2uWJmAA.jpeg)

Hi Starfam！

自从上次宣布 Move 升级计划之后，核心团队一直紧张地投入开发与支持相关功能。今天，我们为大家带来 **Starcoin 2.0** 的最新进展更新，涵盖了 Starcoin Move Framework 的重构（兼容主流的 Move 框架）以及 DAG 共识改进等重要领域，全面提升了系统生态能力、兼容性和可扩展性。目前，主要开发工作已基本完成，并已在 Proxima 测试网部署。每一项优化都为构建更高效、更安全的生态奠定了坚实基础。以下是详细内容：

## Framework 和 Move 框架升级

为进一步支持 Starcoin 2.0 的生态应用场景和开发需求，我们对 Framework 和 Move 框架进行了大规模升级，实现了与主流 Move 生态框架的兼容：

- **Starcoin 2.0 正式版 Proxima 测试网启动：**  
  最新的 2.0 Framework 已成功在测试网中完成交易、合约部署和测试用例验证，为后续1.0主网升级奠定基础。

- **密码学功能扩展：**  
  引入更新后的 crypto 库，支持全新密码学特性，为未来智能合约功能打下坚实基础。

- **Framework 重构：**  
  基于最新的 Move 库，我们重构了 Starcoin-framework，大部分功能已与 Aptos Framework 兼容。这不仅为开发者提供了更一致的开发体验，也增强了跨链兼容性。

- **Move 属性支持：**  
  存储层现已支持 Move 的 attribute 属性，为复杂数据类型的管理提供了更好支持。

### Framework 2.0 的移植与兼容

本次升级主要目标为兼容 Aptos 框架，目前已实现以下成果：

1. **全面移植 Legacy Framework：**  
   将原有逻辑完整移植到兼容 Aptos 的新框架中，形成 Starcoin-framework 2.0。

2. **功能兼容：**  
   - **Object 模型：** 实现基于 Aptos Object 的兼容，支持更丰富的资产操作逻辑。  
   - **数字资产：** 兼容 Aptos DigitalAsset 标准，为未来数字资产扩展提供可能。  
   - **可替代资产：** 兼容 Aptos FungibleAsset 标准，增强代币管理功能。

3. **清理与测试：**  
   完成所有代码移植及错误清理，并在 Proxima 测试网成功启动，全面测试了合约部署与调用。

## DAG 共识改进

在 Starcoin 2.0 中，DAG（有向无环图）共识机制的改进是重要升级之一，大幅提升了交易处理能力。最近完成的优化包括：

- **减枝机制和最终性逻辑：**  
  通过增加减枝逻辑，进一步优化了 DAG 的结构存储。同时，引入最终性逻辑，确保链上数据的不可逆性，增强系统安全性。

- **并发区块处理：**  
  在同步流程中实现并发处理能力，提升了网络节点对区块数据的处理效率，缩短了同步时间。

- **链上投票支持：**  
  新增对共识减枝配置的链上投票支持，赋予社区更多治理权利，提升共识机制的灵活性。

- **同步速度优化：**  
  通过批量写入和快速区块确认等功能，大幅提高了链上数据同步效率。

- **修复漏洞：**  
  针对共识选举机制已知问题进行修复，进一步巩固了系统稳定性。

## 未来规划

随着 Starcoin 2.0 主要开发工作的完成，我们接近此前承诺的2.0正式主网启动。2025年第一季度的准备工作包括：

1. **2.0正式版测试：**  
   增加单元测试和集成测试，特别针对 Aptos 标准进行全面验证。如果所有测试功能符合预期，我们计划在2025年1月启动下一阶段工作。

2. **2.0治理与经济模型提案设计：**  
   设计并讨论2.0版本的新经济模型和治理方案，该提案将通过所有STC持币用户投票决定。如果开发进展顺利，我们将在下月发布相关提案草案供社区讨论。提案通过后，将进一步提升Starcoin长期生态繁荣与可持续发展能力。  
   *风险提示：2.0资产映射还依赖于2024年token exploit事件中非法资产的成功冻结与销毁，此部分工作依赖交易所支持。*

3. **资产映射与升级：**  
   根据社区提案开展相应的技术映射工作，完成Starcoin Framework 1.0资产向2.0版本的映射和升级。

## 结语

Starcoin 2.0是Starcoin生态面向未来最重要的一项工作。核心团队已从底层架构到应用开发环境完成多项关键任务，并在优化性能、增强安全性和提高兼容性方面取得显著成果。我们期待在社区的共同努力下，Starcoin 2.0能在Move生态和Web3中占据重要地位，为行业创造更多价值。

感谢所有长期关注和支持Starcoin项目的伙伴，欢迎持续关注后续更新！

参考内容：
- Starcoin 2.0：全新 Move 升级及路线图
- 发现 Starcoin Move v7 的新内容
- GitHub：https://github.com/starcoinorg/starcoin