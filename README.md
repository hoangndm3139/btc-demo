- Send btc: Tạo psbt sau đó kí bằng ví.

- Demo:
   - Xem data tại https://mempool.space/testnet
   - Step 1: Generate psbt
     ```bash
     npm start //start
     
     ```
   - Step 2: https://docs.unisat.io/dev/unisat-developer-service/unisat-wallet#signpsbt
   - Step 3: https://demo.unisat.io/
 
- Input: Là các output từ các transaction trước đó. Được xác định bằng một transaction trước đó và chỉ định số lượng Bitcoin được chuyển đi từ output của transaction đó.
   - hash: Id của transaction trước
     ![image](https://github.com/hoangndm3139/btc-demo/assets/67066353/4a0bbcb2-a8e9-473c-932b-14a2316c2f3a)

   - index: Vị trí của output - 1
     ![image](https://github.com/hoangndm3139/btc-demo/assets/67066353/1392e88f-88fe-43ea-9c57-d97363a751b0)

   - nonWitnessUtxo: Buffer được tạo ra từ Transaction hex ( check ở details transaction )
     ![image](https://github.com/hoangndm3139/btc-demo/assets/67066353/3d1b4c52-eb01-4272-b3d2-982954d49005)

   - Nếu input là Segwit, sử dụng witnessUtxo thay cho nonWitnessUtxo. Cần có scriptPubkey và value ( ScriptPubKey và value xem ở Inputs & Outputs Details )
     ![image](https://github.com/hoangndm3139/btc-demo/assets/67066353/e8d32e3c-70f6-4850-b488-19f8a8b94285)

- Output: Là các địa chỉ Bitcoin nhận tiền. ( Có thể tạo 1 output gửi đến ví của mình để tùy chỉnh fee, value input - value output = fee )
- Memo được ghi vào OP_RETURN. Dùng hàm addOpreturn()

- Debug:
     - Decode transaction: https://live.blockcypher.com/btc/decodetx/
