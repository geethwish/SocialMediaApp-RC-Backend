import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

// Api Routes
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";

const app: Application = express();
const PORT: number = 3001;

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Social Media API",
      version: "1.0.0",
      description:
        "API documentation for creating and managing posts and comments",
    },
    servers: [
      {
        url: "http://localhost:3001", // Adjust this to your server's URL
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Serve Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Your existing routes and middleware go here

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
