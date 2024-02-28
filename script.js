function onProcess() {
  var input = document.getElementById("input1").value;
  if (!input) {
    alert("Invalid input");
  }
  var output = "";
  output = input.replace(/(?:\r\n|\r|\n)/g, "\\n");
  output = output.replace(/"/g, '\\"');
  document.getElementById("output1").value = output;
}

function offProcess() {
  var input = document.getElementById("input2").value;
  if (!input) {
    alert("Invalid input");
  }
  var output = "";
  output = input.replace(/\\n/g, "\n");
    output = output.replace(/\\/g, "");
  document.getElementById("output2").value = output;
}



