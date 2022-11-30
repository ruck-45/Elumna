// Language drop down

let lang_btn = document.getElementById('language');
let lang_drop_down_list = document.getElementById('lang');

lang_drop_down_list.style.display = 'none';

lang_btn.addEventListener('click',function(){
    lang_btn.classList.add('lang_btn_hover');
    if(lang_drop_down_list.style.display == 'none')
    {
        lang_drop_down_list.style.display = 'block';
    }
    else{
        lang_drop_down_list.style.display = 'none';
    }
});