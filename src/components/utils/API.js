import axios from "axios";

// Export an object containing random generated users

export default {
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};
