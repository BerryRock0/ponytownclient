// ==UserScript==
// @name         chair-script
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  scripts and exploits
// @author       chair
// @match        https://pony.town
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
//MADE BY CHAIR (disc:im_chair/telegram:@im_chair)
(function() {
  'use strict';

let intervalId;

 const panelContainer = document.createElement('div');
 panelContainer.id = 'scriptPanel';
 panelContainer.style.position = 'fixed';
 panelContainer.style.top = '0px';
 panelContainer.style.left = '400px';
 panelContainer.style.zIndex = '9999';
 document.body.appendChild(panelContainer);

  const panelStyles = `
    #scriptPanel button {
      background-color: red;
      color: white;
      padding: 8px 12px;
      margin-right: 0px;
      border: none;
      cursor: pointer;
      outline: none;
      border-radius: 4px;
    }

    #scriptPanel button:hover {
      background-color: black;
    }

    #scriptPanel button.active {
      background-color: green;
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.textContent = panelStyles;
  document.head.appendChild(styleElement);

  const antiafkButton = document.createElement('button');
  antiafkButton.textContent = 'ANTIAFK';
  antiafkButton.style.backgroundColor = 'black';
  antiafkButton.style.color = 'green';
  antiafkButton.style.padding = '8px 12px';
  antiafkButton.style.marginRight = '0px';
  antiafkButton.style.border = 'none';
  antiafkButton.style.cursor = 'pointer';
  antiafkButton.style.borderRadius = '4px';
  panelContainer.appendChild(antiafkButton);

  const autoWriterButton = document.createElement('button');
  autoWriterButton.textContent = 'AUTOWRITER';
  autoWriterButton.style.backgroundColor = 'black';
  autoWriterButton.style.color = 'green';
  autoWriterButton.style.padding = '8px 12px';
  autoWriterButton.style.marginRight = '0px';
  autoWriterButton.style.border = 'none';
  autoWriterButton.style.cursor = 'pointer';
  autoWriterButton.style.borderRadius = '4px';
  panelContainer.appendChild(autoWriterButton);

  const autoClickerButton = document.createElement('button');
  autoClickerButton.textContent = 'AUTOCLICKER';
  autoClickerButton.style.backgroundColor = 'black';
  autoClickerButton.style.color = 'green';
  autoClickerButton.style.padding = '8px 12px';
  autoClickerButton.style.marginRight = '0px';
  autoClickerButton.style.border = 'none';
  autoClickerButton.style.cursor = 'pointer';
  autoClickerButton.style.borderRadius = '4px';
  panelContainer.appendChild(autoClickerButton);

  const speedButton = document.createElement('button');
  speedButton.textContext = 'SPEED';
  speedButton.style.backgroundColor
  speedButton.style.color = 
  speedButton.style.padding = 
  speedButton.style.marginRight
  speedButton.style.border
  speedButton.style.cursor
  speedButton.style.borderRadius
  panelContainer.appendChild(speedButton);

  let isAntiafkActive = false;
  let isAutoWriterActive = false;
  let isAutoClickerActive = false;
  let isSpeedActive = false; 
  let intervalIdAutoWriter;

  antiafkButton.addEventListener('click', toggleAntiafk);
  autoWriterButton.addEventListener('click', toggleAutoWriter);
  autoClickerButton.addEventListener('click', toggleAutoClicker);
  speedButton.addEventListener('click', toggleSpeed);

  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.pointerEvents = 'none';
    overlay.style.display = 'block';

    const letsGoButton = document.getElementById('letsGoButton');
    if (letsGoButton)
    {
      letsGoButton.addEventListener('click', function()
      {
        overlay.style.display = 'none';
        overlay.style.pointerEvents = 'auto';
      });
    }
  }

  function click() { //this
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    var element = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    element.dispatchEvent(event);

    console.log("click");
  }

  function collecting()
  {
      const collectButton = document.querySelector("title= \"Use item / Interact\"");

      if (collectButton)
        collectButton.click();
  }

  function startClicking()
  {
    intervalId = setInterval(click, 1000);
    console.log("script starting");
  }

  function stopClicking() {
    clearInterval(intervalId);
    console.log("script stop");
    setTimeout(function() {
      console.clear();
    }, 1000);
  }

function toggleSpeed()
{
  window.requestAnimationFrame = function(callback)
  {
    window.requestAnimationFrame(callback);
    return window.requestAnimationFrame(callback);
  };
}
  
  function toggleAutoClicker()
  {
    isAutoClickerActive = !isAutoClickerActive;
    if(isAutoClickerActive)
    {
        autoClickerButton.classList.add('active');
        collecting();
    }
    else
    {
        autoClickerButton.classList.remove('active');
        console.log('AUTOCLICKER false');
    }
  }


  function toggleAntiafk() {
    isAntiafkActive = !isAntiafkActive;
    if (isAntiafkActive) {
      antiafkButton.classList.add('active');
      console.log('ANTIAFK true');
      startClicking();
    } else {
      antiafkButton.classList.remove('active');
      console.log('ANTIAFK false');
      stopClicking();
    }
  }

  function sendMessage(statsText) {
    let isChatOpen = false;
    let isSendingMessage = false;

    function click() {
      var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      var element = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      element.dispatchEvent(event);

      console.log("click");
    }

    function openChat() {
      const chatButton = document.querySelector(".chat-open-button button");

      if (chatButton) {
        chatButton.click();
        isChatOpen = true;
      }
    }


    function closeChat() {
      const closeButton = document.querySelector(".chat-close-button button");

      if (closeButton) {
        closeButton.click();
        isChatOpen = false;
      }
    }

function sendMessage(statsText) {
  if (isAutoWriterActive) {
    if (isChatOpen) {
      if (!isSendingMessage) {
        isSendingMessage = true;
        const textareaElement = document.querySelector("textarea[aria-label='Chat message']");

        if (textareaElement) {
          const statsTextWithoutFps = statsText.replace(/\d+\s?fps/, '');
          textareaElement.value = `${statsTextWithoutFps}`;

          const enterEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            bubbles: true,
            cancelable: true,
          });

          textareaElement.dispatchEvent(enterEvent);
          const sendButton = document.querySelector("ui-button[title='Send message (hold Shift to send without closing input)'] button");
          if (sendButton) {
            sendButton.click();
          }
        }
        isSendingMessage = false;
      } else {
        setTimeout(sendMessage, 1000, statsText);
      }
    } else {
      openChat();
    }
  }
}

    function updateAndSendMessage()
    {
      sendMessage(statsText);
    }
    setInterval(updateAndSendMessage, 1000);
  }
    function toggleAutoWriter()
    {
        isAutoWriterActive = !isAutoWriterActive;
        if (isAutoWriterActive)
        {
            autoWriterButton.classList.add('active');
            console.log('AUTOWRITER -> true');
            console.log('enter the text for the ad:');
            const adText = prompt('enter the text for the ad:');

            if (adText !== null)
            {
                const statsText = adText.trim() || 'Default text';
                sendMessage(statsText);
            }
            else
            {
                autoWriterButton.classList.remove('active');
                isAutoWriterActive = false;
                console.log('AUTOWRITER -> false');
            }
        }
        else
        {
            autoWriterButton.classList.remove('active');
            console.log('AUTOWRITER -> false');
            stopAutoWriterActions();
        }
    }

    function stopAutoWriterActions()
    {
        clearInterval(intervalIdAutoWriter);
        console.log("AUTOWRITER -> halt");
    }

  autoWriterButton.addEventListener('click', toggleAutoWriter);
  antiafkButton.addEventListener('click', toggleAntiafk);
  autoClickerButton.addEventListener('click', toggleAutoClicker);
  speedButton.addEventListener('click', toggleSpeed);


}());
