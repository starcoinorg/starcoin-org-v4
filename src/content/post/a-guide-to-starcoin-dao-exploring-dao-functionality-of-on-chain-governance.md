---
title: "A Guide to Starcoin DAO: Exploring DAO Functionality of On-Chain Governance"
meta_description: "Learn about Starcoin DAO's on-chain governance functionality with Move and its role in decentralized decision-making."
date: 2023-03-02
summary: "Previous： Starcoin and Decentralized Governance Unlock the Benefits of Starcoin DAO We are pleased to announce the successful passage o..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"
image: https://miro.medium.com/max/1400/1*VAiIaTRm-n_eXLX_4FZR8w.png
---

![img](https://miro.medium.com/max/1400/1*VAiIaTRm-n_eXLX_4FZR8w.png)

Previous：

[Starcoin and Decentralized Governance](https://medium.com/@starcoin/starcoin-and-decentralized-governance-ede422e106aa)

[Unlock the Benefits of Starcoin DAO](https://starcoin.medium.com/unlock-the-benefits-of-starcoin-dao-based-on-chain-governance-c5798eec2b1d)

We are pleased to announce [the successful passage of the Starcoin DAO proposal](https://twitter.com/StarcoinSTC/status/1630810115161968640) for its first governance of the year.

On Starcoin, the DAO functionality is implemented through a series of clearly defined steps. By providing the community with a basic understanding of this process, we can encourage participation, accurate representation, and enhance transparency on the Starcoin Network.

**DAO Functionality**

A basic DAO governance process would include the following.

- The initiator initiates the proposal.
- Users vote.
- The proposal is approved and implemented.

![img](https://miro.medium.com/max/1400/0*p9d1QA0TaAM0mIQW.png)

One of the significant differences between Starcoin’s DAO implementation and Ethereum’s DAO implementation is that in Starcoin, each type of proposal is controlled by a separate contract module, which implements the proposal initiation and execution.

This is because, in Ethereum, smart contracts can call other contract interfaces through dynamic distribution, so it is possible for a single contract to initiate all types of proposals just by calling them dynamically within the contract. But Move is a model of static distribution of function calls (not much here, interested readers can read the Move-related documentation); all code calls must be determined at compile time and can not do dynamic distribution. Hence the difference mentioned above.

The DAO module abstracts the proposal (a paradigm parameter of the DAO module) and identifies a proposal with a proposal_id. Still, it does not care about the proposal, leaving it to the user to decide. When voting, the user gets the details of a proposal through the DAPP and then directly calls the DAO module’s interface to vote for or against it.

This way, different proposals can implement their proposal logic but share the voting functionality of the DAO module.

The standard library provides the following types of proposals by default.

- ModifyDaoConfigPorposal: Proposal to change DAO polling parameters.
- OnChainConfigDao: Proposal to change on-chain parameters.
- UpgradeModuleDaoProposal: Proposal to upgrade the contract code.
- TreasuryWithdrawDaoProposal: Proposal to withdraw money from the treasury.

When issuing their Token, users can directly access the proposals in the standard library if they have similar needs or write more custom proposals if they have other more complex needs.

**User Voting**

When users vote, they need to pledge their Token, and the number of votes is proportional to the number of tokens, i.e., one coin, one vote. During the voting period, users can vote multiple times, withdraw their votes, or even turn against each other (from for to against, from against to for). After the voting period, users can withdraw their staked tokens immediately.

**Proposal Passage and Execution**

After the voting period, if the turnout passes and the number of yeses exceeds the number of noes, then the proposal is passed. At this point, anyone can send a transaction to mark the proposal as pending and place it in the queue to be executed. After the execution period has expired, anyone can send a transaction to execute the proposal. After the proposal is executed, the proposal initiator can delete his proposal and release the space on the chain occupied by the proposal.

A complete life cycle of a proposal is as follows:

![img](https://miro.medium.com/max/1400/0*sVFZOsROYV3uggws.png)

Voting status notes：

- const PENDING: u8 = 1; //waiting for public period
- const ACTIVE: u8 = 2; //voting is in progress
- const DEFEATED: u8 = 3; //after the voting period, the number of votes in favor is less than or equal to the number of votes against, or the number of votes in favor is less than the voting threshold, the proposal is rejected
- const AGREED: u8 = 4; //after the voting period, the number of votes for is greater than the number of votes against, the proposal is passed
- const QUEUED: u8 = 5; //proposals that have been voted on are placed in the queue for public notice, which is currently 24 hours
- const EXECUTABLE: u8 = 6; //After the public notice period, the proposal enters the executable state. Anyone can trigger execution.
- const EXTRACTED: u8 = 7; //Proposal has been executed

The above is a detailed explanation of the functionality and governance of Starcoin DAO.

**Starcoin, the only blockchain based on enhanced PoW consensus in the Move ecosystem.**Using the Move language, Starcoin users can implement DAO (Decentralized Autonomous Organization) capabilities.

Furthermore, projects running on Starcoin’s public chain will no longer need to use third-party DAO tools to achieve decentralized governance, which reduces the development threshold and cost of projects and is more conducive to Starcoin attracting more good projects and prospering its ecosystem on the blockchain.