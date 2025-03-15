---
title: "Instructions for Using the Starcoin 2.0 Final Test Network"
meta_description: "Step-by-step instructions for deploying nodes and smart contracts on the Starcoin 2.0 final testnet Proxima. Get started with downloading, node deployment, contract packaging, and execution."
keywords: "Starcoin 2.0, final testnet, Proxima, node deployment, smart contract, Move, blockchain testing"
twitter_card: "summary_large_image"
twitter_title: "Instructions for Using the Starcoin 2.0 Final Test Network"
twitter_description: "Follow these detailed instructions to deploy nodes and smart contracts on Starcoin 2.0 final testnet Proxima and experience the latest features of the Move ecosystem."
twitter_image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*HuJdyL_gk4wHszI6.jpeg"
date: 2025-01-02
summary: "Learn how to set up your node and deploy smart contracts on the Starcoin 2.0 final testnet Proxima, maintaining full compatibility with the mainstream Move ecosystem."
author: "Starcoin"
tags: [
    "Starcoin 2.0",
    "Testnet",
    "Proxima",
    "Node Deployment",
    "Smart Contracts",
    "Move"
]
image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*HuJdyL_gk4wHszI6.jpeg"
archives: "2025"
---

![Testnet Image](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*HuJdyL_gk4wHszI6.jpeg)

The final version of the **Starcoin 2.0 testnet Proxima** is now online! This testnet maintains compatibility with the mainstream Move ecosystem. Developers can deploy nodes, smart contracts, and experience Starcoin 2.0 firsthand.

## Testnet Node Deployment

1. **Download the Application:**  
   Visit the following GitHub release page and download the application:  
   [Starcoin Release new_framework_1.0.3](https://github.com/starcoinorg/starcoin/releases/tag/new_framework_1.0.3)

2. **Execute the Node:**  
   Run the following command to deploy your node on the Proxima testnet:  
```

starcoin -n proxima

```
3. **View Node Progress:**  
Check the status of your node by running:  
```

account show

```
## Contract Deployment and Call

1. **Build a Move Project:**  
Create and build your Move project as usual.

2. **Package the Contract:**  
In the root directory of your Move project, run the following command to package and output the contract:  
```

mpm release

```
This will generate a blob file in the `./release/` folder (e.g., `xxx.blob`).

3. **Deploy the Contract:**  
Open the Starcoin console and follow these steps:
- **Import an Account:**  
  Use your private key to import an account (make sure it has STC):  
  ```
  account import -i <0x private key>
  ```
- **Deploy the Contract:**  
  Deploy your packaged contract with the following command (replace placeholders accordingly):  
  ```
  dev deploy <path>/release/xx.blob -s 0x12345 -b
  ```
- **View Deployment Results:**  
  Check the output in the console to verify successful deployment.

4. **Call the Deployed Function:**  
Execute the entry function of your deployed contract using this command (replace `<ModuleName>` and `<FunctionName>` with actual names):  
```

account execute-function --function 0x123456:::: -s 0x12345 -b

```
5. **View Call Results:**  
Confirm the function execution by checking the call results in the console.

Enjoy exploring the Starcoin 2.0 testnet Proxima! For further details and updates, visit our [GitHub repository](https://github.com/starcoinorg/starcoin) and join the Starcoin community.
```