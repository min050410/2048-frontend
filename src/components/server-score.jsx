const ServerScore = (props) => {
    return( 
        <div className='myscore'>
            <div className="score--score">이름</div>
            <span>{props.myName}</span>
            <div className="score--score">최고 점수</div>
            <span>{props.myScore}</span>
            <div className="score--max">최대 숫자</div>
            <span>{props.myScoreMaxNumber}</span>
        </div>
    )
}

export default ServerScore;