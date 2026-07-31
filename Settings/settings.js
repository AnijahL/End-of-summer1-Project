const settingsOptions = {
    Account: {
        name: "random", 
        title: "random", 
        amount: 1000,
    }, 
    Personalization : {
        name: "random", 
        title: "random", 
        amount: 1000, 
    }
}


Object.values(settingsOptions).forEach(settingItem => {
    console.log(settingItem); 

})

const settingOptionsHTML = document.querySelectorAll(".settings-option"); 
settingOptionsHTML.forEach(element => {
    console.log(element.textContent); 
    element.addEventListener('click', () => handleSettings(element.textContent)); 
})

let settingsTitle = document.getElementById("settings-title");


function handleSettings(title){
    console.log(title);
     settingsTitle.textContent = title; 

}
