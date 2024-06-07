// Task Manager 

class Task {
    constructor(id, description, priority) {
        this.id = id; 
        this.description = description;
        this.priority = priority;
    }

}

class TaskManager { 
    constructor() {

        this.tasks = [];
        this.nextId = 1; 
    }

    addTask(description,priority) {

        const task = new Task(this.nextId, description, priority);
        this.tasks.push(task);
        this.nextId++;
        return task;
    }

    updateTask(taskId, updatedTask) {

        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
          this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
          return true;
        }
        return false;   
    }
    removeTask(taskId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
          this.tasks.splice(taskIndex, 1);
          return true;
        }
        return false;
      }
    
      sortTasksByPriority() {
        this.tasks.sort((a, b) => b.priority - a.priority);
      }

}

const taskManager = new TaskManager();

// Add tasks
const task1 = taskManager.addTask('Finish project proposal', 2);
const task2 = taskManager.addTask('Schedule team meeting', 1);
const task3 = taskManager.addTask('Review code changes', 3);

// Update a task
taskManager.updateTask(task2.id, { description: 'Schedule team meeting for Friday' });

// Remove a task
taskManager.removeTask(task3.id);

// Sort tasks by priority
taskManager.sortTasksByPriority();

console.log(taskManager.tasks);
// Output: [