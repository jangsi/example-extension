var hasExtension = false;
const urlDest = "https://safind.scourt.go.kr/sf/mysafind.jsp";
// change this to whatever the id is
const extensionId = "pheklkfhegmbbmnopmdgceeebccifkip";

function runExtension() {
  // copy info from page and send it to the extension
  var data = {};
  data.sch_bub_nm = document.querySelector("#court").textContent;
  data.sel_sa_year = document.querySelector("#year").textContent;
  data.sa_gubun = document.querySelector("#classification").textContent;
  data.sa_serial = document.querySelector("#serial").textContent;
  data.ds_nm = document.querySelector("#party").textContent;
  data.inputsano_ch = document.querySelector("#mode").textContent;
  chrome.runtime.sendMessage(extensionId, { message: "data", data },
    function(reply) {
      if (reply && reply.success) {
        window.open(urlDest,'_blank');
      } else {
        // something went wrong
      }
    }
  );
}

const extensionInteractionContainerId = "#extensionInteractionContainer";

function checkExtension() {
  if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
    chrome.runtime.sendMessage(extensionId, { message: "version" },
      function (reply) {
        // the reply is the object sent from the chrome extension listener
        if (reply && reply.version) {
          // if the extension is installed, display a button
          const extBtn = document.createElement("button");
          extBtn.onclick = runExtension;
          extBtn.innerText = "Run Extension";
          document.querySelector(extensionInteractionContainerId).appendChild(extBtn);
        }
        else {
          // if the extension isn't installed, display some default
          const noExtWarning = document.createElement("div");
          noExtWarning.textContent = "No extension installed... do something else?";
          document.querySelector(extensionInteractionContainerId).appendChild(noExtWarning);
        }
      }
    );
  } else {
    // no chrome apis... are you on https?
  }
}

window.onload = checkExtension;