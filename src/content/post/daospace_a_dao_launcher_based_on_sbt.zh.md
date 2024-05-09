---
title: "DAOSpace — 一个基于SBT的DAO启动平台"
date: 2022-08-04
summary: "DAO是Web3领域一个热门的方向，它是一种治理思想，但同样需要平台的支持。作为Move领域最早的一条无许可区块链，Starcoin最近推出自己在DAO领域的平台型产品DAOSpace。 DAO 是与社区分享价值的承诺。通..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/daospace1.png)

> 1. DAO是Web3领域一个热门的方向，它是一种治理思想，但同样需要平台的支持。作为Move领域最早的一条无许可区块链，Starcoin最近推出自己在DAO领域的平台型产品DAOSpace。
>
>    DAO 是与社区分享价值的承诺。通过工具和治理为DAO成员提供参与决策的机会，借助工具形成一个自主执行并且协作灵活的工作流程体系，分配资源以完成利益相关者核心任务。无论规模大小，DAO 都寻求解决核心任务 — — 从讨论演变为自主驱动的社区。
>
>    如何为社区提供一个适应不同目的的需求的框架和工具，来帮助他们启动他们的DAO，Starcoin的DAOSpace从底层逻辑的设计上开始考虑，允许任何人轻松启动DAO。
>
>    **Starcoin的DAOSpace是一个通过 DAO 模版以及可组合的插件机制，无代码定制 DAO 的一站式平台。**DAOSpace 的 DAO 模版内置 SBT 的成员身份系统，代码驱动执行的治理系统，以及可自由扩展的插件系统，既可开箱即用，亦可深度定制，从而最大化满足用户的多场景需求。
>
>    # DAOSpace flow
>
>    DAO 可以适用于不同规模的 DAO，比如 Starcoin DAO，DeFi 项目 DAO，或者一个几人合作的独立工作室 DAO。不同规模的 DAO 之间可以无缝切换。
>
>    社区用户和组织，可以选择创建自己的DAO，或者加入自己感兴趣的DAO，共同创建和建设。
>
>    ![img](/images/hackathon/daospace2.png)
>
>    # DAOSpace的特性
>
>    **1，SBT**
>
>    SBT(Soulbound Token) 最早由 Vitalik 在今年一篇文章中提出，并在 Decentralized Society: Finding Web3’s Soul 这篇论文被详细阐述。简单来说，Soulbound Token（SBT）可以理解为一种不可转让的 NFT，用来识别 Web3 领域用户的身份。
>
>    一个账户（地址）可以理解为一个灵魂，灵魂背后可能代表着个人、机构、组织等等，一个灵魂可以拥有多个 SBT。SBT 对应着一系列的关系、成员资格和证书等等。个人或者组织都可以向其他灵魂发行 SBT，进而形成“灵魂网络”。
>
>    SBT的特点，不可转移且唯一标识，可以累计声望值，这有些类似于物理世界的勋章和毕业证。
>
>    Starcoin DAOSpace是基于SBT来设计的，用户在DAO社区的身份和声望，通过SBT来标识和展示。
>
>    相比较以太坊的ERC-20、ERC-721和ERC-3525，在实现SBT时所面临的扩展性问题，Starcoin的SIP22 NFT协议，可以更为灵活的实现SBT特性，并具备良好的扩展性，这是非常大的一个优势。
>
>    ![img](/images/hackathon/daospace3.png)
>
>    **2，治理**
>
>    DAOSpace同时支持offchain和onchain的投票治理流程。
>
>    链下的调查问卷类投票，类似以太坊社区的Snapshot，可以对项目和社区中常见的讨论/决议类型进行治理。
>
>    链上的治理类投票，投票通过后合约自动执行，比较适合资金/协议/合约升级等场景。
>
>    投票使用快照形式，最大程度提升Token的资产利用率。快照基于offchain的证明和onchain的验证，来确保投票的有效性。
>
>    ![img](/images/hackathon/daospace4.png)
>
>    **3，插件化设计**
>
>    DAO 插件是给 DAO 提供扩展的主要方式，通过不同插件的组合，可以让 DAO 适用于不同的场景。通过Capability抽象 & Permission分级控制的设计，每个插件安装时需要表明自己需要使用的“能力（Capability）”，插件可以在必要时申请能力的使用权限进行调用，老实现功能的扩展性和安全性。
>
>    当前 DAO 定义了以下能力：
>
>    - Install plugin capability：给 DAO 安装插件的能力
>    - Upgrade module capability：升级 DAO 账户下合约的能力
>    - Modify dao config capability：修改 DAO 配置的能力
>    - Withdraw Token capability：从 DAO 账户下提取 Token 的能力
>    - Withdraw NFT capability：从 DAO 账户下提取 NFT 的能力
>    - Storage capability：给 DAO 账户下保存数据的能力
>    - Member capability：给 DAO 添加成员，以及修改 DAO 成员 SBT 的能力
>    - Proposal capability：给 DAO 发起提案的能力
>
>    DAOSapce支持两种插件类型，所有插件均可复用
>
>    - 框架内置的Proposal插件
>    - 社区开发者自定义插件
>
>    **4，安全性**
>
>    Starcoin 使用 Move 语言通过其增强的 PoW 共识和安全智能合约从源头提供最大的安全性。
>
>    DAOSpace，插件的授权和权限分级管理，以较小的颗粒度来控制安全性。
>
>    # 结语
>
>    DAOSapce除了有DAO Framework和插件，同时提供DAO Portal来帮助用户便捷的的创建和管理DAO。
>
>    同时DAOSpace也在进行不同DAO场景的实践。
>
>    在为Dao的平台优化和创新上，行业还有很长的路要走，但只要有社区的需求存在，那么世界上一些最富有热情革新的人们就会努力去实现这一目标。
>
>    Just DAO It.
>
>    如果您有好的想法和场景，也欢迎来尝试和建设，[DAO](https://starcoin.atlassian.net/wiki/spaces/DAO/pages/53608451) ,致全世界的 DAO 贡献者 — — 一起努力。