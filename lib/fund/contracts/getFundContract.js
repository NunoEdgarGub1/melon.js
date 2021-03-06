// @flow
import Api from "@parity/api";

import setup from "../../utils/setup";
import FundAbi from "../../../abi/Fund.json";

import type { Address } from "../../assets/schemas/Address";

/**
 * Get the contract instance of fund at `fundAddress`
 */
const getFundContract = (fundAddress: Address) => {
  const api = new Api(setup.provider);
  return api.newContract(FundAbi, fundAddress);
};

export default getFundContract;
