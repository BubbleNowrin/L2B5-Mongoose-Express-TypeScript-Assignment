import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../utils/apiResponse';
import {
  createBookService,
  deleteBookService,
  getBookByIdService,
  getBooksService,
  updateBookService
} from './book.service';


// POST /api/books
export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await createBookService(req.body);
    sendResponse(res, {
      message: 'Book created successfully',
      data: book,
      statusCode: 201
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/books
export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { filter, sortBy = 'createdAt', sort = 'asc', limit = 10 } = req.query;

    const query: any = {};
    if (filter) query.genre = filter;

    const sortOptions: any = { [sortBy as string]: sort === 'desc' ? -1 : 1 };

    const books = await getBooksService(query, sortOptions, Number(limit));
    sendResponse(res, {
      message: 'Books retrieved successfully',
      data: books
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/books/:id
export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await getBookByIdService(req.params.id);
    if (!book) throw new Error('Book not found');

    sendResponse(res, {
      message: 'Book retrieved successfully',
      data: book
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/books/:id
export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await updateBookService(req.params.id, req.body);
    if (!book) throw new Error('Book not found');

    sendResponse(res, {
      message: 'Book updated successfully',
      data: book
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/books/:id
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await deleteBookService(req.params.id);
    if (!book) throw new Error('Book not found');

    sendResponse(res, {
      message: 'Book deleted successfully',
      data: null
    });
  } catch (err) {
    next(err);
  }
};
