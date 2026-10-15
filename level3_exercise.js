const readline = require("readline/promises");

async function programadmin(rl) {
    const id = await rl.question("ID lu bre! : ");
    const kode = await rl.question("Kodenya juga nih: ");   //ini text yak
    if (id === "admin" && kode === "12345") {
    console.log("Wokii, approved bro!");
    } else if (id !== "admin") {
    console.log("Salah bre, lu beneran orang sini kan?");
    } else {
    console.log("amnesia kah? kode lu salah bjir");
    };
}

async function gratisOngkirMembership(rl) {
    const totalBelanja = Number(await rl.question("masukan jumlah belanjaan:"));
    const membership = (await rl.question("Member ? (ya/gak):")) === "ya";
    if (totalBelanja >= 1000000 || membership) {
        console.log("Gratis Ongkir Yeyyy!")
    } else {
        console.log("Sayang nih, harus bayar, Join member sekarang yuk! atau... bayar parkir?")
    }
}
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("=== Program 1: login bre ===");
  await programadmin(rl);

  console.log("=== Program 2: Gratis Parkir  ===");
  await gratisOngkirMembership(rl);
}
main();
