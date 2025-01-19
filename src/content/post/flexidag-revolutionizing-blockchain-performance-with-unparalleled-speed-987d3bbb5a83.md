---
title: "FlexiDAG: Revolutionizing Blockchain Performance with Unparalleled Speed"
meta_description: "FlexiDAG brings unparalleled speed and performance to Move blockchain technology—redefining the ecosystem."
date: 2023-05-30
summary: "“FlexiDAG, technically not a direct manifestation of the Nakamoto consensus, serves as an intriguing expansion that pushes the..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"
image: https://miro.medium.com/v2/resize:fit:1400/1*I8syF6d4YbKQm-BK_MfOPw.jpeg

---

![img](https://miro.medium.com/v2/resize:fit:1400/1*I8syF6d4YbKQm-BK_MfOPw.jpeg)

FlexiDAG, technically not a direct manifestation of the Nakamoto consensus, serves as an intriguing expansion that pushes the boundaries of this concept. It goes beyond the traditional understanding by evolving the DAG (Directed Acyclic Graph) into a separate PoW-based cryptocurrency, aiming to unleash Nakamoto’s consensus potential from an external vantage point, while keeping the essence of generalization intact.

The aforementioned DAG, in this context, represents a mathematical structure composed of directed edges, devoid of cyclic connections where a vertex, the fundamental building block of graphs, does not lead back to itself.

Within the realm of distributed ledgers, a FlexiDAG emerges as a DAG where blocks are symbolized by vertices, and edges symbolize references from blocks to their predecessors.

We already implemented GHOSTDAG protocol in FlexiDAG. The key is that honest blocks would exhibit strong connections to each other but not to adversarial blocks (even if adversarial blocks are well connected among themselves). Therefore, as long as an attacker possesses computational inferiority, the honest network will appear as a highly connected cluster of blocks encompassing the majority of blocks in the network. By identifying this cluster and giving precedence to its blocks, attacking the network while controlling only a minority of the block production becomes infeasible.

![img](https://miro.medium.com/v2/resize:fit:1348/1*k5IKpe0YqX6V4U9YcHj9BA.png)

A formal representation of the core algorithm of the protocol:

1. Given a FlexiDAG represented by G = (V, E), where V is the set of vertices (blocks) and E is the set of edges (references from blocks to their predecessors).
2. Define the k value, which represents the number of clusters to be formed.
3. Initialize an empty set of clusters C = {}.
4. For each block v in V, perform the following steps:

- Calculate the score of block v as the sum of the weights of its ancestors, denoted as score(v).
- Assign block v to the cluster with the highest score among its k nearest neighboring clusters.
- If there are fewer than k clusters, create a new cluster and assign block v to it.
- Repeat the assignment process until all blocks have been assigned to clusters.
- Compute the weights of the clusters by summing the scores of the blocks within each cluster.
- Select the cluster with the highest weight as the confirmed cluster for the consensus protocol.
- Use the blocks within the confirmed cluster as the reference set for determining the validity and precedence of transactions within the FlexiDAG.

By implementing the k-cluster algorithm in FlexiDAG, the FlexiDAG protocol forms clusters based on block scores, allowing for efficient consensus on the precedence of blocks and transactions. The confirmed cluster serves as a reference point for maintaining the security and integrity of the ledger.

The distinguishing feature of FlexiDAG lies in its exceptional scalability, facilitating higher throughput in terms of transactions per second (TPS) and blocks per second (BPS), while ensuring the preservation of security. Moreover, FlexiDAG introduces the capacity to validate multiple parallel blocks concurrently, further augmenting its scalability potential.

While these advancements are implemented, FlexiDAG remains grounded in the PoW (Proof of Work) model, comprising elements such as PoW block creation, transaction fees, miner involvement, the role of full nodes, and deflationary block rewards. However, it deviates from the conventional longest-chain rule, also known as the heaviest valid chain, which is measured in terms of cumulative proof of work (difficulty). Instead, FlexiDAG embraces a novel rule that expedites consensus on the priority of parallel blocks, thus determining the validity of associated transactions.

From the perspective of miners, the mining process remains largely consistent. Irrespective of the traditional PoW consensus, mining operations continue to be executed in parallel. If a miner becomes aware of a new block while in the mining process, they promptly abandon the ongoing block and shift their focus FlexiDAG, while technically not a Nakamoto consensus, represents a fascinating extension of it. Its development involves transforming the DAG (Directed Acyclic Graph) into a distinct PoW-based blockchain, aiming to push the boundaries of Nakamoto’s consensus from an external perspective.

This challenge is overcome by FlexiDAG, leveraging its inherent resistance to 49% hash rate attacks inherited from Nakamoto Consensus, offering the highest level of security for a consensus protocol. The achieved result is the ability to scale up without sacrificing this security property.