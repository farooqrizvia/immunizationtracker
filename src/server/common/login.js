const request = require('request')
var login =function(user,password){

    console.log(user,password)
    const url = 'https://eu-gb.functions.cloud.ibm.com/api/v1/web/swetha.suryanarayanan%40volvo.com_dev/default/c19EndUserDBAccess?username='+user+'&password='+password
    console.log(url)
        request(url, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
    
    if(user==="tj.muni@gmail.com" && password==="password1"){
        return true;
    }
    else{
        return false;
    }
    
 
    
}

module.exports=login;