import Urheberrecht from './contracts/Urheberrecht.json'

const options ={
    contracts:[Urheberrecht],
    web3: {
        fallback:{
            type: "ws",
            url: "ws://127.0.0.1:9545",
        },
    }
};

export default options;