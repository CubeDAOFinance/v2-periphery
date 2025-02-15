pragma solidity >=0.5.0;

interface ICubeswapV2Factory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function initCodeHash() external view returns (bytes32);

    function feeTo() external view returns (address);
    function feeToRate() external view returns (uint numerator,uint denominator);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToRate(uint numerator,uint denominator) external;
    function setFeeToSetter(address) external;
}
