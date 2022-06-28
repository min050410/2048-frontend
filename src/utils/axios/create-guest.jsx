const create = {
    method: 'post',
    url: `http://${process.env.REACT_APP_IP}:3000/api/user/create`,
    headers: {}
};

const getID = {
    method: 'get',
    url: `http://${process.env.REACT_APP_IP}:3000/api/user/getID`,
    headers: {}
};

const createGuest = async () => {
    const axios = require('axios');
    
    await axios(create)
        .then(function (res) {
            // console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    await axios(getID)
        .then(function (res) {
            localStorage.setItem('guestId', res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default createGuest;