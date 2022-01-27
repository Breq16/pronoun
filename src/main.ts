import "./style.css";

const PRONOUNS = [
  ["he/him", "she/her"],
  ["they/them"],
  ["xe/xem", "ze/zem", "one/ones"],
  ["fae/faer", "thon/thons"],
  ["it/its", "zed/zeir", "co/cos"],
  ["ne/ner", "ne/nem", "ne/nim", "nix/nix", "pic/pim"],
  ["re/rem", "se/sem", "say/sair", "tey/tem"],
  ["thy/thym", "vae/vaer", "zay/zir", "aer/aers"],
  ["be/ber", "e/em", "ke/kem", "mu/mur"],
  ["ðe/ðim", "þe/þim", "ȝe/ȝim"],
  ["💫/💫's", "🐡/🐡's"],
];

const getPronoun = (neo: number) => {
  const sources = PRONOUNS.slice(0, neo).flat();
  return sources[Math.floor(Math.random() * sources.length)];
};

document.getElementById("generate")?.addEventListener("click", () => {
  const neoValue = parseInt(
    (document.getElementById("neo") as HTMLInputElement).value || "0"
  );
  const newPronoun = getPronoun(neoValue);
  document.getElementById("output")!.innerText = newPronoun;
});
