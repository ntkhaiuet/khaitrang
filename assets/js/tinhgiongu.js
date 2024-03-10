const now = new Date();
const current = now.getHours() + ":" + now.getMinutes();
var time = current;
var arr = [];
arr[0] = moment
  .utc(time, "HH:mm")
  .add(1, "hour")
  .add(44, "minutes")
  .format("HH:mm");
for (var i = 1; i < 6; i++) {
  arr[i] = moment
    .utc(arr[i - 1], "HH:mm")
    .add(1, "hour")
    .add(30, "minutes")
    .format("HH:mm");
}
var info1 = document.querySelector("#info1");
var info2 = document.querySelector("#info2");
var info3 = document.querySelector("#info3");
var info4 = document.querySelector("#info4");
var info5 = document.querySelector("#info5");
var info6 = document.querySelector("#info6");

if (!info1.firstChild) {
  var p1 = document.createElement("h4");

  p1.append(
    "1 chu kỳ: " +
      arr[0].split(":")[0] +
      " giờ " +
      arr[0].split(":")[1] +
      " phút"
  );
  info1.append(p1);
}

if (!info2.firstChild) {
  var p2 = document.createElement("h4");

  p2.append(
    "2 chu kỳ: " +
      arr[1].split(":")[0] +
      " giờ " +
      arr[1].split(":")[1] +
      " phút"
  );
  info2.append(p2);
}

if (!info3.firstChild) {
  var p3 = document.createElement("h4");

  p3.append(
    "3 chu kỳ: " +
      arr[2].split(":")[0] +
      " giờ " +
      arr[2].split(":")[1] +
      " phút"
  );
  info3.append(p3);
}

if (!info4.firstChild) {
  var p4 = document.createElement("h4");
  p4.append(
    "4 chu kỳ: " +
      arr[3].split(":")[0] +
      " giờ " +
      arr[3].split(":")[1] +
      " phút"
  );
  info4.append(p4);
}

if (!info5.firstChild) {
  var p5 = document.createElement("h4");
  p5.append(
    "5 chu kỳ: " +
      arr[4].split(":")[0] +
      " giờ " +
      arr[4].split(":")[1] +
      " phút"
  );
  info5.append(p5);
}

if (!info6.firstChild) {
  var p6 = document.createElement("h4");
  p6.append(
    "6 chu kỳ: " +
      arr[5].split(":")[0] +
      " giờ " +
      arr[5].split(":")[1] +
      " phút"
  );
  info6.append(p6);
}
