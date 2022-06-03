
var series = {
    languages : 'ENG GEO UA',
    movies : [
        {
        name : 'Peaky Blinders',
        imdb : 'IMDB : 9.5',
        },
        {
        name : 'Top Boy',
        imdb : 'IMDB : 9.6',
        },
        {
        name : 'Narcos',
        imdb : 'IMDB : 9.4',
        }
    ]
}



document.getElementById('movie1').innerHTML = series.movies[0].name;
document.getElementById('imdb1').innerHTML = series.movies[0].imdb;
document.getElementById('language1').innerHTML = series.languages;

document.getElementById('movie2').innerHTML = series.movies[1].name;
document.getElementById('imdb2').innerHTML = series.movies[1].imdb;
document.getElementById('language2').innerHTML = series.languages;

document.getElementById('movie3').innerHTML = series.movies[2].name;
document.getElementById('imdb3').innerHTML = series.movies[2].imdb;
document.getElementById('language3').innerHTML = series.languages;






// function Car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.getCarInfo = function(){
//         document.write(this.make + this.model + 'released in' + '' + this.year + '<br/>')
//     };
// };

// function Person(name, age, cars){
//     this.name = name;
//     this.age = age;
//     this.car = cars;
//     this.personCar = function(car){
//         document.write(this.name + 'არის' + this.age + 'და ყავს' + car.make + car.model + car.year +  '<br/>');
//     }
//     this.displayInfo = function(){
//         document.write(this.name + 'არის' + this.age + 'და ყავს' + car.make + car.model + car.year + '<br/>' );
//     };
// };

// var tom = new User ('ტომი', 24, 'ტესლა');
// tom.displayInfo();
// var tesla = new Car('ტესლა', 'ModelS', '2015');






// function Car(cMake, cModel, cYear){
//     this.make = cMake;
//     this.model = cModel;
//     this.year = cYear;
//     this.getCarInfo() = function(){
//         document.write(this.make + this.model + 'released in' + '' + this.year)
//     };
// };

// function Person(pName, pAge, pCars){
//     this.name = pName;
//     this.age = pAge;
//     this.cars = pCars;
//     this.displayInfo = function(){
//     document.write(this.name + this.age + this.cars)
//     };
// }


// var tom = new Person('ტომი', '26 წლის');
// tom.getCarInfo();
// tom.displayInfo();
