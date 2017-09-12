//get the modal element from the page
var modal = document.getElementById('simpleModal');

//get the modal button element
var modalBtn = document.getElementById('modalBtn');

//get the modal close button element
//var closeBtn = document.getElementById('closeBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click on 'Click Here'
modalBtn.addEventListener('click', openModal);

//listen for theh close click on 'X'
closeBtn.addEventListener('click', closeModal);

//listen for click outside the modal
window.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}