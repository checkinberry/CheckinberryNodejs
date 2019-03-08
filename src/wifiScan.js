var nmap = require('node-nmap');

nmap.nmapLocation = "nmap"; //default
//    Accepts array or comma separated string for custom nmap commands in the second argument.
var nmapscan = new nmap.NmapScan('192.168.1.1-254', '-sP');

nmapscan.on('complete',function(data){
    console.log(data);


    /*    var elements = Object.keys(data).length - 1;
        for (var i = 0; i < elements; i++) {
            console.log(data[i].mac);
        }*/

});
nmapscan.on('error', function(error){
    console.log(error);
});



nmapscan.startScan();