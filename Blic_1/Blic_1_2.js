function pola(a){
    var counter;
    var len;
    
    len = a.length;

    console.log(len);

    var polalen = len/2;

    for(var c=polalen; c <= len; c++) {
        console.log(a[c]);
    }
}


var x = "Javascript i nije tolko los";
pola(x);