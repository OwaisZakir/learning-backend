
# 📁 Node.js File System (fs) Module Practice

This repository contains basic examples demonstrating the use of Node.js's built-in `fs` module. The goal is to understand how to perform core file operations such as writing, appending, renaming, and deleting files.

---

## 📚 Topics Covered

### 1. ✍️ Write to a File
- **Method**: `fs.writeFile()`
- **Purpose**: Creates a new file or replaces the content if the file already exists.

```js
fs.writeFile("createdByWriteFileInNode.txt", "Allah K Name Shuroo", callback)
````

---

### 2. ➕ Append to a File

* **Method**: `fs.appendFile()`
* **Purpose**: Adds content to an existing file without deleting the old content. Creates the file if it doesn’t exist.

```js
fs.appendFile("createdByAppendFileInNode.txt", "More text here...", callback)
```

---

### 3. ✏️ Rename a File

* **Method**: `fs.rename()`
* **Purpose**: Changes the name of an existing file.

```js
fs.rename("oldName.txt", "newName.txt", callback)
```

---

### 4. 🗑️ Delete a File

* **Method**: `fs.unlink()`
* **Purpose**: Deletes a file from the file system.

```js
fs.unlink("fileToDelete.txt", callback)
```

---

## 📦 How to Run

Make sure you have Node.js installed, then run the file using:

```bash
node fileOperations.js
```

You can uncomment the section you want to test.

---

## 🛠️ Author Notes

This is part of my learning journey into Node.js. The file structure is kept clean and modular to follow good development practices. Feel free to explore and suggest improvements.

---

## 🔗 License

This project is open-source and available for learning purposes.

```
