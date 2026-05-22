const chatbotBtn = document.createElement('button');
chatbotBtn.innerText = 'Chat Support';
chatbotBtn.style.position = 'fixed';
chatbotBtn.style.bottom = '20px';
chatbotBtn.style.right = '20px';
chatbotBtn.style.padding = '15px';
chatbotBtn.style.borderRadius = '50px';
chatbotBtn.style.border = 'none';
chatbotBtn.style.background = '#2563eb';
chatbotBtn.style.color = '#fff';
chatbotBtn.style.cursor = 'pointer';

chatbotBtn.addEventListener('click',()=>{
alert('Hello! How can we help you today?');
});

document.body.appendChild(chatbotBtn);
