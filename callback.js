function hello(x, y){
    console.log("Hello World",x) // Hello 10
    y()  // Hii
     
    
}

// function y(){
//     console.log("Hii")
//     two(20)
// }

// y() 

// Hi 
// My Name is Sanket 20

// x = 10 

// y = ()=>{two(20)}

// function y(){
//     two(20)
// }


// second = () =>{console.log("My name is Sanket")}

// second()

// y = ()=>{
//     console.log("Hii")
//     two(20)
// }

// y()




let a = 10 
let two = (value) =>{
    console.log("My name is Sanket", value)
}


hello(10, 
    ()=>{
        console.log("Hii")
        two(20)
    }
    
)


// hello(10, () =>{console.log("My name is  Sanket")})


// hello(10, 
//     function(){
//         console.log("My name is  Sanket")
//     }
// )


// let y = two 
// let z = two()


// console.log(z)


// let ram = () =>{
//     console.log("My name is  Sanket")
// }



// ram()


// function xyz(){
//     console.log("sum")
// }

// xyz()
