---
title: "Move 101 | What is Move?"
meta_description: "Discover the origins, design goals, and advantages of the Move programming language—used by Aptos, Sui, Starcoin, and more—for secure, efficient blockchain development."
keywords: "Move, programming language, blockchain, smart contracts, Diem, Aptos, Sui, Starcoin, security, resource model, formal verification"
twitter_card: "summary_large_image"
twitter_title: "Move 101 | What is Move?"
twitter_description: "Learn about the Move programming language, its origins, core design goals, security model, and why it's shaping the future of blockchain development."
twitter_image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qHFYOWYGR7DGHxsBVniPkQ.jpeg"
date: 2024-09-22
summary: "Move is a blockchain-specific programming language focused on security, verifiability, and resource management. It originated from Facebook’s Diem project and is now integral to platforms like Aptos, Sui, and Starcoin."
author: "Starcoin"
tags: [
    "Move",
    "Blockchain",
    "Smart Contracts",
    "Diem",
    "Aptos",
    "Sui",
    "Starcoin",
    "Resource Model",
    "Formal Verification"
]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qHFYOWYGR7DGHxsBVniPkQ.jpeg"
archives: "2024"
---

![Cover Image](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qHFYOWYGR7DGHxsBVniPkQ.jpeg)

**Move** is a programming language designed for blockchain and smart contracts, emphasizing **security, verifiability, and flexibility**. With Move, developers can build adaptable programs to manage and transfer digital assets with ease. Although it can be applied in various scenarios, its primary role is to ensure unique ownership and single use of digital assets. Move has become a core technology for emerging blockchain platforms such as **Aptos**, **Sui**, and **Starcoin**.

---

## Origin of Move

Move was originally developed by **Facebook (now Meta)** for its blockchain project **Diem** (formerly **Libra**). Diem aimed to create a simple, low-cost, and globally accessible blockchain network. Move was crafted as the language to execute blockchain transactions and provide developers with tools to build applications compatible with Libra.

- In late 2020, Libra rebranded to Diem following international criticism of its logo and name.
- In January 2022, Diem faced significant regulatory concerns, ultimately failing to launch.

Written in **Rust**, a multi-paradigm programming language known for memory safety and concurrency control, Move benefits from Rust’s robust foundations. Rust has been gaining global popularity since 2018, originally developed by **Graydon Hoare** for Mozilla Research in 2006.

---

## Design Goals of Move

Move was initially designed to be **safe** and **easy to write**, concisely expressing the rules of the Diem blockchain and its token issuance. Here are its core design goals:

### 1. Resource Model

- **First-Class Resources:** Move allows users to declare custom assets as resource types. These resources have special permissions and higher security, automatically including access control.
- **Modular Design:** Similar to Ethereum’s Solidity, Move modules contain resources and code blocks of various types and functions.
- **Non-Copyable Assets:** Move ensures assets (resources) cannot be copied or destroyed unintentionally, but only “moved” from one storage location to another.

### 2. Flexibility

- **Transaction Scripts:** Each Diem transaction contains scripts for executing operations in modules, allowing customizable main programs.
- **Object-Oriented Approach:** Modules, procedures, and resources in Move mirror classes, methods, and objects, offering flexibility in building secure, scalable code.

### 3. Verifiability

- **On-Chain & Off-Chain Verification:** While Move supports on-chain verification, it also allows off-chain tools to reduce complexity, crucial for high-performance blockchain systems.

### 4. Security

- **Stringent Resource, Type, and Memory Safety:** Ensures unsafe programs won’t be accepted.
- **Typed Bytecode Execution Model:** Combines high-level language features with the flexibility of low-level languages for enhanced security.

---

## Mainstream Blockchain Development Languages

The current mainstream languages for blockchain development include:

1. **Solidity:** Widely used for Ethereum smart contracts, resembling JavaScript in syntax.  
2. **Rust:** Primarily for Solana; known for high performance and memory safety, compiled to WebAssembly (Wasm).  
3. **Move:** Developed for Diem, emphasizing security and verifiability.  
4. **Vyper:** A concise, safer language for Ethereum, reducing complex features to lower vulnerabilities.  
5. **Cairo:** Utilized by StarkNet, focusing on scalability, privacy, and zero-knowledge proofs.

---

## Advantages of Move

Compared to other blockchain languages, Move has several standout advantages:

1. **High Security:** Emphasizes resource security, effectively preventing replay and double-spending attacks.  
2. **Resource Model:** Assets are non-replicable and non-losable, ensuring safe transfers between owners.  
3. **Flexibility & Modularity:** Supports modular design and custom resource types for complex financial and business logic.  
4. **Formal Verification:** Developers can mathematically prove code correctness before deployment, reducing vulnerabilities.  
5. **Concurrent Processing:** Designed for parallel transaction execution, significantly boosting throughput.  
6. **Strong Adaptability:** Although originally for Diem, Move’s design suits multiple blockchain platforms, including Aptos and Sui.

---

## Summary

As a **new-generation programming language**, Move’s unique resource management model, high security, and flexibility have made it integral to blockchain platforms like **Aptos**, **Sui**, and **Starcoin**. Its application prospects in DeFi, NFTs, and other blockchain verticals are expansive. Moving forward, Move will continue to play a **pivotal role** in driving blockchain innovation and development.