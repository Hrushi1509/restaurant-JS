const btn = document.querySelector('.btn')
let price = document.querySelector('#price')
let dish = document.querySelector('#dish')
let table = document.querySelector('#table')
let table1 = document.querySelector('#table1')
let table2 = document.querySelector('#table2')
let table3 = document.querySelector('#table3')
let list = document.querySelector('#list')

btn.addEventListener('click',()=>{
    e.preventDeafault();
    if(price.value === '' || dish.value === '' || list.value === ''){
        alert('Please Enter the Details');
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${price.value} : ${dish.value} : ${list.value}`
        ))

        table1.appendChild(li)
    }

    price.value = '';
    dish.value = '';
    // table.value = ''
})
