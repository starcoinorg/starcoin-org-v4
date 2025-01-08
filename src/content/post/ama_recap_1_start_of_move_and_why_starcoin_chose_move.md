---
title: "AMA Recap (1): Why Starcoin Chose Move - Starcoin"
meta_description: "Dive into why Starcoin chose Move and its importance in blockchain development as discussed in the AMA recap."
date: 2022-08-09
summary: "Move engineer salary of $1200 per hour phenomenon. Tim: Recently, I saw a tweet saying that Move engineers are top-rated now, and the hourly rate..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/amar1.png)

# Move engineer salary of $1200 per hour phenomenon.

**Tim:** Recently, I saw a tweet saying that Move engineers are top-rated now, and the hourly rate is offered at $1200, which also caused a lot of discussion and retweets, although the specific situation of this message has not been confirmed, if it is true, the $1200 may be an indication that the development of the Move ecosystem has received a lot of attention, which has caused a lot of projects in the industry to enter If it’s true, the $1,200 may be an indication that the Move ecosystem is getting a lot of attention and causing a lot of projects to enter the industry, leading to a very high salary for some essential coders at this time.

**Jiefeng Yang:** If it’s a short-term Move to complete some critical development tasks or do a key technical consulting, I think it’s possible to reach this salary, but if it’s a full-time Move development, this salary may not be universal.

**Jolestar:** The side effect is that the demand for Move developers in this market has increased, and investors and entrepreneurs in the market feel the talent resources a beat faster than developers, so it will cause a shortage of talent to meet the needs and it is normal to have a premium.

# Start of Move and why Starcoin chose move?

**Tim:** Talking about the start of Move, friends in the industry may understand that this technology has been out for several years; the earliest time is around 2019 Libra project, then also called Facebook, invented a set of technology called Move, and Zuckerberg has a big vision is to do a basket of this stable currency ah, including the dollar, euro, yen, Because he also raised a fundamental problem at that time, that is, this financial service has not done a universal, in fact, in many non-developed countries, the threshold for people to use some financial tools is still very high, in the eyes of Zuckerberg hope that users around the world can use some of these tools reasonably, for example, he holds some crypto, can prevent his government after this indiscriminate issuance of currency assets devaluation. In addition, it can also get some interest to increase some income. This vision is excellent, and finally, to solve this vision, he proposed a set of solutions based on Move. The Libra project also made a lot of trade-offs and even eventually changed its name to Diem, intending to issue a stablecoin in US dollars only. But the news at the beginning of this year was that Facebook put the project up for sale, and more recently, it is what everyone is concerned about, with some of Diem’s team members starting up to do Move public chain. The information on this is very transparent, and those interested can check online to learn more.

Starcoin development has not been too directly affected by the end of the project. As early as 2018, when it began to try, initially to solve the problem of blockchain scalability, so we were doing this research on the performance of this, tried a lot of these options of this layering, including our vision of this layering, when it happened to know Move, but ran into some problems of Starcoin , and spent half a year on this, a tough choice, and finally in May 2021 is the main network online, the situation is relatively good, basically reached a stable situation.

**Jolestar:** The Libra white paper was released in June 2019, and Westar Labs started a Stargate project in July to do Layer2 on top of Libra. We made the first Move backgammon game, which runs on Layer2. At that time, there was no source language for Move, and it was just an intermediate state language called MoveIR.

Later we decided to do Layer1 and faced some problems because Move itself did not take some public chain scenarios into account. We made a lot of improvements to make Move support public chains. Then we shared and discussed these problems after Aptos came out earlier this year. Now Move as a whole is an independent community project; we have made many improvements in multi-chain support. Based on ensuring the scalability of each chain to Move, we are exploring how to extract the most basic commonalities and share them with multiple projects. We can say that Move has reached a new stage!

**Jiefeng Yang:** Move language begins my relationship with blockchain development. I wanted to do something in the blockchain field last year, and if I were to work on the underlying public chain, I might not be able to enter this field soon. After I came across the Move language, I felt that it was pretty simple and quick to get started. If I were to use a smart contract language to develop applications on blockchain, I might not be very interested in it, but that’s also a matter of personal taste (not that it’s that hard to learn). Anyway, because of the Move language, I think I can enter the blockchain field quickly and try to start making some applications in it.

# Q: Some developers are interested in the difference between Move and Rust?

**Jolestar：** I did a share a while ago to compare the differences between Rust and Move through their use of linear types. The syntax of both is quite similar, and they both use some of the features of linear types. But in Rust, it only uses this feature to make memory recovery and does not expose this feature to the developer. In a smart contract, we need to make the program aware of what is scarce and what is essential in the external world, and we need to allow the developer to mark a type as a low asset or not, and whether it can be discarded at will. If a variable cannot be copied and cannot be dropped, it is a vital resource. I think this is one of the most critical points.

It is more complicated to compare, and there are some articles written before; you can take a look if you are interested.

**Listener：** I was impressed when I talked about the difference between Move and Rust, because I’ve developed some applications on Move. I’ve also been working on Solana recently, developing smart contracts with Rust.

One of my big feelings is that if you use Rust to develop a Dapp, you’re probably going to go back to how you developed Web2 applications before — that way of thinking. You’re dealing with all the data structures as “information.” You’re trying to solve the problem through the abstract model of the smart contract that its “chain” provides you. But this is a painful thing for developers. That is, I need to pay attention to security issues all the time.

But what is the feeling of developing on Move? First, I think the barrier to entry is relatively high because the way of thinking is different. I need to define “structures” to represent resources, and the structures have additional “capabilities.” But once you get used to the programming model, you think that’s how everything should be on the blockchain.

I can define a data structure to represent a resource, and it’s a linear type. I describe the scarcity of the structure by declaring a limit on its “capability.” As Jolestar just said, it’s a natural process. So I think the resource-oriented approach of Move on the blockchain is perfect for Dapp development.

**leeqiang:** There is a more widely used third-party library on solidity: openzeppelin; we can provide a similar function or framework to reduce developers repeating the wheel and improve development efficiency and code quality.

Compared to object-oriented languages, what features does move inherit?

**Jolestar:** These essential openzeppelin-like extensions to Solidity have been implemented by the community developers in Starcoin framework commons for most of the tool library.

**We apologize for keeping friends in the community waiting!This is the first part of the July 30th AMA Recap on Twitter Space. The second and third parts will be tweeted this week. Please stay tuned!**