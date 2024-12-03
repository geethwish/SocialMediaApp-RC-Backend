import express, { Application } from "express";
import morgan from "morgan";

// Api Routes
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";

const app: Application = express();
const PORT: number = 3001;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
