// Generated by https://quicktype.io

export interface Key {
    pubKey: string;
    priKey: string;
}
export interface Doc {
    address: string;
    data: string;
}
export interface PostResponce {
    link: string;
}
export interface PostResp {
    link: string;
}
export interface StateResponce {
    data: string;
}
export interface TransactionResponce {
    payload: string;
}
export interface TransactionStatus {
    data: TransactionStatusData[];
}
export interface TransactionStatusData {
    invalid_transactions: InvalidTransactions[];
    status: String;
}
export interface InvalidTransactions {
    id: string;
    message: string;
}
export interface MessageJson {
    response: string;
}



export interface Transaction {
  data: Data;
  link: string;
}

export interface Data {
  header:           Header;
  header_signature: string;
  payload:          string;
}

export interface Header {
  batcher_public_key: string;
  dependencies:       any[];
  family_name:        string;
  family_version:     string;
  inputs:             string[];
  nonce:              string;
  outputs:            string[];
  payload_sha512:     string;
  signer_public_key:  string;
}


export interface TpRequest {
  action:  string;
  payload: string;
}


export interface Payload {
  dateOfBirth:  string;
  nameOfChild:  string;
  nameOfFather: string;
  nameOfMother: string;
  sex:          string;
  regDate:      string;
  permaddress:  string;
  imp:          number[];
  docType:      string;
}
