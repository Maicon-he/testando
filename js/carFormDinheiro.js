 //DINHEIRO
  //Logica resonsavel por exibir texto apor o checkbox SER TRUE
  //Função que checa se a Box esta marcada ou não
  function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }