// HTML код
<input class="text">
<button id="btn1" class="btn j-btn-request">Запрос</button>
<div class="result j-result">Здесь будет результат запроса</div>



function useRequest(url, callback) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function() {
    if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
    } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
            callback(result);
        }
    }
};

xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
};

xhr.send();
};




const inpt = document.querySelector(".text");
const btn = document.querySelector(".btn.j-btn-request");
const result = document.querySelector(".j-result");

function displayResult(apiData) {
let cards = '';

apiData.forEach(item => {
    const cardBlock = `
  <div class="card">
    <img
      src="${item.download_url}"
      class="card-image"
    />
    <p>${item.author}</p>
  </div>
`;
    cards = cards + cardBlock;
});

result.innerHTML = cards;
}


btn.addEventListener('click', () => {
let limit = inpt.value;
if(limit > 0 && limit < 11){
    useRequest('https://picsum.photos/v2/list?limit=' + limit, displayResult);
} else {
    result.innerHTML = `<div<p>Число вне диапазона от 1 до 10</p></div>`;

}
});