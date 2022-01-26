import "./style.css";

const PRONOUNS = [
  ["he/him", "she/her"],
  ["they/them"],
  ["xe/xem", "ze/zem", "one/ones"],
  ["fae/faer", "thon/thons"],
  ["it/its", "zed/zeir", "co/cos"],
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
