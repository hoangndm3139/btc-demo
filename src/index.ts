import * as bitcoin from "bitcoinjs-lib";
import { BtcPsbt, TxInput, TxOutput } from "./transaction.js";

const btcPsbt = new BtcPsbt(bitcoin.networks.testnet);

const inputs: TxInput[] = [
    // { hash: 'Prev TxId', index: 1, nonWitnessUtxo: Buffer.from("Prev Transaction hex", "hex") }, //when send inscription add 1 input prev inscription tx
    { hash: 'Prev TxId', index: 1, nonWitnessUtxo: Buffer.from("Prev Transaction hex", "hex") },
];

const outputs: TxOutput[] = [
    { address: '', value: 0 }, //to address
    { address: '', value: 0 } //from address - to pay fee
];

//add memos
const newOpreturns: string[] = [
    "This is a new OpReturn message",
    "Another OpReturn message"
];

btcPsbt.updatePsbt(inputs, outputs, newOpreturns);

const updatedPsbtHex = btcPsbt.toHex();

console.log(updatedPsbtHex);

