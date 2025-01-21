---
title: "Prelude to a New Course: What is FlexiDAG?"
meta_description: "Learn about FlexiDAG and its transformative impact on blockchain, setting the stage for a new Starcoin course."
keywords: ""
twitter_card: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2023-05-10
summary: "Origin Nakamoto consensus In Nakamoto consensus, a 10-minute block time is set to ensure network security and stability. This time interval ensures enough time for all network miners to perform..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"
image: https://miro.medium.com/v2/resize:fit:1400/1*r3gcmuS68tAE7CcVHZOZdA.png
---

![img](https://miro.medium.com/v2/resize:fit:1400/1*r3gcmuS68tAE7CcVHZOZdA.png)

# Origin Nakamoto consensus

In Nakamoto consensus, a 10-minute block time is set to ensure network security and stability. This time interval ensures enough time for all network miners to perform calculations and avoid network congestion.

If the block time is too short, miners will constantly attempt to calculate many orphan blocks that cannot be added to the blockchain, leading to network congestion. This congestion, in turn, will produce even more orphan blocks. Therefore, the block time setting in the Nakamoto consensus is a conservative decision that sacrifices performance for simplicity of design and security.

While a shorter block time can improve system throughput and transaction speed, it also increases the risk of network congestion and the possibility of network attacks. Therefore, achieving more performance improvement and shorter block times is difficult while ensuring network security.

However, ongoing research and development may lead to improvements in consensus mechanisms that can improve performance and network security.

# Thinking in uncle block

In the Nakamoto consensus, network throughput can be increased by increasing the block size or shortening the block interval. Both of these methods increase the probability of competing blocks appearing in the network.

Among these competing blocks, only one block at most can enter the main chain to contribute to transaction processing and increase throughput, while other blocks become orphaned blocks.

As the block size becomes larger and the block interval becomes shorter, the number of orphaned blocks increases. However, increasing the orphaned block rate will reduce the difficulty of double-spending attacks. Therefore, it is necessary to limit the orphaned block rate within a threshold.

At the same time, the orphaned block rate can be used to evaluate the network congestion, and the consensus parameters can be dynamically adjusted accordingly.

# Uncle block in Starcoin

One of the important improvements in Starcoin is the introduction of uncle blocks. We package the competing failed blocks as uncle blocks, evaluate network congestion using the uncle block rate, and dynamically adjust block time and block size to fully utilize the network, improve throughput, and avoid excessive orphaned blocks caused by oversized blocks or too short block time, thus enhancing security.

However, transactions in uncle blocks are not added to the block chain but are stored in the memory pool, waiting for other blockchain nodes to select them and add them to the longest chain. Therefore, from a holistic perspective, even with the introduction of uncle blocks, block generation remains serial. Miners cannot add multiple blocks to the chain at the same time. Uncle blocks only serve to measure network congestion. They give the system scalability and the ability to quickly respond to changes in network conditions and mining power, while the entire system still produces blocks in a serial manner.

# Generating blocks concurrently

One way to parallelize Nakamoto consensus is to package all uncle blocks that meet the block creation rules onto the blockchain at the same time. Transactions are not replayed to the transaction pool, which means that uncle blocks are also valid blocks that have been confirmed by the consensus.

If multiple valid blocks can be created simultaneously based on a certain point in time, each new block can be viewed as a child block of the several most recently created blocks, so they point to them. Based on this, our blockchain topology will change from a chain to a directed acyclic graph (DAG).

However, several problems need to be addressed when implementing this approach:

1. How do we distinguish malicious or illegal blocks and determine which blocks are valid? How do we resist 51% attacks?
2. How do we confirm the order of blocks in the DAG?

If these issues can be resolved, then we can achieve a parallelized PoW consensus where miners can package multiple blocks simultaneously. The number of orphaned blocks in the network will decrease.

# FlexiDAG

**Starcoin is excited to unveil FlexiDAG, a groundbreaking innovation in development that aims to revolutionize the blockchain performance and scalability problems under the PoW environment, the true decentralized global consensus.**

The name “FlexiDAG” — a blend of “flexible” and “DAG” — encapsulates the technology’s envisioned adaptability and scalability within the blockchain ecosystem. It’s poised to enable parallel block creation and efficient consensus, significantly enhancing throughput and overall system performance.

In the traditional Nakamoto consensus, the objective is to identify a chain for building subsequent blocks based on the highest attack cost — this is known as the longest chain.

Contrarily, the FlexiDAG consensus is being designed to focus on identifying a well-connected subgraph, where subsequent blocks can be built based on the highest attack cost. This subgraph should display strong connectivity, with minimal isolated blocks and tight connections between nodes. The goal is to pinpoint the most interconnected subgraph within FlexiDAG, which will become the set of confirmed blocks added to the chain.

By organizing blocks in a FlexiDAG, we aim to achieve parallel block creation, thereby boosting the throughput of the entire system while upholding security. Join us as we explore the transformative potential of Starcoin’s FlexiDAG technology and look forward to a new era of extraordinary blockchain performance and scalability.
