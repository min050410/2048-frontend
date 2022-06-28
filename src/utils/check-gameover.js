// 게임 오버 판별
const checkGameOver = (content) => {
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (content[i][j] === '') return false;
        if (j < 3) {
          if (content[i][j] === content[i][j + 1]) {
            return false;
          }
        }
        if (i < 3) {
          if (content[i][j] === content[i + 1][j]) {
            return false;
          }
        }
      }
    }
    return true;
}

export default checkGameOver;