// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }
  static uniqueId=0

  addUser(name) {
    // Your code here
    let user={}
    user["name"]=name
    user["id"]=SocialNetwork.uniqueId
    this.users[SocialNetwork.uniqueId]=user
    SocialNetwork.uniqueId+=1

    return user["id"]
  }

  getUser(userID) {
    return this.users[userID]!=undefined?this.users[userID]:null
  }

  follow(userID1, userID2) {
    // Your code here
  }

  getFollows(userID) {
    // Your code here
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
// let socialNetwork=new SocialNetwork()
// u1=socialNetwork.addUser("User 1")
// u2=socialNetwork.addUser("User 2")
// u3=socialNetwork.addUser("User 3")
// u4=socialNetwork.addUser("User 4")
// u5=socialNetwork.addUser("User 5")
// console.log(u1); // 1
// console.log(u2); // 2
// console.log(u3); // 2
// console.log(u4); // 2
// console.log(u5); // 2