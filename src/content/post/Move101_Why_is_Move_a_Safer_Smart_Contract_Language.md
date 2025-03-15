---
title: "Move101 | Why is Move a Safer Smart Contract Language?"
meta_description: "Discover why Move is considered a safer smart contract language. Learn about its resource-oriented design, strong type system, memory safety, access control, and formal verification mechanisms that enhance blockchain security."
keywords: "Move, smart contract, blockchain security, resource model, type system, memory safety, formal verification, Move Prover, Aptos, Sui, Starcoin"
twitter_card: "summary_large_image"
twitter_title: "Move101 | Why is Move a Safer Smart Contract Language?"
twitter_description: "Learn how Move enhances smart contract security through its innovative resource model, robust type system, modular design, and formal verification tools."
twitter_image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*sLgkHmWjstAbem0s9s0AnA.jpeg"
date: 2024-09-24
summary: "Move is a compilable smart contract language designed to provide a safer environment for blockchain transactions. With its resource-oriented design, strong type system, and formal verification tools, Move addresses common vulnerabilities seen in other platforms."
author: "Starcoin"
tags: [
    "Move",
    "Smart Contracts",
    "Blockchain Security",
    "Resource Model",
    "Formal Verification",
    "Aptos",
    "Sui",
    "Starcoin"
]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*sLgkHmWjstAbem0s9s0AnA.jpeg"
archives: "2024"
---

![Cover Image](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*sLgkHmWjstAbem0s9s0AnA.jpeg)

**Move** is a compilable smart contract language designed to create a safer environment for executing transactions and writing smart contracts. Its design addresses vulnerabilities often found in other blockchain platforms by incorporating security features inspired by Rust. Compared with Solidity, Move is more suited for the development of digital assets, offering higher security that compensates for many of Solidity and EVM's weaknesses.

## A New Concept in Asset Management

Unlike traditional programming languages used in other blockchains, Move introduces a novel approach to asset processing by integrating asset management into its type system. This design ensures that digital assets:
- **Cannot be copied or accidentally destroyed:** Assets are treated as first-class resources.
- **Are uniquely managed:** Only the module that defines a resource can create or destroy it, ensuring true digital ownership.

### First-Class Resources and Digital Assets

Move's resource-oriented model is a core part of its security:
- **Customizable Resources:** Developers can define unique digital assets with specific numerical attributes.
- **Non-Copyable and Non-Discardable:** Once created, these resources cannot be duplicated or lost; they must be moved between storage locations.
- **Account-Bound Storage:** Resources are bound to accounts, ensuring that only authorized entities can operate on them.

## Code Safety Through Strong Typing and Memory Management

### Type System

Move uses a strong type system to define every variable and operation precisely. This rigor:
- **Catches errors at compile time:** Prevents illegal operations and potential vulnerabilities.
- **Ensures resource integrity:** Developers cannot manipulate resources and data types arbitrarily.

### Memory Safety

Memory safety is crucial in smart contract development:
- **Automatic Memory Management:** Move prevents common issues like memory leaks and overflows found in low-level languages (e.g., C/C++).
- **Stable Execution:** This protection reduces the risk of crashes or asset loss due to memory errors.

## Permission Separation and Modular Design

### Access Control and Operability

Move separates resource definitions from their permissions:
- **Default Move-Only Permissions:** Resources can only be moved, with clear ownership assigned to users rather than contracts.
- **Modular Architecture:** Each module encapsulates its logic and resources, preventing external code from modifying private data.
- **Strict Access Control:** Developers can set precise permissions, ensuring that only authorized operations are allowed.

## Formal Verification Mechanism

The Move Prover (MVP) provides a formal verification tool:
- **Static Security Verification:** Off-chain tools automatically verify whether the program meets its specified security properties.
- **Customized Specifications:** Developers define the expected behavior, and MVP uses automatic theorem proving to ensure compliance before deployment.

## Concurrency and Transaction Safety

Move is designed with concurrent execution in mind:
- **Parallel Transaction Processing:** Its type system and transaction isolation mechanisms ensure that resource operations remain safe even when multiple transactions execute simultaneously.
- **Prevention of Data Contention:** This design avoids conflicts and ensures secure, parallel execution.

## Summary

Move is a secure, resource-oriented, statically-typed smart contract language that significantly enhances blockchain security. Its innovative design—featuring first-class resources, strict memory and type safety, modular architecture, and formal verification—helps avoid common vulnerabilities such as reentrancy attacks, integer overflows, and improper initialization. These features make Move an ideal choice for emerging blockchain platforms like Aptos, Sui, and Starcoin, positioning it as a cornerstone in the evolution of secure decentralized applications.