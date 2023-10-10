const CronJob = require("cron").CronJob;
const { emailService, userService } = require("../services");

/** It's running on every 3 seconds. */
new CronJob(
  "*/3 * * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

new CronJob(
  "45 7 * * *",
  function () {
    console.log("It's running on when clock time is 7:45");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** Send email */
new CronJob(
  "20 13 * * *",
  function () {
    emailService.sendMail(
      "sujanbutani30@gmail.com",
      "Morning message",
      "Good morning developer! Have a nice day :)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();

