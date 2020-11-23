function pageLoaded(){


    const apiURL =  "https://picsum.photos/v2/list?page=1&limit=10";
    const inpt = document.querySelector(".text");
    const inptSec = document.querySelector(".textSec");
    const btn = document.querySelector(".btn.j-btn-request");
    const result = document.querySelector(".j-result");
    
    if (localStorage.getItem('myKey')!==null) {
        result.innerHTML = localStorage.getItem('myKey');
    }
    
    btn.addEventListener("click", checks);
    
    function sendRequest(){
        let requestURL = formatURL();
        fetch(requestURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                formatOutput(data);
            })
    }
    
    
    
    function formatOutput(data) {
        let cards = '';
    
        data.forEach(item => {
            const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
            cards = cards + cardBlock;
        });
    
        result.innerHTML = cards;
        localStorage.setItem('myKey', cards);
    
    }
    
    
    function formatURL(){
        let url = new URL(apiURL);
        url.searchParams.set("page", inpt.value);
        url.searchParams.set("limit", inptSec.value);
        return url;
    }
    
    
    function checks(){
        let limit = +inpt.value;
        let limitSec = +inptSec.value;
    
        if(typeof limit === 'number' && !isNaN(limit) && limit >= 1 && limit <= 10){
            if(typeof limitSec === 'number' && !isNaN(limitSec) && limitSec >= 1 && limitSec <= 10){
                sendRequest();
    
            } else{
                result.innerHTML = `<div<p>Лимит вне диапазона от 1 до 10</p></div>`;
            }
        }else if(typeof limitSec === 'number' && !isNaN(limitSec) && limitSec >= 1 && limitSec <= 10){
    
            result.innerHTML = `<div<p>Номер страницы вне диапазона от 1 до 10</p></div>`;
    
        }else{
            result.innerHTML = `<div<p>Номер страницы и лимит вне диапазона от 1 до 10</p></div>`;
        }
    }
    }
    
    document.addEventListener("DOMContentLoaded", pageLoaded);