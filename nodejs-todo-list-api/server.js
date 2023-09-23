const express = require("express");
const app = express();
app.use(express.json());
const port = 8000;

const tasksDB = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Buy milk, eggs, bread, and vegetables from the supermarket.",
    completed: false,
  },
  {
    id: 2,
    title: "Finish work report",
    description:
      "Complete the quarterly sales report for the management meeting.",
    completed: false,
  },
  {
    id: 3,
    title: "Exercise",
    description: "Go for a 30-minute jog in the park.",
    completed: true,
  },
  {
    id: 4,
    title: "Read a book",
    description: "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.",
    completed: false,
  },
  {
    id: 5,
    title: "Plan weekend trip",
    description: "Research and plan a weekend getaway to the mountains.",
    completed: true,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server Started On `, port);
});

app.get("/tasks", (req, res) => {
  res.send(tasksDB);
});

app.post("/tasks", (req, res) => {
  const post = req.body;
  const { id, title, description, completed } = post;
  console.log(post);
  if (!id || !title || !description || typeof completed !== "boolean") {
    return res.status(400).json({ message: "missing details" });
  }
  const task = {
    id,
    title,
    description,
    completed,
  };

  tasksDB.push(task);
  return res.status(201).json(task);
});

app.post("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ message: "id required" });

  const post = tasksDB.find((task) => task.id == id);
  console.log(post);
  return res.status(200).json(post);
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskToUpdate = tasksDB.find((task) => task.id === id);

  if (!taskToUpdate) res.status(404).json({ message: "Task not found" });
  if (!id || !updatedField)
    return res.status(400).json({ message: "Bad Request" });

  const { title, description, completed } = req.body;
  if (title) taskToUpdate.title = title;
  if (description) taskToUpdate.description = description;
  if (completed) taskToUpdate.completed = completed;

  return res.status(200).json(taskToUpdate);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskToDelete = tasksDB.find((task) => task.id === id);
  if (!id)
    return res
      .status(400)
      .json({ message: "Bad Request, please provide valid id" });

  if (!taskToDelete) return res.status(404).json({ message: "Task not found" });
  
});
