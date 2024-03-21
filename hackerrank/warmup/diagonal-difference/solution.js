function diagonalDifference(arr) {
    // Write your code here
    const maxIdx = arr.length - 1
    const result = [0,0]
    for(let i = 0; i < arr.length;i++){
        result[0] += arr[i][i]
        result[1] += arr[i][maxIdx - i]
    }
    return Math.abs(result[0] - result[1])
}