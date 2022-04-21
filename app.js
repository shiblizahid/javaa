var halwapuri = parseInt(prompt("How Many Halwa-Puri You Want To Purchase : "));
var halwa = parseFloat(prompt("How Many Kilo Halwa : "));
var al = parseFloat(prompt("How Many Kilo Alo : "));
var chan = parseFloat(prompt("How Many Kilo Chana : "));
var acharpacket = parseFloat(prompt("How Many AcharPacket : "));


var halwapuritotalbill = halwapuri * 29;
var halwabill = halwa * 20;
var alo = al * 55;
var chana = chan * 100;
var achar = acharpacket * 15
var total = halwapuritotalbill + halwabill + halwabill + alo + chana
var tax = total * 0.16;
var amountpayable = tax + total;



document.write("Quatity : " + halwapuri + "<br/> <hr/>"); 
document.write("Your Total Halwa-Puri Bill Is : " + halwapuritotalbill + "<br/> <hr/>"); 
document.write("Halwabill Is : " + halwabill + "<br/> <hr/>");
document.write("Alo Is : " + alo + "<br/> <hr/>");
document.write("Chana Is : " + chana + "<br/> <hr/>");
document.write("Achar Packet Is : " + achar + "<br/> <hr/>");
document.write("Your ToTal Bill Is : " + total + "<br/> <hr/>");
document.write("Your Tax Is : " + tax + "<br/> <hr/>");
document.write("Your Amount-Payable After Due Date Is : " + amountpayable + "<br/> <hr/>");