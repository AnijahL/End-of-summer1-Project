// likes/dislikes
const trigBtnlike1 = document.getElementById ('like1')
const trigBtndislike1 = document.getElementById('dislike1');
const trigBtnlike2 = document.getElementById('like2');
const trigBtndislike2 = document.getElementById('dislike2');
const trigBtnlike3 = document.getElementById('like3');
const trigBtndislike3 = document.getElementById('dislike3');
const trigBtnlike4 = document.getElementById('like4');
const trigBtndislike4 = document.getElementById('dislik4');
const trigBtnlike5 = document.getElementById('like5');
const trigBtndislike5 = document.getElementById('dislike5');
const trigBtnlike6 = document.getElementById('like6');
const trigBtndislike6 = document.getElementById('dislike6');
const trigBtnlike7 = document.getElementById('like7');
const trigBtndislike7 = document.getElementById('dislike7');
const trigBtnlike8 = document.getElementById('like8');
const trigBtndislike8 = document.getElementById('dislike8');
const trigBtnlike9 = document.getElementById('like9');
const trigBtndislike9 = document.getElementById('dislike9');
const trigBtnlike10 = document.getElementById('like10');
const trigBtndislike10 = document.getElementById('dislike10');
const trigBtnlike11 = document.getElementById('like11');
const trigBtndislike11 = document.getElementById('dislike11');
const trigBtnlike12 = document.getElementById('like12');
const trigBtndislike12 = document.getElementById('dislike12');
const trigBtnlike13 = document.getElementById('like13');
const trigBtndislike13 = document.getElementById('dislike13');
const trigBtnlike14 = document.getElementById('like14');
const trigBtndislike14 = document.getElementById('dislike14');


// content pages
const cont1 = document.getElementById('content1');
const cont2 = document.getElementById('content2');
const cont3 = document.getElementById('content3');
const cont4 = document.getElementById('content4');
const cont5 = document.getElementById('content5');
const cont6 = document.getElementById('content6');
const cont7 = document.getElementById('content7');
const cont8 = document.getElementById('content8');
const cont9 = document.getElementById('content9');
const cont10 = document.getElementById('content10');
const cont11 = document.getElementById('content11');
const cont12 = document.getElementById('content12');
const cont13 = document.getElementById('content13');
const cont14 = document.getElementById('content14');
// animation
const overlay = document.getElementById('overlay');
const overlaydis = document.getElementById('overlay-dis');


const saveButton10 = document.getElementById("save-btn10");
const saveButton11 = document.getElementById("save-btn11");
const saveButton12 = document.getElementById("save-btn12");



// triggerBtndislike.addEventListener('click', () => {
//     overlaydis.classList.add('show');

//     cont5.classList.add('offscreen-right');
//     cont5.classList.remove('active');

//     cont7.classList.remove('offscreen-left');
//     cont7.classList.add('active');
    
//     safeRemoveOverlay(overlaydis, cont7);
// });

// triggerBtnlike.addEventListener('click', () => {
//     overlay.classList.add('show');

//     cont5.classList.remove('active');
//     cont5.classList.add('offscreen-left');

//     cont6.classList.remove('offscreen-right');
//     cont6.classList.add('active');
    
//     safeRemoveOverlay(overlay, cont6);
// });









if (saveButton12){
    saveButton12.addEventListener("click", function() {
        const content12 = cont12.innerHTML;
        localStorage.setItem("savedDivData", content12);
        alert("Content successfully saved to browser memory!");
    });
}
const game12 = document.getElementById('saved-container');
if (game12){
    game12.innerHTML = localStorage.getItem("savedDivData");
    console.log(game12.innerHTML); 
}


if (saveButton10){
    saveButton10.addEventListener("click", function() {
        alert("saved");
        const content10 = cont10.innerHTML;
        localStorage.setItem("savedDivData", content10);
        alert("Content successfully saved to browser memory!");
    });
}
const game10 = document.getElementById('saved-container');
if (game10){
    game10.innerHTML = localStorage.getItem("savedDivData");
    console.log(game10.innerHTML); 
}







// const targetDiv = document.getElementById("holder2");

// if (targetDiv) {

//     const savedContent = localStorage.getItem("savedDivData");

//     if (savedContent) {
//         targetDiv.innerHTML = savedContent;
//     } else {
//         targetDiv.innerHTML = "<p style='color: red;'>No saved content found</p>";
//     }
//   };




