import '../style/board.css';
import { useState } from 'react';

const Board = () => {
    const [content, setContent] = useState([['2','','',''],['','','',''],['','','',''],['','','','']]);

    return (
        <div className="board">
            <div className="board--content">
                <div className="content">
                    <div className="c2">
                        <span>2</span>
                    </div>
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
                <div className="content">
                    
                </div>
            </div>
        </div>
    )
}

export default Board;