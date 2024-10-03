"use client"; // This marks the component as a Client Component

import { useState, useEffect } from "react";
import Head from "next/head";

const ToDoList = () => {
  // State to manage tasks and the new task input
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  // useEffect to log a message when the tasks array changes
  useEffect(() => {
    console.log("Tasks have changed:", tasks);
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    const task = { name: newTask, completed: false };
    setTasks([...tasks, task]); // Add the task to the list
    setNewTask(""); // Clear the input field after adding
  };

  // Toggle task completion status
  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update the tasks array
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>GBCS Frontend Coding Challenge</title>
        <meta
          name="description"
          content="A simple coding challenge for new hires."
        />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to the GBCS Frontend Coding Challenge</h1>
        <p className="mb-4">
          Your task is to create a to-do list component using the <code>useState</code> and <code>useEffect</code> hooks.
        </p>

        {/* ToDo List Component */}
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

          <div className="mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
              className="px-4 py-2 border border-gray-300 rounded mr-2"
            />
            <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Task
            </button>
          </div>

          <ul className="w-full max-w-md">
            {tasks.map((task, index) => (
              <li
                key={index}
                onClick={() => toggleTaskCompletion(index)}
                className={`cursor-pointer p-2 mb-2 border rounded ${
                  task.completed ? "bg-green-200" : "bg-white"
                }`}
              >
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ToDoList;