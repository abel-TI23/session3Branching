//grade category 
const readline = require("readline/promises");

async function programNilai(rl) {
    const skor = Number(await rl.question("masukan skor:"));
    if (skor >= 80) {
        console.log("dapet nilai A, Anjayy")
    } else if (skor >= 70) {
        console.log("dapet skor B, Bjirlah")
    } else if (skor >= 60){
        console.log("dapet skor C, Coy yang bener ajaa")
    } else if (skor >= 50){
        console.log("Dapet skor D, dahlah..gak ada harapan")
    }else {
        console.log("dapet skor E, Ealahhh ni apa pulaa")
    }
}

async function programDiskon(rl) {
    const totalBelanja = Number(await rl.question("masukan jumlah belanjaan:"));
    if (totalBelanja >= 1000000) {
        persen = 20;
    } else if (totalBelanja >= 500000) {
        persen = 10;
    } else if (totalBelanja >= 250000){
        persen = 5;
    } else {
        persen = 0;
    }
    console.log("Komisi: " + totalBelanja * persen / 100);
}
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("=== Program 1: nilai ===");
  await programNilai(rl);

  console.log("=== Program 2: diskon ===");
  await programDiskon(rl);
}
main();
