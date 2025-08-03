// 1-masala
// function capitalizeWords(str) {
//     let words = str.split(" "); // Matnni so'zlarga bo'ladi
//     words = words.map(word => {
//         // Har bir so'zning birinchi harfini katta, qolganini kichik qiladi
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });
//     return words.join(" "); // So'zlarni yana birlashtiradi
// }
// console.log(capitalizeWords("salom dunyo")); // Natija: "Salom Dunyo"


// 2-masala
// function toUpperNames(names) {
//   return names.map(name => name.toUpperCase());
// }
// console.log(toUpperNames(["ali", "vali", "hasan"])); 



// 3-masala
// function countPositive(numbers) {
//   return numbers.filter(num => num > 0).length;
// }
// console.log(countPositive([1, -3, 4, 0, 6])); 


// 4-masala
// function removeSpaces(str) {
//       str = str.trim();
//       return str.replaceAll(" ", "");
// }
// console.log(removeSpaces("  salom   dunyo  "));

// 6-masala
// function hasEvenNumber(arr) {
//   return arr.some(num => num % 2 === 0);
// }
// console.log(hasEvenNumber([1, 3, 5, 8])); 

// 7-masala
// function reverseWords(str) {
//     let words = str.split(" "); 
//     words = words.map(word => word.split("").reverse().join(""));
//     return words.join(" "); 
// }
// console.log(reverseWords("salom dunyo")); 

// 8-masala
// function threeLetterWords(words) {
//   return words.filter(word => word.length === 3);
// }
// console.log(threeLetterWords(["sal", "olma", "kor", "bor"]));

// 9-masala
// function doubleNumbers(numbers) {
//   return numbers.map(num => num * 2);
// }
// console.log(doubleNumbers([1, 2, 3]));

// 10-masala
// function splitChars(str) {
//   return str.split("");
// }
// console.log(splitChars("hello")); 

// 11-masala
// function onlyIntegers(arr) {
//     // Massivdagi faqat butun sonlarni ajratib olamiz
//     return arr.filter(num => {
//         // Number.isInteger funksiyasi son butunligini tekshiradi
//         return Number.isInteger(num);
//     });
// }
// console.log(onlyIntegers([1.5, 2, 3.1, 4])); // Natija: [2, 4]

// 12-masala

// function addIndex(arr) {
//   return arr.map((num, index) => num + index);
// }
// console.log(addIndex([10, 20, 30])); 


// 13-masala
// function countA(str) {
//     str = str.toLowerCase();
//     let chars = str.split("");
//     let count = chars.filter(char => char === "a").length;
//     return count;
// }
// console.log(countA("Ananas"));

// 14-masala
// function getInitials(str) {
//     let words = str.split(" ");
//   words = words.map(word => word.charAt(0).toUpperCase());
//   return words.join('');
// }
// console.log(getInitials("Hello World From JS"));

// 15-masala

// function flattenArray(arr) {
//   return arr.flat();
// }
// console.log(flattenArray([1, [2, 3], [4, 5]])); 


// 18-masala

// function specialReverse(str) {
//     let words = str.split(" ");  
//     words = words.map(word => word.split("").reverse().join(""));
//     words[words.length - 1] = words[words.length - 1].toUpperCase();
//     return words;
// }
// console.log(specialReverse("salom dunyo js"));

// 19-masala
// function flatMapExample(arr) {
//     return arr.flatMap(item => {
//         return item;
//     });
// }
// console.log(flatMapExample([1, [2, [3, 4]], 5])); 


// // 20-masala
// function allNumbers(arr) {
//   return arr.every(item => typeof item === 'number');
// }
// console.log(allNumbers([1, 2, 3]));

