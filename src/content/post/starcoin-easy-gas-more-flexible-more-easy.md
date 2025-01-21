---
title: "Starcoin Easy Gas : More Flexible,More Easy"
meta_description: "Discover how Starcoin's easy gas system enhances flexibility and simplifies Move blockchain transactions."
keywords: ""
twitter_card: "summary_large_image"
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2022-11-07
summary: "Present Web3 applications are not as user-friendly as the familiar web2 applications in terms of user experience and interaction. Almost every interaction with a DApp is a complex process for some users. A typical..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

Present Web3 applications are not as user-friendly as the familiar web2 applications in terms of user experience and interaction. Almost every interaction with a DApp is a complex process for some users. A typical example of this is the issue of paying Gas fees for transactions.
In almost all public chains, to initiate a transaction or to use a DApp, you must first hold a specific Token in its native chain before you can make a Gas fee payment. This is a big cost for the promotion and use of web3 applications. Developers have to educate users to use and buy their native Token before they can use their apps, and this strong association is actually not logically necessary.

Starcoin, a mechanism has been designed to allow users to use any token supported on Starcoin to pay for the Gas of their transactions, i.e. users can easily initiate transactions without holding STCs, enabling easy use and development of Dapp applications.

# Why Starcoin Innovates

Let’s take a typical representative, the implementation in Ethereum.

In Ether, there is a service called Ethereum Gas Station Network (GSN), which provides relay servers to help users pay for ETH transactions and deduct the ERC20 token specified by the user as a fee. When a user submits a transaction, it is not submitted directly to the Etherchain, but to relay servers, and the transaction is also a special meta transaction. The relay servers are used to assemble the actual transaction on the chain.

Therefore, it is necessary to use such a solution, the user needs to use a special SDK provided by GSN, and modify the code logic. At the same time, GSN service suffers from centralized, single-point problem. The whole transaction submission process is sent in the mode of its proxy. There may also be some pitfalls.

# Starcoin Easy Gas

We natively support any token on the chain for gas fee payment in Starcoin. By combining with Starcoin Dao, we can flexibly decide which tokens can be used for gas fee payment without the need for proxy nodes and modifying the user’s code logic, and instead specify the token for gas fee payment directly in the transaction.

As shown in the diagram, after a user submits a transaction for submission, the following process is used to process the Gas fee.

- **Prologue:** Calculates the Gas fee required by the exchange and checks if the user has enough funds to pay.
- **Eprologue:** After the transaction is executed, the Gas Fee Token specified by the user is converted to STC and stored in the queue Gas Fee payment queue for future payment to the miner.
- **PriceOracle:** Oracle service for obtaining the price of the Token. eprologue and eprologue will both rely on it to obtain the price to check and calculate if there is enough money to pay the Gas fee.
- **Dao&& GasOracleProposalPlugin:** Used to resolve which Token can become a Gas Token and who can update the price of the gas price.

As we can see, with Starcoin Dao, the complex work that needs to be done by intermediate proxy nodes in Ethernet is done in Starcoin stdlib in a simple way.

# Starcoin Easy Gas example

In the parameters of the Transaction, just set gas_token to the desired token.

For example, in the Starcoin console, to initiate a transfer transaction and pay the gas fee with MyDummyToken.

```
starcoin% account transfer --gas-token 0x1::DummyToken::DummyToken --receiver 0x2c58cace2f326c8f833aa4d072ebebc3 -v 100
```