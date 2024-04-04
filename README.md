- Send btc:
   - Step 1: generate psbt
   - Step 2: signPsbt
   - Step 2: pushPsbt 
- Demo:
   - Step 1: npm start
   - Step 2: https://docs.unisat.io/dev/unisat-developer-service/unisat-wallet#signpsbt
   - Step 3: https://demo.unisat.io/
 
- Xem data tại https://mempool.space/testnet
- Input: Là các output từ các transaction trước đó. Được xác định bằng một transaction trước đó và chỉ định số lượng Bitcoin được chuyển đi từ output của transaction đó.
   - hash: Id của transaction trước
   - index: Vị trí của output ( check ở flow transaction )
   - ![image](https://github.com/hoangndm3139/btc-demo/assets/67066353/1392e88f-88fe-43ea-9c57-d97363a751b0)

   - nonWitnessUtxo: Buffer được tạo ra từ Transaction hex ( check ở details transaction )
   - If this input was segwit, instead of nonWitnessUtxo, you would add a witnessUtxo as follows. The scriptPubkey and the value only are needed.
   - Nếu input là Segwit, sử dụng witnessUtxo thay cho nonWitnessUtxo. Cần có script và value ( ScriptPubKey và value xem ở Inputs & Outputs Details )
- Output: Là các địa chỉ Bitcoin nhận tiền. ( 
