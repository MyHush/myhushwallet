/*
config.js - Configuration for Hush Coin
*/

module.exports = {
    mainnet: {
        messagePrefix: 'HUSH mainnet',
        bip32: {
            public: '0488b21e',
            private: '0488ade4'
        },
        pubKeyHash: '3c',
        scriptHash: '55',
        zcPaymentAddressHash: '169a',
        zcSpendingKeyHash: 'ab36',
        wif: '80'
    },
    testnet: {
        messagePrefix: 'HUSH testnet',
        bip32: {
            public: '043587cf',
            private: '04358394'
        },
        pubKeyHash: '3c',
        scriptHash: '55',
        zcPaymentAddressHash: '16b6',
        zcSpendingKeyHash: 'ac08',
        wif: 'ef'
    }
};