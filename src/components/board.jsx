import '../style/board.css';
import { useState, useRef, useEffect } from 'react';
import ServerScore from './server-score';
import LocalScore from './local-score';

// utils
import updateScore from '../utils/axios/update-score';
import checkMaxNumber from '../utils/check-max-number';
import checkGameOver from '../utils/check-gameover';
import createGuest from '../utils/axios/create-guest';
import getScore from '../utils/axios/get-score';
import { moveUp, moveLeft, moveRight, moveDown } from '../utils/move-block'

const Board = () => {

  const CREATE_BLOCK_NUM = 4;
  const BLOCK_CREATE_DELAY = 200;

  const [content, setContent] = useState([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);
  const [gameover, setGameover] = useState(0);
  const [createEffect, setCreateEffect] = useState(-1);
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);
  const [scoreMaxNumber, setScoreMaxNumber] = useState(0);
  const [myName, setMyname] = useState('');
  const [myScore, setMyScore] = useState(0);
  const [myScoreMaxNumber, setMyScoreMaxNumber] = useState(0);

  // input focus를 위한 Ref
  const controllerRef = useRef(null);

  const render = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

  // useEffect 처음 랜더링
  useEffect(() => {

    (async () => {
      const loadGuestId = localStorage.getItem('guestId');
      // 기존 데이터가 없다면 게스트 만들기
      if (loadGuestId === null) {
        await createGuest();
        
        const res = await getScore();
        setMyname(res.nickname);
        setMyScore(res.score);
        setMyScoreMaxNumber(res.scoreMaxNumber);
      }
      else {
        const res = await getScore();
        setMyname(res.nickname);
        setMyScore(res.score);
        setMyScoreMaxNumber(res.scoreMaxNumber);
    }})();

    // n개의 블록 생성
    for (let i = 0; i < CREATE_BLOCK_NUM; i++) {
      newBlock();
    }
  }, []);

  const item = render.map((listIn) => {
    return (
      listIn.map((idx) => {
        return (
          <div className="content" key={idx}>
            {content[Math.floor((idx - 1) / 4)][(idx - 1) % 4] === '2' &&
              <div className="c2" id={idx === createEffect ? 'effectNew' : 'old'}>
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

  let [contentMap, setContentMap] = useState(item);

  useEffect(() => {
    setContentMap(item);
    if (checkGameOver(content)) {
      // 게임오버 후 처음 한번만 실행
      if (gameover === 0) {
        updateScore(setMyScore, setMyScoreMaxNumber, score, scoreMaxNumber);
      }
      setGameover(1);
    }
    setScoreMaxNumber(checkMaxNumber(content));
  }, [content]);

  // 빈 칸 찾기
  const findBlock = (prev) => {
    let x = [];
    let y = [];
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (prev[i][j] === '') {
          y = [...y, i];
          x = [...x, j];
        }
      }
    }
    // 가득 찼을 때
    if (x.length === 0) {
      return prev;
    }
    // 랜덤 블록 생성
    let random_index = Math.floor(Math.random() * x.length);

    prev[y[random_index]][x[random_index]] = '2';
    setCreateEffect(y[random_index] * 4 + x[random_index] + 1);
    return prev;
  }

  // 새로운 블록 생성
  const newBlock = () => {
    setContent(prev => findBlock([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]]));
  }

  const keyDown = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        // 새로운 주소값 할당으로 re-rendering
        // 전개 연산자는 1차원 배열에서만 유효
        setContent(prev => moveLeft([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]], score, setScore));
        setTimeout(() => newBlock(), BLOCK_CREATE_DELAY);
        break;
      case 38:
        setContent(prev => moveUp([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]], score, setScore));
        setTimeout(() => newBlock(), BLOCK_CREATE_DELAY); 
        break;
      case 39:
        setContent(prev => moveRight([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]], score, setScore));
        setTimeout(() => newBlock(), BLOCK_CREATE_DELAY);
        break;
      case 40:
        setContent(prev => moveDown([[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]]], score, setScore));
        setTimeout(() => newBlock(), BLOCK_CREATE_DELAY);
        break;
      default:
        break;
    }
  };

  const restartGame = () => {
    setGameover(0);
    // 초기화
    setContent([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);
    setScore(0);

    // n개의 블록 생성
    for (let i = 0; i < CREATE_BLOCK_NUM; i++) {
      newBlock();
    }
  }

  // 이스터에그
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="board"
      onClick={() => {
        controllerRef.current?.focus();
      }}
      onBlur={() => {
        controllerRef.current?.focus();
      }}>
      <div className={gameover ? "board--gameover" : "board--content"}>
        {contentMap}
      </div>
      {gameover ? <><div className="gameover">게임오버</div></> : null}
      <input className="board--input" onKeyDown={keyDown} ref={controllerRef} onChange={onChange} autoFocus></input>
      {text && <>ㅎㅇ</>}
      <LocalScore score={score} scoreMaxNumber={scoreMaxNumber} />
      <ServerScore myName={myName} myScore={myScore} myScoreMaxNumber={myScoreMaxNumber} />
      <div className='new-game' onClick={restartGame}>다시하기</div>
    </div>
  )
}

export default Board;