'use strict'

const schedule = document.querySelectorAll('.schedule__links');
const cross = document.querySelectorAll('.cross');
const lung = document.querySelectorAll('.lung');
const walls = document.querySelectorAll('.walls');
const ppst = document.querySelectorAll('.ppsr');
const candy = document.querySelectorAll('.candy');
const classes = document.querySelectorAll('.schedule__classes');
const cb = document.querySelector('#checkboxing');
const box = document.querySelectorAll('.price__box');



schedule.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        classes.forEach((btn)=>{
            btn.style.opacity = 1;
        })
        if(e.target.name == 'cross'){
            classes.forEach((item)=>{
                item.style.opacity = 1
                
                if(!item.classList.contains('cross')){
                    item.style.opacity=0
                }
            })
        }
        else if(e.target.name == 'ppsr'){          
            classes.forEach((item)=>{
                item.style.opacity = 1
                
                if(!item.classList.contains('ppsr')){
                    item.style.opacity=0
                }
            })
        }
        else if(e.target.name == 'lung'){
            classes.forEach((item)=>{
                item.style.opacity = 1
                if(!item.classList.contains('lung')){
                    item.style.opacity=0
                }
            })
        }
        else if(e.target.name == 'walls'){
            classes.forEach((item)=>{
                item.style.opacity = 1
                if(!item.classList.contains('walls')){
                    item.style.opacity=0
                }
            })
        }
        else if(e.target.name == 'candy'){
            classes.forEach((item)=>{
                item.style.opacity = 1
                if(!item.classList.contains('candy')){
                    item.style.opacity=0
                }
            })
        }
        
    })
})


const boxer = ()=>{
    if(!cb.checked){
        console.log('con');
    }
    else if(cb.checked){
        console.log('contr');
    }
}
