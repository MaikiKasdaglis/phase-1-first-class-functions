function receivesAFunction(spy) {
   return spy()
}

function returnsANamedFunction() {
    function namedFunction() {
}
   return namedFunction
}

function returnsAnAnonymousFunction() {
    return function (){
        
    }
}