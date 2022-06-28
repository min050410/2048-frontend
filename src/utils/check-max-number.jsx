// 현재 최대 수 판별
const checkMaxNumber = (content) => {
    let maxNum = 0;
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (content[i][j] === '') continue;
        maxNum = Math.max(maxNum, Number(content[i][j]));
      }
    }
    return maxNum;
}

export default checkMaxNumber;