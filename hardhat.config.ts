import '@nomiclabs/hardhat-waffle';
import 'hardhat-tracer';
import 'hardhat-typechain';
import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
  },
};

export default config;
