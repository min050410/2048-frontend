import Deque from "./structure/deque";

const SCORE_SCALER = 200;
const SCORE_SCALER_2 = 1;

const moveRight = (prev, score, setScore) => {
    const deque = new Deque();
    for (let i = 3; i >= 0; i--) {
        for (let j = 3; j >= 0; j--) {
            if (prev[i][j] !== '') {
                if (deque.back() !== prev[i][j]) {
                    deque.push_back(prev[i][j]);
                    // console.log('enqueue: ' + j + ': ' + prev[i][j]);
                }
                else {
                    deque.pop_back();
                    deque.push_back((prev[i][j] * 2).toString());
                    // 점수 추가
                    setScore(score + (Math.pow(prev[i][j] * 2, SCORE_SCALER_2) * SCORE_SCALER));
                }
            }
            // 비우기
            prev[i][j] = '';
        }
        // 채우기
        // deque.print_all();
        let queue_length = deque.size();
        for (let k = 3; k > 3 - queue_length; k--) {
            prev[i][k] = deque.pop_front();
        }
    }
    return prev;
}

const moveLeft = (prev, score, setScore) => {
    const deque = new Deque();
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (prev[i][j] !== '') {
                if (deque.back() !== prev[i][j]) {
                    deque.push_back(prev[i][j]);
                    // console.log('enqueue: ' + j + ': '+ prev[i][j]);
                }
                else {
                    deque.pop_back();
                    deque.push_back((prev[i][j] * 2).toString());
                    // 점수 추가
                    setScore(score + (Math.pow(prev[i][j] * 2, SCORE_SCALER_2) * SCORE_SCALER));
                }
            }
            // 비우기
            prev[i][j] = '';
        }
        // 채우기
        // deque.print_all();
        let queue_length = deque.size();
        for (let k = 0; k < queue_length; k++) {
            prev[i][k] = deque.pop_front();
        }
    }
    return prev;
}

const moveUp = (prev, score, setScore) => {
    const deque = new Deque();
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (prev[j][i] !== '') {
                if (deque.back() !== prev[j][i]) {
                    deque.push_back(prev[j][i]);
                    // console.log('enqueue: ' + j + ': '+ prev[i][j]);
                }
                else {
                    deque.pop_back();
                    deque.push_back((prev[j][i] * 2).toString());
                    // 점수 추가  
                    setScore(score + (Math.pow(prev[j][i] * 2, SCORE_SCALER_2) * SCORE_SCALER));
                }
            }
            // 비우기
            prev[j][i] = '';
        }
        // 채우기
        // deque.print_all();
        let queue_length = deque.size();
        for (let k = 0; k < queue_length; k++) {
            prev[k][i] = deque.pop_front();
        }
    }
    return prev;
}

const moveDown = (prev, score, setScore) => {
    const deque = new Deque();
    for (let i = 3; i >= 0; i--) {
        for (let j = 3; j >= 0; j--) {
            if (prev[j][i] !== '') {
                if (deque.back() !== prev[j][i]) {
                    deque.push_back(prev[j][i]);
                    // console.log('enqueue: ' + j + ': ' + prev[i][j]);
                }
                else {
                    deque.pop_back();
                    deque.push_back((prev[j][i] * 2).toString());
                    // 점수 추가
                    setScore(score + (Math.pow(prev[j][i] * 2, SCORE_SCALER_2) * SCORE_SCALER));
                }
            }
            // 비우기
            prev[j][i] = '';
        }
        // 채우기
        // deque.print_all();
        let queue_length = deque.size();
        for (let k = 3; k > 3 - queue_length; k--) {
            prev[k][i] = deque.pop_front();
        }
    }
    return prev;
}

export {moveLeft, moveRight, moveUp, moveDown};