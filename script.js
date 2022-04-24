var user_name = document.querySelector("#new_name");
function change_name(){
    user_name= window.prompt("Enter your name: ")
    new_name.innerText = user_name
}
var first_requester=document.querySelector(".first_requester")
var second_requester=document.querySelector(".second_requester")
var connection_request = document.querySelector(".number")
var request_counts = connection_request.innerText
var my_connection = document.querySelector("#your_connections .number")
var connection_counts = my_connection.innerText
var connection_number = connection_counts.split("+")
function accept_request(element) {
    request_counts -= 1
    connection_request.innerText = request_counts
    number = connection_number[0]
    connection_number[0] = parseInt(connection_number[0])
    connection_number[0] += 1
    my_connection.innerText = connection_number[0] + "+"
    console.log(connection_number[0])
    if (element == "first_requester_accept"){
        first_requester.remove("first_requester")
    }
    else if (element == "second_requester_accept"){
        second_requester.remove("second_requester")
    }

}
function decline_request(element) {
    request_counts -= 1
    connection_request.innerText = request_counts
    if (element == "first_requester_accept"){
        first_requester.remove("first_requester")
        
    }
    else if (element == "second_requester_accept"){
        second_requester.remove("second_requester")
    }
}