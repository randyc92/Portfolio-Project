const body = document.querySelector('body');
const headers = document.querySelectorAll('.headers');
const about = document.querySelector('.abouts');
const picture = document.querySelector('.picture-swap');

function nightOrDay(){
    if(body.classList.contains('body-day')){
        body.classList.remove('body-day');
        body.classList.add('body-night');
    } else {
        body.classList.remove('body-night');
        body.classList.add('body-day');
    }
    for(let header of headers){
        if(header.classList.contains('headers')){
            header.classList.remove('headers-days');
            header.classList.add('headers-nights');
        } else {
            header.classList.remove('headers-nights');
            header.classList.add('headers-days');
        }
    }

    if(about.classList.contains('about-day')){
        about.classList.remove('about-day');
        about.classList.add('about-night');
    } else {
        about.classList.remove('about-night');
        about.classList.add('about-day');
    }


}

picture.addEventListener('click', nightOrDay);