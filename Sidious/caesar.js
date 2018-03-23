
var code = 0;

function encode(){
    code = 1;
    coder();
}

function decode(){
    code = -1;
    coder();
}


function coder() {
    //Dictionary of characters
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    console.log(abc.length);
    //Get key/input from user
    var input = document.getElementById("input").value;
    var key = document.getElementById("key").value;
    //set up output array
    var output = []; //output array --> will join to a string

    //check for errors - if key is blank then change it to 0,
    if (key == undefined) {
        //console.log("undefined caught");
        key = 0;
    }
    //else make it equal to input
    else {
        key = parseInt(key);
    }
    
    //typecast/split input string into an array
    input = input.split('');
    for (var i = 0; i < input.length; i++){ //for every character in input[]

        for (var j =0; j < abc.length; j++){ //for every character in the alphabet
            
            if (input[i] == " ") { //if there is a space - just put it in the output
                output.push(' ');
                break;
            }
            //is there an elegant way to do these if statements?
            if (input[i].toLowerCase() == abc[j]){ //if they equal each other
                if (input[i] == input[i].toUpperCase()) {
                    if (code > 0) { //encode
                        output.push(abc[(j+key)%26].toUpperCase());
                    } else { //decode use a new mod function to catch negative numbers
                        output.push(abc[mod(j-key,26)].toUpperCase());
                    }
                } else {
                    if (code > 0) { //encode
                        output.push(abc[(j+key)%26]);
                    } else { //decode use a new mod function to catch negative numbers
                        output.push(abc[mod(j-key,26)]);
                    }
                }

            }
        }
    }


   


    output=output.join("");
    document.getElementById("output").style.color = "black";
    console.log(output);
    document.getElementById("output").innerHTML += ": " + output;
    //document.getElementById("test").innerHTML = key;
}

function mod(n, m) {
    return ((n % m) + m) % m;
}


function decode26(){

    //Dictionary of characters
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //Get key/input from user
    var input = document.getElementById("input").value;
    var key = document.getElementById("key").value;
    var output = '';
    //set up output array
    //output array --> will join to a string

    console.log('test');

    //typecast/split input string into an array
    input = input.split('');
    console.log(input);
    var y = "A";


    for (var k = 0; k < 26; k++) {
        var line = [];
        for (var i of input) {
            for (var j =0; j < abc.length; j++){ //for every character in the alphabet
                if (i == " "){
                    line.push(' ');
                    break;
                }
                if (i.toLowerCase() == abc[j]){
                    if (i == i.toUpperCase()){    
                        line.push(abc[mod(j-k,26)].toUpperCase());

                    } else {
                        line.push(abc[mod(j-k,26)]);
                    }
                }
            }
        }
        line = line.join("");
        output += "key: " + k + " decode to: " + line + "<br>";
    }  




    //output=outputArr.join("");
    document.getElementById("output").style.color = "black";

    document.getElementById("output").innerHTML += "<br>" + output;
    //document.getElementById("test").innerHTML = key;
}



