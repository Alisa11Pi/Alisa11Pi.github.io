let age = prompt("Введите ваш возраст");
let gender = prompt("Введите ваш пол (муж/жен)");

if (age >= 0 && age <=17) {
  alert("Вам работать еще рано - учитесь");
} else if ((age >= 18 && age <= 59 && gender === "муж") || (age >= 18 && age <= 54 && gender === "жен")) {
  alert("Вам еще работать и работать");
} else if ((age >= 60 && age <= 64 && gender === "муж") || (age >= 55 && age <= 59 && gender === "жен")) {
  alert("Скоро пенсия!");
} else if (age > 65 && gender === "муж" || age > 60 && gender === "жен") {
  alert("Вам пора на пенсию");
} else {
  alert("Да кто ты такой?");
}