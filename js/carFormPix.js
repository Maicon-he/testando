// copiando a chave pix
function copiar() {
    // Get the text field
    var copyText = document.getElementById("pix");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
   
  }






//PIX
  //Logica resonsavel por exibir texto apor o checkbox SER TRUE
  //Função que checa se a Box esta marcada ou não
  function Pix() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheckPix");
    // Get the output text
    var text = document.getElementById("pixBox");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }