//REFACTOR Spinner1

let ticks = ["|", "/", "-", `\\`, '|'];
let delay = 0;

for (const tick of ticks) {
  delay += 200;
  setTimeout(() => {
    let output = process.stdout.write('\r' + tick + '      ');
    output;
  }, delay);
}

// // NewLine at end of Process
setTimeout(() => {
  process.stdout.write('\n');
}, delay + 100);