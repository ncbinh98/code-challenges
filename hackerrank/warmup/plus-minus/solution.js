function plusMinus(arr) {
    // Write your code here
    const result = [0,0,0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>0){
            result[0] += 1
        }else if(arr[i] < 0){
            result[1] += 1
        } else {
            result[2] +=1
        }
    }
    console.log((result[0]/ arr.length).toFixed(6))
    console.log((result[1]/ arr.length).toFixed(6))
    console.log((result[2]/ arr.length).toFixed(6))
}