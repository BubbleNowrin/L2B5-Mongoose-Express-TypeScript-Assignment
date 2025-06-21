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
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookInfo",
      },
    },
    {
      $unwind: "$bookInfo",
    },
    {
      $project: {
        _id: 0,
        book: {
          title: "$bookInfo.title",
          isbn: "$bookInfo.isbn",
        },
        totalQuantity: 1,
      },
    },
  ]);
  return summary;
};
