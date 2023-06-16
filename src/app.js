/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function onLoad(who, action, what, when) {
    let aleatorio1 = Math.floor(Math.random() * who.length);
    let array1 = who[aleatorio1];

    let aleatorio2 = Math.floor(Math.random() * action.length);
    let array2 = action[aleatorio2];

    let aleatorio3 = Math.floor(Math.random() * what.length);
    let array3 = what[aleatorio3];

    let aleatorio4 = Math.floor(Math.random() * when.length);
    let array4 = when[aleatorio4];

    let concatenacionarray =
      array1 + " " + array2 + " " + array3 + " " + array4;

    return concatenacionarray;
  }
  let totalconcatenacion = onLoad(who, action, what, when);
  document.getElementById("excuse").innerHTML = totalconcatenacion;
};
