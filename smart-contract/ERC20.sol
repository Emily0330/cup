//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface cupToken {
    
  function totalSupply() external view returns (uint256);
  
  function balanceOf(address tokenOwner) external view returns (uint256 balance);
  
  function transfer(address to, uint256 tokens) external returns (bool success);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 tokens
  );
  event Mint(
    address indexed to,
    uint256 amount
  );
}

contract tokenSystem is cupToken {
    uint256 private _totalSupply;
    mapping(address=>uint256) _balance;
    string public constant _name = "cupToken";
    string public constant _symbol = "CUP";
    address _owner;

    modifier onlyOwner() {
        require(_owner == msg.sender,"Only owner can access this function.");
        _;
    }
    constructor () {
        _balance[msg.sender] = 10000;
        _totalSupply = 10000;
        _owner = msg.sender;
    }
    function name () public pure returns (string memory) {
        return _name;
    }
    function symbol () public pure returns (string memory) {
        return _symbol;
    }
    function decimals () public pure returns (uint8) {
        return 18;
    }
    function mint(address account, uint256 amount) public onlyOwner {
        require(account != address(0),"ERROR: Mint to address 0.");
        _totalSupply += amount;
        _balance[account] += amount;
        emit Transfer(address(0),account,amount);
        emit Mint(account, amount);//chatgpt說要加的
    }
    /*
    而 recordMint 函式並不實際鑄造代幣，它只是將鑄造的資訊紀錄在區塊鏈上。透過觸發 Mint 事件，我們可以讓其他應用程式或用戶端收到這個事件，並且從中獲取這筆交易的資訊，進而知道代幣的鑄造紀錄。
    因此，在 recordMint 函式中觸發 Mint 事件是為了讓其他應用程式或用戶端可以收到這個事件，並且從中獲取鑄造代幣的資訊。
    */
    function recordMint(address to, uint256 value) external {
        emit Mint(to, value);
    }
    function burn(address account, uint256 amount) public onlyOwner {
        require(_balance[account] >= amount,"ERROR: No more tokens to burn.");
        require(account != address(0),"ERROR: Burn from address 0.");
        _totalSupply -= amount;
        _balance[account] -= amount;
        emit Transfer(account,address(0),amount);
    }
    function totalSupply () external view returns (uint256) {
        return _totalSupply;
    } 
    function balanceOf(address tokenOwner) external view returns (uint256 balance) {
        return _balance[tokenOwner];
    }
    function transfer(address to, uint256 tokens) external returns (bool success) {
        uint256 myBalance = _balance[msg.sender];
        require(myBalance>=tokens,"ERROR: No money to transfer.");
        require(to != address(0),"ERROR: Transfer to address 0.");
        _balance[msg.sender] = myBalance - tokens;
        _balance[to] = _balance[to] + tokens;
        emit Transfer(msg.sender,to,tokens);
        return true;
    }
}
