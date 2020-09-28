window.onload = function () {
  var b = document.querySelector("#search-form");
  b.addEventListener("submit", fetchImage);

  let result = document.getElementById("result");
  let avatar = document.createElement("img");
  result.appendChild(avatar);

  async function fetchImage(e) {
    console.log("worked");
    e.preventDefault();
    const username = document.getElementById("username").value;
    const url = "https://api.github.com/users/" + username;

    const response = await (await fetch(url)).json();

    console.log(response);
    avatar.src = response.avatar_url;
    document.getElementById("username").value = "";
    console.log("finished");
  }
};
