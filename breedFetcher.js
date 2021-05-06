const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const bodyParsed = JSON.parse(body);

    if (bodyParsed.length === 0) {
      return callback("Did Not find the breed!");
    }
    return callback(null, bodyParsed[0]['description']);
  });
};

module.exports = { fetchBreedDescription };

