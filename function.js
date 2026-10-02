

function repeatAction(times,callBack){
    for(let index = 1; index <= times; index++) {
        callBack(index)
    }
}

function callBack(number){
    console.log("repetition " + number  )
}

 repeatAction(10,callBack)

