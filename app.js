let share_btns   = document.querySelectorAll('.share_btn'),
    modal_wraper = document.querySelector('.modal_wraper');

share_btns.forEach(share_btn => {
    share_btn.addEventListener('click', ()=>{
        modal_wraper.classList.add('active');
    });
});


addEventListener('click', (e)=>{
    if(e.target.dataset.action == 'modal_close'){
        modal_wraper.classList.remove('active');
    }
});


let copy_url_btn = document.querySelector('.copy_url_btn');

if(copy_url_btn)
{
    copy_url_btn.addEventListener('click', copyURL);
}

function copyURL(){
    let copyInput = document.getElementById('shareable_url');
    copyInput.select();

    document.execCommand("copy");

    alert("Copied: "+ copyInput.value);
}