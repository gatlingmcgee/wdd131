const temperatureF = 45;
const windSpeedMph = 5;

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

if (temperatureF <= 50 && windSpeedMph > 3) {
  const windChill = calculateWindChill(temperatureF, windSpeedMph).toFixed(1);
  document.getElementById("windchill").textContent = `${windChill} °F`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}
