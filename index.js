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
