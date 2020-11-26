//создать массив
let fruit = ["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
//FOR loop - перебрать массив
for(let i = 0; i < 3; i++){
    let message = `${i+1}. ${fruit[i]}`;
    console.log(message);
}
//FOREACH loop
fruit.forEach(element => {
    console.log("Hello from FOREACH", element);
});
//Выбрать случайный элемент массива
let rnd = Math.floor(Math.random() * fruit.length);
console.log(rnd);

let randomFruit = fruit[rnd];
console.log("My random fruit:", randomFruit);
//Добавить новый элемент в массив
fruit.push("avocado");
console.log(fruit);