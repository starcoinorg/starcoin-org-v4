---
title: "AMA Recap (2): Security of Move Smart Contracts - Starcoin"
meta_description: "Learn how Move smart contracts ensure the security of public chains in this detailed AMA recap."
date: 2022-08-22
summary: "Tim: The most common form of attack on PoW consensus is the use of computing power attacks. In the industry such as BTC and ETH history..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/amar5.png)

> 1. **Tim**: The most common form of attack on PoW consensus is the use of computing power attacks. In the industry such as BTC and ETH history there have been many times this situation, or some attempts to fork the power, they will also go to rent and integrate some mining pool computing power to carry out computing power attacks. In order to improve the difficulty of the computing power attack, the hash algorithm of PoW itself is also important, some startup chains sometimes take the direct use of the hash algorithm of the mature chain, which also gives the attacker the opportunity to lease computing power, because there is a large amount of computing power of this algorithm in the market, which can be used to attack this new network with a low barrier. There are also networks that use generic devices such as graphics cards for mining, and this design also allows attackers to rent the computing power for attacks at low cost.
>
>    Starcoin uses a CPU-intensive algorithm, the current computing power is 60–80M, CPU-intensive means that a CPU core can only complete 20–50 hash calculations per second, so 60–80M computing power is equivalent to more than 2 million CPU cores in protecting this network, the attacker is usually not to simply seek damage, but want to achieve double spend to win back more benefits through the attack, or profit by manipulating the price of shorting the token of this platform, when the cost of the attack is greater than the benefit, the attacker is not inclined to attack this network.
>
>    **Move Little Prince**: I will mention the security of Starcoin smart contract. Starcoin has carried out a lot of security reinforcement, divided into multiple levels, such as a double-link structure to ensure the security of transactions, such as consensus security, prevention of synchronization protocol mining vulnerability, Starcoin reference Ethereum difficulty calculation, create a fake difficulty will affect the synchronization strategy, because the fake difficulty priority is higher, it will lead to the network nodes leave the group mining themselves and thus can not reach consensus. The broadcast mechanism includes the prove mechanism to ensure that a fake difficulty can not be created.
>
>    Different from Ethereum, first, Ethereum has a reward for mistakes, so some miners only mine “uncle blocks”, Starcoin’s consensus is that “uncle blocks” have no reward, but there is a reward for exposing other people’s mistakes, so you can know the traffic jam of the network, and if the uncle blocks are mined in large quantities, you can increase the difficulty and thus reduce the traffic jam of the network, which is another security of the consensus level.
>
>    There is also a Move stdlib (Starcoin Framework), that is, the “power (permission)” is a resource type, often expressed in Solidity through some identifiers (boolean type). In the Move the resource can not be copied (while Solidity can “assign” identifiers), so as to avoid hackers to steal such permissions as admin, root, and many other examples of the same. If you are interested in this, you can check out Move stdlib, so I won’t go over it here.
>
>    **Question**: Is it possible to perform second verification of off-chain transactions on-chain in contracts? How can I use an abstract account for second verification of transactions?
>
>    **Jolestar**: There is a solution to implement a mechanism similar to multi-signature through an abstract account. For example, the same account has two participants, A and B. A can send a transaction; but at the same time requires B to sign to confirm; but B cannot directly initiate the transaction; B can be a centralized service that provides the second verification. With an abstract account, it is even possible to limit the amount by the amount, so that only those exceeding a certain amount need to be verified twice.
>
>    Are you talking about a fidle-like protocol? This is not very easy to do and depends on a centralized service for hosting, if ignoring trust issues feasible to take the above solution, it is feasible.
>
>    **Question**: What do you think about the transaction ordering of the PoW chain?
>
>    **Answer**: Miners are responsible for transaction ordering when packing, the default algorithm is sorted by gas price in the code, but miners can change it without violating the consensus. Starcoin use an improved algorithm of Satoshi Nakamoto’s consensus; the biggest difference is the dynamic computing power adjustment. Starcoin introduces the epoch mechanism, which is very different from the BTC model, a block output of BTC takes 10 minutes, and a difficulty cycle adjustment takes 14 days. In the Web3 scenario, which is built for user interaction, this time is definitely too long; Starcoin is able to adjust more dynamically to give all users a more timely experience while improving network traffic congestion, thus maximizing the use of the network and doing more things.
>
>    # Summary
>
>    **Move Security**
>
>    Solidity’s NFT is a centralized storage solution, so it cannot simply use an address to display the NFTs it owns, while Move is the resources under the user’s account.
>
>    **Resource-oriented programming** is more suitable for the financial scenario, resources do not grow or decrease out of thin air, nor can they be copied and discarded, but can only be moved and exchanged within a secure environment, unlike Solidity, which directly manipulates the value of assets violently.
>
>    **Move is a static language**, Solidity is a dynamic language, in order to support the flexibility of dynamic calls, a contract can dynamically call another contract. When another contract has a problem, the contracts that dynamically call it may have a problem; but the contract developers may not know anything about it. Solidity’s design was flawed from the start; so Move’s final choice is a static language, scalability comes from the generics, the generics will be type-checked, so there will be no such problems arising from dynamic calls.
>
>    **Move has a formal verifier**, which can prove the security of a contract through a series of rigorous mathematical methods, such as the coverage of boundary conditions, the overflow of addition, subtraction and multiplication; while Solidity needs to be paired with other program verifiers to do. But Solidity may update faster than the verifier, thus causing bugs.
>
>    In addition, Move has borrowed from rust in engineering, thus having good “ergonomics”, with the above features can make the programmer’s mental burden reduced while also bringing increased security; so that the Move community can — while Solidity is more difficult to — produce large and complex programs under the premise of ensuring security. This is an opportunity, when the complexity of Web3 applications increases; Solidity may not be good enough to handle the development of complex projects.