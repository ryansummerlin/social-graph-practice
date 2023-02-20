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
    // Your code here
  }
}

module.exports = SocialNetwork;
