```javascript
function makeMatchId(team1, team2) {
  return `${team1}-${team2}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function processMatches(matches) {
  return matches.map(match => {
    const id = makeMatchId(match.team1, match.team2);

    return {
      id: id,
      ...match,
      watch_url: `/p/watch.html?id=${id}`
    };
  });
}

// Cricket
const cricket = processMatches(require("./cricket.json"));

// Football
const football = processMatches(require("./football.json"));

// Other
const others = processMatches(require("./others.json"));

module.exports = {
  cricket,
  football,
  others
};
```
