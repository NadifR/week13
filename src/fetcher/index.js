const { instance } = require("../config/axiosConfig");

async function getAllBooks(){
    try {
        const response = await instance.get("/books");
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "shomething went wrong");
    }
}

async function registerUser(){
    try {
        const response = await instance.post("/register", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "shomething went wrong");
    }
}

async function loginUser(data) {
    try {
      const response = await instance.post('/login', data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  async function createBook(data) {
    try {
      const response = await instance.post('/books', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  async function getBookDetailById(id) {
    try {
      const response = await instance.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  async function deleteBook(id) {
    try {
      const response = await instance.delete(`/books/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  async function editBook(id, title, author, publisher, year, pages) {
    try {
      const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }
export { getAllBooks, registerUser, loginUser, createBook, getBookDetailById, deleteBook, editBook}