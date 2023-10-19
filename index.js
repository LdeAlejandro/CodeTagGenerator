
   
        //highLight Code
        document.addEventListener('DOMContentLoaded', function() {
          
        function highlightCode() {
            
            document.querySelectorAll('.code').forEach(function(codeElement){
    
            const codeContent = codeElement.innerHTML;
            const codeLines = codeContent.split('\n');
            let highlightedCode = '';

        for (const line of codeLines) {
        
    
        // Verifica si la línea contiene etiquetas HTML
         if (/<[a-z][\s\S]*>/i.test(line)) 
        {
            
          // Si la línea contiene etiquetas HTML, agrégala sin resaltar
            highlightedCode += '<div class="code-line">' + line + '</div>';
        } else {

            // Agrega resaltado de sintaxis para JavaScript (puedes agregar más reglas para otros lenguajes)
            const highlightedLine = line
                .replace(/(['"])(.*?)\1/g, '<span class="string">$1$2$1</span>')
                .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
                .replace(/\b(if|else|for|while)\b/g, '<span class="keyword">$1</span>')
                .replace(/\b(function)\s+(\w+)\s*()/g, '<span class="keyword">$1</span> <span class="function-name">$2</span>')
                .replace(/\.(.*?)(?=[\s.({\[]|$)/g, '.<span class="function">$1</span>')
                .replace(/\b(var|let|const)\s+(\w+)\s*=/g, '<span class="variable">$1</span> <span class="var-name">$2</span>=')
                .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
                .replace(/&lt;script&gt;/g, '<span class="scriptTag">&lt;script&gt;</span>') 
                .replace(/&lt;\/script&gt;/g, '<span class="scriptTag">&lt;/script&gt;</span>');
                
                
                

                
                
            // Agrega la línea resaltada al código final
            highlightedCode += '<div class="code-line">' + highlightedLine + '</div>';
        }
    }

    // Actualiza el elemento de código con el código resaltado
    codeElement.innerHTML = highlightedCode;
      })
}

// Llama a la función de resaltado cuando se carga la página
window.onload = highlightCode;
                 
});
        </script>
    
    
    <script>
        //code Generator

    document.addEventListener("DOMContentLoaded", function()
    {
          setTimeout(function() { 
             
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
              
          activatorTypeSelect.addEventListener('click',function (){
               
                activatorTypeSelect.value = null;
               
               });
        
              
        var inputEventName = document.getElementById('dataLayer-event-name');
        var generatedEventName = document.querySelectorAll('#generatedEventName');
        var searchInput = document.getElementById("searchInput");
               
        //link click
        var linkClickUrl = document.querySelector("#link-click-textValue");     
        var generatedlinkClickUrl = document.querySelectorAll('#generatedlinkClickUrl');
        var linkClickTextBox = document.getElementById('link-click-text-box');
        var linkClickCode = document.getElementById('link-click-code');
        //click id
        var clickIdSelector = document.getElementById('id-click-textValue');;
        var generatedIdClick = document.querySelectorAll('#generatedIdClick');
        var idClickTextBox = document.getElementById('id-click-text-box'); 
        var idClickCode = document.getElementById('id-click-code');
        //click class
        var clickClassSelector = document.querySelector("#class-click-textValue");
        var generatedClassClick = document.querySelectorAll('#generatedClassClick');
        var classClickTextBox = document.getElementById('class-click-text-box')
        var classClickCode = document.getElementById('class-click-code');   
        //click attribute
        var clickAttributeSelector = document.getElementById('attribute-click-textValue');
        var generatedAttributeClick = document.querySelectorAll('#generatedAttributeClick');
        var attributeClickTextBox = document.getElementById('attribute-click-text-box')
        var attributeClickCode = document.getElementById('attribute-click-code');
        //click  forEach attribute
        var clickForEachAttributeSelector = document.getElementById('forEachAttribute-attribute-click-textValue');
        var generatedAttributeForEachClick = document.querySelectorAll('#generatedAttributeForEachClick');
        var forEachAttributeClickTextBox = document.getElementById('forEachAttribute-click-text-box')
        var forEachAttributeClickCode = document.getElementById('forEachAttribute-click-code');
        //click  forEach 
        var clickForEachSelector = document.getElementById('forEach-click-textValue');
        var generatedForEachClick = document.querySelectorAll('#generatedForEachClick');
        var forEachClickTextBox = document.getElementById('forEach-click-text-box')
        var forEachClickCode = document.getElementById('forEach-click-code');        
        // formThnkMsg
        var formThnkMsgSelector = document.querySelector("#formThnkMsg-textValue");
        var generatedformThnkMsg = document.querySelectorAll('#generatedformThnkMsg');
        var formThnkMsgTextBox = document.getElementById('formThnkMsg-text-box')
        var formThnkMsgCode = document.getElementById('formThnkMsg-code');
        // formThnkMsgEnhanced
        var formThnkMsgEnhancedSelector = document.getElementById('formThnkMsgEnhanced-textValue');
        var generatedformThnkMsgEnhanced = document.querySelectorAll('#generatedformThnkMsgEnhanced');
        var formThnkMsgEnhancedTextBox = document.getElementById('formThnkMsgEnhanced-text-box')
        var formThnkMsgEnhancedCode = document.getElementById('formThnkMsgEnhanced-code');
        // formClickTextEnhanced
        var formClickTextEnhancedSelector = document.getElementById('formClickTextEnhanced-textValue');
        var generatedformClickTextEnhanced = document.querySelectorAll('#generatedformClickTextEnhanced');
        var formClickTextEnhancedTextBox = document.getElementById('formClickTextEnhanced-text-box')
        var formClickTextEnhancedCode = document.getElementById('formClickTextEnhanced-code');
        // formClickSelectorEnhanced
        var formClickSelectorEnhancedSelector = document.getElementById('formClickSelectorEnhanced-textValue');
        var generatedformClickSelectorEnhanced = document.querySelectorAll('#generatedformClickSelectorEnhanced');
        var formClickSelectorEnhancedTextBox = document.getElementById('formClickSelectorEnhanced-text-box')
        var formClickSelectorEnhancedCode = document.getElementById('formClickSelectortEnhanced-code'); 
        // ShadowRootClick
        var ShadowRootSelector = document.querySelector("#ShadowRootSelector-textValue");
        var ShadowRootButtonSelector = document.querySelector("#ShadowRootButtonSelector-textValue");
        var generatedShadowRootSelector = document.querySelectorAll('#generatedShadowRootSelector');
        var generatedShadowRootButtonSelector = document.querySelectorAll('#generatedShadowRootButtonSelector');
        var ShadowRootSelectorTextBox = document.getElementById('ShadowRootSelector-text-box')
        var ShadowRootButtonTextBox = document.getElementById('ShadowRootButton-text-box')
        var shadowRootClickcode = document.getElementById('shadowRootClick-code'); 
        // iframeClick
        var iframeClickSelector = document.getElementById('iframeClickSelector-textValue');
        var iframeClickButtonSelector = document.getElementById(' iframeClickButtonSelector-textValue');
        var generatediframeClickSelector = document.querySelectorAll('#generatediframeClickSelector');
        var generatediframeClickButtonSelector = document.querySelectorAll('#generatediframeClickButtonSelector');
        var iframeClickSelectorTextBox = document.getElementById('iframeClickSelector-text-box')
        var iframeClickButtonTextBox = document.getElementById('iframeClickButton-text-box')
        var iframeClickcode = document.getElementById('iframeClick-code'); 
         // iframeThanksMessage
        var iframeFormSelector = document.getElementById('iframeFormSelector-textValue');
        var iframeThanksMessageSelector = document.getElementById('iframeThanksMessage-textValue');
        var generatediframeThanksMessage = document.querySelectorAll('#generatediframeThanksMessage');
        var generatediframeThanksSelector = document.querySelectorAll('#generatediframeThanksSelector');
        var iframeFormSelectorTextBox = document.getElementById('iframeFormSelector-text-box')
        var iframeThanksMessageTextBox = document.getElementById('iframeThanksMessage-text-box')
        var iframeThanksMessageCode = document.getElementById('iframeThanksMessage-code'); 
        // Crear variable capa de datos
        var createDataLayerCode = document.getElementById('create-Data-layer');
        // Crear DOMContentLoaded
        var DOMContentLoadedCode = document.getElementById('DOMContentLoadedCode');  
        // Crear DOMContentLoaded
        var ClickLinkWhatsappCode = document.getElementById('whatsapp-link-click'); 
        // Click link llamada
        var clickLinkLlamada = document.getElementById('tel-link-click');
        // Click link email     
        var clickLinkEmail = document.getElementById('email-link-click');
        // hubSpot Form
        var hubSpotForm = document.getElementById('formHubSpot-code');
        //hubSpot Form Enhanced
        var hubSpotFormEnhanced = document.getElementById('formHubSpotEnhanced-code');      
        // wixChatmessageSent-code
        var wixChatMessageSent = document.getElementById('wixChatmessageSent-code');
        //amoformsSent
        var amoFormsSent = document.getElementById('amoformsSent-code');
        //cliengoLeadWhatsapp-code
        var cliengoLeadWhatsapp = document.getElementById('cliengoLeadWhatsapp-code');
        //zohoForm-code
        var zohoFormCode = document.getElementById('zohoForm-code');
        //Calendly Scheduled
        var calendlyScheduledCode = document.getElementById('calendlyScheduled-code');
        //localStorage-code
        var localStorageCode = document.getElementById('localStorage-code');
        //prestashopOrderId-code
        var prestashopOrderIdCode = document.getElementById('prestashopOrderId-code');    
         
          
               
                  const generatorOptions = {
                    'formulario mensaje gracias': {
                        elements: formThnkMsgTextBox,
                        inputSelector: formThnkMsgSelector,
                        code: formThnkMsgCode,
                        generatedElements: [generatedformThnkMsg]
                    },  
                      
                    'link click' :{
                        elements: linkClickTextBox,
                        inputSelector: linkClickUrl,
                        code: linkClickCode,
                        generatedElements:[generatedlinkClickUrl] 
                    }, 
                     
                    'class click' :{
                        elements: classClickTextBox,
                        inputSelector: clickClassSelector,
                        code: classClickCode,
                        generatedElements:[generatedClassClick] 
                     },
                      
                    'Click ShadowRoot': {
                     elements: ShadowRootSelectorTextBox,
                     inputSelector: ShadowRootSelector, 
                     inputSelector2: ShadowRootButtonSelector,
                     code: shadowRootClickcode, 
                     generatedElements: [generatedShadowRootSelector, generatedShadowRootButtonSelector]
                     },
                     
                     'id click' :{
                     elements: idClickTextBox,
                     inputSelector : clickIdSelector,
                     code: idClickCode,
                     generatedElements: [generatedIdClick]
                     },
                      
                     'attribute click' : {
                      elements: attributeClickTextBox,
                      inputSelector: clickAttributeSelector,
                      code: attributeClickCode,
                      generatedElements: [generatedAttributeClick]
                         
                   },
                        
                     'formulario mensaje gracias mejorado' : {
                      elements: formThnkMsgEnhancedTextBox,
                      inputSelector: formThnkMsgEnhancedSelector,
                      code: formThnkMsgEnhancedCode,
                      generatedElements: [generatedformThnkMsgEnhanced]
                     },
                         
                      'formulario click text mejorado' : {
                       elements: formClickTextEnhancedTextBox,
                       inputSelector: formClickTextEnhancedSelector,
                       code: formClickTextEnhancedCode,
                       generatedElements: [generatedformClickTextEnhanced]
                     },
                      
                      'formulario click selector mejorado' : { 
                       elements: formClickSelectorEnhancedTextBox,
                       inputSelector:formClickSelectorEnhancedSelector, 
                       code: formClickSelectorEnhancedCode,
                       generatedElements: [generatedformClickSelectorEnhanced]
                      },
                      
                      'forEach attribute click' : {
                       elements: forEachAttributeClickTextBox,
                       inputSelector:clickForEachAttributeSelector, 
                       code: forEachAttributeClickCode,
                       generatedElements: [generatedAttributeForEachClick]
                      },
                      
                      'forEach click' : { 
                       elements: forEachClickTextBox,
                       inputSelector:clickForEachSelector, 
                       code: forEachClickCode,
                       generatedElements: [generatedForEachClick]
                      },
                      
                      'forEach click' : { 
                       elements: forEachClickTextBox,
                       inputSelector:clickForEachSelector, 
                       code: forEachClickCode,
                       generatedElements: [generatedForEachClick]
                      },
                      
                       'click iframe' : {
                       elements: iframeClickSelectorTextBox,
                       inputSelector: iframeClickSelector,
                       inputSelector2: iframeClickButtonSelector, 
                       code: iframeClickcode,
                       generatedElements: [generatediframeClickSelector, generatediframeClickButtonSelector]
                      },
                      
                       'iframe mensaje gracias' : {
                        elements: iframeFormSelectorTextBox, 
                        inputSelector: iframeFormSelector,
                        inputSelector2: iframeThanksMessageSelector,
                        code: iframeThanksMessageCode,
                        generatedElements: [generatediframeThanksMessage, generatediframeThanksSelector]
                       },
                      
                      'create DataLayer' : {      
                        code: createDataLayerCode
                       },
                      
                      'create DOMContentLoaded' : {      
                        code: DOMContentLoadedCode
                       },
                      
                      'Click link Whatsapp' : {      
                        code: ClickLinkWhatsappCode
                       },
                      
                       'Click link llamada' :{
                        code: clickLinkLlamada
                      },
                      
                      'Click link email' :{
                        code: clickLinkEmail
                      },
                      
                      'Hubspot Form' :{
                        code: hubSpotForm
                      },

                      'Hubspot avanzado Form' :{
                        code: hubSpotFormEnhanced
                      },
                        
                       'Mensaje enviado Wix Chat' :{
                        code: wixChatMessageSent
                      },
                      
                      'Formulario amoforms' :{
                        code: amoFormsSent
                      },
                      
                      'Cliengo Lead Whatsapp' :{
                        code: cliengoLeadWhatsapp
                      },
                        
                      'Formulario Zoho' :{
                        code: zohoFormCode
                      },
                      
                      'Calendly Scheduled':{
                        code: calendlyScheduledCode
                      }, 
                      
                      'Local Storage':{
                        code: localStorageCode
                      },
                      
                      'Prestashop Order Id Url':{
                        code: prestashopOrderIdCode
                      }
                      
                  }
                  
                  
                  
                  //hide all options
                   for(const optionName in generatorOptions)
                      {
                        var option = generatorOptions[optionName];
                          if(option.elements){
                            option.elements.style.display = 'none'; 
                             }  
                          
                           if(option.code){
                            option.code.style.display = 'none';
                              console.log('hidden');
                            }
                      };
            
              
                        //opcion por defecto:
              activatorTypeSelect.value = 'formulario mensaje gracias';
              
                    //show default options
                  generatorOptions['formulario mensaje gracias'].elements.style.display = 'block';
                  generatorOptions['formulario mensaje gracias'].code.style.display = 'block';
            
            
             function showOption(){
                     
                     var selectedOption = generatorOptions[activatorTypeSelect.value];
                      //hide all options
                   for(const optionName in generatorOptions)
                      {
                        var option = generatorOptions[optionName];
                          if(option.elements){
                            option.elements.style.display = 'none';
                            }
                          
                          if(option.code){
                            option.code.style.display = 'none';
                              console.log('hidden');
                            }
                      };  
                       
                     //show selected option
                    if(selectedOption){
                        
                       if(selectedOption.elements){
                         selectedOption.elements.style.display = 'block';
                       }
                        
                       if(selectedOption.code){
                        selectedOption.code.style.display = 'block';
                       }
                        
                      if(!selectedOption.inputSelector)
                      {
                          inputEventName.style.display = 'none';
                      }
                        else 
                        {
                         inputEventName.style.display = 'block';
                        }
                    }       
               } 
            
            
                 
               
            
            function generateCode() {
                
                
               var eventName = document.querySelector("#event-name-value").value;
                activatorTypeSelect = document.getElementById('activatorType');
                
            for(const key in generatorOptions){
                
             if(activatorTypeSelect.value == key)
                {

                    var option = generatorOptions[key];
                    option.code.style.display = 'block';
                    
                    
                    
                    option.generatedElements[0].forEach(function(e)
                                   {
                 
                                    e.textContent = option.inputSelector.value;
                                    console.log('Generated inputSelector1 '+e.textContent)
                                   })
                  
                    
                    if(option.inputSelector2)
                    {
                       option.generatedElements[1].forEach(function(e)
                                   {
                                   
                                    e.textContent = option.inputSelector2.value;
                                    console.log('Generated inputSelector2 '+e.textContent);
                         
                                   })
                        
                        
                    } 
                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                    console.log('evento '+e.textContent)
                                   })                    
                    
                }
               }
            }
            
             document.querySelector('#generateCode').addEventListener('click', function() {
                 
                                generateCode();
                             });
            
               document.querySelectorAll('.input-group__input').forEach(function(e) {
                     e.addEventListener('keydown', function() {
                        if (event.key === 'Enter' || event.key === 'Tab') {
                                                             
                         generateCode();
                         }
                     });
                   });
            
              activatorTypeSelect.addEventListener('change', function () 
                 {
                      showOption();
                });
               
  //Cierre Gestor de opciones
              
   
              
     //            
        
    }, 100);
});
        
  
        //copiar codigo
        document.addEventListener('DOMContentLoaded', function() {
            
            setTimeout(function() {
      
        document.querySelectorAll('#copy-code-button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var codeElement = btn.parentNode.parentNode;;
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
          }, 100);
       });     
        
