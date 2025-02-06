const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Token', () => {

    it('has a name', async () => {
        // get the contract factory
        const Token = await ethers.getContractFactory('Token');
        let token = await Token.deploy()
        // read token name
        const name = await token.name()
        //check the name is correct
        expect(name).to.equal('My Token')
    });   
});
