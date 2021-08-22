const githubAPI = require("../Api/GitHubApi");
exports.TrendingReposHandler = async (req, res) => {
  try {
    //get the first 100 repo 
    const ReposList = await githubAPI.Request();

    const LanguageDetailsList = new Map();

    //get each language and it's repos
    for (let repo of ReposList["items"]) {
      if (repo["language"] == null) continue;

      //if the key is found then the language is already added to the list 
      //if not then the language is added to list with the initial count
      if (!LanguageDetailsList.has(repo["language"])) {
        LanguageDetailsList.set(repo["language"], {
          ReposCount: 1,
          ReposList: [repo],
        });
      } else {
        const NewReposCount =
          LanguageDetailsList.get(repo["language"]).ReposCount + 1;
        let NewReposList = LanguageDetailsList.get(repo["language"]).ReposList;
        NewReposList.push(repo);

        LanguageDetailsList.set(repo["language"], {
          ReposCount: NewReposCount,
          ReposList: NewReposList,
        });
      }
    }

    console.log({ LanguageDetailsList });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify([...LanguageDetailsList]));

  } catch (error) {
    res.status(400).send(error);
  }
};
