import cors from 'cors';
import express from 'express';
import pathNotFoundErrorHandler from './errors/pathNotFoundErrorHandler';
import errorHandler from './middlewares/error.middleware';
import { bookRoutes } from './modules/book/book.routes';
import { borrowRoutes } from './modules/borrow/borrow.routes';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

// Error handling middleware
app.use(errorHandler);
app.use(pathNotFoundErrorHandler);

export default app;
