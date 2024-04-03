import * as bitcoin from "bitcoinjs-lib";

// Prev Transaction
const input = {
  hash: "", //TODO: add txId
  index: 1,
  nonWitnessUtxo: Buffer.from("", "hex") //TODO: add tx hex
}

// Add memo
const data = Buffer.from('memo', 'utf8');
const embed = bitcoin.payments.embed({ data: [data] });

// Create psbt
const psbt = new bitcoin.Psbt({ network: bitcoin.networks.testnet })
  .addInput(input)
  .addOutput({
    script: embed.output,
    value: 0,
  })
  .addOutput({
    address: "", //TODO: add receiving address
    value: 99,
  })

// Generate psbt
console.log(psbt.toHex());
