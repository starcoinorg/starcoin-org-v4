---
title: "Starcoin: Thinking about DID and SBT"
meta_description: "Insights into Starcoin's approach with Move to decentralized identity (DID) and Soulbound Tokens (SBT)."
keywords: ""
twitter_card: ""
twitter_title: ""
twitter_description: ""
twitter_image: ""
date: 2022-10-05
summary: "Author:AIVE Recently users have been looking at DIDs, and Starcoin’s Name Service project is also known to be in development, and is currently experimenting with composable DIDs that combine SBT and..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

```
Author:AIVE

Recently users have been looking at DIDs, and Starcoin’s Name Service project is also known to be in development, and is currently experimenting with composable DIDs that combine SBT and domain identity using the composability of the Move language.

# DID (Decentralized Identity)

In the traditional physical world, a person is defined by name, ID card, passport and so on, and when socializing online, different accounts are created in different social platforms through these information, which are created by individuals, but the ownership does not belong to them, and the accounts in each platform are independent account systems.
In Web2, all this has long become a stereotype, and people are used to this way, used to different products with different account systems, and used to the accumulation of data in different platforms which is difficult to move to another platform.

But blockchain gives us a new revelation, perhaps we can break free from the cage of Web2 by decentralization, let our identity be unified, and let the ownership of the data generated be in our own hands, without relying on specific platforms.

DID is the product of this revelation, hoping that the authentication of identity will shift from official to decentralized, defining a person’s identity by their specific behavior. DID has several important features Low consensus cost, composability and native globalization.
Currently relying on blockchain technology can better carry DID, the existing blockchain is still relatively difficult to achieve so that everyone in the world has their own decentralized identity, which requires the continuous evolution and development of the blockchain to achieve concretely.

# DID in the form of a domain name

Due to the decentralization, strong consensus and globalization of blockchain, DID can be developed on the blockchain.
Currently we see most of the DID on the chain in the form of “domain names”, such as ENS, DAS. these domains will save some information through the on-chain storage, and can be read through the domain name to obtain the on-chain address or social account saved in it.
Through the blockchain, we can store various information of a person in a container for a long time, and when we need the personal identity of a domain name, we can access and read all the information related to the domain name through the public interface provided by the blockchain, which can include the interaction on the chain, assets and various social media accounts.
However, since the blockchain has no barrier to entry, the domain name on the chain you are looking for may not correspond to a real person, and the information he keeps may be filled in with someone else’s address.
This makes authentication difficult. Imagine a service that accepts a DID login and verifies that the information needed for the service is true (owned by the DID owner) by posting a tweet with the specified information on social media or by the verification method provided by social media. Other information can be verified in a similar way

# SBT form of DID

The DID in the form of domain name is a way to store information, but domain name is liquid and can be traded at will and also has the problem of expiration, which makes the problem of DID will be invalid and not conducive to other projects to provide services for it.
Binance officially launched its BNB chain-based soul-bound token, Binance Account Bound (BAB), on September 8, which is available to all users who have completed KYC certification.
This soul-bound model-based token is non-tradable and non-transferable, with only one per on-chain address.
Due to Binance’s position in the crypto space, BAB also has a strong consensus, and many projects have successively adopted BAB to counter witch attacks or use BAB holders as a user group with special privileges.
The SBT form of BAB will also have its advantages in the DID, where the BAB becomes part of the identity of the DID due to the well-known and legitimate nature of the issuing authority, which gives the holder a real name on the chain.

# Combinable DID for the Move language

DIDs in the form of SBTs and DID in the form of domain names play a role in specific domains, and if domain names can be combined with SBT along with identity, they can be distinguished while retaining some iconicity.
When other projects issue identities to them, they can be issued to the domain name, enabling the binding of identities and authentication, extending the use of the domain name and the information it can carry.