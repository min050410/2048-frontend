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
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '32' &&
                <div className="c32">
                  <span>32</span>
                </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '64' &&
                <div className="c64">
                  <span>64</span>
                </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '128' &&
                <div className="c128">
                  <span>128</span>
                </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '256' &&
                <div className="c256">
                  <span>256</span>
                </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '512' &&
                <div className="c512">
                  <span>512</span>
                </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '1024' &&
                <div className="c1024">
                  <span>1024</span>
                </div>
            }
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '2048' &&
                <div className="c2048">
                  <span>2048</span>
                </div>
            }
          </div>
        )
      })
    )
  })

  // 초깃값
  let [contentMap, setContentMap] = useState(item);

  useEffect(() => {
    setContentMap(item);
  }, [content]);

  // Deque 자료구조
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
      return (this._arr.length !== 0) ? this._arr[0] : '-1';
    }
    back() {
      return (this._arr.length !== 0) ? this._arr[this._arr.length - 1] : '-1';
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
        if (i === this._arr.length - 1) {
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
    for (let i = 3; i >= 0; i--) {
      for (let j = 3; j >= 0; j--) {
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
        prev[i][k] = deque.pop_front();
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
      for (let k = 0; k < queue_length; k++) {
        prev[k][i] = deque.pop_front();
      }
    }
    return prev;
  }

  const moveDown = (prev) => {
    const deque = new Deque();
    for (let i = 3; i >= 0; i--) {
      for (let j = 3; j >= 0; j--) {
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
        prev[k][i] = deque.pop_front();
      }
    }
    return prev;
  }
  
  const findBlock = (prev) => {
    let x = [];
    let y = [];
    for (let i=0; i<=3; i++) {
      for (let j=0; j<=3; j++) {
        if (prev[i][j] === '') {
          y = [...y, i];
          x = [...x, j];
        }
      }
    }
    console.log(y);
    console.log(x);
    // 가득 찼을 때
    if (x.length === 0) {
      return prev;
    }
    // 랜덤 블록 생성
    let random_index = Math.floor(Math.random() * x.length);

    prev[y[random_index]][x[random_index]] = '2';
    return prev;
  }

  const newBlock = () => {
    setContent(prev => findBlock([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
  }

  const keyDown = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        // 새로운 주소값 할당으로 re-rendering
        // 전개 연산자는 1차원 배열에서만 유효
        setContent(prev => moveLeft([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        setTimeout(() => newBlock(), 200);
        break;
      case 38:
        setContent(prev => moveUp([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        setTimeout(() => newBlock(), 200);
        break;
      case 39:
        setContent(prev => moveRight([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        setTimeout(() => newBlock(), 200);
        break;
      case 40:
        setContent(prev => moveDown([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
        setTimeout(() => newBlock(), 200);
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