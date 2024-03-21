function timeConversion(s) {
    // Write your code here
    const period = s.slice(s.length-2)
    const time = s.slice(0, s.length-2)
    const splitTime=time.split(":")
    if(period === "AM"){
        if(+splitTime[0]=== 12){
            splitTime[0] = '00'
        }
    }
    if(period === "PM"){
        if(+splitTime[0]!==12){
            splitTime[0] = String(+splitTime[0] + 12)
        }
    }
    return splitTime.join(":")
}