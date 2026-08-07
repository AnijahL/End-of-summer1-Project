const triggerBtnlike = document.getElementById('like1');
const triggerBtndislike = document.getElementById('dislike1');
const triggerBtnlike2 = document.getElementById('like2');
const triggerBtndislike2 = document.getElementById('dislike2');
const triggerBtnlike3 = document.getElementById('like3');
const triggerBtndislike3 = document.getElementById('dislike3');
const cont5 = document.getElementById('content5');
const cont6 = document.getElementById('content6');
const cont7 = document.getElementById('content7');
const overlay = document.getElementById('overlay');
const overlaydis = document.getElementById('overlay-dis');


triggerBtndislike.addEventListener('click', () => {
    overlaydis.classList.add('show');

    cont5.classList.add('offscreen-right');
    cont5.classList.remove('active');

    cont7.classList.remove('offscreen-left');
    cont7.classList.add('active');
    cont7.addEventListener('transitionend', function handler() {
        overlaydis.classList.remove('show');
        cont7.removeEventListener('transitionend', handler);
  });
});

triggerBtnlike.addEventListener('click', () => {
    overlay.classList.add('show');

    cont5.classList.remove('active');
    cont5.classList.add('offscreen-left');

    cont6.classList.remove('offscreen-right');
    cont6.classList.add('active');
    cont6.addEventListener('transitionend', function handler() {
        overlay.classList.remove('show');
        cont6.removeEventListener('transitionend', handler);
  }, { once: true });
});





const saveButton = document.getElementById("save-btn");

if (saveButton) {
    saveButton.addEventListener("click", function() {
        const sourceDiv = document.getElementById("holder1");
        const content = sourceDiv.innerHTML;
        localStorage.setItem("savedDivData", content);
        alert("Content successfully saved to browser memory!");
  });
}



const targetDiv = document.getElementById("holder2");

if (targetDiv) {

    const savedContent = localStorage.getItem("savedDivData");

    if (savedContent) {
        targetDiv.innerHTML = savedContent;
    } else {
        targetDiv.innerHTML = "<p style='color: red;'>No saved content found</p>";
    }
  };




