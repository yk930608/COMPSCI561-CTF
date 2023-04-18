function getPort(){
    var portNumber = document.getElementById('portNumberField').value;
    if(portNumber == "9229"){
      document.getElementById("portNumberLable").innerHTML="Correct!";
      document.getElementById("portNumberField").style.display = 'None';
      document.getElementById("portNumberButton").style.display = 'None';
    }
    else{
        alert("Incorrect!");
    }
}

function getPortType(){
    var portType = document.getElementById('portTypeField').value;
    if(portType.toLowerCase() == "tcp"){
      document.getElementById("portTypeLable").innerHTML="Correct!";
      document.getElementById("portTypeField").style.display = 'None';
      document.getElementById("portTypeButton").style.display = 'None';
    }
    else{
        alert("Incorrect!");
    }
}

function outputFlag(){
  if (document.getElementById("portNumberLable").innerHTML=="Correct!"
  && document.getElementById("portTypeLable").innerHTML=="Correct!"){
  alert("As a modern programmer where do you see the debug output??");
  console.log("CTF_SDat{Fl@g_K@i}");
  }
  else
  {
    alert("Correctly answer above questions first!");
  }
}