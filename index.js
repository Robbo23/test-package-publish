import newFunc from "src/func1.js";
import siemano from "src/func2.js";
import { setDate } from "date-fns";

export function oneFunction() {
  console.log("siemano, testowa paczka");
  return "pierwsza funkcja";
}

export function twoFunction(t) {
  return (
    "\n===========================================\n\n" +
    "Parametr funkcji przyjmuje: " +
    t +
    "\n\n===========================================\n\n"
  );
}

export function jakasTam() {
  const a = newFunc("newfunc odpalona jako a");
  const b = siemano(111);
  const bstring = b.toString();

  const d = setDate(11, 2);

  return a + bstring + d;
}
