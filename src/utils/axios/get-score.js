const axios_ip = 'localhost';
const axios = require('axios');

const getScore = async () => {
    const get = {
        method: 'get',
        url: `http://${axios_ip}:3000/api/user/getUser/${localStorage.getItem('guestId').toString()}`,
    };
    let res = {
        nickname: '',
        score: 0,
        scoreMaxNumber: 0
    };
    await axios(get)
        .then(function (response) {
            res.nickname = response.data['nickname'];
            res.score = response.data['score'];
            res.scoreMaxNumber = response.data['scoreMaxNumber'];
        })
        .catch(function (error) {
            console.log(error);
        });
    return res;
}

export default getScore;