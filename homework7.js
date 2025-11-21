var str = "Wonderful, Joyful, Happiness, Time, Task, Apple"; //можна було одразу записвти іх у масиві, тоді не потрібен би був спліт
var words = str.split(/[\s,]+/);
var re = /^[^aA]{6,}$/;
for (var i = 0; i < words.length; i++) {
   if (re.test(words[i])) {
   console.log(words[i]);
  }
}


/*в цілому регулярка така і якшо вивести в консоль слова - на варінти які не підходять під умови стоїть false:
var re = /^[^aA]{6,}$/; 
console.log(re.test("Wonderful"));
console.log(re.test("Happiness"));
console.log(re.test("Joyful"));
console.log(re.test("Time"));
console.log(re.test("Task"));
console.log(re.test("Apple"));

також знайшла варіант такої регулярки, але ми не вчили \b, тому зробила так як вище 
var re = /\b[^aA\s,]{6,}\b/g
console.log(str.match(re))*/