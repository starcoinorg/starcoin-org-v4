---
title: "Starcoin生态利好，跨链指南教您快速打通Ethereum"
meta_description: "通过 Starcoin 的生态优势和跨链学习资源，加速您的以太坊知识积累。"
date: 2022-06-27
summary: "Web3的大航海时代，公链赋予数据去中心化的能力，跨链则打破了数据孤岛。所以，跨链是每个公链生态必备的基础组件之一，也是衡量一个公链生态是否成熟的重要维度。Starcoin生态即将上线首个去中心化的Poly跨..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/eco-1.jpeg)

Web3的大航海时代，公链赋予数据去中心化的能力，跨链则打破了数据孤岛。所以，跨链是每个公链生态必备的基础组件之一，也是衡量一个公链生态是否成熟的重要维度。Starcoin生态即将上线首个去中心化的Poly跨链桥，与Ethereum实现互通。这是一个里程碑，标志着Starcoin生态的成熟，也标志着Move生态与Solidity生态首次实现互通。

随着跨链桥的利好，我们以USDT为例，来快速了解Starcoin与Ethereum之间是如何实现跨链吧。

# 准备阶段

使用Poly Network将USDT从Ethereum跨链到Starcoin，需要用到两个公链的钱包，分别是MetaMask和StarMask。

1、MetaMask钱包

下载MetaMask钱包，创建账户或者导入账户，并且将USDT转账到账户上。关于MetaMask的下载安装使用教程请参考[MetaMask官网](https://metamask.io/)。

2、StarMask钱包

然后需要了解Starcoin官方提供的Chrome浏览器插件钱包StarMask。

StarMask的下载地址：[https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk](https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk?hl=en)

安装教程(EN)：

[starmask-extension/how-to-install.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/en/how-to-install.md)

安装教程(ZH)：

[starmask-extension/how-to-install.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-install.md)

使用教程(EN)：

[starmask-extension/how-to-use.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/en/how-to-use.md)

使用教程(ZH)：

[starmask-extension/how-to-use.md at main · starcoinorg/starmask-extension](https://github.com/starcoinorg/starmask-extension/blob/main/docs/zh/how-to-use.md)

视频教程(EN)：[https ://www.youtube.com/watch?v=Y0b51VH_bkU](https://www.youtube.com/watch?v=Y0b51VH_bkU)

视频教程(ZH)：

[如何安装StarMask钱包？](https://www.youtube.com/watch?v=vNPuM7A714c)

在安装好StarMask之后，请了解StarMask的操作指南。了解了MetaMask和StarMask之后，前期的准备工作就完成了。

# 跨链指南

安装好StarMask和MetaMask钱包，并且准备了USDT之后，准备工作已经就绪，接下来，我们要跨链了。

# 1. 进入官网

首先，进入Poly Network 跨链桥的官网：

- [主网](https://bridge.poly.network/)

# 2.连接钱包

连接接钱包。

![img](/images/hackathon/eco-2.jpg)

选择Ethereum和MetaMask。

![img](/images/hackathon/eco-3.jpg)

选择Starcoin和StarMask。

![img](/images/hackathon/eco-4.jpeg)

# 3. 选择跨链的资产

选择`TokenAsset`，然后选择需要跨链的资产。

![img](/images/hackathon/eco-5.jpeg)

这里我们选择的资产跨链资产是 USDT。

![img](/images/hackathon/eco-6.jpeg)

# 4. 选择跨链方向

Starcoin与Ethereum是双向互通的，用户既可以从Starcoin自由跨链到Ethereum，也可以选择从Ethereum自由跨链到Starcoin。这里以将 USDT 从 Ethereum 跨到Starcoin为例，如图所示：

![img](/images/hackathon/eco-7.jpeg)

设置源链From：

![img](/images/hackathon/eco-8.jpeg)

设置成功之后，如图所示：

![img](/images/hackathon/eco-9.jpeg)


设置目标链To：

![img](/images/hackathon/eco-10.jpeg)


设置成功之后，如图所示：

![img](/images/hackathon/eco-11.jpeg)

# 5. 设置允许转账的金额

前面都设置好之后，输入想要跨链的金额，可以点击`MAX`将MetaMask钱包中的 USDT 全部跨链，也可以直接输入自己想要跨链的金额：

![img](/images/hackathon/eco-12.jpeg)

然后点击`APPROVE`按钮，唤起MetaMask钱包，签名并提交交易：

![img](/images/hackathon/eco-13.jpeg)

如图所示是交易处理中的状态：

![img](/images/hackathon/eco-14.jpeg)

这里需要注意的是，Aprove 是将以太坊上的 ERC20 协议代币跨出时需要操作的的一个步骤，如果是将 ETH 从以太坊跨出，是不存在这个步骤的。

# 6. 发起跨链

上一步操作完成之后，会进入如下页面，点击`NEXT`，这里才会真正进入到跨链交易的流程。

![img](/images/hackathon/eco-15.jpeg)

进入交易详情的确认页面，有10个 USDT 会从以太坊跨链到 Starcoin：

![img](/images/hackathon/eco-16.png)

点击`CONFIRM`按钮，唤起MetaMask，签名并发起真正的跨链交易：

![img](/images/hackathon/eco-17.png)

交易在交易池等待被打包，具体等待时间依赖网络的拥塞情况：

![img](/images/hackathon/eco-18.jpg)

也可以通过MetaMask查看交易状态：

![img](/images/hackathon/eco-19.jpeg)

交易被打包进区块之后，会跳转到如图所示的区块确认页面，等待交易进入终结性（安全）状态，一般情况下整个过程需要6–10分钟。从区块确认页面可以看出，交易经过了3个链，源链Ethereum、中继链Poly、目标链Starcoin。

![img](/images/hackathon/eco-20.jpg)

如图所示，这是交易在测试网最终成功进入Finished状态的情况：

![img](/images/hackathon/eco-21.jpg)

点击上图的`Goto History`超链接，查看交易的详情，如图所示：

![img](/images/hackathon/eco-22.jpeg)

# 7. Confirm cross-link success

# 7. 确认跨链是否成功

我们分别查看Ethereum和Starcoin的两个钱包，检查跨链是否成功。

可以查看Starcoin的账户余额，如图所示，XUSDT 的余额应该增加了（10个 XUSDT）：

![img](/images/hackathon/eco-23.jpeg)

再看Ethereum的账户余额，USDT 的余额应该减少了（10 个 USDT）。由此可以确认跨链成功。

# Starcoin完成生态升级，进入到应用爆发期

前面逐步分析了如何从Ethereum跨链到Starcoin，轻松将Ethereum的Token跨链到Starcoin。

Starcoin借助Move的原生优势，制定了一系列标准协议，例如NFT协议、Oracle协议。在此基础之上，Starcoin生态在多个赛道铺开，例如Swap、NFT、Stablecoin、Gaming等等，率先实现突破。Starcoin生态已经初具规模。

随着Bridge的落地，Starcoin已经实现基础设施的初始布局，完成生态的升级，即将转型进入到生态应用爆发的阶段，达到规模效应。