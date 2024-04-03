import * as bitcoin from "bitcoinjs-lib";

// Prev Transaction
const input = {
  hash: "", //txId
  index: 1, //vout
  nonWitnessUtxo: Buffer.from("", "hex"), //tx hex
};

const inputInscription = {
  hash: "", //txId
  index: 0, //vout
  nonWitnessUtxo: Buffer.from("", "hex"), //tx hex
};

// Add memo
const data = Buffer.from("memo", "utf8");
const embed = bitcoin.payments.embed({ data: [data] });

// Create psbt
const psbt = new bitcoin.Psbt({ network: bitcoin.networks.testnet })
  .addInput(input)
  .addInput(inputInscription)
  .addOutput({
    script: embed.output,
    value: 0,
  })
  .addOutput({
    address: "", //pay fee address
    value: 99,
  })
  .addOutput({
    address: "", //receiving address
    value: 546,
  });

// Generate psbt
console.log(psbt.toHex());
