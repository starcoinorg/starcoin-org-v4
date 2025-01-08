---
title: "AMA Recap: Move Ecosystem Whitepaper (1) - Starcoin"
meta_description: "Insights from Starcoin's AMA on the Move ecosystem whitepaper and its development goals."
date: 2022-09-16
summary: "Today we are going to discuss a lighter topic and talk about the move eco-project white paper. The content may be a little on the technical side..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"
image: https://miro.medium.com/max/700/1*N5XwAUKw2EfGBD2T250Vhg.png
---

![img](https://miro.medium.com/max/700/1*N5XwAUKw2EfGBD2T250Vhg.png)

**Tim：**

Today we are going to discuss a lighter topic and talk about the move eco-project white paper. The content may be a little on the technical side, as generally white papers are all about technical capabilities and vision, but we can interpret and add some perspective on how these features will affect users.

We may also note that Aptos has recently (In August) published a full version of the whitepaper, about a dozen pages long, with a lot of details and descriptions. Most of the content mentioned in the paper has probably already been explained in several documents, but this time it has been tied together in a single white paper, and Aptos also put together over 20 key points on Twitter when publishing the white paper.

Starcoin has been in the industry for more than three years, and as public chain professionals, we have been thinking about some of the underlying capabilities of public chains and observing the industry’s hotspots.

Today’s live broadcast also inviting Westar Labs architect Jolestar from different perspectives.

From my perspective, public chains can be judged in about 5 ways.

Firstly, must be the decentralization capability of the public chain, which is a guarantee of its ability to resist a single point of risk and its long-term existence beyond the life cycle of individuals and organizations.

Secondly, it must consider the security of the public chain, because security is fundamental to all operations, and all our important digital assets are on the chain, so security capability is crucial.

The third point is performance, which I think has been a major concern in the industry recently because, with the assurance of the first two points, we can then see what level of performance can be achieved. Performance is a topic that people talk about a lot, but it doesn’t mean that the first two points are not important.

The fourth point can be looking at practicality, as unlike 10 years ago, new public chains need to bring real value and use to users.

The fifth point is the ease of use, and developer friendliness, including the ability to upgrade contracts, how Gas fees are paid, etc.

In summary, public chains need to be analysed in terms of decentralisation, security, performance and practicality and ease of use

**Tim：**

There have been some recent industry events, such as the blocking of the Tornado Cash project by the US government, and as a result, addresses that have used Tornado Cash are having problems processing funds, such as transactions not being accepted on many protocols, something that is against the spirit of the blockchain itself.

Blockchain should be available to everyone, and there are two levels to consider from a decentralised perspective.

The first level is whether the blockchain itself is decentralised enough to be used by anyone without permission, there is a difference between PoS and PoW on this point. For PoS, when maintaining a node, the maintainer or operator needs to follow some laws of the country where it is located, if the law needs to block some addresses, then the neutrality of the node is actually questionable because it will be caught in a dilemma Either comply with the laws of the country in which it is located, for example by creating a blacklist of addresses, this might affect the chain’s ability to decentralise. If the regulation is ignored, it places itself in a grey area and runs the risk of violating the laws of the country where it is located. Therefore, from the perspective of decentralization, and from the chain’s perspective, the first thing is to ensure that some mechanisms can be free from regulatory risks, in order to create an environment where users can freely come to the chain to do some ecological construction and willing to put their assets on the chain, which is a basic consideration.

PoW has a natural advantage in the degree of decentralization that can be achieved better. In addition to the fair queuing and packaging of transactions, there is also the ease of entry for nodes, such as whether the ease of entry is low enough for any ordinary user to participate in the work on the chain. There are a few details, such as how to synchronize the data when entering as a validating node, how to get all the data within a short time, or some other ways to quickly start a node to participate in the work.

When a new chain is launched, the data size will be relatively large, maybe a few hundred gigabytes when it first starts, and after a period of operation it will reach a T level, so it is difficult for an ordinary user to start a full node. Regularly is that a full node needs to replay this data by itself, starting from the first block initiated, to check if its logic is correct. At the current block speed of the chain, it would take a very long time to replay from the first block, and it may even be the case that some nodes with average configuration will never catch up with the latest synchronized blocks.

So, if the synchronisation mechanism can be done in a way that it starts from some closer position and through some mechanism can trust the data or height in front of it, then the synchronisation time will be greatly reduced.

The second level is the problem of synchronization speed, because the blockchain p2p network must unify hundreds of gigabytes of data or hundreds of t’s of data from different nodes, and speed is also critical. The blockchain is constantly generating new data and will not stop and wait for a node to synchronise, because it is moving forward at a very fast block releasing speed itself, so all nodes need to reach a certain speed to catch up. So, the technical design affects the degree of decentralisation, you don’t want to only have a large cluster of very highly configured nodes in a server room, it results to only a few advanced players being able to validate or participate in packaging. The degree of decentralisation will affect user usage, and if its security is questionable, users will not have the confidence to place assets on the chain in the long term.

In summary, this is my take on the first point about the degree of decentralisation.

**Jolestar：**

When security goes wrong, everyone thinks it’s important, but security is hardly an attraction point to get users involved. However, because of that, we need to give more attention to security and decentralisation at the very beginning, because the other points are the ones that can directly attract users and they come flocking over, but if you don’t pay attention to those two points at the very beginning, it might be too late to come back to them when your assets are worth something. So it’s a question of sequencing.

There’s also the issue of PoW and PoS. In fact, I don’t generally divide them according to PoW and PoS. In fact, you can divide them according to whether the verification node is deterministic or indeterministic, which are two ways about consensus algorithms or the degree of decentralization. If a consensus algorithm requires that the outgoing nodes are deterministic, it means that it is currently known which nodes can outgoing blocks at a certain point. When the verification nodes are deterministic, a lot of optimizations can actually be done. When knowing which nodes need to be synchronized, both synchronization and block out efficiency can be improved by an order of magnitude, but if it is uncertain which nodes may be out fast, then the synchronization method changes and requires a broadcast strategy, which limits the overall optimization. Because the outgoing block nodes are uncertain, it is difficult to audit the nodes, which is a measure of the degree of decentralisation.

**Tim：**

For example, Starcoin is achieved through the Pow consensus mechanism, low node threshold and DAO governance mechanism.

The second point is security. In the move ecosystem, we can share the security of move’s new generation of smart contract language and virtual machines.

Security also includes some user-friendly design, such as account recovery strategy, which is also introduced in the Aptos white paper. Under the new account model of move, there are some designs that are different from the previous blockchain, such as the private key of account can be reset. If a user is using a wallet address and there is a risk of the private key being leaked, they can do a rotate key operation to reset the private key without discarding the address. This is somewhat similar to using a Web2 product, where the password can be reset by a tied mobile phone number, ensuring that no one can next access the user’s account with the old, insecure password.

In previous public chains, if there was a similar security issue and the user’s private key was taken away by some attacker or hacker due to some wallet security vulnerability, the only thing the user could do if the funds were not stolen was to quickly transfer the funds to a new secure account.

However, in Starcoin and other Move chains, it provides a rotate key operation, which is equivalent to changing the password in Web2 to protect the security of the account while keeping the address unchanged.

**Jolestar：**

Since Bitcoin and Ether have left a certain impression, people think that the address must correspond to the private key so it could not change, but in fact, if we can abstract the process of accounting It is possible to create some special application scenarios using a contract, such as “reset private key” or something like that. In security-wise, it brings the benefit that the user can periodically remake the private key. The advantage of doing this is that we may not know when we have accidentally copied a notation or a private key and then it is recorded by a tool of some kind, but in case the record of this tool is compromised one day, it is dangerous, and probably the best way to do this is to reset the private key periodically.

**Tim：**

I remember that in the past when we were using emails, we were asked to change our passwords in about two or three months, but of course, in the era of Web2, passwords had to be remembered manually and many users did not use some password management software, so it was still quite annoying. Apart from the fact that the password itself is not secure, if your password is taken away by a hacker, it takes time from getting the password to sending these attacks.

Moving on to the third point of performance, I’ll start with some of the white paper information I’ve learned. The Aptos whitepaper has a large section on performance design, and the technical design has a large section on some of the engines for parallel execution of transactions, the key point is that the user or the transaction initiation scheme is not in conflict with some other transaction, I just need to submit it. But Aptos has a parallel engine called “block steem”, which can use pipelining methods to find out what can be parallelised during execution, which can be a good way to parallelise the execution of what we have seen in the documentation or his introduction and can achieve a very high G/s in a lab state. This is the case of performance, which can be interpreted more professionally.

Moving on to the third point: performance, I’ll start with some information I’ve learned from whitepapers. The core point of performance improvement is parallel execution. If there are no dependencies between transactions, parallelisation is easy, but how to handle parallelisation of dependent transactions is a technology called Block-STM parallelisation engine in Aptos, which uses a pipelined approach to find out It uses a pipelined approach to find out what can be parallelised at execution time and achieves a very high TPS in a lab environment.

**Jolestar：**

That’s what I have said before, If the nodes involved in the process are a deterministic list many of these can be optimised, because parallel computing means that transactions within the same block are executed in parallel, actually the final bottleneck will be in the network synchronisation part, so that the network synchronisation bottleneck is solved by the deterministic nodes. This is where Aptos and Sui use two different strategies, the Aptos whitepaper describes that there is no need to know the state of the exchange dependencies in advance, the description of reducing client complexity is specific to the Sui whitepaper. The Sui whitepaper is written in such a way that the client knows in advance which transactions conflict, knows in advance which objects the contract will modify, and specifies them ahead of time in the transaction, so that when it is executed it knows which transactions are in conflict and automatically executes the non-conflicting ones in parallel first, leaving the conflicting ones to be executed sequentially, thus increasing the TPS.

However, what aptos describes is a generic account model smart contract, where it is not known which states need to be modified before execution, so it is assumed that they are all non-conflicting and are executed together in parallel, and then after execution, the transaction output will tell us which transactions have conflicts and dependencies, and the non-dependent ones will be executed in parallel first, and the dependent ones will be executed again. The general mechanism is like this. The parallelism will definitely be worse in this way, but the advantage is that it does not require the client to specify which state to use first.

> **Related content**

## [Starcoin AMA Recap: Talk about the Move ecosystem project whitepaper (2)](https://starcoin.medium.com/starcoin-ama-recap-talk-about-the-move-ecosystem-project-whitepaper-2-dbc43db5b5fb)

> **About Starcoin**

Starcoin provides the utmost security from the origin via its enhanced PoW consensus and Secure smart contract, using the language of Move. Through layered and flexible interoperability, it optimizes the building of ecosystems such as DeFi, NFTs, Gaming, etc., with higher efficiency and convenience. This process redefines value by empowering every participant in the ecosystem to enjoy the multiplication of values.

Follow Starcoin on social media to stay up to date with all the latest developments.

[**Website**](https://starcoin.org/en/) **|** [**Twitter**](https://twitter.com/StarcoinSTC) **|** [**Medium**](https://starcoin.medium.com/) **|** [**Discord**](https://discord.com/invite/starcoin)**|** [**Telegram**](https://t.me/Starcoin_STC)