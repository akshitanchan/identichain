// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VerifiableCredentialContract {
    struct VerifiableCredential {
        string credentialType;
    }

    mapping(address => VerifiableCredential) public verifiableCredentials;
    event CredentialIssued(address indexed user, string credentialType);

    function issueCredential(string memory _credentialType) public {
        require(bytes(verifiableCredentials[msg.sender].credentialType).length == 0, "Credential already issued");
        verifiableCredentials[msg.sender] = VerifiableCredential(_credentialType);
        emit CredentialIssued(msg.sender, _credentialType);
    }

    function getVerifiableCredential() public view returns (string memory) {
        require(bytes(verifiableCredentials[msg.sender].credentialType).length == 0, "Credential not issued");
        return verifiableCredentials[msg.sender].credentialType;
    }
}