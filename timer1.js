const timer1 = (args) => {
  if (args.length <= 2) {
    console.log("Missing alarm arguments");
  }
  else {
    args = args.splice(2);
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
};

timer1(process.argv);