function check_letter() {
    var string = "hi my name is mohamed"
    for (var i=0; i < string.length; i++){
        if (string[i] == "h"){
            // console.log("we got letter hh")
            return true
        }
    }
    // console.log("we didnt get letter h") 
    return false
}
console.log(check_letter()) 