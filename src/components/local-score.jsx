const LocalScore = (props) => {
    return( 
        <div className='score'>
            <div className="score--score">현재 점수</div>
            <span>{props.score}</span>
            <div className="score--max">현재 최대</div>
            <span>{props.scoreMaxNumber}</span>
        </div>
    )
}

export default LocalScore;