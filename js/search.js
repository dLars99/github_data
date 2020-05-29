// Find index of object with needed ID
let objectIndex = githubData.indexOf(githubData[githubData.findIndex(x => x.id === "8030403992")])

// Log the commit message of that object
console.log(githubData[objectIndex].payload.commits[0].message);