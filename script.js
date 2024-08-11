'use strict';
const model = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.close-modal')
const showModal = document.querySelectorAll('.show-modal');

const openModal = function ()
{
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function ()
{
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++)
    showModal[i].addEventListener('click', openModal)

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e)
{

    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        closeModal();
    }

})
