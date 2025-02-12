---
title: "AMA Recap (1): Solana Hack's Impact on Move - Starcoin"
meta_description: "Insights into considerations about Move triggered by the Solana hack, as revealed in the AMA session."
date: 2022-08-22
summary: "Is this Solana security incident a coincidence? Tim: This incident of theft of funds on Solana is different from some previous security incidents in that..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"

---

![img](/images/hackathon/amar4.png)

> 1. Is this Solana security incident a coincidence?
>
> **Tim:** This incident of theft of funds on Solana is different from some previous security incidents in that this time the hacked address submitted a normal transaction (aka transfer) on-chain. And a common security incident that everyone understands is the transfer of funds after authorizing an application (authorization breach). At the time of the case, the hacked addresses were pointing to a commonly used wallet called Phantom. Before the cause was identified, the industry also referred to the measures of some previous security incidents and called on users to revoke the authorized applications on Phantom, but the subsequent look at this measure was not helpful for this incident because the hackers had the private keys of the hacked addresses, and removing the authorization did not prevent the hackers from conducting fund theft operations.
>
> A common scenario for token authorization is that the user authorizes an application such as a lending platform or a common application such as swap, and the user can optionally set the upper limit of the authorized funds, so that the maximum amount of funds will be lost when there is a security problem.
>
> According to the latest news, more than 1,000 user mnemonics were leaked on the Slope wallet on Solana after Slope uploading user mnemonics to the cloud service. The transport layer was TLS, no problem; but the mnemonics were stored explicitly in the cloud, so server administrators with access could backup that information and thus access those people’s funds.
>
> A total of about nine thousand addresses of users were affected, including Phantom wallet users, but the reason for the theft of funds from this part of Phantom users has not yet been found out.
>
> **Move Little Prince:** The main problem is the preservation of the private key. Security is a whole issue, and things can go wrong at all levels.
>
> **Tim:** I’d like to explain the relationship between mnemonic phrases, wallet addresses, and money. Some products also call them seed phrases, or seed addresses. HD type wallets use mnemonics to generate multiple addresses inside the wallet; and the addresses generated by the same set of mnemonic phrases are completely deterministic; so the mnemonic phrases are equivalent to the “username and password” of your wallet, and any person can use your mnemonics to gain access to all your wallets.
>
> **Tim:** After this security issue came up, there were some offers to compensate users, such as sending some airdrops to these addresses, but this option is not really feasible. Because these users have lost their mnemonic words, the funds sent to the original address can easily be claimed by hackers in the first place, so airdrops don’t make sense. For two users who both have the same mnemonic word, it’s hard for us to distinguish from the blockchain world who is the owner and who is stealing, so sending airdrops is not feasible.
>
> **I also have some tips for mnemonic management:**
>
> - When creating a wallet account on your phone, don’t send it to yourself for backup via WeChat(or any IM app) messages or email. While these services are encrypted at the transport layer, the server itself is capable of viewing this information, and characters with access to view server information theoretically have the opportunity to steal your mnemonic words, so don’t do it.
> - Don’t copy and paste mnemonic words on your computer or phone to back them up. Some malicious apps detect the contents of the clipboard, so copy and paste is likely to leak, and some apps even monitor keyboard events.
> - Keep an eye on official wallet developments and keep your wallet upgraded to the latest version.
> - Remember to upgrade your browser so that the attack script loses exploitable vulnerabilities.
> - Unused contract authorizations are stopped in time.
>
> **The safest way：**
>
> - When creating a wallet you can make the path an oversized number.
> - Hand copy down to a safe (need a safe), but not waterproof and not fireproof.
> - Carve steel plates (requires steel plates).
> - Use a hardware wallet with an encryption chip(but that is not fireproof).
> - Make several backups.
> - When copying mnemonics, you can disrupt the order and put the indexes elsewhere, so even if others get it, they can’t try it out.
> - You can combine the above ways together!
>
> **Special Guest Yishi:** Let me say a few words about why hardware wallets are useful.
>
> Because clients (PC, Android, iOS) that are networked are difficult to ensure that the environment they run in is secure; closed source software can not be audited; and open source applications are not good to ensure the correctness of the source code. So try to do a good job of isolating small funds and large funds, put a little inside the hot wallet on the line; put the rest into a secure hardware wallet, in any time to carry out asset operations this address will be a double confirmation of your operations, and do not have to worry about the risk of viruses and keyboard listening and so on.
>
> If you ever run into something like this Solana thing again, if you use a hardware wallet paired with a hot wallet, the most you will lose is the amount of the hot wallet.
>
> There was a suggestion earlier that one dapp use one address, but from this incident it didn’t work because the mnemonic was stolen instead of a certain address.
>
> Many users use the wallet — such as MetaMask, after entering the password, the private key is plaintext — due to the lack of capacity really save the mnemonics in the browser Local Storage; and the browser for the plugin control are very weak; the plugin requirements for permissions are so many, and even some plugins will apply to read all the data of all software; malicious plugins if there is such a large authorization, it is the same as saying that the security of your assets into a very dangerous place. So remember to read the information on the permissions required by the plugin when installing the plugin.
>
> **Move Little Prince:** Most developers focus on business security and ignore user security, so actually security is a whole system issue. Multi-party privacy computing is already very mature in wallet management, so we recommend wallet developers to introduce this new technology.
>
> **Tim:** Multi-party computing (MPC) wallet is also an interesting topic, it also has some different security ideas, we can ask the Little Prince to introduce it.
>
> **Move Little Prince:** SSSS (Shamir’s Secret Sharing Scheme) mode will split the private key, specify the number of signatures, when a signature party private key is lost can let other signatories help restore a party’s private key, multi-party privacy computing is somewhat similar to multi-signature, but in the execution will not restore your private key, so the money will not be hacked when lost.
>
> ZenGo is doing MPC, but they seem to be targeting more of a to-B business, such as centralized organizations, helping centralized organizations decentralize their wallets, but there is a semi-hosted form for individuals.
>
> **Thank you for your patience, this Web3 RoundtableTalk (08.06.2022) recap is divided into 2 tweets, the next one will be tweeted this week.**