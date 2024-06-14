# Blog Backend API
![Alt text](images/ Screenshot 2024-06-14 215559.png)
This project implements a backend service for a blog platform, allowing users to perform CRUD operations on blog posts and manage user accounts. The backend is built using Node.js with the Express.js framework and uses MongoDB for data storage. Authentication is handled using token-based authentication (JWT).

## Technologies Used
- **Backend Framework**: Express.js (Node.js)
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Requirements
1. **API Endpoints**:
   - Create a new blog post
   - Retrieve a list of all blog posts
   - Retrieve a single blog post by its ID
   - Retrieve blog posts by user ID
   - Update an existing blog post
   - Delete a blog post
   - Create, update, delete, and retrieve user details
2. **Data Validation**:
   - Validate input data to ensure it meets the specified requirements (e.g., title and content are required fields).
3. **Authentication**:
   - Secure the API endpoints using token-based authentication.
   - Users must authenticate before performing any CRUD operations on blog posts and user details.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Deepika0701/Blog-Backend.git
   cd Blog-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the MongoDB database and update the `DATABASE_URL` in `.env` file:
   ```bash
   MONGODB_URL={Write your url}
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Management

- **Update User**
  - URL: `/api/users/:id`
  - Method: `PUT`
  - Headers:
    ```json
    {
      "Authorization": "Bearer your_jwt_token"
    }
    ```
  - Request Body (Example):
    ```json
    {
      "username": "newUsername",
      "password": "newPassword"
    }
    ```
  - Response:
    ```json
    {
      "id": "user_id",
      "username": "newUsername",
      ...
    }
    ```

- **Delete User**
  - URL: `/api/users/:id`
  - Method: `DELETE`
  - Headers:
    ```json
    {
      "Authorization": "Bearer your_jwt_token"
    }
    ```
  - Response:
    ```json
    {
      "message": "User has been deleted successfully"
    }
    ```

- **Get User**
  - URL: `/api/users/:id`
  - Method: `GET`
  - Response:
    ```json
    {
      "id": "user_id",
      "username": "username",
      ...
    }
    ```

### Blog Posts

- **Create a New Blog Post**
  - URL: `/api/posts/create`
  - Method: `POST`
  - Headers:
    ```json
    {
      "Authorization": "Bearer your_jwt_token"
    }
    ```
  - Request Body:
    ```json
    {
      "title": "Blog Post Title",
      "content": "This is the content of the blog post.",
      "userId": "user_id"
    }
    ```
  - Response:
    ```json
    {
      "id": "post_id",
      "title": "Blog Post Title",
      "content": "This is the content of the blog post.",
      "userId": "user_id",
      "createdAt": "2024-06-15T00:00:00.000Z",
      "updatedAt": "2024-06-15T00:00:00.000Z"
    }
    ```

- **Update an Existing Blog Post**
  - URL: `/api/posts/:id`
  - Method: `PUT`
  - Headers:
    ```json
    {
      "Authorization": "Bearer your_jwt_token"
    }
    ```
  - Request Body:
    ```json
    {
      "title": "Updated Blog Post Title",
      "content": "This is the updated content of the blog post."
    }
    ```
  - Response:
    ```json
    {
      "id": "post_id",
      "title": "Updated Blog Post Title",
      "content": "This is the updated content of the blog post.",
      "userId": "user_id",
      "createdAt": "2024-06-15T00:00:00.000Z",
      "updatedAt": "2024-06-15T00:00:00.000Z"
    }
    ```

- **Delete a Blog Post**
  - URL: `/api/posts/:id`
  - Method: `DELETE`
  - Headers:
    ```json
    {
      "Authorization": "Bearer your_jwt_token"
    }
    ```
  - Response:
    ```json
    {
      "message": "Post has been deleted successfully"
    }
    ```

- **Get Post Details**
  - URL: `/api/posts/:id`
  - Method: `GET`
  - Response:
    ```json
    {
      "id": "post_id",
      "title": "Blog Post Title",
      "content": "This is the content of the blog post.",
      "userId": "user_id",
      "createdAt": "2024-06-15T00:00:00.000Z",
      "updatedAt": "2024-06-15T00:00:00.000Z"
    }
    ```

- **Get All Posts**
  - URL: `/api/posts`
  - Method: `GET`
  - Query Parameters (Optional):
    - `search`: Search term to filter posts by title
  - Response:
    ```json
    [
      {
        "id": "post_id",
        "title": "Blog Post Title",
        "content": "This is the content of the blog post.",
        "userId": "user_id",
        "createdAt": "2024-06-15T00:00:00.000Z",
        "updatedAt": "2024-06-15T00:00:00.000Z"
      },
      ...
    ]
    ```

- **Get Posts by User ID**
  - URL: `/api/posts/user/:userId`
  - Method: `GET`
  - Response:
    ```json
    [
      {
        "id": "post_id",
        "title": "Blog Post Title",
        "content": "This is the content of the blog post.",
        "userId": "user_id",
        "createdAt": "2024-06-15T00:00:00.000Z",
        "updatedAt": "2024-06-15T00:00:00.000Z"
      },
      ...
    ]
    ```

## Data Validation
- Ensure that the `title` and `content` fields are present in the request body when creating or updating a blog post.
- Return a `400 Bad Request` status code with an appropriate error message if the validation fails.

## Authentication
- Implement token-based authentication using JWT.
- Protect all CRUD operations on blog posts and user details by requiring a valid JWT in the `Authorization` header.

