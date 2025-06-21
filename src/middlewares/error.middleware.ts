import { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err.message || 'Something went wrong';
  let errorResponse = err;

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = 'Validation failed';

    const formattedErrors: Record<string, any> = {};

    for (const key in err.errors) {
      const e = err.errors[key];

      // Customize the message
      let customMessage = e.message;
      if (e.path === 'copies' && e.kind === 'min') {
        customMessage = 'Copies must be a positive number';
      }

      // Format exactly as required
      formattedErrors[key] = {
        message: customMessage,
        name: e.name,
        properties: {
          message: customMessage,
          type: e.properties?.type,
          min: e.properties?.min
        },
        kind: e.kind,
        path: e.path,
        value: e.value
      };
    }

    errorResponse = {
      name: err.name,
      errors: formattedErrors
    };
  }

  res.status(statusCode).json({
    message,
    success: false,
    error: errorResponse
  });
};
