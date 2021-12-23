require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn pupil inflict enter bright squeeze'; 
let testAccounts = [
"0x3596c77fdc589f5465f2308e74cece45540a4c48c0364c5204e175554e978064",
"0x2d14220333a04d1790e5da9388fc9f4b37e77479a1426edd98c0d6cd4ee1abc1",
"0xaeb052d3ad5644c19657ebc57744ee1b1ba5d20bac4eda82d63aa20f14bcd5da",
"0x3e313a3a971150f5a210e13b7a005cd2cb9499b7692b01a1bf50c0629580dd03",
"0x6f002416306d60f5833df344e52b733d08d70eecf3cb384c51c0734fbd9b6f66",
"0xdf531d48dff71e249edd17acc5ed0993648bb61effdaab53af459161f4f10915",
"0x2bd6616b48452c17bf002bce37a5cd28287e7cf25152c645604e3bab95f3ac0f",
"0x296132cbdc29c93b504e8dcd9480f4be39e95845f5483a6fbfc3445a60b6791f",
"0x539ca73efc66a5396b6ffba2792f7bda49524256e45fecd8f0a5d031d55d42a9",
"0x7f74ea8cf7d271073e4402f108c0201768a5102cfbf475a9579053e3cef3e0f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

