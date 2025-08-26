import { handler as apiHandler } from "./vendor/mailerlite_load/index.js";
import { HttpError } from "./vendor/mailerlite_load/scripts/httpError.js";

export const handler = async (event) => {
  try {
    return apiHandler(event);
  } catch (error) {
    return {
      statusCode: error.statusCode ? error.statusCode : 500,
      body: JSON.stringify({
        message: error.message,
        error: error,
      }),
    };
  }
};
