import cors from "cors";
import express, { Express } from "express";
import session from "express-session";

export function CreateApp(): Express {
  const app = express();
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:8000"],
      maxAge: 6000 * 60 * 24 * 30,
    })
  );
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: "secret",
    })
  );
  return app;
}
