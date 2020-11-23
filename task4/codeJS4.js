const useRequest = (height, weight) => {
    return fetch('https://picsum.photos/' + `${height}/${weight}`)
        .then((response) => {
    
            result.innerHTML = `
      <div class="card">
        <img
          src="${response.url}"
          class="card-image"
        />
    `;
        })
        .catch(() => { result.innerHTML = `<div<p>Error</p></div>`; });
    }
    
    
    
    const inpt = document.querySelector(".text");
    const inptSec = document.querySelector(".textSec");
    const btn = document.querySelector(".btn.j-btn-request");
    const result = document.querySelector(".j-result");
    
    
    
    btn.addEventListener('click', () => {
    let limit = +inpt.value;
    let limitSec = +inptSec.value;
    
    
    if(typeof limit === 'number' && !isNaN(limit)){
        if(limit >= 100 && limitSec >= 100 && limit <= 300 && limitSec <= 300){
    
            let requestResult = useRequest(limit, limitSec);
        } else {
            result.innerHTML = `<div<p>Одно из чисел вне диапазона от 100 до 300</p></div>`;
        }
    }else{
        result.innerHTML = `<div<p>Необходимо ввести цифры</p></div>`;
    
    }
    });