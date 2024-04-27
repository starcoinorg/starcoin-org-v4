---
title: "Starcoin Easy Gas : 一种更灵活更快捷的支付"
date: 2022-11-07
summary: "目前的 Web3 应用在用户的使用和交互上来说，相对我们熟悉的 web2 应用，体验并不是那么友好。几乎每一次与 DApp 的互动对一些用户来说都是一个复杂的过程..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](https://miro.medium.com/max/700/1*Wz2rRceUGKq4BR4HrQjJzw.png)

目前的 Web3 应用在用户的使用和交互上来说，相对我们熟悉的 web2 应用，体验并不是那么友好。几乎每一次与 DApp 的互动对一些用户来说都是一个复杂的过程。其中一个典型的例子是交易的 Gas 费用支付问题。

几乎所有的公链中，想发起交易或者想使用 DApp，都必须先持有其原生链中的特定 Token，才能进行 Gas fee 的支付。而这对 web3 应用的推广和使用都是较大的成本。开发者们必须先教育用户使用，购买其原生 Token，然后才能使用他们的应用，这种强关联其实在逻辑上并无必要。

**在 Starcoin 中，我们设计了一种机制，能允许用户使用 Starcoin 上支持的任意 token 去支付其交易的 Gas 费用，即使用者可以不持有 STC，也能轻松的发起交易，从而轻松的进行 Dapp 应用的使用和开发。**

# Starcoin 为什么创新

我们分析一个典型的代表，以太坊中的实现方式。

以太坊中， 有一个服务叫 Ethereum Gas Station Network (GSN) ，其提供一个中间服务器(Relay servers)用来帮用户支付 ETH 交易费，并扣除用户指定的 ERC20 token 做为手续费。当用户提交交易时，并不会直接提交到以太坊链上，而是提交到 relay servers, 同时交易也是特殊的 meta transaction. 转由 relay servers 来组装为真正上链的 transaction。

因此，需要使用这样的方案，用户需要使用GSN提供的特殊 SDK, 并修改代码逻辑。同时，GSN服务也存在中心化，单点的问题。 整个交易的提交过程是以其代理的模式进行发送的。也可能存在一些隐患。

# Starcoin EasyGas

Starcoin 中，我们原生支持链上的任意 Token 进行 Gas 费的支付。我们通过和 Starcoin Dao 的结合，可以灵活的决定哪些 token 可以进行 gas fee 的支付，而不需要代理节点以及修改用户的代码逻辑，而是直接在 transaction 中指定支付 Gas Fee 的 Token。

如图所示，当用户提交交易提交之后，对于 Gas fee 的处理，会有以下的过程。

- **Prologue**: 计算出交易所需要的 Gas fee. 并校验是用户余度否足够支付。
- **Eprologue**: 交易执行之后，会将用户指定的 Gas Fee Token，转换为 STC, 并存储到队列Gas Fee支付队列，将来支付给矿工。
- **PriceOracle**: 用于获取 Token 价格的 Oracle服务。eprologue 和 eprologue 都将依赖其获取价格，用以校验和计算是否足够支付 Gas fee。
- **Dao&& GasOracleProposalPlugin**: 用于解决哪些 Token 可以成为Gas Token。以及谁可以更新 gas price 的价格。

由此可见，Starcoin通过结合 Starcoin Dao，将以太坊中需要中间代理节点才能完成的复杂工作，在 Starcoin stdlib 中简洁的完成了。

# Starcoin Easy Gas 使用举例

在 Transaction 的参数中，将 gas_token 设置为期望的 token 即可。

例如 Starcoin console 中，发起一个转账交易，并以 MyDummyToken 进行 Gas 费用支付：

```
starcoin% account transfer --gas-token 0x1::DummyToken::DummyToken --receiver 0x2c58cace2f326c8f833aa4d072ebebc3 -v 100
```