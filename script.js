if (config) {
  var sch_bub_nm = document.querySelectorAll("#sch_bub_nm option");
  for (var i = 0; i < sch_bub_nm.length; i ++) {
    var option = sch_bub_nm[i].textContent;
    if (option == config.sch_bub_nm) {
      document.querySelector("#sch_bub_nm").selectedIndex = i;
      break;
    }
  }

  var sel_sa_year = document.querySelectorAll("#sel_sa_year option");
  for (var i = 0; i < sel_sa_year.length; i ++) {
    var option = sel_sa_year[i].textContent;
    if (option == config.sel_sa_year) {
      document.querySelector("#sel_sa_year").selectedIndex = i;
      break;
    }
  }

  var sa_gubun = document.querySelectorAll("#sa_gubun option");
  for (var i = 0; i < sa_gubun.length; i ++) {
    var option = sa_gubun[i].textContent;
    if (option == config.sa_gubun) {
      document.querySelector("#sa_gubun").selectedIndex = i;
      break;
    }
  }

  document.querySelector("#sa_serial").value = config.sch_bub_nm;
  document.querySelector("#ds_nm").value = config.sch_bub_nm;
  if (config.sch_bub_nm === "false") {
    document.querySelector("#inputsano_ch").value = false;
  }
  if (config.sch_bub_nm === "true") {
    document.querySelector("#inputsano_ch").value = true;
  }
}
