console.log("Running test.js");
console.log("MAESTRO_EXAMPLE: " + MAESTRO_EXAMPLE);

if (MAESTRO_EXAMPLE != "potato") {
  console.log("The env var $MAESTRO_EXAMPLE should be 'potato' but it is not");
}
