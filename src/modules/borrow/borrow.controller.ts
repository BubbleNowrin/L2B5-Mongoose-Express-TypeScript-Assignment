import { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../utils/apiResponse';
import {
    borrowBookService,
    getBorrowSummaryService
} from './borrow.service';

// POST /api/borrow
export const borrowBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { book, quantity, dueDate } = req.body;

    const borrow = await borrowBookService(book, quantity, dueDate);

    sendResponse(res, {
      message: 'Book borrowed successfully',
      data: borrow,
      statusCode: 201
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/borrow
export const getBorrowSummary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const summary = await getBorrowSummaryService();

    sendResponse(res, {
      message: 'Borrowed books summary retrieved successfully',
      data: summary
    });
  } catch (err) {
    next(err);
  }
};
