import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  getFeelings: function() {
    return axios.get("/api/feelings/");
  },
  getReasons: function() {
    return axios.get("/api/reasons/");
  },
  getGoals: function() {
    return axios.post("/api/goals");
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  saveReason: function(reasonList) {
    return axios.post("/api/reasons", reasonList);
  },
  // Saves a book to the database
  saveFeeling: function(feelingData) {
    return axios.post("/api/feelings", feelingData);
  },

  saveGoal: function(item) {
    return axios.post("/api/goals", item);
  }
};
