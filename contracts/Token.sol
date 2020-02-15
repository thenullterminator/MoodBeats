pragma solidity ^0.5.0;

contract Token{
    
    string  public name = "Token";
    string  public symbol = "T";
    string  public standard = "Token v1.0";
    uint256 private totalSupply;
    address owner;


    // address to balance
    mapping (address => uint256) public balanceOf;
    uint256 public count;
    event Transfer(
        address indexed _from,
        address _to,
        uint256 _value
    );

   

    constructor (uint256 initialSupply) public {
        owner = msg.sender;
        totalSupply = initialSupply;
        balanceOf[owner] = totalSupply;
    }

    function transfer(address to, uint256 value) public returns (bool){
        require(balanceOf[msg.sender] > value,"Insufficient balance");

        balanceOf[msg.sender] -= value;

    
        balanceOf[to] += value;

        emit Transfer(msg.sender, to, value);

        return true;
    }

    function distribute(uint256 value) public returns (bool){
        require(balanceOf[owner] > value,"Insufficient balance");

        balanceOf[owner] -= value;

    
        balanceOf[msg.sender] += value;

       

        return true;
    }


    function getBalance() public view returns (uint256) {
        return balanceOf[msg.sender];
    }

    function getBalanceOther(address id) public view returns (uint256) {
        require(msg.sender == owner,"Only owner is allowed to get balance of other users");

        return balanceOf[id];
    }
}
