const alarmClock = (values) => {
  for (let value of values) {
    const delay = Number(value);
    if (delay < 0 || isNaN(delay)) {
      continue;
    }
    
    const timer = delay * 1000;

    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
};
const args = process.argv.slice(2);

alarmClock(args);

