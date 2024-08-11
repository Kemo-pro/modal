// Get Modal Element
var modal = document.getElementById('simpleModal');
// Get open Modal Content
var modalBtn = document.getElementById('btn');
// Get CloseBtn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen For open Click
modalBtn.addEventListener('click',openModal);
// Listen For Close Click
closeBtn.addEventListener('click',closeModal)
// Listen For OutSide Click
window.addEventListener('click',clickOutside)

// Function To OpenModal
function openModal(){
modal.style.display = 'block'
};
// Function To CloseModal
function closeModal(){
modal.style.display = 'none'
};
// Function To OpenModal
function clickOutside(e){
if(e.target == modal){
modal.style.display = 'block';
}
};



