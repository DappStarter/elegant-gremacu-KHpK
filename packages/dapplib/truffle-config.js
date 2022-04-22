require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth oven erosion hope arch tail gate'; 
let testAccounts = [
"0xe5570438d7e53650f4c081fd95affa2cbe7fa99e90135635dd4101a1650365b5",
"0x9937666c29bc8a3bc14068f1d17478a3c4b569488bb9ed42a0eb9d57dd376408",
"0x895490868f62528c04e756b34986739f74d5f7c4cb96f66c85ad7a66c57a7ccc",
"0xc873ef5a7f48503fe1e11f44f2443d26483410c51faa3f2e530f21ee51616ec7",
"0x7d1cbd299f686fad1fa5f0b1d5397b7e22eff13ba3bf6d193b9270de46bfafe1",
"0x9cf37288130f288aff35e1f2dd981920ae642602348252f0c4334d5cfc64686a",
"0x7a1e02cb329825549da04a92fa193f541761aeb1917df5c7305abfd5e07d6d1f",
"0xe1a1de1b8e4e88a13b4d5b04698232139d7d382199b0d90c0f4a5241d636477f",
"0x080f0f8af88260b60d137c21788b4af9abff46ba332f945adab816313aa41a9b",
"0xfd06ca2a7a1b466ad1c558b11c7823eac5388aafb4ea748dde9c7c228b8187be"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

