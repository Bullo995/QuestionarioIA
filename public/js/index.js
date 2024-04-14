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
