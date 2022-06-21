import '../style/board.css';
import { useState } from 'react';

const Board = () => {
    const [content, setContent] = useState([['2','2','',''],['','','',''],['','2','',''],['','','','']]);

    const render = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

    const item = render.map((listIn) => {
        return(
            listIn.map((idx)=> {
            return(
                <div className="content" key={idx}>
                    {content[Math.floor((idx-1)/4)][(idx-1)%4] == '2'? 
                            <div className="c2">
                                <span>2</span>      
                            </div> : null
                    }
                </div>
            )
            })
        )
    })

    // 구현 중
    // const moveLeft = () => {
    //   let before = content;
      
    //   for (let i=3; i>=0; i--) {
    //     for (let j=3; j>=0; j--)
    //     // 왼쪽으로 한칸 이동
    //     if(before[0][i]){
            
    //     }
    //   }
    //   return([['','','','2'],['','','',''],['','','',''],['','','','']]);
    // }

    const keyDown = ({ keyCode }) => {
        switch (keyCode) {
          case 37:
            setContent(
              moveLeft()
            );
            break;
          case 38:
            setContent([['','','','2'],['','','',''],['','','',''],['','','','']]);
            break;
          case 39:
            setContent([['','','',''],['','','','2'],['','','',''],['','','','']]);
            break;
          case 40:
            setContent([['','','',''],['','','',''],['','','2',''],['','','','']]);
            break;
          default:
            break;
        }
      };

    return (
        <div className="board">
            <div className="board--content">
                { item }
            </div>
            <input onKeyDown={keyDown}></input>
        </div>
    )
}

export default Board;