window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let favoriteThings = [document.getElementById("text1").value, document.getElementById("text2").value, document.getElementById("text3").value,document.getElementById("text4").value];
    console.log(favoriteThings);
    console.log("Second: " + favoriteThings[1] + ", First: " + favoriteThings[0] + ", Third: " + favoriteThings[2]);
    let favoriteThings2 = [];
    favoriteThings2.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);
    // [second element, first element, third element]
    console.log(favoriteThings2);

    const ul = document.createElement("ul");
    const liOne = document.createElement("li");
    const liTwo = document.createElement("li");
    const liThree = document.createElement("li");

    form.after(ul);
    ul.append(liOne, liTwo, liThree);
    liOne.append(favoriteThings2[0]); // favoriteThings2 = [second, first, third]
    liTwo.append(favoriteThings2[1]);
    liThree.append(favoriteThings2[2]);


  });
});