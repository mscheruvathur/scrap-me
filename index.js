const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://hoffman.nvent.com/en-sa/products/encs101526g031"
const stack = [];

async function getGenre() {
  try {
    const response = await axios.get(url);

    console.log(response)
    const $ = cheerio.load(response.data);

    const data = $("product");
    data.each(function () {
      title = $(this).find("h3 a").text();


      stack.push({ title });
    });
    console.log(stack)
  } catch (err) {
    console.error(err);
  }
}

getGenre();
