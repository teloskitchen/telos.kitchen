---
title: "Digitalness Primer"
date: 2021-11-22T10:36:33-06:00
draft: false
description: ""
img: ""
---

```
digitalness [ dij-i-tl-nis ]
Noun. The recognition that a series of electrical or magnetic signals may have the same rights as the natural entities or objects they represent.
```
The legal industry has recognized forms of manifested intent in a variety of ways. Think of corporate proxies, surrogacies, trusts and wills. Digitalness is just another way, another mechanism to capture the intent of a person. Like a shareholder proxy casting a vote on a shareholder’s behalf, or a will that outlines how property is to be disposed of, digitalness functions the same way.

The first building block of digitalness is Identity. In their Digital Identity Act, the state of Wyoming defines digital identity in both a personal and organizational context. In both, the identity is the “intangible digital representation of, by and for [the entity], over which [the entity] intentionally communicates or acts.” The types of parties included with this scope are natural persons and legal or commercial entities.

The act simply states that “acts taken through a digital identity are attributable to the [entity] if they were taken by the entity.” Again, this is an easy concept to understand in the non-digital, or traditional legal world we all commonly use.

Perhaps the more challenging concept to grasp with digitalness is authenticity, i.e. how do we as users of digitalness ensure that software programs used to promulgate real human intent do so accurately? The answer to that question is, blockchain. The Wyoming Digital Identity Act does not impose an explicit requirement for a blockchain, wallet, or cryptography. There is a mention of “showing the efficacy of a security procedure”, but the breadth of allowed mechanisms seems to be purposeful to transcend various forms of key custody and ensure the Act is future proof.

Digital Identity, as simple as it sounds, connects the dots that private keys and blockchain accounts, the actions that they take, are connected to the corresponding entities. 

In the Digital Asset Act, Wyoming was the first state to define that digital asset “means a representation of economic, proprietary or access rights that is stored in a computer readable format and is either a digital consumer asset, digital security or virtual currency.”

This act mostly clarifies custodial regulations and practices for banks. Respecting the reality that tokens and coins are actually assets is a key component of digitalness.

To summarize so far, on-chain actions taken by specific keys or accounts are the actual actions of the actors, and the on-chain state and state changes may involve actual assets. Pretty simple.
Decentralized Autonomous Organizations (DAO) Bill
Wyoming was the first State in the United States to invent the concept of  the Limited Liability Company (LLC) by passing legislation in 1977. An LLC is a business structure that limits the owner’s personal responsibility for the company’s debts or liabilitiesThe LLC has been wildly popular for decades as an alternative to corporations, partnerships, and sole proprietorships because of the limited liability shield and favorable tax treatment by state and federal government.

The DAO Bill is a supplement to the existing Wyoming Limited Liability Company Act. It states that all of the provisions of LLCs apply to DAOs, and specifies the information required to establish a DAO in the state. Think of it as akin to non-profits or s-corps that are formed as corporations under the corporate laws of states but are treated differently based on certain operational and  governance elections made at the time of formation and special tax filings made by the owner.

LLCs are suggested to have two documents: Articles of Organization and Operating Agreement. 

The DAO bill requires that:
The LLC’s Articles of Organization (founding document) have a statement that the company is a decentralized autonomous organization. This is similar to how corporations who wish to be treated as non-profit corporations must have a statement in the charter that the entity will operate as a non-profit.

The LLC’s Articles of Organization for DAOs have the following text:

```
NOTICE OF RESTRICTIONS ON DUTIES AND TRANSFERS
 
The rights of members in a decentralized autonomous organization may differ materially from the rights of members in other limited liability companies. The Wyoming Decentralized Autonomous Organization Supplement, underlying smart contracts, articles of organization and operating agreement, if applicable, of a decentralized autonomous organization may define, reduce or eliminate fiduciary duties and may restrict transfer of ownership interests, withdrawal or resignation from the decentralized autonomous organization, return of capital contributions and dissolution of the decentralized autonomous organization.
 ```

The registered name of the LLC must contain “DAO”, “LAO”, or “DAO LLC”.

The articles of organization shall include a publicly available identifier of any smart contract directly used to manage, facilitate or operate the decentralized autonomous organization.

The above items all pertain to content or information that must be in the registration. The Act also defines what the smart contract must govern. Here are those requirements and how each one is implemented on-chain in the base DAO LLC smart contract reference implementation. Of course, this contract can be upgraded by members (and members alone), in which case the right-hand column may change.


## Smart Contract Requirement
### Implementation
Relations among the members and between the members and the decentralized autonomous organization
The word “relations” seems a bit strange here, but there are no relations among the members besides what is defined in the smart contract. The contract’s action signatures (e.g. for creating proposals) are public and clear.
Rights and duties under this chapter of a person in their capacity as a member
Members have a right to make proposals and vote on proposals. They also have the right to transfer their membership interests at any time, unless otherwise proposed and managed via an upgrade to the base contract (for activities such as staking).
Activities of the decentralized autonomous organization and the conduct of those activities
The DAO may elect, via a vote or proposal, to hire third parties or agents to conduct off-chain activities, such as paying taxes or fees. These parties or agents may or may not be members of the DAO.
Means and conditions for amending the operating agreement
The operating agreement is maintained wholly on-chain. It can only be updated via a vote from members.
Rights and voting rights of members
Membership interests are measured and maintained via a standard token contract, where the DAO itself is the issuer. 

This token is a unit of account.

Voting power is equivalent to membership interest. Both are calculated as the number of tokens owned by the voter divided by the total supply of that token.
Transferability of membership interests
Transferability is instant and final based on transfer of the DAO’s token.
Withdrawal of membership
A member may withdraw by transferring their membership interests to the DAO’s smart contract.
Distributions to members prior to dissolution
Members are entitled to a share of all assets owned by the DAO, proportional to their membership interests in the DAO. 
Amendment of the articles of organization
The operating agreement is maintained wholly on-chain. It can only be updated from a vote from members.
Procedures for amending, updating, editing or changing applicable smart contracts
The operating agreement is maintained wholly on-chain. It can only be updated from a vote from members.
All other aspects of the decentralized autonomous organization
From time to time, there may be off-chain activities required by the DAO, such as placing an offer on a property or paying property taxes.

These are handled via an elected agent of the DAO, who may or may not be a member.


## DAO Information Requests
If information is available on an open blockchain, there is no duty or requirement for the DAO to otherwise provide that information to members. This implies that it is OK to operate the DAO on a private blockchain (with a public identifier).  More importantly, it ensures that the DAO does not need to comply with laborious information requests since it is already publicly available.
Code is Law
One of the Act’s most consequential and empowering aspects is found in the Miscellaneous section. 

Where the underlying articles of organization and operating agreement are in conflict, the articles of organization shall preempt any conflicting provisions.  Where the underlying articles of organization and smart contract are in conflict, the smart contract shall preempt any conflicting provisions of the articles of organization.

This establishes a hierarchy of effective power among the core documents of a DAO LLC. The Articles of Organization trump the Operating Agreement, and the Smart Contract trumps the Articles of Organization.

Smart Contract    >   Articles of Organization    >   Operating Agreement

This clause clarifies that the on-chain smart contract is the highest, most trusted source of information. In our base DAO LLC smart contract, the text of the documents is stored within the smart contract itself. Even so, the machine code within the smart contract(s) trumps all. 

This clarification empowers the machine code above all else, which is a critical factor in allowing digitalness to thrive. This makes sense in a classic legal manner because the smart contract is the best proxy, or best clue for understanding the intent of the person. It is an explicit understanding that forcing smart contract machine code to comply with paper documents or written words unravels the value proposition. If it were even cryptographically possible, the ability to overrule the machine code would create an existential vulnerability.

The on-chain records are instant and final settlement of membership interests in the DAO LLC.
Future of Digitalness
Wyoming’s legislation on Digital Identity, Assets, and Organizations are a substantial enabler of innovation in our space. It establishes the start of a framework for how people, businesses, and property may be handled in the Metaverse. Our mission is to continue to push the boundaries of open innovation by developing products that accelerate adoption of digitalness in the real world.