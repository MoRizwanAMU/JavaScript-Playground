const lastName = "Rizwan";

const printName = function(){
    const firstName = "Mohammad";
    console.log(firstName);
    console.log(lastName);
}
printName();


// first phase memory creation
            // window : {}
            // this : window
            // lastname : uninitialized
            // printName : uninitialized
// second phase code execution phase
            // "Rizwan"                             G.E.C
            //  function  (whole function)          G.E.C
            //                 function execution context(F.E.C)   
                                             // tow phase in F.E.C 1st local memory 2nd code execution 
                                                            // loca memory
                                                            // arguments : [ ]          => set value array like object
                                                                // firstName; unintialized           
                                                           // code execution phase
                                                                // Mohammad
                                                                // console => Rizwan
                                                                // lastName will find form global execution context


// stack => G.E.C(global execution context), function execution context(F.E.C)