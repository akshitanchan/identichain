// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DIDContract {
    struct UserInfo {
        string name;
        string email;
    }

    mapping(address => UserInfo) public users;
    event UserRegistered(address indexed user, string name, string email);

    function registerUser(string memory _name, string memory _email) public {
        require(bytes(users[msg.sender].name).length == 0, "User already registered");
        users[msg.sender] = UserInfo(_name, _email);
        emit UserRegistered(msg.sender, _name, _email);
    }

    function getUserInfo() public view returns (string memory, string memory) {
        require(bytes(users[msg.sender].name).length != 0, "User not registered");
        return (users[msg.sender].name, users[msg.sender].email);
    }
}