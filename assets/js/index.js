document.addEventListener("DOMContentLoaded", function () {
  var missionTab = document.getElementById("nav-home-tab");
  var profileTab = document.getElementById("nav-profile-tab");
  var cobTab = document.getElementById("nav-contact-tab");
  var qualityTab = document.getElementById("nav-quality-tab");

  var missionContent = document.getElementById("nav-home");
  var profileContent = document.getElementById("nav-profile");
  var cobContent = document.getElementById("nav-contact");
  var qualityContent = document.getElementById("nav-quality");

  function showTabContent(tab, content) {
    missionTab.classList.remove("active");
    profileTab.classList.remove("active");
    cobTab.classList.remove("active");
    qualityTab.classList.remove("active");

    missionContent.style.display = "none";
    profileContent.style.display = "none";
    cobContent.style.display = "none";
    qualityContent.style.display = "none";

    tab.classList.add("active");
    content.style.display = "block";
    console.log("hello");
  }

  missionTab.addEventListener("click", function () {
    showTabContent(missionTab, missionContent);
  });

  profileTab.addEventListener("click", function () {
    showTabContent(profileTab, profileContent);
  });

  cobTab.addEventListener("click", function () {
    showTabContent(cobTab, cobContent);
  });

  qualityTab.addEventListener("click", function () {
    showTabContent(qualityTab, qualityContent);
  });
});
