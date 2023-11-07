let isDone = false;

let isOk = false;



// isDone && console.log('It is completed')

isDone ? console.log('It is completed'):console.log("it is not completed")
if(isDone && isOk){
    console.log('the both condition is ture')
}

else if(isDone)
    {

        console.log('the done condition is ture')
}
else if(isOk){
    console.log('the OK condition is ture')
}
else if(isDone || isOk){
    console.log('some condition is true')
}
else{
    console.log('the both condition is false')
}