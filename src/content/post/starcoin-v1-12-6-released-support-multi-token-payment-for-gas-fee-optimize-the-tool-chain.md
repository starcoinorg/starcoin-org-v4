---
title: "Starcoin V1.12.6 released, support multi-token payment for gas fee, optimize the tool chain"
date: 2022-11-30
summary: "Starcoin has released v1.12.6, which adds multi-token payment of Gas fees when sending transactions, upgrades the standard library from v11 to v12, upgrades the rust toolchain..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](https://miro.medium.com/max/700/1*zpcsZ4EwoN6Ke2cQsishkQ.png)

Starcoin has released v1.12.6, which adds multi-token payment of Gas fees when sending transactions, upgrades the standard library from v11 to v12, upgrades the rust toolchain, and optimizes the development experience.

# Multi-Token payment for Gas fees

Assuming at this point that a new token, DummyToken, is registered at address 0x1, then we can use this type of token to pay the Gas fee for the transaction, using it in the following way.

![img](https://miro.medium.com/max/700/1*sirk37ZqTDe3gIZoUZltHA.png)

# Detailed Update Log

- Upgrade starcoin from v1.12.4 to v1.12.5 in #3761
- Update the starcoin-framework dependency of the VM standard library to the latest version in #3764, synchronizing the two renamed entry functions in the framework’s Block module.
- Fix cyptonight compilation issues on windows in #3762
- Upgrade smallvec from 1.9.0 to 1.10.0 in #3768

![img](https://miro.medium.com/max/700/1*m6oYk2DzXh6XasBjON9-Zw.png)

- Changed the rust toolchain file rust-toolchain to rust-toolchain.toml in #3769 This means it is no longer backwards compatible. Upgrade the rust toolchain to 1.64, mold to 1.5.1, and remove the GitHub Action associated with the rust toolchain.
- Update docker_build.yml docker/setup-buildx-action to version 2 and Dockerfile rustup to version 1.25.1 at #3771
- Delete the starcoin-x package at #3777, update the scripts and config, and cargo llvm-cov nextest to generate the overlay data
- Fixed Starcoin console help message formatting issue in #3781
- In #3783 update the starcoin-framework dependency of the VM standard library to the latest version, update the README, and ignore the country library withdrawal test function
- Added the gas-token option to the transaction command in #3780 to specify the token to be used as the gas fee when sending a transaction, default is STC, use — gas-token 0x1::STC::STC
- Add Ubuntu 22.04 release version to #3787 to fix openssl incompatibility upgrade issue
- Add stdlib test for upgrading from v11 to v12 to #3788
- Upgrade Starcoin’s Move language to the latest version in #3792
- Upgrade stdlib to v12 in #3793
- Add a test to the upgraded Move in #3796
- Upgrade starcoin from v1.12.5 to v1.12.6 in #3797