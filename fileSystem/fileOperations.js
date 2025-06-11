/**
 * ===================================================
 * File: fileOperations.js
 * Purpose: Demonstrates basic Node.js file system (fs) operations
 * Author: Owais Zakir
 * Role: Front-End Developer | Back-End Learner
 * Learning Journey Started: June 11, 2025
 * Learning From: Shyrians Coding School
 * LinkedIn: https://linkedin.com/in/owaiszakir
 * GitHub: https://github.com/owaiszakir
 * Facebook: https://facebook.com/owaiszakirdev
 * Instagram: https://instagram.com/owaiszakirdev
 * ===================================================
 */

// ===================================================
// Importing Node.js built-in File System module
// ===================================================
const fs = require("fs");

// ===================================================
// 1. Write File
// Creates a new file or replaces it if already exists
// ===================================================

/*
fs.writeFile("createdByWriteFileInNode.txt", "Bismillah - Starting in the name of Allah", (err) => {
    if (err) {
        console.error("❌ Error while writing file:", err);
    } else {
        console.log("✅ File created successfully using writeFile");
    }
});
*/

// ===================================================
// 2. Append File
// Appends data to a file; creates file if it doesn't exist
// ===================================================

/*
fs.appendFile("createdByAppendFileInNode.txt", "Bismillah, I have started learning!", (err) => {
    if (err) {
        console.error("❌ Error while appending file:", err);
    } else {
        console.log("✅ File updated successfully using appendFile");
    }
});
*/

// ===================================================
// 3. Rename File
// Renames an existing file
// ===================================================

/*
fs.rename("createdByAppendFileInNode.txt", "renamedFile.txt", (err) => {
    if (err) {
        console.error("❌ Error while renaming file:", err);
    } else {
        console.log("✅ File renamed successfully");
    }
});
*/

// ===================================================
// 4. Delete File
// Deletes an existing file
// ===================================================

/*
fs.unlink("renamedFile.txt", (err) => {
    if (err) {
        console.error("❌ Error while deleting file:", err);
    } else {
        console.log("🗑️ File deleted successfully");
    }
});
*/

// ===================================================
// 5. Copy File
// Copying a file from source to destination
// ===================================================

/*
fs.copyFile("createdByWriteFileInNode.txt", "./copy/copyOfCreatedByWriteFileInNode.txt", (err) => {
    if (err) {
        console.error("❌ Error while copying file:", err.message);
    } else {
        console.log("✅ File copied successfully");
    }
});
*/

// ===================================================
// 6. Remove Directory (must be empty)
// ===================================================

/*
fs.rmdir("./emptyForDelete", (err) => {
    if (err) {
        console.error("❌ Error while removing directory:", err.message);
    } else {
        console.log("✅ Directory removed successfully");
    }
});
*/

// ===================================================
// 7. Remove Non-Empty Directory (recursively)
// ===================================================

/*
fs.rm("./toDeleteNotEmptyFolder", { recursive: true }, (err) => {
    if (err) {
        console.error("❌ Error while removing directory:", err.message);
    } else {
        console.log("✅ Directory and its contents removed successfully");
    }
});
*/

// ===================================================
// 8. Create Directory
// Fails if the directory already exists
// ===================================================

/*
fs.mkdir("./newDirectory", (err) => {
    if (err) {
        console.error("❌ Error while creating directory:", err.message);
    } else {
        console.log("✅ Directory created successfully");
    }
});
*/

// ===================================================
// 9. Read Directory
// Lists all contents of a directory
// ===================================================

/*
fs.readdir("./", (err, files) => {
    if (err) {
        console.error("❌ Error while reading directory:", err.message);
    } else {
        console.log("✅ Directory contents:", files);
    }
});
*/

// ===================================================
// 10. Read File
// Displays contents of a specified file
// ===================================================

/*
fs.readFile("createdByWriteFileInNode.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("❌ Error while reading file:", err.message);
    } else {
        console.log("✅ File contents:", data);
    }
});
*/
