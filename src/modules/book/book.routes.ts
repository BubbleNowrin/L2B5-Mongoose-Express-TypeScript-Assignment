import { Router } from 'express';
import { createBook, deleteBook, getBookById, getBooks, updateBook } from './book.controller';


const router = Router();

// Create a book
router.post('/', createBook);

// Get all books with optional filters
router.get('/', getBooks);

// Get a specific book by ID
router.get('/:id', getBookById);

// Update book by ID
router.put('/:id', updateBook);

// Delete book by ID
router.delete('/:id', deleteBook);

export const bookRoutes= router;
