 let firstNumbers = [2,4,1]
 let secondNumbers = [3,2,6]

function getSortedArray(scores1 ,scores2) {
    let newArray = []
    for(let index1 = 0; index1 < newArray.length; index1++){
        for(let index2 = index1; index2 < newArray.length; index2++ ){
            newArray[index2] = scores1[index2]
            newArray[(scores1.length - 1) + index2 +1] = scores2[(scores1.length -1) + index2 +1]
        }
    }

    for(let index = 0; index < newArray.length; index++){
        if (newArray[index] > newArray[index + 1]){
            let temp = newArray[index]
            newArray[index] = newArray[index + 1]
            newArray[index + 1] = temp
        }
    }
    return newArray

}

let result = getSortedArray(firstNumbers,secondNumbers)
 console.log(result)





module.exports = {getSortedArray}
