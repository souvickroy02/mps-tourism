var header = document.getElementById("lstbtn");
var btns = header.getElementsByClassName("b1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const btnScrollToTop = document.querySelector("#buttonToTop");
btnScrollToTop.addEventListener("click", function () {
  // window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function regalert() {
  window.alert(
    "You have to log in to see our plans..please register if you are not a registered user and login to enjoy our plans."
  );
}
