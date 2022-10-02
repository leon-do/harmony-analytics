import fetch from "node-fetch";

main();
async function main() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const date = d.toISOString().split("T")[0];

  // const transactionCount = await fetch(`http://api1.explorer.t.hmny.io:3000/v0/metrics?type=transactions_count&offset=0&limit=180`, {
  //   headers: {
  //     rest_api_key: "harmony1",
  //   },
  // }).then((response) => response.json());
  // console.log({ transactionCount });

  // const walletCount = await fetch(`http://api1.explorer.t.hmny.io:3000/v0/metrics?type=wallets_count&offset=0&limit=180`, {
  //   headers: {
  //     rest_api_key: "harmony1",
  //   },
  // }).then((response) => response.json());
  // console.log({ walletCount });

  // const averageFee = await fetch(`http://api1.explorer.t.hmny.io:3000/v0/metrics?type=average_fee&limit=180`, {
  //   headers: {
  //     rest_api_key: "harmony1",
  //   },
  // }).then((response) => response.json());
  // console.log({ averageFee });

  const blockSize = await fetch(`http://api1.explorer.t.hmny.io:3000/v0/metrics?type=block_size&limit=180`, {
    headers: {
      rest_api_key: "harmony1",
    },
  }).then((response) => response.json());

  for (let i = 0; i < blockSize.length; i++) {
    const date = blockSize[i].date.split("T")[0];
    const value = blockSize[i].value;
    console.log(date, value);
  }
}
