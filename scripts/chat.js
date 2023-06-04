// Images need work.
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var image = content.querySelector("img");

    if (content.style.maxHeight){
      content.style.maxHeight = null;
      image.style.display = "none"; // Hide the image
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      image.style.display = "block"; // Show the image
    }
  });
}

// --------------THIS IS THE CHAT SELECTOR------------------------
function changeTab(tabID, tabName) {
  var i, tabContent, tabButton;

  // Hide all tab content
  tabContent = document.getElementsByClassName("mesgs");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  // Get all tab buttons and remove "active"
  tabButton = document.getElementsByClassName("chat-name");
  for (i = 0; i < tabButton.length; i++) {
      tabButton[i].classList.remove("active");
  }

  // Show current tab, add "active" to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabID).classList.add("active");
}
// --------------------------------------------------------------