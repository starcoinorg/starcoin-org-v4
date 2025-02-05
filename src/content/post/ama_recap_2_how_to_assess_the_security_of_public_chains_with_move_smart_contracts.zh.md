---
title: "AMA Recap（2）Move公链怎么评估安全性？"
meta_description: "在这份详细的AMA回顾中，了解Move智能合约如何确保公链的安全性。"
date: 2022-08-22
summary: "Tim: PoW共识最常见的攻击方式是使用算力攻击。在行业内比如btc和eth历史上也曾经多次出现这种情况，或者一些尝试分叉的力量..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/amar5.png)

> 1. **Tim:** PoW共识最常见的攻击方式是使用算力攻击。在行业内比如btc和eth历史上也曾经多次出现这种情况，或者一些尝试分叉的力量，他们也会去租用和整合一些矿池算力来进行算力攻击。为了提高算力攻击的难度，PoW本身的哈希算法也很重要，有些初创的链有时候会采取直接使用成熟链的哈希算法，这样也给了攻击者租赁算力的方法的机会，因为市场上存在大量这个算法的算力，可以低门槛的对这个新的网络进行攻击。还有一些使用通用设备如显卡挖矿的网络，这种设计也可以让攻击者低成本租用算力进行攻击。
>
>    Starcoin是一个CPU密集型的算法，当前的算力是60–80M，CPU密集型是指一个CPU核心每秒只能完成20–50次哈希计算，因此60–80M算力等价于200多万个CPU核心在保护这个网络，攻击者通常不是为了简单寻求破坏，而是想通过攻击实现双花赢回更多的利益，或者通过操纵价格做空这个平台的token来获利，当攻击成本大于收益的时候，攻击者就不倾向去攻击这个网络。
>
>    **Move小王子：**我再补充一下Starcoin智能合约层面的安全。Starcoin进行了很多的安全的加固，分为多个层次，比如有双层link设计结构用来保证交易安全，比如有共识安全，防同步协议挖掘漏洞，Starcoin参考Ethereum的难度计算，制造一个假的难度会影响同步的策略，因为假的难度优先级比较高，会导致网络节点脱离群体自己挖矿从而无法达成共识，所以广播机制加入了prove机制来保证无法制造假的难度。
>
>    跟Ethereum不一样的地方，第一，Ethereum出错有奖励，所以有的挖矿的只挖 “叔块” ，Starcoin的共识是 ”叔块“ 没有奖励，但是暴露别人的错误有奖励，这样可以知道网络的堵塞情况，如果叔块挖出量大就可以增大难度从而减少网络堵塞，这就是共识层面的另一个安全。
>
>    还有一个Move stdlib(Starcoin Framework)，就是“权力（权限）”是资源类型，在Solidity里面往往通过一些标识符(boolean)来表示， 在 Move 里面资源不能复制（而Solidity可以“赋值”标识符），从而避免黑客窃取admin 、root之类的权限，还有很多同样的例子。对这个感兴趣可以去看看 Move，这里就不赘述了。
>
>    **Q:合约链上对线下二次验证可行吗？如何用抽象账号进行交易二次验证？**
>
>    **Jolestar:** 有一种方案，可以通过抽象账号实现类似多签的机制，比如同一个账号有两个参与方， A 和 B，A 可以发送交易，但同时需要 B 签名确认，但 B 不能直接发起交易，B 就可以是一个提供二次验证的中心化服务。有了抽象账号，甚至可以通过额度进行限制，只有超过某个额度的才需要二次验证。
>
>    类似fidle协议？ 不好做，依赖中心化服务进行托管，如果忽略信任问题采取上述解决方案，可行。
>
>    **Q: pow 交易排序问题**
>
>    **A：**矿工打包时负责交易排序，代码里按照gas price排序，但是矿工在不违反共识的情况下可以更改。Starcoin是一种中本聪共识的改进算法，最大的区别在于动态算力调整，Starcoin引入了epoch机制，跟BTC模型有很大的不同，BTC一个出块要10分钟，一个难度周期调整需要等14天。在为用户交互而生的Web3场景肯定太长了，Starcoin能够更动态地调整，给所有的用户更及时的体验的同时改善网络拥堵，从而最大化的利用网络，做更多的事情。
>
>    **总结：**
>
>    **Move 安全性**
>
>    Solidity 的 NFT 是一种集中化的存储方案，所以不能简单的使用一个地址去展示它拥有的NFT，而Move是用户帐户下的resources。Solidity被攻击之后，所有 NFT 拥有者都会受到损失，而Move只能说攻击到运行恶意合约的用户而不是所有的用户。
>
>    **面向资源编程**更加契合金融场景，资源不会凭空增长或者减少，也不能复制和丢弃，只能在安全的环境下在内做移动和交换，而不是像Solidity直接暴力操作资产的数值。
>
>    **Move是静态的语言**，Solidity是动态的语言，为了灵活性支持动态调用，一个合约可以动态调用另外的合约，万一其他的合约出了问题，则动态调用它的合约都可能会出问题，而合约的开发者并不知道。Uniswap v3有个合约直接禁止了动态调用，Move在设计之初借鉴了Solidity的失败经验，所以最终选型是静态语言，可扩展性来自于泛型，泛型会被进行类型检查，所以不会产生这种动态调用产生的问题。
>
>    还有**Move有形式化验证器**，可以通过一系列严谨的数学手段去证明合约的安全性，如边界条件的覆盖，加减法等数值溢出等，而Solidity需要搭配其他的程序验证器才能验证，不过Solidity更新速度可能快过验证器，从而引起bug。
>
>    另外Move在工程性上借鉴了rust，从而具有良好的“人体工程学”，搭配上面的特性可以使得程序员的心智负担降低的同时还能带来安全性的增加，从而使得Move语言社区可以在保证安全的前提下生产（Solidity做起来开发比较困难的）大型的复杂工程，这是一个机遇，当Web3复杂度上来之后，Solidity可能不能胜任复杂工程的开发工作。