---
title: "Starcoin-framework V12 released, add DAOSpace, DAOSpace Plugin & Plugin Marketplace"
meta_description: "Learn about the Framework v12 release with DAOSpace and its plugin marketplace for Move developers."
keywords: ""
twitter_card: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2022-12-01
summary: "tarcoin-framework has released the v12 version, let’s take a look at what changes have taken place in the framework from v11..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"
image: https://miro.medium.com/max/700/1*-VVsnmvOh9KbnpK8vOhifg.png
---

- ![img](https://miro.medium.com/max/700/1*-VVsnmvOh9KbnpK8vOhifg.png)

  Starcoin-framework has released the v12 version, let’s take a look at what changes have taken place in the framework from v11 to v12!

  # Detailed Update Log

  - Added a new function in `#13`, when calling `Account::deposit(address, token)`, if the account does not exist, a new account will be created automatically.
  - Renamed `mpm`'s integration tests from `spectest` to `integrationt-test` in `#24` (`v1.11.5-alpha release`).
  - In `#34`, the NFT lending capability is realized, the NFT is rented out through the related `borrow` function, and the `return_back` function returns the NFT.
  - Added functions for serialization and byte stream processing in BCS in `#45`.
  - Added `StarcoinVerifier` module in `#43` to support snapshot proof and verification of Starcoin.
  - Added the `Ring` module in `#44`. Its usage scenario is: you need to keep a piece of data in a buffer, which can be overwritten when updating.
  - Add some methods in `Block` in `#41` to solve the problem that the contract cannot obtain the state root of the block in `#39`, and the provided method can save the block information.
  - The **major update** from **v11** to **v12** this time is: implement `DAOSpace`, `DAOSpace plug-ins` and `plug-in market`, please refer to [DAOSpace wiki](https://starcoin.atlassian.net/wiki/spaces/DAO) for details.