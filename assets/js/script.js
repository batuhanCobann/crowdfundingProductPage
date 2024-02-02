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


function bindCloseBtn(){
    const closeBtn = document.querySelector(".close-btn")
    closeBtn.addEventListener("click", e => {
        e.preventDefault();
        getModal.style.display = "none";
    });
}

bindCloseBtn();



const activeFinishModalBtns = document.querySelectorAll(".continue")
const getFinishModal = document.querySelector(".finish-modal")
const dialogGetFinishModal = document.querySelector(".dialog-finish-modal")



function bindActiveModalContinue(){
    for (const activeFinishModalBtn of activeFinishModalBtns) {
        activeFinishModalBtn.addEventListener("click", e => {
            e.preventDefault();
            getModal.style.display = "none";
            dialogGetFinishModal.showModal();
            // getFinishModal.style.display = "block";
        });
    }
}

bindActiveModalContinue();

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



function bindCloseModalContinue(){
    const closeFinishModalBtn = document.querySelector(".close-finish-btn")
    closeFinishModalBtn.addEventListener("click", e => {
        e.preventDefault();
        getFinishModal.style.display = "none";
    });
}

bindCloseModalContinue();