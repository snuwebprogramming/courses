const fetch = require('node-fetch');

const func1 = async () => {
  try {
    const result = await fetch('http://my.snu.ac.kr');

    return await result.text();
  } catch(error) {
    console.error(error);
  }
}

const func2 = () => {
  return fetch('http://my.snu.ac.kr')
    .then((res) => res.text());
}

const init = () => {
  func2()
    .then( res => console.log(res));
;

const init = async() => {
  try {
    const res = await func2();
  } catch(err) {

  }
}




const fetch = require('node-fetch');

const callNaverNmt = (string, source = 'ko', target = 'en') => {
  const url = 'https://openapi.naver.com/v1/papago/n2mt';
  return fetch(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Naver-Client-Id': 'S28lDWN9etSLWyGXhs91',
      'X-Naver-Client-Secret': 'YOUR_SECRET_KEY',
    },
    method: 'POST',
    body: `source=${source}&target=${target}&text=${string}`,
  })
    .then((res) => {
      if (res.status >= 400 && res.status < 500) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((resJson) => resJson.message.result.translatedText);
};

// callNaverNmt('ko', 'en', '오리고기 먹고싶다.')
// .then((res) => console.log(res));


Promise.all([
  callNaverNmt('오리고기가 먹고싶다.'),
  callNaverNmt('죽느냐 사느냐 그것이 문제로다.'),
  callNaverNmt('나는 공산당이 싫어요'),
]).then((results) => {
  console.log(results);
}).catch((error) => console.error(error));
