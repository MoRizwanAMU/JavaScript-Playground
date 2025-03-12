 // pahse1 => code compilation(comilation phase) but some people called parisng phase. code compilation phase divide into 3 parts
            // 1.1 => Tokenizing/lexing (code divide into litte bit parts/chunks)
            // 1.2 => parsing   (under parsing using chunks/tokenizing make/genrate a  AST(abstract syntax tree) for futher code exicution. Another reason for parsing to know (Scope) or this variable where is belonging/ accessible
            // 1.3 => code Generation
                    
        // why compilation
        // 1.for eary error checking
        // 2. for determining appropriate scope for variable(D.A.S.V)

 // pahse2 => code execution(execution phase)  for code execution javaScipt create "global execution context"[1.global execution context 2.function execution context 3.Eval execution context(Eval function rarely used and not recommended for security reasons)]
              // 2.1 global execution context(its have 2 phase)
                      // 2.1.1 creation phase of global execution context
                            // what effects in creation phase  
                                  // ans => create variable in memory (its called hoisting). also i can called memory creation phase
                      // 2.1.2 code execution phase of global execution context
                            // what effect in code execution phase
                                // ans => line by line code execution
            // other things of  execution(ther are two of execution contex=>global,function) cotext is => under this javaScript maintain callStack.under callStack javaScript know-which execution context workng,which line has been executed,which function is calling

// important note => every javaSCript program start with global execution context.

 console.log(this);       // print window object
 console.log(window);     // print window object
 console.log(firstName);
 var firstName = "Rizwan";
 console.log(firstName);

 //  Note: javaScript is synchronous programming language and also single threaded programming language