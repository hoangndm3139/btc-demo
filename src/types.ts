export interface UnspentOutput {
    txid: string;
    vout: number;
    satoshis: number;
    scriptPk: string;
    pubkey: string;
    addressType: AddressType;
    inscriptions: {
        inscriptionId: string;
        inscriptionNumber?: number;
        offset: number;
    }[];
    atomicals: {
        atomicalId: string;
        atomicalNumber: number;
        type: "FT" | "NFT";
        ticker?: string;
    }[];
}

export enum AddressType {
    P2PKH,
    P2WPKH,
    P2TR,
    P2SH_P2WPKH,
    M44_P2WPKH, // deprecated
    M44_P2TR, // deprecated
    P2WSH,
    P2SH,
    UNKNOWN,
}