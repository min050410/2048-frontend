import '../style/board.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Board = () => {
  let [content, setContent] = useState([['2', '2', '2', ''], ['', '2', '', ''], ['', '2', '', ''], ['', '', '2', '']]);

  const render = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

  const item = render.map((listIn) => {
    return (
      listIn.map((idx) => {
        return (
          <div className="content" key={idx}>
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '2' &&
              <div className="c2">
                <span>2</span>
              </div>
            }
          </div>
        )
      })
    )
  })

  let [contentMap, setContentMap] = useState(item);

  useEffect(() => {
    setContentMap(render.map((listIn) => {
      return (
        listIn.map((idx) => {
          return (
            <div className="content" key={idx}>
              {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '2' &&
                <div className="c2">
                  <span>2</span>
                </div>
              }
            </div>
          )
        })
      )
    }))
    console.log('useEffect called');
  }, [content]);


  const moveRight = (prev) => {
    console.log(prev);
    let cnt = 0;
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[i][j] !== '') {
          cnt = cnt + 1;
        }
        prev[i][j] = '';
      }
      // 채우기
      for (let k = 3; k >= 4-cnt; k--) {
        prev[i][k] = '2';
      }
      cnt = 0;
    }
    console.log(prev);
    return prev;
  }
  
  const moveLeft = (prev) => {
    console.log(prev);
    let cnt = 0;
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[i][j] !== '') {
          cnt = cnt + 1;
        }
        prev[i][j] = '';
      }
      // 채우기
      for (let k = 0; k < cnt; k++) {
        prev[i][k] = '2';
      }
      cnt = 0;
    }
    console.log(prev);
    return prev;
  }
  
  const moveDown = (prev) => {
    console.log(prev);
    let cnt = 0;
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[j][i] !== '') {
          cnt = cnt + 1;
        }
        prev[j][i] = '';
      }
      // 채우기
      for (let k = 3; k >= 4-cnt; k--) {
        prev[k][i] = '2';
      }
      cnt = 0;
    }
    console.log(prev);
    return prev;
  }

  const moveUp = (prev) => {
    console.log(prev);
    let cnt = 0;
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[j][i] !== '') {
          cnt = cnt + 1;
        }
        prev[j][i] = '';
      }
      // 채우기
      for (let k = 0; k < cnt; k++) {
        prev[k][i] = '2';
      }
      cnt = 0;
    }
    console.log(prev);
    return prev;
  }


  const keyDown = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        // 새로운 주소값 할당으로 re-rendering
        // 전개 연산자는 1차원 배열에서만 유효
        setContent(prev => moveLeft([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        break;
      case 38:
        setContent(prev => moveUp([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        break;
      case 39:
        setContent(prev => moveRight([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        break;
      case 40:
        setContent(prev => moveDown([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        break;
      default:
        break;
    }
  };

  return (
    <div className="board">
      <div className="board--content">
        {contentMap}
      </div>
      <input onKeyDown={keyDown}></input>
    </div>
  )
}

export default Board;