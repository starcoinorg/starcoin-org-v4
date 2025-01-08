---
title: "Features of Starcoin: The Resource-Oriented Move"
meta_description: "Discover the 2022 Starcoin roadmap with Move significant milestones and advancements achieved throughout the year."
date: 2023-04-11
summary: "Move, a new generation smart contract language, has received widespread attention within the industry from day one. ..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2023"

---

Move, a new generation smart contract language, has received widespread attention within the industry from day one. A look at the features of Move language gives some insight into the reason for the excitement it has garnered within the developer community, the Starcoin ecology and blockchain industry in general.

Considering the well-known issues that current blockchain languages like Solidity pose to the ecosystem, the need for a new language which is safe and flexible has been imperative. Move is a linear logic resource-oriented programming language that allows developers to write programs that flexibly manage and move assets, while providing security and protection against attacks on those assets.

Certain features of Move support core functionality on Starcoin, and others have been widely improved on the network, being the first public chain project to use Move as a smart contract programming language.

Let’s have a look at the important features of Move in simple terms:

Resource-Oriented Programming Language

One of the defining features of Move is the ability to define custom resource types. Resources are a new ownership model inspired by Linear Types which have helped in designing a new programming model for Move. Resource types are used to encode safe digital assets with rich programmability.

Labeling something as a “resource” tells the programming environment that this data structure represents something of tangible value and that all code that interacts with that data structure needs to follow a series of special rules that will maintain the value of that data structure.

These rules summarily imply that digital assets cannot be copied or counterfeited, but can only be moved. Additionally, ownership of a resource is defined by where it is stored, and each resource exists in exactly one place at any given time.

Formal Verification

Formal Verification is a relatively cutting-edge technology that uses mathematical methods to prove the security of the program.

Before the smart contract is deployed, its code and documents are formally modeled, and then the security and functional correctness of the code are strictly proven by mathematical means. It can effectively detect whether there are security and logic bugs in smart contracts. Formal verification will surely become a necessary tool for smart contract programming.

Move’s Ability

The Ability feature can be used to control the permissions of different types of functions which translate to control over the attributes of resources/assets. The Move programming language abstracts four attributes of resources, which are: ability to be copied or not (copy), ability of the value to be accessed as a key to the global state (key), ability of the value to be dropped at the end of the scope (drop), and ability of the value to be stored to the global state (store).

For example, in defining a type of NFT, if the ability to copy is not given, then we can ensure that the NFT cannot be copied at will.

With this quality of being able to define custom types, users can prevent a certain degree of insecurity, clearly defining the behavior of resources that can be operated and promoting creativity.

Static Type Move

Move uses a static type system, which is essentially a logical constraint. It is stricter than EVM. Modern programming languages such as Rust, Golang, and Typescript all adopt static type systems. The advantage here is that many low-level programming errors can be found at compile time, rather than delayed until runtime. For developers, this certainly adds some obstacles because stricter constraints require developers to think more. Web2’s ultimate pursuit of efficiency has greatly increased developers’ tolerance for bugs, but the emergence of asset-oriented smart contracts undoubtedly supports this feature.

Generic Programming

This feature of Move makes it possible to apply a single written function to a variety of types of functions. This is very helpful to avoid a lot of repetitive work that is common with writing code in other contract languages, when it becomes necessary to write a lot of similar code for different NFT types that may perform the same processing.

Generic programming can significantly reduce the repetition of code, improve coding efficiency and increase the flexibility of Move, while enhancing code logic clarity, making it easier to spot errors.

STDLIB

Starcoin uses the Move programming language to build the Starcoin Standard Library, (Stdlib), and various resource-oriented applications can be easily constructed. Many features of the Move programming language ensure the security of resources.

Starcoin uses Stdlib to officially customize and publish some general contracts, which is convenient for other users to use.

Starcoin’s Stdlib is an implemented contract. This is because the official implementation has been provided, based on the basic protocol of Stdlib, users can easily design their own applications, such as NFT applications or Oracle applications, without having to implement them according to the protocol, but only need to implement the business logic contract code.

Conclusion

Digital assets have gone through a long development process. As the ecosystem continues to mature, projects like Starcoin that identify the need for security will continue to innovate in this direction and expand the possibilities of growth for the Move ecology and blockchain at large.

