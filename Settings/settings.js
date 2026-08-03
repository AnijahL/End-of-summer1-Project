
const accountContainer=document.getElementById('acc-container'); 
const personContainer = document.getElementById('Personalization-info'); 
const generalContainer = document.getElementById('General-info'); 
const notificationsContainer = document.getElementById('Notifications-info'); 
const appearanceContainer = document.getElementById('Appearance-info'); 
const displayContainer = document.getElementById('Display-info'); 
const securityContainer = document.getElementById('Security-info'); 
const accountsContainer = document.getElementById('Accounts-info'); 
const ProfileContainer = document.getElementById('Profile-info'); 
const chatContainer = document.getElementById('Chat-info'); 



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

function handle_click(name){
    console.log("Debug: Function handle_click has been triggered"); 
    switch(name){
        case 'account': 
            accountContainer.style.display = 'block';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break;
        case 'personalization': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'block'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'general': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'block'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'notifications': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'block'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'appearance': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'block'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'display': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'block'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'security': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'block'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'accounts': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'block'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'profile': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'block'; 
            chatContainer.style.display = 'none'; 
            break; 
        case 'chat': 
            accountContainer.style.display = 'none';
            personContainer.style.display = 'none'; 
            generalContainer.style.display = 'none'; 
            notificationsContainer.style.display = 'none'; 
            appearanceContainer.style.display = 'none'; 
            displayContainer.style.display = 'none'; 
            securityContainer.style.display = 'none'; 
            accountsContainer.style.display = 'none'; 
            ProfileContainer.style.display = 'none'; 
            chatContainer.style.display = 'block'; 
            break;       
    }

}