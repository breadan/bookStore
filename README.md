This task not related to any real project it just for testing your
skills to be able to help you in our “JSB” program .
Details :
Your company is developing a library system. You need to create book
management API that allows managing book classification.
We need to :
1) Design Entities:
2) Relationships and Constraints: (use any SQL DB )
3) Data Validation:
4) API Endpoints:
- GET /api/book: Retrieve a list of all books.
- GET /api/book/{id}: Retrieve a specific book by ID.
- POST /api/book: Add a new book.
- PUT /api/book/{id}: Update an existing book.
- DELETE /api/book/{id}: Delete a book.
 Task
Book (BookId, Name, Description, Price, Auther , stock)
Category ( CategoryId, Name, Description )
One-to-Many Relationship: A category can have multiple Books.
Ensure the Name and Description fields for the category are not empty.
Ensure Price and Stock for book are non-negative.
Books API
- GET /api/category: Retrieve a list of all categories.
- GET /api/category/{id}: Retrieve a specific category by ID.
- POST /api/category: Create a new category.
- PUT /api/category/{id}: Update an existing category.
- DELETE /api/category/{id}: Delete an category.
 
 
