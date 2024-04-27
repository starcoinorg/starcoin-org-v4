---
title: "Starcoin Eco-benefits: Cross-Chain Guide to Fast-Track Ethereum Learning"
date: 2022-06-27
summary: "In Web3’s grand voyage era, public chains empower data decentralization, and cross-chains break data silos. Therefore, cross-chain is one of the..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"
---

![img](/images/hackathon/eco-1.jpeg)

In Web3’s grand voyage era, public chains empower data decentralization, and cross-chains break data silos. Therefore, cross-chain is one of the essential basic components of every public chain ecology and an important dimension to measure the maturity of a public chain ecology. Starcoin ecology will soon launch the first decentralized Poly cross-chain bridge to achieve interoperability with Ethereum. This is a milestone that marks the maturity of the Starcoin ecosystem and the first interoperability between the Move ecosystem and Solidity ecosystem.

With the benefits of the cross-chain bridge, let’s take a quick look at how cross-chain is achieved between Starcoin and Ethereum, using USDT as an example.

# Preparation Stage

Cross-chaining USDT from Ethereum to Starcoin using Poly Network requires the use of two public chain wallets, MetaMask and StarMask.

1、MetaMask Wallet

Download MetaMask wallet, create an account or import an account, and transfer USDT to the account. For MetaMask download and installation tutorial, please refer to[ MetaMask official website](https://metamask.io/)。

2、StarMask Wallet

You will need to know about[ StarMask](https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk?hl=en), the official Chrome browser plug-in wallet provided by Starcoin.

StarMask is available for download at[https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk](https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk?hl=en)

Installation tutorial (EN).

[starmask-extension/how-to-install.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/en/how-to-install.md)

Installation tutorial (ZH).

[starmask-extension/how-to-install.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-install.md)

Tutorials for use (EN).

[starmask-extension/how-to-use.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/en/how-to-use.md)

Tutorials for use (ZH).

[starmask-extension/how-to-use.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-use.md)

Video Tutorial (EN)：[https ://www.youtube.com/watch?v=Y0b51VH_bkU](https://www.youtube.com/watch?v=Y0b51VH_bkU)

Video Tutorial (ZH)：[How to install StarMask Wallet?](https://www.youtube.com/watch?v=vNPuM7A714c)

After installing StarMask, please familiarize yourself with StarMask’s operation guide. After understanding MetaMask and StarMask, the prep work is done.

# Cross-Chain Guide

After installing StarMask and MetaMask wallets and preparing USDT, the preparations are ready.

Next, we have to cross-chain.

# 1. Go to the official website

First, go to the official website of Poly Network Cross-Link Bridge at

- [Main Network](https://bridge.poly.network/)

# 2.Connect Wallet

Connecting to a wallet。

![img](/images/hackathon/eco-2.jpg)

Select Ethereum and MetaMask.

![img](/images/hackathon/eco-3.jpg)

Select Starcoin and StarMask.

![img](/images/hackathon/eco-4.jpeg)

# 3. Selecting Assets Across Chains

SelectTokenAsset， Then select the assets that need to be cross-chained.

![img](/images/hackathon/eco-5.jpeg)

The asset we have chosen here to cross-chain assets is USDT.

![img](/images/hackathon/eco-6.jpeg)

# 4. Select cross-chain direction

Starcoin and Ethereum are two-way interoperable, users can either freely cross-chain from Starcoin to Ethereum or choose to freely cross-chain from Ethereum to Starcoin. here is an example of Ethereum cross-eUSDT to Starcoin. As shown in the figure.

![img](/images/hackathon/eco-7.jpeg)

Set the source chain **From**:

![img](/images/hackathon/eco-8.jpeg)

After successful setup, you should be able to see the following screen:

![img](/images/hackathon/eco-9.jpeg)


Set the target chain to:

![img](/images/hackathon/eco-10.jpeg)


After a successful setup of the previous step, you should be able to see the following screen:

![img](/images/hackathon/eco-11.jpeg)


# 5. Set the amount of money allowed to be transferred

Once the previous settings are set, enter the amount you want to cross-chain, either by clicking MAXto cross-chain all the USDT in your MetaMask wallet, or by directly entering the amount you want to cross-chain.

![img](/images/hackathon/eco-12.jpeg)

Then click the APPROVE button to invoke the MetaMask wallet, sign and submit the transaction:

![img](/images/hackathon/eco-13.jpeg)

The following diagram shows the status of a transaction in processing:

![img](/images/hackathon/eco-14.jpeg)


Note that Aprove is a step that needs to be performed when crossing out ERC20 protocol tokens from Ether, which does not exist when crossing out ETH from Ether.

# 6. Initiate cross-chain

After the previous step is completed, you will enter the following page, click NEXT, and here you will really enter the process of the cross-chain transaction.

![img](/images/hackathon/eco-15.jpeg)

Going to the confirmation page of the transaction details, 10 USDT will be cross-chained from Ether to Starcoin:

![img](/images/hackathon/eco-16.png)

Click on the CONFIRM button to evoke MetaMask, sign and initiate a real cross-chain transaction:

![img](/images/hackathon/eco-17.png)

Transactions wait in the transaction pool to be packaged, depending on the network congestion.

![img](/images/hackathon/eco-18.jpg)

The status of transactions can also be viewed via MetaMask at:

![img](/images/hackathon/eco-19.jpeg)

After the transaction is packed into the block, it will jump to the block confirmation page as shown in the figure and wait for the transaction to enter the finality (security) state, which normally takes 6–10 minutes for the whole process. As you can see from the block confirmation page, the transaction goes through 3 chains: Ethereum: the source chain, Poly: the relay chain, and Starcoin: the target chain.

![img](/images/hackathon/eco-20.jpg)

As shown in the figure, this is what happens when the transaction finally succeeds in the Finished state on the test network:

![img](/images/hackathon/eco-21.jpg)

Click on the Goto History hyperlink above to view the details of the transaction as shown in the image.

![img](/images/hackathon/eco-22.jpeg)

# 7. Confirm cross-link success

Let’s check the two wallets of Ethereum and Starcoin separately to check if the cross-chain is successful.

You can check Starcoin’s account balance, as shown in the graph, the balance of XUSDT should have increased (10 XUSDT)：

![img](/images/hackathon/eco-23.jpeg)

Looking at Ethereum’s account balance, the USDT balance should have decreased (10 USDT). This confirms the success of the cross-chain.

# Starcoin completes ecological upgrade and enters the application explosion period

The previous step-by-step analysis shows how to cross-chain from Ethereum to Starcoin and easily cross-chain Tokens from Ethereum to Starcoin.

Starcoin has developed a series of standard protocols, such as NFT protocol, and Oracle protocol, by leveraging Move’s native advantages. On top of this, Starcoin ecology has spread out in several tracks, such as Swap, NFT, Stablecoin, Gaming, etc., to take the lead in achieving breakthroughs. starcoin ecology has taken shape.

With the landing of Bridge, Starcoin has realized the initial layout of infrastructure, completed the upgrade of ecology, and is about to transform into the stage of ecological application explosion and reach the scale effect.