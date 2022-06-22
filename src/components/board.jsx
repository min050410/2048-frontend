import '../style/board.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Board = () => {
  let [content, setContent] = useState([['2', '2', '', ''], ['', '', '', ''], ['', '2', '', ''], ['', '', '', '']]);

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


  const moveLeft = (prev) => {
    console.log(prev);
    for (let i = 3; i >= 0; i--) {
      for (let j = 3; j >= 0; j--)
        // 왼쪽으로 한칸 이동
        if (j > 0) {
          if (prev[i][j] !== '' && prev[i][j - 1] === '') {
            prev[i][j] = '';
            prev[i][j - 1] = '2';
          }
        }
    }
    setInterval(() => {
    }, 1)
    console.log(prev);
    return prev;
  }


  const keyDown = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        // 새로운 주소값 할당으로 re-rendering 
        setContent(prev => moveLeft([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        break;
      case 38:
        setContent([['', '', '', '2'], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);
        break;
      case 39:
        setContent([['', '', '', ''], ['', '', '', '2'], ['', '', '', ''], ['', '', '', '']]);
        break;
      case 40:
        setContent([['', '', '', ''], ['', '', '', ''], ['', '', '2', ''], ['', '', '', '']]);
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