// @ts-nocheck
window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );

  let locationTimeZone = document.querySelector(".location-timezone");

  let temperatureSection = document.querySelector("temperature-section");
  let temperatureSpan = document.querySelector("temperature-section span");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      //   console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = `https://cors-anywhare.herokuapp.com/`;
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temperature, summary } = data.currently;

          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimeZone.textContent = data.TimeZone;
          //formula
          let celsius = (temperature - 32) * (5 / 9);

          setIcons(icon, document.querySelector(".icon"));

          temperatureSection.addEventListener("click", () => {
            if (temperatureSection.textContent === "F") {
              temperatureSection.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSection.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  }

  function setIcons(icon, iconsID) {
    const skycons = new skycons({ color: white });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconsID, skycons[currentIcon]);
  }
});
