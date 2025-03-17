---
title: "Discover What’s New in Starcoin Move v7"
meta_description: "Explore the latest upgrade to Starcoin Move v7 featuring smart contract annotations, improved compiler tools, enhanced syntax, and full compatibility with Aptos. Discover the new features and roadmap for seamless migration and developer empowerment."
keywords: "Starcoin Move v7, Move upgrade, smart contract annotations, code formatter, code linter, bytecode decompiler, improved syntax, Aptos, blockchain, developer tools, Starcoin Framework"
twitter_card: "summary_large_image"
twitter_title: "Discover What’s New in Starcoin Move v7"
twitter_description: "Learn about the groundbreaking new features in Starcoin Move v7, including enhanced developer tools, improved compatibility with Aptos, and a comprehensive roadmap for the future of blockchain innovation."
twitter_image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_ZuwKY2aftKcdCl85k_BLA.jpeg"
date: 2024-08-29
summary: "Starcoin Move v7 builds on the legacy of Diem-based Move with cutting-edge features like smart contract annotations, advanced compiler tools, and enhanced syntax, paving the way for seamless integration and long-term innovation in the Move ecosystem."
author: "Starcoin"
tags: [
    "Starcoin",
    "Move v7",
    "Blockchain",
    "Upgrade",
    "Aptos",
    "Developer Tools",
    "Smart Contracts",
    "Bytecode Decompiler",
    "Interoperability"
]
image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_ZuwKY2aftKcdCl85k_BLA.jpeg"
archives: "2024"
---

![Cover Image](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_ZuwKY2aftKcdCl85k_BLA.jpeg)

Starcoin, as the first permissionless blockchain based on Move, has its Move version rooted in Diem, a permissioned blockchain implementation. As the industry progressed, Move has diverged into several de facto versions, including Aptos, Sui, and Starcoin’s Diem-based Move V6.

The Move programming language undergoes continuous evolution, leveraging its modular design and resource type system. With the introduction of new features in Move by various vendors, accessible through Move GitHub, DApp developers gain enhanced efficiency in building applications and can harness Move’s security and concurrency controls with greater flexibility.

Building upon Move V6, the integration of these cutting-edge features offers improved support for developers and ensures long-term value for Starcoin. **Starcoin Move v7** introduces the following significant new features:

- **Smart Contract Annotations:** Adds extra functionality support for users.
- **Code Formatting Tool:** Similar to gofmt and rustfmt, ensuring a consistent code format.
- **Code Linter Tool:** Inspired by Rust Clippy, it helps developers write safer and more efficient code.
- **Bytecode Decompiler Tool:** Functions like Java’s javap, allowing Move bytecode to be decompiled into source code for easier auditing.
- **Improved Receiver Syntax:** Enables `receiver.fun(args)` instead of the traditional `func(receiver, args)` style, reducing code verbosity.
- **Enums and Match Functions:** Introduces a functional programming style to simplify code writing.
- **Array Subscript Access:** Supports direct array access by index, minimizing redundant code.
- **Closures and References:** Adds support for closures and references to enhance coding flexibility.
- **User-Defined Abilities:** Expands upon Move’s native abilities (copy, key, store, drop) with a user-defined Iterator function for easier element search.
- **Global Storage Reference Return:** Now supports returning Global Storage References, overcoming previous limitations where contract code required type hard-coding.

## Starcoin’s Upgrade to Move v7

To support these new and Aptos-compatible features in Starcoin Move v7, we have adopted the following methods:

- The Aptos-compatible Move version is based on **aptos-node-v1.15.1**, and we will continue to monitor major updates.
- During the upgrade process, our **StarcoinVM workflow** remains unchanged while adapting to the new Move version interface using corresponding functions (traits), structs, and enums.
- **Starcoin Framework** implements these Move functions based on the aptos-stdlib and aptos-framework, with necessary modifications to ensure compatibility.
- Move resources associated with Starcoin 1.0 will undergo data and resource migration to align with the new Move version once it is live.

The upgrade involves several components:

### Move Compiler
- **Upgrade to Move v7:** The compiler has been updated to Starcoin Move v7, based on the Aptos repository commit hash `cea6cf84416a651ffb458469b80da2da885fe1f5`. We will continue to monitor and integrate further improvements.
- **Support for Module Meta Functionality:** Allows customized annotations in conjunction with the blockchain.
- **Separation of Compiler and Prover:** Enhances modularity and flexibility by splitting these components.

### StarcoinVM
- **Compatibility with Move v7:** The VM adapts to the new Move v7 interface while maintaining compatibility with blocks generated by older versions through a feature mechanism.
- **Optimized Transaction Validation:** Shifts transaction validation from the compiler to on-chain processing, streamlining the overall process.
- **Enhanced Gas Fee Implementation:** Improves system scalability and enables on-chain objects to interact more effectively with smart contracts.

### Starcoin Framework
- **Integration of Aptos Object Standard:** Incorporates the Aptos Object standard into the Starcoin Framework, ensuring compatibility with Aptos Framework features.
- **Facilitates Cross-Platform Migration:** Projects developed on Aptos can be migrated to Starcoin with minimal changes, and vice versa.
- **Compatibility for Existing Projects:** Projects on StarcoinFramework 1.0 will need to update to support the newly introduced Object model for future releases.

## Summary

This upgrade to Starcoin Move v7 is not just a response to new features in Move—it is a significant step towards enhancing the Starcoin ecosystem. By improving compatibility with the latest version of Move, optimizing performance, and providing more flexible development support, Starcoin offers developers a broader space for innovation. As more features roll out, Starcoin will continue to drive blockchain technology forward, delivering a richer and more reliable on-chain experience for both users and developers.

We encourage all developers to explore these new features and begin experimenting with them in their projects. Stay updated with our latest developments by following the Starcoin GitHub repository and joining our community discussions to help shape the future of blockchain technology.