const button=document.getElementById('btn')
const body=document.querySelector('body')
const card=document.getElementById('carta')
let toogle=true;

const colorHumilde=()=>{
    toogle=!toogle;
    if(toogle){
        body.style.backgroundColor='#222';
        // card.style.boxShadow= '10px 20px 40px rgb(1, 154, 154)';
        card.style.color='#222';
        card.style.backgroundColor='#fff';
    } else{
        body.style.backgroundColor='#fff';
        // card.style.boxShadow= '10px 20px 40px rgb(1, 154, 154)';
        card.style.color='#fff';
        card.style.backgroundColor='#222';
    }
}
//El evento
button.addEventListener('click',colorHumilde);
