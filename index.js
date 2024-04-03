import * as bitcoin from "bitcoinjs-lib";

// 
const input = {
  hash: "bb5ddcebd3fbb3229f713eab988316685986c9e9d9e21b0fa15ed11e7e1b4196", // prev txid
  index: 1,
  nonWitnessUtxo: Buffer.from("0200000000010162da7cf2e768c474af92039f5cd88a5bfa11c848f0bed901f63a4f02c45484f60000000000fdffffff02220200000000000016001404b783f9aca417bf3562d8d67aa2163cfa6ababf050500000000000016001469006b4a7e7045fba01ba4d594d0dc13b009b5e7034048cc7ff7aa36421a9b2dbbe1ddeb3d86f77650009170f94ff6b353f8f15cbb40d76e861eb10476cb7a58fc3b0e617758e487a767e3ac0d2ef81855a99d503893782046b0bb303446cd9001ea22913c9b938567e6d3ee108be8697eb1d1ad8cd961e2ac0063036f7264010118746578742f706c61696e3b636861727365743d7574662d3800327b2270223a226272632d3230222c226f70223a226d696e74222c227469636b223a2273617473222c22616d74223a2231227d6821c1339c698f3c6cd20217826ef0331bcceae9b539a6b44f640be24610e3920e69c900000000", "hex")
}

const data = Buffer.from('memo', 'utf8');
const embed = bitcoin.payments.embed({ data: [data] });

const psbt = new bitcoin.Psbt({ network: bitcoin.networks.testnet })
  .addInput(input)
  .addOutput({
    script: embed.output,
    value: 0,
  })
  .addOutput({
    address: "tb1qqjmc87dv5stm7dtzmrt84gsk8nax4w4lgwsku0",
    value: 99,
  })

console.log(psbt.toHex());
