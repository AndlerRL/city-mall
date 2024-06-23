import contract from "~/utils/web3/contract";

export async function getOnchainData() {
  const data = await contract.methods.get().call();
  return data;
}
