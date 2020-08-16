const plain = "plain"; // input text

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

alphabets.forEach((_, shift) => {
  console.log({ shift: `${shift}`.padStart(2, "0"), cipher: caesarCipher(plain, shift) });
});

function caesarCipher(plain, shift) {
  return plain
    .split("")
    .map((c) => {
      const index = alphabets.indexOf(c) + shift;
      const adjustedIndex = index > alphabets.length - 1 ? index - alphabets.length : index;
      return alphabets[adjustedIndex];
    })
    .join("");
}
