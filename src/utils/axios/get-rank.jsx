const getRank = async (setRank) => {
    const axios = require('axios');

    const rank = {
        method: 'get',
        url: `http://${process.env.REACT_APP_IP}:3000/api/user/rank`,
        headers: {}
    };

    await axios(rank)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            console.log(response.data)
            const item = response.data;
            setRank(item.map((value, i) => {
                return (
                    <div className="rank--item" key={i} id={value.usercode === Number(localStorage.getItem('guestId')) ? "here" : "no"}>
                        <div className="rank--start">
                            <div className="rank--index"><span>{i + 1}</span></div>
                            <div className="rank--nickname">{value.nickname}</div>
                        </div>
                        <div className="rank--content">
                            <div className="rank--score">{(value.score).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                            <div className={`c${value.scoreMaxNumber}`} id="ranking--scoremax"><span>{value.scoreMaxNumber}</span></div>
                        </div>
                    </div>
                )
            }));     
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });   
}

export default getRank;