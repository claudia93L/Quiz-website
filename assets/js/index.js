const btnProceed = document.getElementById('proceed');
const checkbox = document.getElementById('check');

function enableButton() {
  if (checkbox.checked) {
    btnProceed.disabled = false;
  } else {
    btnProceed.disabled = true;
  }
}
