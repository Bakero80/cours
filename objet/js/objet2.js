function afficherMessage()
{
     var monForm = document.getElementById("idForm");
     var pizza =monForm.mesCases[0].checked;
     var tartiflette = monForm.mesCases[1].checked;
     var ratatouille = monForm.mesCases[2].checked;
     if(tartiflette)
          alert("Vous venez de la montagne, non ?");
     if(ratatouille && !pizza)
          alert("Vous preferez la ratatouille a la pizza ?!");
}
