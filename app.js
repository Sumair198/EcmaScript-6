// var a = 'hello'
// var a = 'hi'
// a='hey'
// var a = 'sumair'                        //show last assign value

// let a = 'hello'
// a = 'world'
// a ='sumair'

// const a = 'hello'

// templete literals
// var name1  = 'Sumair'
// var greet = 'hi how are you '
// document.write(greet + name1)
// document.write(` hello world ${greet} "${name1}"`)

// function foo(a,b)
// {
//     return `${a} ${b}`
// }
// let result = `hello ${foo('sumair','jani')}`
// document.write(result)

                    //arrow function
// let foo = (name,age) =>
// {
//     return `Name is ${name} Age is ${age}`
// }
// alert(foo('Sumair',22))

                    // spread operators
// let arr1 = ['Sumair','Hassan']
// let arr2 = [...arr1,'Habib','Masood']
// let arr3 = ['Paf-Kiet']
// let result = arr2.concat(arr3)
// console.log(result)

                    //rest operator
// function foo(...inp)
// {
// console.log(...inp)
// var a = 0;
// for(var b of inp)
// {
//     a += b
// }
// console.log(a)
// }
// foo(3,5,8,2,9,1)

// function foo(...names)
// {
//     console.log(...names)
// }
// foo('sumair','saad','hassan','habib')

                        //object literals
// var name1 = "Sumair"
// var age = 22

// var obj = {
//     name1,
//     age
// }
// console.log(obj)

                    //destruturing array
// var arr = [9910,'Sumair',22,'Karachi']
// var id= arr[0]
// var name = arr[1]
// var age = arr[2]
//solution
// var arr = [9910,'Sumair',22,'Karachi']
// let [id,name,age,city] = arr
// console.log(city)
                    //destruturing object
// var obj =
// {
//     name1 : 'sumair',
//     age : 22
// }
// let {name1,age} = obj
// console.log(name1)

                        //Asynchoronus/syn
// setTimeout(function() {
//     console.log('Sumair')
// }, 3000);

// console.log('Hassan')

                        //Promise 
// var prom = new Promise((reslove,reject)=>{
//     var con = true
//     if(con == true)
//     {
//         reslove('login SuccessFully')
//     }
//     else
//     {
//         reject('Failed')
//     }
    
// })
// // console.log(prom)

// prom.then(function(data){
//     console.log(data)
// })
// prom.catch(function(err){
//     console.log(err)
// })

// function foo(record)
// {
//     return new Promise(function(reslove,reject){
//         if(record)
//         {
//             reslove('Login')
//         }
//         else
//         {
//             reject('Failed')
//         }
//     })
// }
// console.log(foo(false))
                            //filter
// let arr = [45,21,5,8,70,2,16,67]
// function getAge(data)
// {
//     return data >=18
// }
// let ok = arr.filter(getAge)
// console.log(ok)

// let arr = [
//     {name1:'sumair',age :22},
//     {name1 : 'saad' , age : 11}
// ]

// let ok = arr.filter(a => a.age >=18)
// console.log(ok)

                            //Map
// let arr = [2,4,6,8,10]
// console.log(arr)
// let ok = arr.map(foo)
// function foo(a)
// {
//     return a*2
// }
// console.log(ok)

                            //asyn/await
// async function foo()
// {
//     console.log("1")
//     console.log("2")
//     await console.log("3")
//     console.log("4")
// }
// foo()
// console.log('5')
// console.log('6')
// console.log('7')
                            //Call bcak
// let getData =()=>
// {
//     return 'hello'
// }
// let setdata = (a) =>
// {
//     console.log(a)
// }
// setdata(getData())
// getData(setdata())

                        //high order
// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function mul(a,b){
//     return a*b
// }

// function calc(a,b,fn){
//     return fn(a,b)
// }

// console.log(calc(1,2,mul))

// function add(a,b)
// {
//     return a + b
// }
// function operation(a,b,fn)
// {
//     let result = fn(a,b)
//     console.log(result)
// }
// operation(2,2,add)

                        //classess
// class hello 
// {   
//     message()
//     {
//         alert('first method!')
//     }
//     message2()
//     {
//         alert('Second method!')
//     }
// }
// let a = new hello()
// a.message()
// a.message2()

// class foo
// {
//     name1 = 'sumair';
//     age = 22
// }
// let a = new foo()
// console.log(a.age)

                    //ES-6 constructor
// class Cons
// {
//     constructor(name,age)
//     {
//         this.name = name,
//         this.age = age
//     }
// }
// let ok = new Cons('Sumair',22)
// console.log(ok)

                        //Inheritance
// class car
// {
//     constructor(color,model)
//     {
//         this.color = color,
//         this.model = model
//     }
// }
// class car2 extends car
// {
//     constructor(color,model,name)
//     {
//         super(color,model,name)
//         this.name = name
//     }
// }
// let ok = new car2('Black','2021','Audi')
// console.log(ok)

// class emp
// {
//     constructor(name,age,salary)
//     {
//         this.name = name,
//         this.age = age,
//         this.salary = salary
//     }
//     info()
//     {
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.salary)
//         console.log(this.id)
//     }

    
// }
// class infoEmp extends emp
// {
//     constructor(name,age,salary,id)
//     {
//         super(name,age,salary,id)
//         this.id = id
//     }
// }
// let ok = new infoEmp('Sumair',22,200000,9910)
// ok.info()

                        //fetch

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((err)=>{
//       console.log(err)
//   }) 
                //search
// var name1 = 'sumair'
// var search = 's'
// if(name1.startsWith(search))
// {
//     console.log(name1)
// }


// function abc(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(abc(5)(5)(5))