window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let favoriteThings = [document.getElementById("text1").value, document.getElementById("text2").value, document.getElementById("text3").value,document.getElementById("text4").value];
    console.log(favoriteThings);
  });
});