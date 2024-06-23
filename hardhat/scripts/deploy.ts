async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy();

  console.log("Contract deployed to address:", simpleStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
