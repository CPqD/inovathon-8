pragma solidity ^0.5.0;

contract DataStore {
    mapping (address => string) medical_historical;

    function getHistorical(address addr) public view returns(string memory) {
        return medical_historical[addr];
    }

    function setHistorical(address addr, string memory patient_id, string memory hash) public returns(bool success) {
        medical_historical[addr] = strConcat(patient_id, ":", hash);
        return true;
    }

    function strConcat(string memory _a, string memory _b, string memory _c) private returns (string memory) {
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        string memory abc = new string(_ba.length + _bb.length + _bc.length);
        bytes memory b_abc = bytes(abc);
        uint k = 0;
        uint i = 0;
        for (i = 0; i < _ba.length; i++) b_abc[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) b_abc[k++] = _bb[i];
        for (i = 0; i < _bc.length; i++) b_abc[k++] = _bc[i];
        return string(b_abc);
    }
}
