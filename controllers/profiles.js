const {Octokit} =  require('octokit');
require('dotenv').config();


// verifying  my github token
const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN
})

// Getting a GitHub user
async function profile(req, res){
    const name = req.params.username;

    const user = await octokit.request('GET /users/{username}',
      {
        username: name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      
    res.send(user.data);
}

// Function to testing if the Github api works 
async function profileTest(){
    const user = await octokit.request('GET /users/{username}',
      {
        username: "MusaPtoleni"
      })
    console.log(user.data.name);
    return user.data.name;
}


// Function to get a users repository
async function getRepo(req, res){
    const name = req.params.username;

    const user = await octokit.request('GET /users/{username}/repos', 
      {
        username: name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })


    res.send(user.data);
}


module.exports = 
{
    profile,
    getRepo,
    profileTest
}