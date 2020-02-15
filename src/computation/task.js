
let xhr = new XMLHttpRequest();
xhr.open('POST', '../../send');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
                console.log(" Error in sending");
        } else { // show the result
                // alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
                console.log("Done!!");
                map(xhr.response.A,xhr.response.B);
        }
};


function map(A,B) {
        var C=new Array(1000);
        for(var i=0 ; i<1000 ; i++)
                C[i]=new Array(1000);
        //generate random data
        reduce(A,B,C);
}

function reduce(A,B,C){
        console.log("In A");
        console.log(A);
        console.log(B);
        console.log("In reduce");
        for(var i=0;i<1000;i++)
        {
                for(var j=0;j<1000;j++)
                {
                for(var k=0;k<1000;k++)
                {
                        C[i][j]=(A[i][k]*B[k][j])%100;
                }
                }
        }
        console.log(C);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../../recieve');
        xhr.setRequestHeader("Content-type", "application/json");
        // xhr.responseType = 'json';
        console.log(C);
        xhr.send(JSON.stringify(C));
        xhr.onload = function() {
                if (xhr.status != 200) { // analyze HTTP status of the response
                        console.log(" Error in sending");
                } else { // show the result
                        // alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
                        console.log("Done!!");
                        postMessage("y");
                        // map(res.A,res.B);
                }
        };
}