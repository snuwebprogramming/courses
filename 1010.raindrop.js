
const init = () => {

    let score = 0;
    const scoreBox = document.getElementById('score-box');
    const domElements = [];
    const rainDrop = () => {
        const wordString = "Out of the night that covers me Black as the pit from pole to pole I thank whatever gods may be For my unconquerable soul";
        const words = wordString.split(' ');
        const textNode = document.createElement('DIV');
        
        setInterval(() => {
            const domElement = document.createElement('div');
            
            // 0 1 2 3 4 5 6 7 ... 19
            const wordPosition = Math.round((words.length  - 1 ) * Math.random());
            domElement.textContent = words[wordPosition];
            domElement.className = 'word-box';
            domElement.style.top = '0px';
            domElement.style.left = (200 * Math.random()) + 'px';

            const wordDropBox = document.getElementById('word-drop-box');
            wordDropBox.appendChild(domElement);

            domElements.push(domElement);

            setInterval(()=> {
                domElement.style.top = (parseInt(domElement.style.top) + 10) + 'px';
            }, 150);
        }, 1000);
    }

    const setUserInputHandler = () => {
        document.getElementById('answer-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const answerDom = document.getElementById('answer');
            
            for(let i = 0; i < domElements.length; i++) {
                const domElement = domElements[i];
                if(domElement.textContent === answerDom.value) {
                    domElement.remove();
                    domElements.splice(i,1);
                    score += 10;
                    scoreBox.textContent = score;
                    break;
                }
            };
            
            answerDom.value = '';

            // return false;
        })
    }

    rainDrop();
    setUserInputHandler();
}


init();
