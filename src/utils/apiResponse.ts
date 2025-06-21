export const sendResponse = <T = any>(
    res: any,
    {
      success = true,
      message = '',
      data = null,
      statusCode = 200
    }: {
      success?: boolean;
      message: string;
      data?: T | null;
      statusCode?: number;
    }
  ) => {
    res.status(statusCode).json({
      success,
      message,
      data
    });
  };
  