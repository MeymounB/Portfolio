function initDossierDeplier() {
  var oArbo = document.getElementById("arbo-dossier-2"),
    aDossier = oArbo.getElementsByTagName("input");
  for (var i = 0; i < aDossier.length; i++) {
    aDossier[i].checked = true;
  } //for
} //fct
function initDossierDeplierJs(id) {
  var oArbo = document.getElementById("arbo-dossier-" + id),
    aDossier = oArbo.getElementsByTagName("span");
  for (var i = 0; i < aDossier.length; i++) {
    var oUl = aDossier[i].parentNode.getElementsByTagName("ul");
    if (oUl.length == 0) {
      continue;
    } //if
    aDossier[i].addEventListener("click", function (oEvent) {
      var oBt = oEvent.currentTarget,
        sClass = "show",
        bHasClass = oBt.classList.contains(sClass);
      if (bHasClass) {
        oBt.classList.remove(sClass);
      } else {
        oBt.classList.add(sClass);
      } //else
    });
  } //for
} //fct
document.addEventListener("DOMContentLoaded", function () {
  initDossierDeplier();
  initDossierDeplierJs(3);
  initDossierDeplierJs(4);
});
