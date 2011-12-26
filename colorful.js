console.log(require('util').inspect(process.env, false, 1, true));

process.stdout.write('\033[32m');
var N = 1024,
    i = 0;
setInterval(function () {
  process.stdout.write('.');
  if (i == 512) {
    process.stdout.write('\033[31m');
  }
  else if (i == N) {
    process.exit(0);
  }
  ++i;
}, 40);

