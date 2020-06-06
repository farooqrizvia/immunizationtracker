var login =function(user,password){

    console.log(user,password)
    if(user==="farooqrizvia@gmail.com" && password==="farooq"){
        return true;
    }
    else{
        return false;
    }
}

module.exports=login;