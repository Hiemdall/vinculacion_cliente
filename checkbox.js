function disableOtherCheckboxes(checkboxId) {
    const checkboxes = document.querySelectorAll('input[name="tipo_documento_legal"]');
    
    checkboxes.forEach(function(checkbox) {
      if (checkbox.id !== checkboxId) {
        checkbox.disabled = document.getElementById(checkboxId).checked;
      }
    });
  }