import Calendar from 'react-awesome-calendar';
import axios from 'axios';
import { useEffect } from 'react';

//style
import '../style/todoCalendar.css';

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2019-05-02T18:00:00+00:00',
    to: '2019-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2019-05-01T13:00:00+00:00',
    to: '2019-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2019-05-05T13:00:00+00:00',
    to: '2019-05-05T20:00:00+00:00',
    title: 'This is also another event'
}];


const TodoCalendar = () => {
    useEffect(() => {
        axios({
            method: 'post',
            url: '/todo/make',
            baseURL: 'https://localhost:3000/api/',
            data: {
                title: '안녕',
                content: 'hi',
                startDate: new Date(),
                endDate: new Date()
            }
        })
        .then((res)=> {
            console.log(res.statusText);
        })
        .catch(function (err) {
            console.log(err.toJSON());
        })
    }, [])
    return(
        <div>
            <Calendar
                events={events}
            />
        </div>
    )
}

export default TodoCalendar;