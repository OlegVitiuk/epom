!function(){function e(){Array.prototype.map.call(document.getElementsByClassName("inputLabels"),function(e){e.classList.contains("error")||(e.style.display="none")})}function t(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function n(e){return/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(e)}function r(e){for(var t={},n=e.querySelectorAll("input"),r=0;r<n.length;++r){var a=n[r],o=a.name,s=a.value;o&&(t[o]=s)}return JSON.stringify(t)}Array.prototype.map.call(document.getElementsByClassName("formInputs"),function(t){t.addEventListener("click",function(t){e();try{t.target.previousSibling.style.display="block"}catch(t){console.log("PreviousSibling gets text node against element!")}})}),document.getElementById("inputEmail").addEventListener("blur",function(e){var n=e.target.previousSibling.classList;if(t(e.target.value))n.contains("error")&&n.remove("error");else try{n.add("error")}catch(e){console.log("PreviousSibling gets text node against element!")}}),document.getElementById("inputWebsite").addEventListener("blur",function(e){var t=e.target.previousSibling.classList;if(n(e.target.value))t.contains("error")&&t.remove("error");else try{t.add("error")}catch(e){console.log("PreviousSibling gets text node against element!")}}),document.getElementById("regForm").addEventListener("submit",function(e){var t=new XMLHttpRequest;t.open("POST","google.com",!0),t.setRequestHeader("Content-type","application/json"),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){JSON.parse(t.responseText);alert("OK")}else alert("FAIL")};var n=r(this);t.send(n)})}();