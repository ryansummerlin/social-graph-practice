// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    let user = {id: this.currentID, name: name };
    this.users[this.currentID] = user;
    this.follows[this.currentID] = new Set();

    return this.currentID;
  }

  getUser(userID) {
    if (this.users[userID]) {
      return this.users[userID];
    } else {
      return null;
    }
  }

  follow(userID1, userID2) {
    if (this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(userID2);
      return true;
    } else {
      return false;
    }
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    let keys = Object.keys(this.follows);
    let followers = new Set();
    keys.forEach(key => {
      if (this.follows[key].has(userID)) {
        followers.add(parseInt(key));
      }
    });
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // const getNeighbors = function(node, graph) {
    //   return graph[node];
    // }

    let queue = [[userID]];
    let visited = new Set();
    let friends = [];

    while (queue.length !== 0) {
      let currentPath = queue.shift();
      let currentNode = currentPath[currentPath.length - 1];

      if (!visited.has(currentNode)) {
        visited.add(currentNode);

        if (currentPath.length > 2 && currentPath.length <= degrees + 2) {
          friends.push(currentNode);
        }

        let neighbors = this.follows[currentNode];
        neighbors.forEach(neighbor => {
          queue.push(currentPath.concat(neighbor));
        });
      }
    }
    return friends;
  }
}

module.exports = SocialNetwork;
