var i = 1;
var somatotal= 0.00;
window.onload = function(){

document.getElementById("resultadofinal").value = somatotal;

  var table = document.getElementById("tabelaorc");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = "<input type='text' class='' name='busca' placeholder='Produto "+i.toString()+"'>";
  cell2.innerHTML = "<input type='text' name='quantidade' size='4' id='qtde"+i.toString()+"' onchange='multiplicar();totalizador();'>";
  cell3.innerHTML = "<input type='text' name='valorunitario' size='8' id='valorunit"+i.toString()+"' onchange='multiplicar();totalizador();'>";
  cell4.innerHTML = "<input type='text' name'resultadomultiplicacao' size='8' id='resultadomultiplicacao"+i.toString()+"'>";

};
function multiplicar()
    {
      j = i;
      for (j; j > 0; j--) {
        // Capture the entered values of two input boxes
        var valor1 = document.getElementById('qtde'+j.toString()).value;
        var valor2 = document.getElementById('valorunit'+j.toString()).value;


        console.log(multiplicacao);
        // Add them together and display
        var multiplicacao = ((parseInt(valor1*10).toFixed(2) * parseInt(valor2*10).toFixed(2))/100).toFixed(2);
        //document.write(multiplicacao);
        document.getElementById('resultadomultiplicacao'+j.toString()).value = multiplicacao;
      }
    }





    function adicionarlinha()
    {
      i = i + 1;
      var table = document.getElementById("tabelaorc");
      if( i == 2){
        var row = table.insertRow(2);
      } else{
        var row = table.insertRow(i);
      }
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = "<input type='text' class='' name='busca' placeholder='Produto "+i.toString()+"' id='Produto"+i.toString()+"'>";
      cell2.innerHTML = "<input type='text' name='quantidade' size='4' id='qtde"+i.toString()+"' onchange='multiplicar();totalizador();'>";
      cell3.innerHTML = "<input type='text' name='valorunitario' size='8' id='valorunit"+i.toString()+"' onchange='multiplicar();totalizador();'>";
      cell4.innerHTML = "<input type='text' name'resultadomultiplicacao' size='8' id='resultadomultiplicacao"+i.toString()+"'>";

      totalizador();
    }

    function totalizador()
    {
        j = i;
        somatotal = 0.00;
        for (j;j > 0; j--) {

        // Capture the entered values of two input boxes
        var valor = document.getElementById("resultadomultiplicacao"+j.toString()).value;

        somatotal = (Number(valor) + Number(somatotal)).toFixed(2);

        //var valor2 = document.getElementById('resultadomultiplicacao2').value;

        // Add them together and display
        //var somatotal = parseInt(valor);
        //document.write(multiplicacao);

      }
      document.getElementById("resultadofinal").value = somatotal;
    }
    function imprimirpagina()
    {
      window.print();
    }
    function gerarcsv(){
      j = i;

      var csvarray = [document.getElementById("nomecliente").value,
      document.getElementById("nomerua").value,
      document.getElementById("nomebairro").value,
      document.getElementById("nomecidade").value,
      document.getElementById("nomeestado").value,
      document.getElementById("dddfixo").value,
      document.getElementById("fonefixo").value,
      document.getElementById("dddcelular").value,
      document.getElementById("telcelular").value,
      document.getElementById("observacoesfinais").value,
      document.getElementById("condicoespagto").value
      ];

      var descricao = (csvarray.length + 1) + j;
      var quantidade = (csvarray.length + 2) + j;
      var rsunitario = (csvarray.length + 3) + j;
      var rstotal = (csvarray.length + 4) + j;
      console.log(descricao);

      const xls = new xlsExport(csvarray, "Um Titulo");
      xls.exportToCSV();

      console.log(csvarray);
      console.log(csvarray.length);
    }

    new autoComplete({
      selector: 'input[name="busca"]',
      minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['ActionScript', 'AppleScript', 'Asp', 'C++', 'Javascript', 'Cobol', 'Python'];
        var matches = [];
        for (g=0; g<choices.length; g++)
            if (~choices[g].toLowerCase().indexOf(term)) matches.push(choices[g]);
        suggest(matches);
    }
});
