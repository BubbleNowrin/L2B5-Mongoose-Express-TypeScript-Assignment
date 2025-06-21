import { Book } from '../book/book.model';
import { Borrow } from './borrow.model';

export const borrowBookService = async (bookId: string, quantity: number, dueDate: Date) => {
  const book = await Book.findById(bookId);
  if (!book) throw new Error('Book not found');

  if (book.copies < quantity) {
    throw new Error(`Only ${book.copies} copies available`);
  }

  book.copies -= quantity;
  book.checkAvailability();
  await book.save();

  const borrow = await Borrow.create({ book: book._id, quantity, dueDate });
  return borrow;
};

export const getBorrowSummaryService = async () => {
  return await Borrow.aggregate([
    {
      $group: {
        _id: '$book',
        totalQuantity: { $sum: '$quantity' },
      },
    },
    {
      $lookup: {
        from: 'books',
        localField: '_id',
        foreignField: '_id',
        as: 'bookDetails',
      },
    },
    { $unwind: '$bookDetails' },
    {
      $project: {
        book: {
          title: '$bookDetails.title',
          isbn: '$bookDetails.isbn',
        },
        totalQuantity: 1,
      },
    },
  ]);
};
