const axios = require('axios');
const qs = require('qs');

const updateScore = async (setMyScore, setMyScoreMaxNumber, score, scoreMaxNumber) => {

    let data = qs.stringify({
        'usercode': localStorage.getItem('guestId').toString(),
        'score': score,
        'scoreMaxNumber': scoreMaxNumber
    });
    let config = {
        method: 'post',
        url: `http://${process.env.REACT_APP_IP}:3000/api/user/score`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    // 서버 값 불러오기
    let getScore = {
        method: 'get',
        url: `http://${process.env.REACT_APP_IP}:3000/api/user/getUser/${localStorage.getItem('guestId').toString()}`,
    };

    await axios(getScore)
        .then(function (response) {
            setMyScore(response.data['score']);
            setMyScoreMaxNumber(response.data['scoreMaxNumber']);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default updateScore;