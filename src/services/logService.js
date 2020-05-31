import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://0d21385f7367499d868cec0d0d7b12b2@o394099.ingest.sentry.io/5258577",
  });
}

function log(error) {
  console.log(error);
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
