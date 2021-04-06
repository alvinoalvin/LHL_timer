if (process.argv.length <= 2) {
  console.log("Missing alarm arguments");
}
else {
  args = process.argv.splice(2);
  // console.log(args)

  for (let time of args) {
    time = Number.parseInt(time)

    if (time > 0 && Number.isInteger(time)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }

  }
}
