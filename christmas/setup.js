output.intro = function (day) {
  var daySuffix = "";
  switch (day) {
    case 1:
      daySuffix = "st";
      break;
    case 2:
      daySuffix = "nd";
      break;
    case 3:
      daySuffix = "rd";
      break;
    default: // I know, 21 won't work, but I only need to care about 1-12
      daySuffix = "th";
  }
  return (
    "On the " +
    day +
    daySuffix +
    " day of Christmas, my true love gave to me..."
  );
};

output.gifts = [
  "",
  "A partridge in a pear tree",
  "Two turtle doves",
  "Three French hens",
  "Four calling birds",
  "Five golden rings",
  "Six geese a-laying",
  "Seven swans a-swimming",
  "Eight maids a-milking",
  "Nine ladies dancing",
  "Ten lords a-leaping",
  "Eleven pipers piping",
  "Twelve drummers drumming",
];
