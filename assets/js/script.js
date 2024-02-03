const activeModalBtns = document.querySelectorAll(".active-modal");
const getModal = document.querySelector(".dialog-modal");



function bindActiveModal(){
    for (const activeModalBtn of activeModalBtns) {
        activeModalBtn.addEventListener("click", e => {
            e.preventDefault();
            getModal.showModal();
        });
    }
}

bindActiveModal();


// const activeModalBtns = document.querySelectorAll(".active-modal");
// const getModal = document.querySelector(".conteiner-modal");





// function bindActiveModal(){
//     for (const activeModalBtn of activeModalBtns) {
//          activeModalBtn.addEventListener("click", e => {
//             e.preventDefault();
//             getModal.style.display = "block";
//             getModal.showModal();
//         });
//      }
//  }

//  bindActiveModal();
const closeBtn = document.querySelector(".close-btn")
closeBtn.addEventListener("click", e => bindCloseBtn(e))


function bindCloseBtn(e){
    e.preventDefault();
    getModal.style.display = "none";
}




const activeFinishModalBtns = document.querySelectorAll(".continue")
const getFinishModal = document.querySelector(".finish-modal")
const dialogGetFinishModal = document.querySelector(".dialog-finish-modal")

for (const activeFinishModalBtn of activeFinishModalBtns) {
    activeFinishModalBtn.addEventListener("click", e => {
        e.preventDefault();
        bindActiveModalContinue();
        // getFinishModal.style.display = "block";
    });
}


function bindActiveModalContinue(){
    dialogGetFinishModal.showModal();
}



// function bindActiveModalContinue(){
//     for (const activeFinishModalBtn of activeFinishModalBtns) {
//         activeFinishModalBtn.addEventListener("click", e => {
//             e.preventDefault();
//             getModal.style.display = "none";
//             getFinishModal.style.display = "block";
//         });
//     }
// }

// bindActiveModalContinue();

const closeFinishModalBtn = document.querySelector(".close-finish-btn")

closeFinishModalBtn.addEventListener("click", e => bindCloseModalContinue(e));

function bindCloseModalContinue(e){
    e.preventDefault();
    document.querySelector('.dialog-finish-modal').close();
}
