const sentence = "hello there from Lighthouse Labs";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time);
  time += 50;
}
setTimeout(() => {
  console.log('\n');
},time);
"hello"