let tbody = document.querySelector('tbody');
let bRows = [...tbody.rows];

function myFunc(n){
    tbody.innerHTML = ''
    bRows.sort((a,b)=> {
        let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        let y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        return x < y ?-1:1
    })
    bRows.map((item) => {
        tbody.appendChild(item);
    })
}



