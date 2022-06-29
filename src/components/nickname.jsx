import { useState } from 'react';
import getRank from '../utils/axios/get-rank';

const Nickname = (props) => {
    const axios = require('axios');

    const [nickname, setNickname] = useState("");

    const rankMap = async () => {
        getRank(props.setRank); 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        (async () => {
            console.log(nickname);
            let body = {
                usercode: Number(localStorage.getItem('guestId')),
                nickname: nickname
            };
            await axios
                .post(`http://${process.env.REACT_APP_IP}:3000/api/user/change`, body)
                .then((res) => console.log(res));
            rankMap();
        })()
    };

    const onChange = (e) => {
        setNickname(e.target.value);
    }

    return(
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
    )
}

export default Nickname;