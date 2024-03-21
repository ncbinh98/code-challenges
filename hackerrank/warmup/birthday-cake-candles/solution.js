function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0
    for(let i = 0;i< candles.length;i++){
        if(candles[i]>max){
            max = candles[i]
        }
    }
    let result = 0
    
    for(let i = 0;i< candles.length;i++){
        if(candles[i] === max){
            result++
        }
    }
    return result

}