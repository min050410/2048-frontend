import { useEffect, useState } from 'react';
import Header from './header';

import '../style/ranking.css';
import Nickname from './nickname';
import getRank from '../utils/axios/get-rank';


const Ranking = () => {
    const [rank, setRank] = useState(0);

    const rankMap = async () => {
        getRank(setRank); 
    }

    useEffect(() => {
        rankMap();
    }, [])

    return (
        <div>
            <Header/>
            <div className="rank">
                {rank}
            </div>
            <Nickname setRank={setRank}/>
        </div>
    )
}

export default Ranking;