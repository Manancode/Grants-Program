"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8735],{89810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(30828);const r={},o="e-Passport ZK Validation",s={unversionedId:"RFPs/Open/epassport-zk-validation",id:"RFPs/Open/epassport-zk-validation",title:"e-Passport ZK Validation",description:"Status:* Open",source:"@site/docs/RFPs/Open/epassport-zk-validation.md",sourceDirName:"RFPs/Open",slug:"/RFPs/Open/epassport-zk-validation",permalink:"/Grants-Program/RFPs/Open/epassport-zk-validation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Decentralized Security Marketplace",permalink:"/Grants-Program/RFPs/Open/decentralized-security-marketplace"},next:{title:"Formal Guarantees for GRANDPA Finality Gadget",permalink:"/Grants-Program/RFPs/Open/formal_guarantees_for_grandpa"}},l={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - transparent solution PoC on substrate",id:"milestone-1---transparent-solution-poc-on-substrate",level:3},{value:"Milestone 2 - adding ZK functionality",id:"milestone-2---adding-zk-functionality",level:3},{value:"Milestone 3 - Updateability",id:"milestone-3---updateability",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"e-passport-zk-validation"},"e-Passport ZK Validation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/burges"},"burges"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/FlorianFranzen"},"FlorianFranzen"))),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"The issue of verifying identities on-chain and providing Proof-of-personhood is a challenging one."),(0,n.kt)("p",null,"One idea to authenticate users is to ask them to submit the details from their e-passports. While it would provide authentication, it forgoes the aspect of privacy."),(0,n.kt)("p",null,"This proposal aims to provide the verifiability of personal data coming from e-passports, while ensuring protection of personal information by using zero-knowledge proofs."),(0,n.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,n.kt)("p",null,"Please note that the below given details do not comprise neither detailed nor security-complete plan of development. The implementing party should perform in-depth research on each part of the protocol in order to understand its limitations and nuances."),(0,n.kt)("h3",{id:"milestone-1---transparent-solution-poc-on-substrate"},"Milestone 1 - transparent solution PoC on substrate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 months (incl. research)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 60,000 kUSD")),(0,n.kt)("p",null,"As the first step, we propose the creation of a working PoC without the use of zero-knowledge proofs that can be deployed on substrate."),(0,n.kt)("p",null,"Deliverables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chain can store the necessary certificates from CSCA"),(0,n.kt)("li",{parentName:"ul"},"User can upload their DSO (Document Security Object) as well as the associated DSC (Document Signer Certificate) on chain"),(0,n.kt)("li",{parentName:"ul"},"The chain logic verifies:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DSC is valid against CSCA"),(0,n.kt)("li",{parentName:"ul"},"the signature contained within the DSO checks out against DSC")))),(0,n.kt)("h3",{id:"milestone-2---adding-zk-functionality"},"Milestone 2 - adding ZK functionality"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 5 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 100,000 kUSD")),(0,n.kt)("p",null,"Rather than supplying the entire DSO, which would reveal the user's personal information, users should be able to upload a cryptographic proof that they indeed know the data contained within the DSO, without revealing it in its entirety."),(0,n.kt)("p",null,"There should be two parts to this functionality: off-chain prover and on-chain verifier."),(0,n.kt)("p",null,"The users would supply all their private information to the off-chain prover (which they can either run themselves or use a trusted third party) and the prover would produce a cryptographic proof."),(0,n.kt)("p",null,"Later, the proof is uploaded on-chain, and the chain logic performs verification of the proof given the pre-agreed circuit. The circuit must be shared between prover and verifier and should include public inputs such as the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.icao.int/Security/FAL/PKD/Pages/ICAO-Master-List.aspx"},"Master List")," of CSCA certificates, revocations, etc., as well as use the same algorithms and parameters."),(0,n.kt)("h3",{id:"milestone-3---updateability"},"Milestone 3 - Updateability"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 20,000 kUSD")),(0,n.kt)("p",null,"The Master List is expected to, albeit unfrequently, receive updates as new countries join the PKD or as they update their certificates periodically. Furhtermore, countries are expected to publish the revocations of any compromised certificates."),(0,n.kt)("p",null,"It is important that both prover and verifier circuits are updated accordingly - else the proof won't match."))}c.isMDXComponent=!0}}]);