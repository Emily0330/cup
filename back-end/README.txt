# cup-Backend
The backend program of the solution challenge project regarding eco-friendly cups
## Steps to start the backend program
**1. Install Node.js:**
go to the [link](https://nodejs.org/en)  and download the recommended version. 

**2. Open the backend project in your IDE**

**3. install Node express:**
run `npm install express` in the terminal
node express before using the program

**4. install dotenv (in order to use Infura, the web3Provider):**
run`npm install dotenv --save`

**5. install web3**
run`npm install web3` in the terminal

**6. install body-parser**
run`npm install body-parser` in the terminal

**7. change the wallet address and private key into yours**
* in file index.js, 39th line:
`web3.eth.accounts.wallet.add("From_Address_Private_Key");` 
* in file index.js, 46th line:
`.send({ from: "From_Address" , gas: 1000000});` 

**8. run the program**
run`node index.js` in the terminal and you'll see
> Example app listening on port 3000

if the program is successfully implemented.

**9. successfully get request from the web app**
After enter the wallet address in our web app and press "發送資料"，we'll get the message below in our backend terminal:

![](https://i.imgur.com/gfIBbDO.png)




## Introduction
### index.js (the main file of the backend program)
**Remember to change the wallet address and private key into your own**
