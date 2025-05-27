const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "your_api_key_here"; // Replace with your actual API key
const city = "London";

// Construct the full URL with parameters
const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

// Use the Fetch API to send a GET request
fetch(url)
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Process and display the data
    console.log(`Weather in ${data.name}: ${data.weather[0].description}`);
    console.log(`Temperature: ${data.main.temp}°C`);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error fetching weather data:", error);
  });