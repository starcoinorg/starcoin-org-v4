---
title: "A More Scalable Model:Starcoin Enhanced PoW Consensus"
date: 2023-03-10
summary: "Scalability has always been a major challenge for the traditional PoW system, hindering the adoption of blockchain..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"
image: https://miro.medium.com/v2/resize:fit:1400/1*ImHgsh5CisWrthEAx82neQ.png

---

![img](https://miro.medium.com/v2/resize:fit:1400/1*ImHgsh5CisWrthEAx82neQ.png)

Scalability has always been a major challenge for the traditional PoW system, hindering the adoption of blockchain technology as a viable alternative to centralized financial systems.

In order to drive adoption, it’s essential to prioritize a positive user experience. Slow transaction times and low TPS are not only a drawback of the PoW consensus model, but they also hinder the progress of blockchain technology and the wider adoption of cryptocurrencies.

Considering this, **Starcoin offers an enhanced version of Nakamoto consensus, which uses a dynamic network adjustment design to improve block time and network congestion and scale the blockchain. Furthermore, to address scalability issues, Starcoin has adopted a unique design allowing faster and more efficient block validation while maintaining security.** This design is based on a combination of techniques, such as parallel execution and consensus layer separation, which distribute the workload across the network and increase the system’s throughput. With these innovations, Starcoin aims to create a more scalable blockchain that can be applied in various fields.

To balance security, network throughput, and user experience, **Starcoin’s PoW model uses Uncle Blocks for dynamic adjustment of block size and block generation speed**.

Dynamic adjustment of block size allows for scalability without sacrificing security. The gas limit of each block is dynamically adjusted based on the targeting gas value within an epoch and the current block generation speed. When the block generation speed approaches its minimum value defined in the system settings, the congestion of the entire network is in good condition. Therefore, the gas limit of the block can be adjusted to increase the block size; conversely, when the block generation speed reaches the maximum value set by the system, the entire network is relatively congested, so it is necessary to reduce the gas limit of the block and reduce the block size.

![img](https://miro.medium.com/v2/resize:fit:1204/1*dN-_HochAYkqMAkZ-ExjhQ.png)

Dynamic adjustment of block generation speed prevents a 51% attack. In addition, uncle blocks imply the presence of temporary forks in the blockchain. If the uncle rate is high, the network must have more forks and orphan blocks under the current block generation time interval. Therefore, we must increase the block generation time to alleviate this problem. On the contrary, it shows that the block generation of the whole network is sound, the block generation time can be further shortened, and the throughput of the entire network can be further improved.

Uncle Blocks are an essential upgrade to initiate dynamic adjustment of block generation time by triggering an increase or decrease in the rate of block generation.

Overall, these innovative enhancements of Starcoin’s PoW model meet the demands of Web3 for increased transactions, large applications, and intricate tools while providing scalability, transparency, and security. **The innovative enhancements of Starcoin’s PoW model improve the Web3 experience for users and lower the barriers to wider blockchain adoption.**