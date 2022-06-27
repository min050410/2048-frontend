import { useEffect, useState } from 'react';
import Header from './header';

import '../style/ranking.css';

const axios = require('axios');
const axios_ip = 'localhost';

const getRank = {
    method: 'get',
    url: `http://${axios_ip}:3000/api/user/rank`,
    headers: {}
};

const Ranking = () => {
    const [rank, setRank] = useState(0);
    const [nickname, setNickname] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        (async () => {
            console.log(nickname);

            let body = {
                usercode: Number(localStorage.getItem('guestId')),
                nickname: nickname
            };

            await axios
                .post(`http://${axios_ip}:3000/api/user/change`, body)
                .then((res) => console.log(res));

            getRankaxios();
        })()
    };

    const onChange = (e) => {
        setNickname(e.target.value);
    }

    const getRankaxios = async () => {
        await axios(getRank)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                const item = response.data
                console.log(item)
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
            });
    }

    useEffect(() => {
        getRankaxios();
    }, [])

    return (
        <div>
            <Header />
            <div className="rank">
                {rank}
            </div>
            <div className="nickname-wrap">
                <form onSubmit={submitHandler} className="nickname">
                    <label className='nickname--change'>닉네임 변경</label>
                    <input
                        onChange={onChange}
                        value={nickname}
                    ></input>
                    <button type="submit">바꾸기</button>
                </form>
            </div>
        </div>
    )
}

export default Ranking;