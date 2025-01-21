---
title: "DAOSpace — A DAO launcher based on SBT"
meta_description: "Analyze token changes caused by transactions in any DApp with Move and Starcoin's advanced features."
keywords: ""
twitter_card: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2022-08-04
summary: "DAO is a buzzword for Web3, a governance idea supported by a platform as well. As one of the pioneer permitless blockchains in the Move space, Starcoin will launch its own platform-based product, DAOSpace. DAO is a..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/daospace1.png)

DAO is a buzzword for Web3, a governance idea supported by a platform as well. As one of the pioneer permitless blockchains in the Move space, Starcoin will launch its own platform-based product, DAOSpace.

DAO is a promise to share value with the community. Providing DAO members with the opportunity to participate in decision-making by tools and governance that result in an autonomous and collaborative workflow system which allocates resources to accomplish core stakeholder tasks. Regardless of scale, DAOs seek to address the core mission of evolving from a discussion to a self-driven community.

Starcoin’s DAOSpace is designed from the ground up to allow anyone to easily launch a DAO by providing the community with a framework and tools to adapt to their needs for different purposes.

DAOSpace is a one-stop platform for code-free customization of DAOs through DAO templates and combinable plug-in mechanisms.

DAOSpace’s DAO templates have a built-in SBT membership system, a code-driven execution governance system, and a scalable plug-in system that can be used out-of-the-box or deeply customized to maximize user needs in multiple scenarios.

# DAOSpace flow

DAO is available for DAOs of different scales, such as Starcoin DAO, DeFi Project DAO, or an independent studio DAO.There is a seamless transition between DAO’s of different scales.

Community members and organizations, who can choose to create their own DAO, or join a DAO of their interest to create and build together.

![img](/images/hackathon/daospace2.png)

**DAOSpace Features**

**1.SBT**

SBT (Soulbound Token) was first proposed by Vitalik in a paper this year and elaborated in the paper Decentralized Society: Finding Web3’s Soul. In simple terms, a Soulbound Token (SBT) can be understood as a non-transferable NFT that identifies a user in the Web3.0.

An account (address) is understood as a soul, which may represent an individual, an institution, an organization, etc. A soul can have multiple SBTs, which correspond to a series of relationships, memberships, certificates, etc. Individuals or organizations can issue SBTs to other souls, which in turn form a “soul network”.

The SBT features, non-transferable and uniquely identified, can accumulate prestige values, which are somewhat like medals and diplomas in the physical world.

Starcoin DAOSpace is designed based on SBT, the user’s identity and reputation in the DAO community is signed and displayed by SBT.

Compared with Ether’s ERC-20, ERC-721 and ERC-3525, which face scalability problems when implementing SBT, Starcoin’s SIP22 NFT protocol is more flexible in implementing SBT features and has good scalability, which is a very big advantage.

![img](/images/hackathon/daospace3.png)

**2.Governance**

DAOSpace supports both offchain and onchain voting governance processes.

The offchain questionnaire type voting, similar to Snapshot in the ethereum community, allows governance of common types of discussions or resolutions in projects and communities.

The onchain governance type of voting, where the contract is automatically executed after the vote is passed, is more suitable for scenarios such as funding/protocol/contract upgrades.

Voting uses a snapshot format to maximize Token’s asset utilization. The snapshot is based on offchain proof and onchain verification to ensure the validity of the vote.

![img](/images/hackathon/daospace4.png)

**3. Plug-in design**

DAO plug-ins are the major way to provide extensions to the DAO. By combining different plug-ins, the DAO can be applied to different scenarios. With the design of Capability abstraction & Permission hierarchy control, each plug-in needs to indicate the “Capability” it needs to use when it is installed, and the plug-in can apply for the permission to use the capability to invoke when necessary, so as to achieve the scalability and security of the old functions.

The following capabilities are defined for the present DAO:

- Install plugin capability: the ability to install plugins to the DAO
- Upgrade module capability: the ability to upgrade contracts under a DAO account
- Modify dao config capability: the ability to modify the DAO configuration
- Withdraw Token capability: the ability to extract Token from a DAO account
- Withdraw NFT capability: the ability to extract NFT from a DAO account
- Storage capability: the ability to save data under a DAO account
- Member capability: the ability to add members to a DAO and modify the SBT of DAO members
- Proposal capability: the ability to initiate proposals to the DAO

DAOSapce supports two types of plug-ins, all of which are reusable

- The framework built-in Proposal plugin
- Community developer-defined plugins

**4.Security**

Starcoin provides the utmost security from the origin via its enhanced PoW consensus and Secure smart contract, using the language of Move.

DAOSpace, a hierarchical management of authorization and permissions for plugins, controls security at a smaller granularity.

**Final Words**

DAOSapce not only has DAO Framework and plugins, but also provides DAO Portal to help users create and administer DAOs easily.

At the same time, DAOSpace is practicing different DAO scenarios.

The industry still has a long way to go in terms of optimizing and innovating for the Dao platform, and as long as there is a demand from the community, some of the most passionate innovators in the world will work to make it happen.

Just DAO It.

If you have good ideas and practices, feel free to try them out and build them. [DAOs](https://starcoin.atlassian.net/wiki/spaces/DAO/pages/53608451) .

To all DAO contributors around the world — work together!