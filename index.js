     //highLight Code
document.addEventListener('DOMContentLoaded', function() {


    function highlightCode() {

        document.querySelectorAll('.code').forEach(function(codeElement) {

           const codeContent = codeElement.innerHTML;
           const codeLines = codeContent.split('\n');
            let highlightedCode = '';

            for (const line of codeLines) {


                // Verifica si la línea contiene etiquetas HTML
                /* var htmlTags = line.match(/<[a-z][\s\S]*?>/ig);
         if (htmlTags) 
        {
            htmlTags.forEach(function(tag) {
                
                console.log("Etiqueta HTML detectada: " + tag);
         highlightedCode += '<div class="code-line">'  + tag + '</div>';
             
           
    });
          // Si la línea contiene etiquetas HTML, agrégala sin resaltar
            //highlightedCode += '<div class="code-line">' + line + '</div>';
        } else {*/

                // Agrega resaltado de sintaxis para JavaScript (puedes agregar más reglas para otros lenguajes)
                const highlightedLine = line
                    .replace(/(['])(.*?)\1/g, '<span class="string">$1$2$1</span>')
                    .replace(/\b\d+(\.\d+)?\b/g, '<span class="number">$&</span>')
                    .replace(/\b(if|else|for|while)\b/g, '<span class="keyword">$1</span>')
                    .replace(/\b(function)\s+(\w+)\s*()/g, '<span class="keyword">$1</span> <span class="function-name">$2</span>')
                    .replace(/([^'"])\.(\w+)(?=[\s.({\[]|$)/g, '$1.<span class="function">$2</span>')
                    .replace(/\b(var|let|const)\s+(\w+)\s*=/g, '<span class="variable">$1</span> <span class="var-name">$2</span> =')
                    .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
                    .replace(/&lt;(script|noscript|iframe)&gt;/g, '<span class="htmlTag">&lt;$1&gt;</span>')
                    .replace(/&lt;\/(script|noscript|iframe)&gt;/g, '<span class="htmlTag">&lt;/$1&gt;</span>');




                // Agrega la línea resaltada al código final
                highlightedCode += '<div class="code-line">' + highlightedLine + '</div>';
                //}
            }

            // Actualiza el elemento de código con el código resaltado
            codeElement.innerHTML = highlightedCode;
        })
    }

    // Llama a la función de resaltado cuando se carga la página
    window.onload = highlightCode;

  /*  //code editor
    var codeEditorElement = document.querySelector('#code-editor');


    function highlightCodeEditor(){
    // Delete classes from elements
    var codeLinesElements = document.querySelectorAll("#code-editor .code-line span");

    codeLinesElements.forEach(function (spanElement) {
        // Check if the span has a class added by the highlighting process
        if (spanElement.classList.contains("string") ||
            spanElement.classList.contains("number") ||
            spanElement.classList.contains("keyword") ||
            spanElement.classList.contains("function-name") ||
            spanElement.classList.contains("function") ||
            spanElement.classList.contains("variable") ||
            spanElement.classList.contains("var-name") ||
            spanElement.classList.contains("comment") ||
            spanElement.classList.contains("htmlTag")) {
            spanElement.outerHTML = spanElement.innerHTML; // Replace the span with its content
        }
    });

    console.log('Editor Listener');
    var codeEditorContent = codeEditorElement.innerHTML;
    var codeLines = codeEditorContent.split('\n');
    let highlightedCode = '';

    for (var line of codeLines) {
        
        var highlightedLine = line
            .replace(/(['])(.*?)\1/g, '<span class="string">$1$2$1</span>')
            .replace(/\b\d+(\.\d+)?\b/g, '<span class="number">$&</span>')
            .replace(/\b(if|else|for|while)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(function)\s+(\w+)\s*()/g, '<span class="keyword">$1</span> <span class="function-name">$2</span>')
            .replace(/([^'"])\.(\w+)(?=[\s.({\[]|$)/g, '$1.<span class="function">$2</span>')
            .replace(/\b(var|let|const)\s+(\w+)\s*=/g, '<span class="variable">$1</span> <span class="var-name">$2</span> =')
            .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
            .replace(/&lt;(script|noscript|iframe)&gt;/g, '<span class="htmlTag">&lt;$1&gt;</span>')
            .replace(/&lt;\/(script|noscript|iframe)&gt;/g, '<span class="htmlTag">&lt;/$1&gt;</span>');

        highlightedCode += '<div class="code-line">' + highlightedLine + '</div>';
    }

    codeEditorElement.innerHTML = highlightedCode; // Update the code with highlighted content
        };
    

codeEditorElement.addEventListener('blur', function () {
    highlightCodeEditor();

}); 
*/
/* codeEditorElement.addEventListener('keyup', function (e) {
     if(e.keyCode === 32){
         highlightCodeEditor();
}
    

});  */ 

    //code editor prism

    //<!-- Initialize Prism.js for initial highlighting -->
  Prism.highlightAll();
  
  // Update code highlighting when content changes
  document.getElementById('code-editor').addEventListener('blur', function() {
    Prism.highlightAll();
  });



});


//code Generator  
  document.addEventListener("DOMContentLoaded",
  function() {

    //reaload if inactive  
    let inactivityTimer;
    function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
    console.log('Being AFK too much, needs reload');
    location.reload(true);
     }, 60 * 60 * 1000);
    };
    window.addEventListener('mousemove', resetInactivityTimer);

    // setTimeout(function() { 
    //check localStorage
    /** if(localStorage.getItem('firstLoad')!==null){
             
               localStorage.removeItem('firstLoad'); 
               console.log('already precharged');
            }
            else{
                
               var firstLoad;
                
               localStorage.setItem('firstLoad', firstLoad);
               console.log('recharge'); 
               location.href = location.href;
           }*/
    //}, 100);
    var activatorTypeSelect = document.getElementById('activatorType');
    //limpiar input cuando se haga click      
    activatorTypeSelect.addEventListener('click',
    function() {

      activatorTypeSelect.value = null;

    });

    const generatorOptions = {
      'link click': {
        elements: ['#link-click-text-box'],
        inputSelector: ['#link-click-textValue'],
        code: '#link-click-code',
        generatedElements: ['#generatedlinkClickUrl']
      },
      'id click': {
        elements: ['#id-click-text-box'],
        inputSelector: ['#id-click-textValue'],
        code: '#id-click-code',
        generatedElements: ['#generatedIdClick']
      },
      'class click': {
        elements: ['#class-click-text-box'],
        inputSelector: ['#class-click-textValue'],
        code: '#class-click-code',
        generatedElements: ['#generatedClassClick']
      },
      'attribute click': {
        elements: ['#attribute-click-text-box'],
        inputSelector: ['#attribute-click-textValue'],
        code: '#attribute-click-code',
        generatedElements: ['#generatedAttributeClick']
      },
      'forEach attribute click': {
        elements: ['#forEachAttribute-attribute-click-text-box'],
        inputSelector: ['#forEachAttribute-attribute-click-textValue'],
        code: '#forEachAttribute-click-code',
        generatedElements: ['#generatedAttributeForEachClick']
      },
      'forEach click': {
        elements: ['#forEach-click-text-box'],
        inputSelector: ['#forEach-click-textValue'],
        code: '#forEach-click-code',
        generatedElements: ['#generatedForEachClick']
      },
      'formulario mensagem agradecimento': {
        elements: ['#formThnkMsg-text-box'],
        inputSelector: ['#formThnkMsg-textValue'],
        code: '#formThnkMsg-code',
        generatedElements: ['#generatedformThnkMsg']
      },
      'formulario mensagem agradecimento melhorado': {
        elements: ['#formThnkMsgEnhanced-text-box'],
        inputSelector: ['#formThnkMsgEnhanced-textValue'],
        code: '#formThnkMsgEnhanced-code',
        generatedElements: ['#generatedformThnkMsgEnhanced'],
        isEnhanced: true
      },
      'formulario click text melhorado': {
        elements: ['#formClickTextEnhanced-text-box'],
        inputSelector: ['#formClickTextEnhanced-textValue'],
        code: '#formClickTextEnhanced-code',
        generatedElements: ['#generatedformClickTextEnhanced'],
        isEnhanced: true
      },
      'formulario click selector melhorado': {
        elements: ['#formClickSelectorEnhanced-text-box'],
        inputSelector: ['#formClickSelectorEnhanced-textValue'],
        code: '#formClickSelectortEnhanced-code',
        generatedElements: ['#generatedformClickSelectorEnhanced'],
        isEnhanced: true
      },
      'Click ShadowRoot': {
        elements: ['#ShadowRootSelector-text-box', '#ShadowRootButton-text-box'],
        inputSelector: ['#ShadowRootSelector-textValue', '#ShadowRootButtonSelector-textValue'],
        code: '#shadowRootClick-code',
        generatedElements: ['#generatedShadowRootSelector', '#generatedShadowRootButtonSelector']
      },
      'Click iframe': {
        elements: ['#iframeClickSelector-text-box', '#iframeClickButton-text-box'],
        inputSelector: ['#iframeClickSelector-textValue','#iframeClickButtonSelector-textValue'],
        code: '#iframeClick-code',
        generatedElements: ['#generatediframeClickSelector', '#generatediframeClickButtonSelector']
      },
      'iframe mensagem agradecimento': {
        elements: ['#iframeFormSelector-text-box', '#iframeThanksMessage-text-box'],
        inputSelector: ['#iframeFormSelector-textValue', '#iframeThanksMessage-textValue'],
        code: '#iframeThanksMessage-code',
        generatedElements: [  '#generatediframeThanksSelector','#generatediframeThanksMessage']
      },
      'Criar data layer': {
        code: '#create-Data-layer',
        noNeedOfEvent: true
      },
      'DOMContentLoaded': {
        code: '#DOMContentLoadedCode',
        noNeedOfEvent: true
      },
      'Click link Whatsapp': {
        code: '#whatsapp-link-click',
        noNeedOfEvent: true
      },
      'Click link llamada': {
        code: '#tel-link-click',
        noNeedOfEvent: true
      },
      'Click link email': {
        code: '#email-link-click',
        noNeedOfEvent: true
      },
      'Hubspot Form': {
        elements: '#HubSpot-text-box',
        code: '#formHubSpot-code',
        noNeedOfEvent: true
      },
      'Hubspot Form melhorado': {
        elements: ['#HubSpotEnhanced-text-box'],
        code: '#formHubSpotEnhanced-code',
        isEnhanced: true
      },
      'Wix Chat Mensagem enviada': {
        code: '#wixChatmessageSent-code',
        noNeedOfEvent: true
      },
      'Formulario amoforms': {
        code: '#amoformsSent-code',
        noNeedOfEvent: true
      },
      'Cliengo Lead Whatsapp': {
        code: '#cliengoLeadWhatsapp-code',
        noNeedOfEvent: true
      },
      'Formulario Zoho': {
        code: '#zohoForm-code',
        noNeedOfEvent: true
      },
      'Calendly Scheduled': {
        code: '#calendlyScheduled-code',
        noNeedOfEvent: true
      },
      'Local Storage': {
        code: '#localStorage-code',
        noNeedOfEvent: true
      },
      'Prestashop Order Id Url': {
        code: '#prestashopOrderId-code',
        noNeedOfEvent: true
      },
      'Formulario Upnify Whatsapp': {
        code: '#upnifyForm-code',
        noNeedOfEvent: true
      },
      'Formulario Upnify Whatsapp melhorado': {
        code: '#upnifyFormEnhanced-code',
        noNeedOfEvent: true
      },
      'Compra Shopify': {
        elements: ['#shopifyPurchaseAdsId-text-box'],
        inputSelector: ['#shopifyPurchaseAdsId-textValue','#shopifyPurchaseConversionLabel-textValue', '#shopifyPurchaseCurrency-textValue'],
        code: '#shopifyPurchase-code',
        generatedElements: ['#generatedAdsId', '#generatedConversionLabel', '#generatedCurrency'],
        noNeedOfEvent: true
      },
      'Compra Shopify melhorada': {
        elements: ['#shopifyPurchaseEnhancedConversionLabel-text-box'],
        inputSelector: ['#shopifyPurchaseEnhancedConversionLabel-textValue'],
        code: '#shopifyPurchaseEnhanced-code',
        generatedElements: ['#generatedConversionLabelEnhanced'],
        noNeedOfEvent: true
      },
      'Validar Selector Intervalo': {
        elements: ['#setIntervalSelector-text-box'],
        inputSelector: ['#setIntervalSelector-textValue'],
        code: '#setInterval-code',
        generatedElements: ['#generatedSetIntervalSelector'],
        noNeedOfEvent: true
      },
      'key down': {
        elements: ['#keyDownSelector-text-box', '#keyDownSelector-textValue'],
        inputSelector: ['#keyDownSelector-textValue'],
        code: '#InputEnter-code',
        generatedElements: ['#generatedKeyDownSelector']
      },
      'GTM Odoo': {
        elements: ['#GTMOdooId-text-box'],
        inputSelector: ['#GTMOdooId-textValue'],
        code: '#GTMOdoo-code',
        generatedElements: ['#generatedGTMOdooId'],
        noNeedOfEvent: true
      },
      'Selector click': {
        elements: ['#selector-click-text-box'],
        inputSelector: ['#selector-click-textValue'],
        code: '#selector-click-code',
        generatedElements: ['#generatedSelectorClick']
      },
      'formulario click selector prevent Default': {
        elements: ['#formSelectorClickPreventDefault-text-box'],
        inputSelector: ['#formSelectorClickPreventDefault-textValue'],
        code: '#form-selector-prevenDefault-code',
        generatedElements: ['#generatedFormSelectorClick']
      },
      'gtag enhanced': {
        elements: ['#EnhancedGtagAdsIdtext-box'],
        inputSelector: ['#EnhancedGtagAdsId-textValue', '#EnhancedAdsConversionLabel-textValue'],
        code: '#Enhancedgtag-code',
        generatedElements: ['#generatedEnhancedGtagAdsId', '#generatedEnhancedAdsConversionLabel'],
        noNeedOfEvent: true
      },
      'HubSpot Chat Mensagem Enviada': {
        elements: ['#HubSpotChatMessageSent-code'],
        code: '#HubSpotChatMessageSent-code',
        noNeedOfEvent: true
      },
      'CountryCode': {
        elements: ['#inputPhoneDiv', '#countryCode'],
        inputSelector: ['#checkBoxPhoneConversion'],
        code: '#countryCode-value',
        generatedElements: ['#generatedCountryCode', '#generatedCountryCodeCodeConditions']
      },
      'Validacao Email e Phone Function': {
        code: '#functionEnhancedValidation-code',
        noNeedOfEvent: true
      },
      'Consent Mode': {
        elements: ['#CoMo'],
        noNeedOfEvent: true
      }
    };

    //default option
    activatorTypeSelect.value = 'formulario mensagem agradecimento';

    //check if needs conversion with phone number
    function enhancedWithPhoneNumber(checkBox, Div) {

      if (checkBox.checked === true && Div.style.display !== 'block') {
        Div.style.display = 'block'

      } else if (checkBox.checked === false && Div.style.display !== 'none') {

        Div.style.display = 'none'

      }
    }

    //check if needs event
    function noNeedOfEventChecker(optionNoNeedOfEvent, inputDiv) {

        const generateCodeBtn = document.getElementById('generateCode');

      if (optionNoNeedOfEvent && optionNoNeedOfEvent === true && inputDiv.style.display !== 'none') {
        inputDiv.style.display = 'none';
        generateCodeBtn.style.display = 'none';
            
      }

      else if (!optionNoNeedOfEvent) {
        inputDiv.style.display = 'block';
        generateCodeBtn.style.display = 'block';
          

      }
    }

    function ifIsEnhanced(selectedOptionElement) {

      if (selectedOptionElement === true) {

        const countryCodeCheckBox = document.querySelector('#checkBoxPhoneConversion');
        const countryCodeDiv = document.querySelector('#countryCode');

        if (checkBoxPhoneConversionDiv.style.display === 'none' || checkBoxPhoneConversionDiv.style.display !== 'block') {
          checkBoxPhoneConversionDiv.style.display = 'block';
          countryCodeDiv.style.display = 'none';

          //check if phone number is selected or nor
          enhancedWithPhoneNumber(countryCodeCheckBox, countryCodeDiv);

          countryCodeCheckBox.addEventListener('change',
          function() {

            enhancedWithPhoneNumber(countryCodeCheckBox, countryCodeDiv);

          })

        }

      }

      else if (!selectedOptionElement) {

        if (checkBoxPhoneConversionDiv.style.display === 'block' | checkBoxPhoneConversionDiv.style.display !== 'none') {
          checkBoxPhoneConversionDiv.style.display = 'none';

        }
      }
    }

    function optionsManager() {

      const selected = activatorTypeSelect.value;
      const selectedOption = generatorOptions[selected];

        //codigo para rastrear con gtag,
         var selectedOption = generatorOptions[activatorTypeSelect.value];

            gtag('event', selected.replaceAll(' ','_').trim());        
            console.log(selected.replaceAll(' ','_').trim());
            
                var eventData = {
                 event: selected.replaceAll(' ','_').trim()
  
                    };
            window.parent.postMessage(eventData, '*');
//
        //options manager
      for (optionName in generatorOptions) {

        var option = generatorOptions[optionName]

        const selectedOptionElements = {

          'textBox': (option.elements && document.querySelectorAll(option.elements).length > 0) ? document.querySelectorAll(option.elements) : null,
          'inputBox': (option.inputSelector && document.querySelectorAll(option.inputSelector).length > 0) ? document.querySelectorAll(option.inputSelector) : null,
          'code': (option.code && document.querySelectorAll(option.code).length > 0) ? document.querySelectorAll(option.code) : null,
          'isEnhanced': option.isEnhanced,
          'noNeedOfEvent': option.noNeedOfEvent

        }

        if (option === selectedOption) {
          const checkBoxPhoneConversionDiv = document.querySelector('#inputPhoneDiv');
          const inputEventName = document.querySelector('#dataLayer-event-name');

          noNeedOfEventChecker(option.noNeedOfEvent, inputEventName);

          if (selectedOptionElements.isEnhanced === true) {

            const countryCodeCheckBox = document.querySelector('#checkBoxPhoneConversion');
            const countryCodeDiv = document.querySelector('#countryCode');

            if (checkBoxPhoneConversionDiv.style.display === 'none' || checkBoxPhoneConversionDiv.style.display !== 'block') {

              checkBoxPhoneConversionDiv.style.display = 'block';
              countryCodeDiv.style.display = 'none';
              enhancedWithPhoneNumber(countryCodeCheckBox, countryCodeDiv);

              countryCodeCheckBox.addEventListener('change',
              function() {

                enhancedWithPhoneNumber(countryCodeCheckBox, countryCodeDiv);

              })

            }

          }

          else if (!selectedOptionElements.isEnhanced) {

            if (checkBoxPhoneConversionDiv.style.display === 'block' | checkBoxPhoneConversionDiv.style.display !== 'none') {
              checkBoxPhoneConversionDiv.style.display = 'none';

            }
          }

          else {
            console.log('selectedOptionElements.isEnhanced error is (else)')
          }

          ['textBox', 'code'].forEach(function(elementType) {

        

            const elements = selectedOptionElements[elementType];
            if (elements && elements.length > 0) {

              selectedOptionElements[elementType].forEach(function(element) {

                if (element.style.display = 'none') {
                  element.style.display = 'block';
                  element.setAttribute("required", "true");

                }

              })
            }

          })

        } else if (option !== selectedOption && optionName !== 'CountryCode') {

          ['textBox', 'code'].forEach(function(elementType) {

            const elements = selectedOptionElements[elementType];

            if (elements && elements.length > 0 && elements.forEach) {

              selectedOptionElements[elementType].forEach(function(element) {

                if (element.style.display = 'block') {
                  element.style.display = 'none';
                  element.removeAttribute("required");
                }

              })

            }

          })

        }

      }

    }

    //opcion por defecto:


    optionsManager();


//remove duplicate selector form array
function removeDuplicates(array) {

     //console.log(array)
    var uniqueElements = []; // To store unique elements based on ID

    // Iterate over each element in the array
    array.forEach(function(element) {
        if (element instanceof HTMLElement) {
            // Check if the element's ID is not already in the array
            if (!uniqueElements.some(item => item.id === element.id)) {
                // If not, add the element to the array
                uniqueElements.push(element);
            }
        }
    });

    // Return the array with unique elements
    //console.log(uniqueElements)
    return uniqueElements;
}


      
      //generatecode

    function generateCode() {
      var eventName = document.querySelector("#event-name-value").value;
      activatorTypeSelect = document.getElementById('activatorType');

      for (const optionName in generatorOptions) {
        if (activatorTypeSelect.value == optionName) {
          var option = generatorOptions[optionName];

          var selectedOptionElements = {
            'inputBox': option.inputSelector,
            'generatedElements': option.generatedElements,

          };
      

          
            //console.log(document.querySelector(selectedOptionElements['generatedElements']))
            
if(selectedOptionElements['inputBox']!== null && selectedOptionElements['inputBox']){

          selectedOptionElements['inputBox'].forEach(function(element, index) {  
 
              //console.log(element)
        //console.log(selectedOptionElements['generatedElements'][index])
          const inputElement = document.querySelector(element)
        const generatedElement = document.querySelectorAll(selectedOptionElements['generatedElements'][index]);
              //console.log(generatedElement.length)

              if(selectedOptionElements['generatedElements'][index]!==null){
                   generatedElement.forEach(function(e){

                  e.textContent = inputElement.value
              })
                  }
             
             

                 //console.log(inputElement,generatedElement)
                 //generatedElement.textContent = inputElement.value;
                
                  
                 // selectedOptionElements['generatedElements'][index].textContent = element.value;
               // });
           
          });

        }else{

            console.log(' inputBox === null, no selectors for this one')
            }
        }

      }

      document.querySelectorAll('#generatedEventName').forEach(function(e) {
        e.textContent = eventName;
      })

      if (option.isEnhanced && option.isEnhanced === true) {
        const generatedCountryCode = document.querySelectorAll('#generatedCountryCode');
        const countryCodeInputBox = document.querySelector('#countryCode-value');
        generatedCountryCode.forEach(function(e) {
          e.textContent = countryCodeInputBox.value;

        })
      }

    }

    //envio de formulario   
    document.getElementById("form-generate-code").addEventListener("submit",
    function(event) {
      event.preventDefault(); // Prevent the default form submission
      console.log('form enviado')

    });

    //generar codigo con click en el boton
    document.querySelector('#generateCode').addEventListener('click',
    function() {

      generateCode();
    });
    //generar codigo con tab o enter
    document.querySelectorAll('.input-group__input').forEach(function(e) {
      e.addEventListener('keydown',
      function() {
        if (event.key === 'Enter' || event.key === 'Tab') {
          generateCode();

        }
      });
    });
    //mostrar opciones
    addEventListener('change',
    function() {
      optionsManager();
        
    });

    //Cierre Gestor de opciones
  });


//codeshare Button
  function openUrl(url) {
    window.open(url, '_blank');
  }

//copiar codigo
  document.addEventListener('DOMContentLoaded',
  function() {

    setTimeout(function() {

      document.querySelectorAll('#copy-code-button').forEach(function(btn) {
        btn.addEventListener('click',
        function() {
          var codeElement = btn.parentNode;
          if (codeElement) {
            var codeText = codeElement.innerText.trim();

            // Crear un elemento de codeText temporal para copiar el contenido
            var tempTextAreaElement = document.createElement('textarea');
            tempTextAreaElement.value = codeText;
            document.body.appendChild(tempTextAreaElement);

            // Seleccionar y copiar el contenido del elemento temporal
            tempTextAreaElement.select();
            document.execCommand('copy');

            // Eliminar el elemento temporal
            document.body.removeChild(tempTextAreaElement);

          }
        });
      });
    },
    100);
  });
