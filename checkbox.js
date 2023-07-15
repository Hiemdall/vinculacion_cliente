function uncheckOther(checkbox) {
    const checkboxes = document.getElementsByName('tipo_documento');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}

function uncheckOther_legal(checkbox) {
    const checkboxes = document.getElementsByName('tipo_documento_legal');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}

function uncheckOther_tributaria(checkbox) {
  const checkboxes = document.getElementsByName('Caracteristicas_Tributarias');
  checkboxes.forEach((cb) => {
      if (cb !== checkbox) {
          cb.checked = false;
      }
  });
}

function uncheckOther_ica(checkbox) {
  const checkboxes = document.getElementsByName('retiene_ica');
  checkboxes.forEach((cb) => {
      if (cb !== checkbox) {
          cb.checked = false;
      }
  });
}