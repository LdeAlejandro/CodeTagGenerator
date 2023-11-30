 

        
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

    //code editor
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

/* codeEditorElement.addEventListener('keyup', function (e) {
     if(e.keyCode === 32){
         highlightCodeEditor();
}
    

});  */ 

});

       
      
        //code Generator  
document.addEventListener("DOMContentLoaded", function() {
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

        activatorTypeSelect.addEventListener('click', function() {

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
        var iframeClickButtonSelector = document.getElementById('iframeClickButtonSelector-textValue');
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
        //upnifyForm-code
        var upnifyFormCode = document.getElementById('upnifyForm-code');
        var upnifyFormEnhancedCode = document.getElementById('upnifyFormEnhanced-code');
        //Compra Shopify
        var shopifyPurchaseTextBox = document.getElementById('shopifyPurchaseAdsId-text-box');
        var inputShopifyAdsId = document.getElementById('shopifyPurchaseAdsId-textValue');
        var inputShopifyConversionLabel = document.getElementById('shopifyPurchaseConversionLabel-textValue');
        var inputShopifyCurrency = document.getElementById('shopifyPurchaseCurrency-textValue');
        var shopifyPurchaseCode = document.getElementById('shopifyPurchase-code');
        var generatedShopifyAdsId = document.querySelectorAll('#generatedAdsId');
        var generatedShopifyConversionLabel = document.querySelectorAll('#generatedConversionLabel');
        var generatedShopifyCurrency = document.querySelectorAll('#generatedCurrency');
        //Compra Shopify Enhanced
        var shopifyPurchaseEnhancedTextBox = document.getElementById('shopifyPurchaseEnhancedConversionLabel-text-box');
        var inputShopifyConversionLabelEnhanced = document.getElementById('shopifyPurchaseEnhancedConversionLabel-textValue');
        var shopifyPurchaseEnhancedCode = document.getElementById('shopifyPurchaseEnhanced-code');
        var generatedShopifyConversionLabelEnhanced = document.querySelectorAll('#generatedConversionLabelEnhanced');
        //setInterval
        var setIntervalSelectorTextBox = document.getElementById('setIntervalSelector-text-box');
        var setIntervalSelectorTextValue = document.getElementById('setIntervalSelector-textValue');
        var setIntervalCode = document.getElementById('setInterval-code');
        var generatedSetIntervalSelector = document.querySelectorAll('#generatedSetIntervalSelector');
        //KeyDOwn
        var keyDownSelectorTextBox = document.getElementById('keyDownSelector-text-box');
        var keyDownSelectorTextValue = document.getElementById('keyDownSelector-textValue');
        var keyDownCode = document.getElementById('InputEnter-code');
        var generatedKeyDownSelector = document.querySelectorAll('#generatedKeyDownSelector');
        //generateGTMOdoo
        var GTMOdooTextBox = document.getElementById('GTMOdooId-text-box');
        var GTMOdooTextValue = document.getElementById('GTMOdooId-textValue');
        var GTMOdooCode = document.getElementById('GTMOdoo-code');
        var generatedGTMOdooId = document.querySelectorAll('#generatedGTMOdooId');
        //ClickSelector
        var ClickSelectorTextBox = document.getElementById('selector-click-text-box');
        var ClickSelectorTextValue = document.getElementById('selector-click-textValue');
        var ClickSelectorCode = document.getElementById('selector-click-code');
        var generatedSelectorClick = document.querySelectorAll('#generatedSelectorClick');
        // FormClickSelectorPreventDefault
        var formSelectorClickPreventDefaultTextBox = document.getElementById('formSelectorClickPreventDefault-text-box');
        var formSelectorClickPreventDefaultTextValue = document.getElementById('formSelectorClickPreventDefault-textValue');
        var formSelectorPrevenDefaultCode = document.getElementById('form-selector-prevenDefault-code');
        var generatedFormSelectorClick = document.querySelectorAll('#generatedFormSelectorClick');
        // ehanced gtag
        var EnhancedGtagAdsIdTextBox = document.getElementById('EnhancedGtagAdsIdtext-box');
        var EnhancedGtagAdsIdTextValue = document.getElementById('EnhancedGtagAdsId-textValue');
        var EnhancedAdsConversionLabelTextValue = document.getElementById('EnhancedAdsConversionLabel-textValue');
        var EnhancedgtagCode = document.getElementById('Enhancedgtag-code');
        var generatedEnhancedGtagAdsId = document.querySelectorAll('#generatedEnhancedGtagAdsId');
        var generatedEnhancedAdsConversionLabel = document.querySelectorAll('#generatedEnhancedAdsConversionLabel');
        //HubSpotChat
        var HubSpotChatMessageSentCode = document.getElementById('HubSpotChatMessageSent-code')
        //CountryCode
        var checkBoxPhoneConversionDiv = document.getElementById('inputPhoneDiv');
        var countryCodeDiv = document.getElementById('countryCode');
        var countryCodeCheckBox = document.getElementById('checkBoxPhoneConversion');
        var countryCodeInputBox = document.getElementById('countryCode-value');
        var generatedCountryCode = document.querySelectorAll('#generatedCountryCode');
        var generatedCountryCodeCodeConditions = document.querySelectorAll('#generatedCountryCodeCodeConditions');
        //function enhanced validation
        var functionEnhancedValidationCode = document.getElementById('functionEnhancedValidation-code');



        const generatorOptions = {
            'formulario mensaje gracias': {
                elements: formThnkMsgTextBox,
                inputSelector: formThnkMsgSelector,
                code: formThnkMsgCode,
                generatedElements: [generatedformThnkMsg]
            },

            'link click': {
                elements: linkClickTextBox,
                inputSelector: linkClickUrl,
                code: linkClickCode,
                generatedElements: [generatedlinkClickUrl]
            },

            'class click': {
                elements: classClickTextBox,
                inputSelector: clickClassSelector,
                code: classClickCode,
                generatedElements: [generatedClassClick]
            },

            'Click ShadowRoot': {
                elements: ShadowRootSelectorTextBox,
                inputSelector: ShadowRootSelector,
                inputSelector2: ShadowRootButtonSelector,
                code: shadowRootClickcode,
                generatedElements: [generatedShadowRootSelector, generatedShadowRootButtonSelector]
            },

            'id click': {
                elements: idClickTextBox,
                inputSelector: clickIdSelector,
                code: idClickCode,
                generatedElements: [generatedIdClick]
            },

            'attribute click': {
                elements: attributeClickTextBox,
                inputSelector: clickAttributeSelector,
                code: attributeClickCode,
                generatedElements: [generatedAttributeClick]

            },


            'formulario mensaje gracias mejorado': {
                elements: formThnkMsgEnhancedTextBox,
                inputSelector: formThnkMsgEnhancedSelector,
                code: formThnkMsgEnhancedCode,
                generatedElements: [generatedformThnkMsgEnhanced],
                isEnhanced: true
            },

            'formulario click text mejorado': {
                elements: formClickTextEnhancedTextBox,
                inputSelector: formClickTextEnhancedSelector,
                code: formClickTextEnhancedCode,
                generatedElements: [generatedformClickTextEnhanced],
                isEnhanced: true
            },

            'formulario click selector mejorado': {
                elements: formClickSelectorEnhancedTextBox,
                inputSelector: formClickSelectorEnhancedSelector,
                code: formClickSelectorEnhancedCode,
                generatedElements: [generatedformClickSelectorEnhanced],
                isEnhanced: true
            },

            'forEach attribute click': {
                elements: forEachAttributeClickTextBox,
                inputSelector: clickForEachAttributeSelector,
                code: forEachAttributeClickCode,
                generatedElements: [generatedAttributeForEachClick]
            },

            'forEach click': {
                elements: forEachClickTextBox,
                inputSelector: clickForEachSelector,
                code: forEachClickCode,
                generatedElements: [generatedForEachClick]
            },

            'forEach click': {
                elements: forEachClickTextBox,
                inputSelector: clickForEachSelector,
                code: forEachClickCode,
                generatedElements: [generatedForEachClick]
            },

            'click iframe': {
                elements: iframeClickSelectorTextBox,
                inputSelector: iframeClickSelector,
                inputSelector2: iframeClickButtonSelector,
                code: iframeClickcode,
                generatedElements: [generatediframeClickSelector, generatediframeClickButtonSelector]
            },

            'iframe mensaje gracias': {
                elements: iframeFormSelectorTextBox,
                inputSelector: iframeFormSelector,
                inputSelector2: iframeThanksMessageSelector,
                code: iframeThanksMessageCode,
                generatedElements: [generatediframeThanksMessage, generatediframeThanksSelector]
            },

            'Compra Shopify': {
                elements: shopifyPurchaseTextBox,
                inputSelector: inputShopifyAdsId,
                inputSelector2: inputShopifyConversionLabel,
                inputSelector3: inputShopifyCurrency,
                code: shopifyPurchaseCode,
                generatedElements: [generatedShopifyAdsId, generatedShopifyConversionLabel, generatedShopifyCurrency],
                noNeedOfEvent: true
            },

            'Compra avanzada Shopify': {
                elements: shopifyPurchaseEnhancedTextBox,
                inputSelector: inputShopifyConversionLabelEnhanced,
                code: shopifyPurchaseEnhancedCode,
                generatedElements: [generatedShopifyConversionLabelEnhanced],
                noNeedOfEvent: true
            },

            'create DataLayer': {
                code: createDataLayerCode,
                noNeedOfEvent: true
            },

            'create DOMContentLoaded': {
                code: DOMContentLoadedCode,
                noNeedOfEvent: true
            },

            'Click link Whatsapp': {
                code: ClickLinkWhatsappCode,
                noNeedOfEvent: true
            },

            'Click link llamada': {
                code: clickLinkLlamada,
                noNeedOfEvent: true
            },

            'Click link email': {
                code: clickLinkEmail,
                noNeedOfEvent: true
            },

            'Hubspot Form': {
                code: hubSpotForm,
                noNeedOfEvent: true
            },

            'Hubspot avanzado Form': {
                code: hubSpotFormEnhanced,
                isEnhanced: true
            },

            'Mensaje enviado Wix Chat': {
                code: wixChatMessageSent,
                noNeedOfEvent: true
            },

            'Formulario amoforms': {
                code: amoFormsSent,
                noNeedOfEvent: true
            },

            'Cliengo Lead Whatsapp': {
                code: cliengoLeadWhatsapp,
                noNeedOfEvent: true
            },

            'Formulario Zoho': {
                code: zohoFormCode,
                noNeedOfEvent: true
            },

            'Calendly Scheduled': {
                code: calendlyScheduledCode,
                noNeedOfEvent: true
            },

            'Local Storage': {
                code: localStorageCode,
                noNeedOfEvent: true
            },

            'Prestashop Order Id Url': {
                code: prestashopOrderIdCode,
                noNeedOfEvent: true
            },

            'Formulario Upnify Whatsapp': {
                code: upnifyFormCode,
                noNeedOfEvent: true
            },

            'Formulario Upnify Whatsapp avanzado': {
                code: upnifyFormEnhancedCode,
                noNeedOfEvent: true
            },

            'Validar Selector Intervalo': {
                elements: setIntervalSelectorTextBox,
                inputSelector: setIntervalSelectorTextValue,
                code: setIntervalCode,
                generatedElements: [generatedSetIntervalSelector],
                noNeedOfEvent: true
            },

            'Enter Hit': {
                elements: keyDownSelectorTextBox,
                inputSelector: keyDownSelectorTextValue,
                code: keyDownCode,
                generatedElements: [generatedKeyDownSelector]
            },

            'GTM Odoo': {
                elements: GTMOdooTextBox,
                inputSelector: GTMOdooTextValue,
                code: GTMOdooCode,
                generatedElements: [generatedGTMOdooId],
                noNeedOfEvent: true
            },

            'Selector click': {
                elements: ClickSelectorTextBox,
                inputSelector: ClickSelectorTextValue,
                code: ClickSelectorCode,
                generatedElements: [generatedSelectorClick]

            },


            'HubSpot Chat Mensaje Enviado': {

                code: HubSpotChatMessageSentCode,
                noNeedOfEvent: true

            },

            'formulario click selector prevent Default': {
                elements: formSelectorClickPreventDefaultTextBox,
                inputSelector: formSelectorClickPreventDefaultTextValue,
                code: formSelectorPrevenDefaultCode,
                generatedElements: [generatedFormSelectorClick]
            },

            'gtag enhanced': {
                elements: EnhancedGtagAdsIdTextBox,
                inputSelector: EnhancedGtagAdsIdTextValue,
                inputSelector2: EnhancedAdsConversionLabelTextValue,
                code: EnhancedgtagCode,
                generatedElements: [generatedEnhancedGtagAdsId, generatedEnhancedAdsConversionLabel],
                noNeedOfEvent: true

            },

            'Validación Email y Phone Function': {
                code: functionEnhancedValidationCode,
                noNeedOfEvent: true
            },
        }



        //hide all options
        for (const optionName in generatorOptions) {
            var option = generatorOptions[optionName];
            if (option.elements) {
                option.elements.querySelectorAll('input').forEach(function(e) {
                    e.removeAttribute("required");
                    //e.setAttribute("hidden", "true");
                })

                option.elements.style.display = 'none';

            }

            if (option.code) {
                option.code.style.display = 'none';
                console.log('hidden');
            }
        };


        //opcion por defecto:
        activatorTypeSelect.value = 'formulario mensaje gracias';

        //show default options
        generatorOptions['formulario mensaje gracias'].elements.style.display = 'block';
        generatorOptions['formulario mensaje gracias'].code.style.display = 'block';
        generatorOptions['formulario mensaje gracias'].elements.querySelectorAll('input').forEach(function(e) {
            e.setAttribute("required", "true");
        })

        //hide country code section
        checkBoxPhoneConversionDiv.style.display = 'none';
        countryCodeDiv.style.display = 'none';
        countryCodeInputBox.removeAttribute("required");

        generatedCountryCodeCodeConditions.forEach(function(e) {

            e.style.display = 'none';
        })


               
  
              

        function showOption() {

            var selectedOption = generatorOptions[activatorTypeSelect.value];

            gtag('event', activatorTypeSelect.value.replaceAll(' ','_').trim());        
            console.log(activatorTypeSelect.value.replaceAll(' ','_').trim());
            
                var eventData = {
                 event: activatorTypeSelect.value.replaceAll(' ','_').trim()
  
                    };
            window.parent.postMessage(eventData, '*');

            
            //hide all options
            for (const optionName in generatorOptions) {
                var option = generatorOptions[optionName];
                if (option.elements) {

                    option.elements.querySelectorAll('input').forEach(function(e) {
                        e.removeAttribute("required");
                    })

                    option.elements.style.display = 'none';



                }

                if (option.code) {
                    option.code.style.display = 'none';
                    console.log('hidden');
                }
            };

            countryCodeCheckBox.addEventListener('change', function() {
                if (countryCodeCheckBox.checked) {
                    console.log('checked');
                    countryCodeDiv.style.display = 'block';
                    countryCodeInputBox.setAttribute("required", "true");
                    generatedCountryCodeCodeConditions.forEach(function(e) {

                        e.style.display = 'block';
                    })
                } else {
                    console.log('unchecked')
                    countryCodeDiv.style.display = 'none';
                    countryCodeInputBox.removeAttribute("required");
                    generatedCountryCodeCodeConditions.forEach(function(e) {

                        e.style.display = 'none';
                    })
                }
            })

            //show selected option
            if (selectedOption) {

                if (selectedOption.elements) {
                    selectedOption.elements.style.display = 'block';
                    selectedOption.elements.querySelectorAll('input').forEach(function(e) {
                        e.setAttribute("required", "true");
                    })
                }

                if (selectedOption.code) {
                    selectedOption.code.style.display = 'block';
                }

                if (selectedOption.inputSelector) {
                    document.getElementById('generateCode').style.display = 'block';
                } else {
                    document.getElementById('generateCode').style.display = 'none';
                }



                if (selectedOption.noNeedOfEvent === true) {
                    inputEventName.style.display = 'none';

                } else {
                    inputEventName.style.display = 'block';
                    document.getElementById('generateCode').style.display = 'block';
                }

                //showCountry code for enhanced

                if (selectedOption.isEnhanced === true) {
                    checkBoxPhoneConversionDiv.style.display = 'block';
                    checkBoxPhoneConversionDiv.setAttribute("required", "true");
                } else {
                    checkBoxPhoneConversionDiv.style.display = 'none';
                    checkBoxPhoneConversionDiv.removeAttribute("required");
                }

            }
        }




        function generateCode() {


            var eventName = document.querySelector("#event-name-value").value;
            activatorTypeSelect = document.getElementById('activatorType');

            for (const key in generatorOptions) {

                if (activatorTypeSelect.value == key) {

                    var option = generatorOptions[key];
                    option.code.style.display = 'block';

                    
                    if (option.inputSelector) {
                        option.generatedElements[0].forEach(function(e) {
                        e.textContent = option.inputSelector.value;

                         })
                    }
                    
                    if (option.inputSelector2) {
                        console.log('inputSelector2 = ' + option.inputSelector2.value)
                        option.generatedElements[1].forEach(function(e) {

                            e.textContent = option.inputSelector2.value;


                        })


                    }

                    if (option.inputSelector3) {
                        console.log('inputSelector3 = ' + option.inputSelector3.value)
                        option.generatedElements[2].forEach(function(e) {

                            e.textContent = option.inputSelector3.value;


                        })


                    }

                    if (option.isEnhanced === true) {
                        generatedCountryCode.forEach(function(e) {
                            e.textContent = countryCodeInputBox.value;

                        })
                    }


                    generatedEventName.forEach(function(e) {
                        e.textContent = eventName;
                        

                    })

                }
            }

        }

        //envio de formulario   
        document.getElementById("form-generate-code").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            console.log('form enviado')

        });

        //generar codigo con click en el boton
        document.querySelector('#generateCode').addEventListener('click', function() {

            generateCode();
        });
        //generar codigo con tab o enter
        document.querySelectorAll('.input-group__input').forEach(function(e) {
            e.addEventListener('keydown', function() {
                if (event.key === 'Enter' || event.key === 'Tab') {
                    generateCode();

                }
            });
        });
        //mostrar opciones
        activatorTypeSelect.addEventListener('change', function() {
            showOption();
        });

        //Cierre Gestor de opciones



        //            

    }, 100);
});
    

        //codeshare Button
function openCodeShare() {
    var codeShareLink = 'https://codeshare.io/new';
    window.open(codeShareLink, '_blank');
}

        //copiar codigo
        document.addEventListener('DOMContentLoaded', function() {
            
            setTimeout(function() {
      
        document.querySelectorAll('#copy-code-button').forEach(function(btn) {
  btn.addEventListener('click', function() {
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
          }, 100);
       });     
        

