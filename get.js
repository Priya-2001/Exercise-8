http = require('http');
url = require('url');
querystring = require('querystring');
function onRequest(request,response)
{
    var path = url.parse(request.url).pathanme;
    console.log('Request for'+path+'received.');
    var query = url.parse(request.url).query;
    console.log(query);
    var name1 = querystring.parse(query)["fname"];
    var name2 = querystring.parse(query)["lname"];
    var mail = querystring.parse(query)["email"];
    var name3 = querystring.parse(query)["uname"];
    var pass = querystring.parse(query)["pwd"];
    response.write('<body bgcolor="#0E035F" style="color:white">');
    response.write('<center>');
    response.write('<h3>Welcome '+name1+ ' '+name2+'</h3>');
    response.write('<h3>Your email id '+mail+' has been registered successfully.</h3>');
    response.write('<h3>Your username is: '+name3+'</h3>');
    response.write('<h3>Your password is: '+pass+'</h3>');
    response.write('<h3>Thank you for registering!Please login before exploring our website</h3>')
    response.write('</center>');
    response.write('</body');
    response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server has started.... .');