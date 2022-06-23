import '../style/board.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Board = () => {
  let [content, setContent] = useState([['2', '', '', ''], ['2', '', '2', '2'], ['2', '', '2', ''], ['2', '', '2', '']]);

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
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '4' &&
              <div className="c4">
                <span>4</span>
              </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '8' &&
              <div className="c8">
                <span>8</span>
              </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '16' &&
                <div className="c16">
                  <span>16</span>
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
              {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '4' &&
                <div className="c4">
                  <span>4</span>
                </div>
              }
              {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '8' &&
                <div className="c8">
                  <span>8</span>
                </div>
              }
              {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '16' &&
                <div className="c16">
                  <span>16</span>
                </div>
              }
            </div>
          )
        })
      )
    }))
  }, [content]);

  class Deque {
    constructor() {
      this._arr = [];
    }
    push_back(item) {
      this._arr.push(item);
    }
    pop_front() {
      return this._arr.shift();
    }
    pop_back() {
      return this._arr.pop();
    }
    front() {
      return (this._arr.length != 0) ? this._arr[0] : '-1';
    }
    back() {
      return (this._arr.length != 0) ? this._arr[this._arr.length - 1] : '-1';
    }
    size() {
      return this._arr.length;
    }
    empty() {
      return this._arr.length ? true : false;
    }
    print_all() {
      let message = '';
      for (let i = 0; i < this._arr.length; i++) {
        if (i == this._arr.length - 1) {
          message += this._arr[i];
          break;
        }
        message += this._arr[i] + ', ';
      }
      console.log(`now queue: [${message}]`);
    }
  }

  const moveRight = (prev) => {
    const deque = new Deque();
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[i][j] !== '') {
          if (deque.back() !== prev[i][j]) {
            deque.push_back(prev[i][j]);
            // console.log('enqueue: ' + j + ': ' + prev[i][j]);
          }
          else {
            deque.pop_back();
            deque.push_back((prev[i][j] * 2).toString());
          }
        }
        // 비우기
        prev[i][j] = '';
      }
      // 채우기
      // deque.print_all();
      let queue_length = deque.size();
      for (let k = 3; k > 3 - queue_length; k--) {
        prev[i][k] = deque.pop_back();
      }
    }
    return prev;
  }

  const moveLeft = (prev) => {
    const deque = new Deque();
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[i][j] !== '') {
          if (deque.back() !== prev[i][j]) {
            deque.push_back(prev[i][j]);
            // console.log('enqueue: ' + j + ': '+ prev[i][j]);
          }
          else {
            deque.pop_back();
            deque.push_back((prev[i][j] * 2).toString());
          }
        }
        // 비우기
        prev[i][j] = '';
      }
      // 채우기
      // deque.print_all();
      let queue_length = deque.size();
      // moveRight랑 다른 부분
      for (let k = 0; k < queue_length; k++) {
        prev[i][k] = deque.pop_front();
      }
    }
    return prev;
  }

  const moveUp = (prev) => {
    const deque = new Deque();
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[j][i] !== '') {
          if (deque.back() !== prev[j][i]) {
            deque.push_back(prev[j][i]);
            // console.log('enqueue: ' + j + ': '+ prev[i][j]);
          }
          else {
            deque.pop_back();
            deque.push_back((prev[j][i] * 2).toString());
          }
        }
        // 비우기
        prev[j][i] = '';
      }
      // 채우기
      // deque.print_all();
      let queue_length = deque.size();
      // moveRight랑 다른 부분
      for (let k = 0; k < queue_length; k++) {
        prev[k][i] = deque.pop_front();
      }
    }
    return prev;
  }

  const moveDown = (prev) => {
    const deque = new Deque();
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[j][i] !== '') {
          if (deque.back() !== prev[j][i]) {
            deque.push_back(prev[j][i]);
            // console.log('enqueue: ' + j + ': ' + prev[i][j]);
          }
          else {
            deque.pop_back();
            deque.push_back((prev[j][i] * 2).toString());
          }
        }
        // 비우기
        prev[j][i] = '';
      }
      // 채우기
      // deque.print_all();
      let queue_length = deque.size();
      for (let k = 3; k > 3 - queue_length; k--) {
        prev[k][i] = deque.pop_back();
      }
    }
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