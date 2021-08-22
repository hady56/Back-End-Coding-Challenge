const axios = require("axios");
module.exports.Request = async () => {
  try {
    //get the date of 30 days from today
    let date = new Date()
    date.setDate(date.getDate() - 30)
    let dateString = date.toISOString().split("T")[0]

    // request the first 100 repos from github api
    const githubAPI = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${dateString}&sort=stars&order=desc&page=1&per_page=100`
    )

    return githubAPI.data
  } catch (e) {
    console.log(e)
  }
  //
};
