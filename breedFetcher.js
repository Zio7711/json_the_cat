const request = require("request");
const breedName = process.argv[2];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

request(URL, (error, response, body) => {
  if (error) {
    console.log("Request error: ", error);
  } else {
    console.log("response: ", response.statusCode);
    // console.log("body: ", body);
    // console.log(typeof body);
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data.length === 0) {
      console.log("Did Not find the breed!");
    } else {
      console.log(data[0]);
    }
  }
});
