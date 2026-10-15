const readline = require("readline/promises");

async function programparkir(rl) {
    const jam = Number(await rl.question("Lama parkir (jam): "));
let biaya;

if (jam <= 1) {
  biaya = 5000;
} else {
  biaya = 5000 + (jam - 1) * 3000;
}

if (biaya > 20000) {
  biaya = 20000;
}
console.log("Biaya: Rp" + biaya);
}

async function kasir(rl) {
    const belanja = Number(await rl.question("Total belanja: "));
    const bayar = Number(await rl.question("bayar: "));
    const member = (await rl.question("member? (ya/tidak): ")) === "ya";

    let total = belanja;
    if (member) {
    total = belanja * 0.9;
    }

    if (bayar < total) {
    console.log("kurang euyy");
    } else {
    console.log("Total: " + total);
    console.log("Pulangan: " + (bayar - total));
    }
}
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("=== Program 1: parkir ===");
  await programparkir(rl);

  console.log("=== Program 2: kasir  ===");
  await kasir(rl);
}
main();
