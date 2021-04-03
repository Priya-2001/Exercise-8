var http = require('http');
var querystring = require('querystring');
var qs,name1,name2,name3,mail,pass;
http.createServer(function(req,res)
{
    var data1 = '';
    req.on('data',function(chunk){
    console.log(chunk);
    data1 += chunk;
    console.log("Data in String format: "+data1);
    });
    req.on('end',function(){
        qs = querystring.parse(data1);
        console.log(qs);
        name1 = qs['fname'];
        name2 = qs['lname'];
        name3 = qs['uname'];
        mail = qs['email'];
        pass = qs['pwd'];
        res.write('<body bgcolor="#0E035F" style="color:white">');
        res.write('<center>');
        res.write('<h3>Welcome '+name1+ ' '+name2+'</h3>');
        res.write('<h3>Your email id '+mail+' has been registered successfully.</h3>');
        res.write('<h3>Your username is: '+name3+'</h3>');
        res.write('<h3>Your password is: '+pass+'</h3>');
        res.write('<h3>Thank you for registering!Please login before exploring our website</h3>')
        res.write('</center>');
        res.write('</body');
        res.end();
    });
}).listen(8000);
console.log("Server started");