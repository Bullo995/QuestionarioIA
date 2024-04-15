    var selectBoxes = document.querySelectorAll("select");
    
    selectBoxes.forEach(selectBox => {

        selectBox.addEventListener('change', function() {
            
            var textareaId = selectBox.id + "_aperta";
            var textarea = document.getElementById(textareaId);
            if(textarea != null){
                
                if (selectBox.value !== "niente") {
                    textarea.disabled = false; 
                }else{
                    textarea.disabled = true;
                } 
            }
        });
    });
    
/*
    // Funzione per impostare lo stato del textarea in base allo stato del selectBox
function updateTextarea(selectBox) {
    var textareaId = selectBox.id + "_aperta";
    var textarea = document.getElementById(textareaId);
    if (textarea !== null) {
        textarea.disabled = selectBox.value === "Niente";
    }
}

var selectBoxes = document.querySelectorAll("select");

selectBoxes.forEach(selectBox => {
    // Aggiungiamo un event listener per catturare il cambio di stato del selectBox
    selectBox.addEventListener('change', function() {
        // Chiamiamo la funzione per aggiornare lo stato del textarea
        updateTextarea(selectBox);
        // Salviamo lo stato del selectBox nella localStorage
        localStorage.setItem(selectBox.id, selectBox.value);
    });

    // Recuperiamo lo stato precedente del selectBox dalla localStorage
    var savedValue = localStorage.getItem(selectBox.id);
    if (savedValue) {
        // Ripristiniamo lo stato del selectBox
        selectBox.value = savedValue;
        // Chiamiamo la funzione per aggiornare lo stato del textarea
        updateTextarea(selectBox);
    }
});
*/