// File: fileOperations.js
// Purpose: Learning basic Node.js file system (fs) operations
// Author: [Your Name]
// Date: [Date Here]

// ===================================================
// Importing Node.js built-in File System module
// ===================================================
const fs = require('fs');

// ===================================================
// 1. Write File
// Creates a new file or replaces it if already exists
// ===================================================

/*
fs.writeFile("createdByWriteFileInNode.txt", "Allah K Name Shuroo", (err) => {
    if (err) {
        console.error("❌ Error Occurred while writing file:", err);
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
fs.appendFile("createdByAppendFileInNode.txt", "Allah K Name Shuroo , ab me seekh gaya hon", (err) => {
    if (err) {
        console.error("❌ Error Occurred while appending file:", err);
    } else {
        console.log("✅ File updated successfully using appendFile");
    }
});
*/

// ===================================================
// 3. Rename File
// Renames an existing file (oldPath, newPath)
// ===================================================

// fs.rename("createdByAppendFileInNode.txt", "renamedFile.txt", (err) => {
//     if (err) {
//         console.error("❌ Error Occurred while renaming file:", err);
//     } else {
//         console.log("✅ File renamed successfully");
//     }
// });

// ===================================================
// 4. Delete File
// Deletes an existing file
// ===================================================

fs.unlink("renamedFile.txt", (err) => {
    if (err) {
        console.error("❌ Error Occurred while deleting file:", err);
    } else {
        console.log("🗑️ File deleted successfully");
    }
});

