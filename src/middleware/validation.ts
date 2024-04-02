import { NextFunction, Response, Request } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("region").isString().notEmpty().withMessage("Region must be a string"),
  body("server").isString().notEmpty().withMessage("Server must be a string"),
  body("fraction")
    .isString()
    .notEmpty()
    .withMessage("Fraction must be a string"),
  handleValidationErrors,
];
