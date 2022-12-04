<h1 align="center">
  <br>
  <a><img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/logo3.png" width="200"></a>
  <br>  
  Med-tracker
  <br>
</h1>

<p align="center">
  
  <a href="https://github.com/trufflesuite/ganache-cli">
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/ganachetrans.png" width="90">
  </a>
  <a href="https://soliditylang.org/">
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/Solidity.svg" width="80">       
  </a>
  <a href="https://reactjs.org/"><img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/react.png" width="80"></a>
  
  <a href="https://www.trufflesuite.com/">
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/trufflenew.png" width="50">
  </a>
   &nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/web3">
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/web3.jpg" width="60">
  </a>
  
  <a href="https://material-ui.com/">
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/mat.png" width="60">       
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://expressjs.com/"><img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/express.svg" width="50"></a>
  &nbsp;&nbsp;
  <a href="https://www.nginx.com/">
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/nginx.png" width="80">
  </a>
</p>

<h4 align="center">We're trying to fix Africa's drug market with <a href="https://docs.soliditylang.org/en/v0.8.4/" target="_blank">Solidity</a>.</h4>


<p align="center">
  <a href="#description">Description</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#flow">Flow</a> •
  <a href="#working">Working</a> •
  <a href="#contract-diagrams">Contract Diagrams</a> •
  <a href="#license">License</a>
</p>

## Description

Substandard or fake anti-malarials cause the deaths of between 64,000 and 158,000 people per year in sub-Saharan Africa, the Reuters report said.

Also, the accounting firm PwC says the proportion of fake pharmaceuticals in some countries can be as high as 70%, in developing regions such as Africa.

With a drug supply chain that is worth about 47 billion dollars, according to McKingsey, this is a huge problem that we're excited to tackle using amazing powers of the blockchain, and Polygon.

Usually, supply chain is always hard to manage and requires a lot of admistrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced.

Also it leads to an increase in the transparency and helps to build an efficient Root of Trust. Med-tracker is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of product from the manufacturer to the customer via the online e-commerce websites. 

![Screenshot 2022-12-04 at 21 25 48](https://user-images.githubusercontent.com/29931071/205517223-f86b8266-9da1-41e5-aca5-09b85d8a9678.png)

Now, with just a click, you can see how a drug has travelled from a manufacturere to you, the customer.


# Team

Adeola Adesina  - A licensed Pharmacist and Data scientist in Nigeria. He's the Superintendent Pharmacist at Sterling BioPharma, who currently sits on the registration and regulation of about 20 drug products.

He's also the team lead for the Hackathon.

https://www.linkedin.com/in/adeolaadesina19/

Sarah Mogorosi - Sarah is an Obsessive Entrepreneur and Investor and a leader in the digital and blockchain technology space. She is also a FinTech professional. She holds a Bsc in Accounting from the University of Johannesburg.

https://www.linkedin.com/in/sarahfaith1/

Kenneth Ezenwanne - Kenneth is a Software Engineer with expertise spanning Devops, AI and the blockchain. Web Design, Cloud Management, Web Development, Software Testing, Technical Support, and Cybersecurity are also places of his abilities.

https://www.linkedin.com/in/kenneth-ezenwanne-1a74a66b/




## Architecture
The smart contract is being written with Solidity which is then compiled, migrated and deployed using Truffle.js on the local blockchain network created using Ganache-cli.

The frontend uses Web3.js to communicate with the smart contract and local blockchain network and is written using React.js framework for better component and state lifecycle management.The requests from user are forwarded to frontend through Nginx(load balancer) and Express.js for dynamic routing.

<p align="centre">  
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/architecturefinal.png?raw=true" >  
</p>

## Flow
<p align="centre">  
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/flow.png" width="300">  
</p>



## How it works

<img src="https://user-images.githubusercontent.com/55195287/124394128-9646a600-dd1b-11eb-8bf1-233320762f1c.png" />


<p>
  The lifecycle of a product starts when <strong>manufactureProduct()</strong> is called(while making an entry) after the final product is manufactured and the product and manufacturer details are entered in the blockchain. The <strong>productHistory[]</strong> gets initialized and the current product data is stored with the current owner(manufacturer).
</p>

<p>
  Now this product shall be available to the Third Party for purchase. On being purchased by a third party seller, the <strong>purchasedByThirdParty()</strong> gets called where the owner is set to thirdParty and the present data gets pushed to the <strong>productHistory[]</strong> (which helps us to track the origin and handling of the product). Simultaneously, the product is shipped by the manufacturer (<strong>shipToThirdParty()</strong>) and is received by the Third Party where <strong>receivedByThirdParty()</strong> is called and the details of the Third Party seller are entered. Each of these checkpoint's data is stored in product history with the state being updated at each step. 
</p>

<p>
  The online purchase of the product takes place from the Third Party. When the customer orders the product, it is shipped by the Third Party (<strong>shipByThirdParty()</strong>) and received by the delivery hub where the <strong>receivedByDeliveryHub()</strong> is called. Here the customer address is stored, owner is set to Delivery Hub, details of the Delivery Hub are fed and the current data state gets pushed to the <strong>productHistory[].</strong>
</p>

<p>
  Finally the product is shipped by the Delivery Hub (<strong>shipByDeliveryHub()</strong>) and received by the customer where the <strong>receivedByCustomer()</strong> is called and the current and final state gets pushed to the <strong>productHistory[]</strong>.
</p>

<p>
  All of these juncture functions shall be called only after complete verification of product and <strong>productHistory[]</strong> while entering a checkpoint. (eg:- Customer accepts and confirms the product by clicking the receive button from his account only after it verifies the product). 
</p>

<p>
  <strong>fetchProductPart1()</strong>, <strong>fetchProductPart2()</strong>, <strong>fetchProductPart3()</strong>, <strong>fetchProductHistoryLength()</strong>, <strong>fetchProductCount()</strong>, <strong>fetchProductState()</strong> are the functions to retreive data of a product queried with UID and data type as product(current state) or history.
</p>

<p>
  The hashes(read certificates) are generated using the Solidity cryptographic function <strong>keccak256()</strong> which implements a SHA-3 hash in the blockchain setup. <strong>keccak256()</strong> generates a secure 256-bit hash which is the main basis of security in the entire mainnet apart from the smart contracts being immutable. In our supply chain setup certificates are generated at every stage of shipping of the product. 
</p>



## Contract Diagrams
## Activity Diagram


The overall flow of the project is described as follows.
<p align="centre">
  <a>
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/activitydiagram.png?raw=true" >
  </a>
</p>
<h3> Sequence Diagram</h3>
The flow of the functions in the smart contracts.
<p align="centre">
  <a>
    <img src="https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final/blob/main/images/sequencediagram.png?raw=true" width="1000">
  </a>
</p>



# Setup

1. Clone the repo

```
git clone https://github.com/Medtracker-Polygon-Bootcamp/Medtracker_Final.git && cd Medtracker_Final
```

2. Install dependencies

```
npm i
```

3. Run Ganache-cli

```
npm i -g ganache-cli
```

```
ganache-cli --accounts 10 --gasLimit 6721975000
```

4. Migrate the contract to ganache for testing

```
truffle migrate --network=develop --reset
```

And for mumbai

```
truffle migrate --network=matic --reset
```

5. Open a second terminal and enter the client folder

```
cd client
```

6. Install all packages in the package.json file

```
npm i
```

7. Run the app

```
npm start
```


# Next steps

Considering the magnitude of how much lives we can save by decentralizing the African drug supply system, here's what we plan to use the prize moeny to achieve if we win:

1. Add more functionalities.

The app works just fine but the recieving function(from manufacturer to third party, third party to delivery hub, delivery hub to customer) could be better built with Node.JS/Next.JS

2. Advocacy to Drug Supply Agency - NAFDAC

We plan to sell this software to NAFDAC and the drug supply agencies of every African country for $100,000 or more, depending on the complexity. This is because the success of this app depends solely on the drug supply agency.

3. Drug Hash(Universal Product ID)

We plan to improve the hash function section of the app. Such that every drug manufactured by a manufacturer on this DAPP gets an hash number, that customers can use to verify the authenticity of each drug purchased.



# Website Demo Instructions



Link: https://radiant-torte-1a22b6.netlify.app/


Demo Video

https://drive.google.com/file/d/1EJUxNDlhYervIi5HduRqLv_Op8knS8Lv/view?usp=share_link

1. Make sure your metamask is connected.

2. Assign Roles

First click on Assign roles. This section will be handled by the drug supply agency(NAFDAC in case of Nigeria).
Open your Mumbai test net on Metamask and create 4 accounts(One for manufacturer, one for third party, one for delivery hub, one for customer)

![Screenshot 2022-12-04 at 22 21 22](https://user-images.githubusercontent.com/29931071/205519717-5f34d228-22ec-477a-9e88-7c112d82eda2.png)

Copy all 4 addresses into the "Assign roles" section of the DAPP.

![Screenshot 2022-12-04 at 22 23 48](https://user-images.githubusercontent.com/29931071/205519817-a48cab5e-9b83-481e-8f71-44c232de249d.png)

Now click on "ADD", it will pop out metamask so you can confirm the transaction.

3. Visit as

Now let's go to Visit as manufacturer. The manufacturers have the privilege to create products, so in your metamask, make sure you're in the address for Manufacturer.

Enter in any random details and click Add products.

![Screenshot 2022-12-04 at 22 27 24](https://user-images.githubusercontent.com/29931071/205520019-0b61a3d3-3d52-49dc-b4db-5bd7e532dfac.png)

You can also explore Third Party, Delivery Hub and Customer section.

4. Explorer - https://radiant-torte-1a22b6.netlify.app/explorer

This is where customers/patients go to check product history. Now input "1" into the search bar and see the result.

![Screenshot 2022-12-04 at 22 30 52](https://user-images.githubusercontent.com/29931071/205520154-e4bde904-94d6-4dd5-967d-f7c9fb7099c9.png)



So here's the MVP of our drug supply/anti-counterfeiting solution, built on Polygon.
