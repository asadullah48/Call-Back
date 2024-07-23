// <!------------------------------------------------------ TOPIC 1 ------------------------------------------------------>
// This topic is describes, you are able to pass any function as a callback

console.log('\n>>> TOPIC 1');
let beginnerStudent = {
    name: 'ahmed'
}
let seniorStudent = {
    name: 'asad'
}

function greetStudent(name:string, callback:Function){
    console.log(`\nAssalaam O Aalikum! ${name}`);
    callback();
}

function seniorStudentTask(){
    console.log('Guide junior students & explain them the topic');
}
function beginnerStudentTask(){
    console.log('Complete class work & be focus');
}

greetStudent(beginnerStudent.name, beginnerStudentTask)
greetStudent(seniorStudent.name, seniorStudentTask)




// <!------------------------------------------------------ TOPIC 2 ------------------------------------------------------>
// This topic is describes, you are able use callback function inside their function's body
// even you should use it multiple of times, like use callback after every action calculation and etc

console.log('\n>>> TOPIC 2');
let product = {
    name: 'shirt',
    price: 800
}

function printDetail(){
    console.log(product.price) 
}

function showProduct(callback:Function) {
    let priceIncrease = 400;
    product.price += priceIncrease;
    callback();
    product.price += (priceIncrease / 100) * 10; // calculate and add tax
    callback();
}
showProduct(printDetail);