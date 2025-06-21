import { Book } from '../models/book.model';

export const createBookService = async (data: any) => {
  return await Book.create(data);
};

export const getBooksService = async (filter: any, sort: any, limit: number) => {
  return await Book.find(filter).sort(sort).limit(limit);
};

export const getBookByIdService = async (id: string) => {
  return await Book.findById(id);
};

export const updateBookService = async (id: string, data: any) => {
  return await Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteBookService = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};
