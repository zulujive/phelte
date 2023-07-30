<?php
$controllersDirectory = __DIR__ . '/../../app/api';
$publicDirectory = __DIR__ . '/../../public';

// Check if the controllers directory exists
if (is_dir($controllersDirectory)) {
    // Get the list of files in the controllers directory
    $files = scandir($controllersDirectory);

    // Remove '.' and '..' entries from the array
    $files = array_diff($files, ['.', '..']);

    foreach ($files as $file) {
        // Check if the file is a PHP file
        if (pathinfo($file, PATHINFO_EXTENSION) === 'php') {
            // Extract the filename without the extension (e.g., "api_call")
            $filename = pathinfo($file, PATHINFO_FILENAME);

            // Explode the filename by underscores to get the directory structure
            $directories = explode('_', $filename);

            // Create the directory structure in the public directory
            $destinationDir = $publicDirectory;
            foreach ($directories as $directory) {
                $destinationDir .= '/' . $directory;
                if (!is_dir($destinationDir)) {
                    mkdir($destinationDir, 0755);
                }
            }

            // Read the contents of the controller file
            $controllerContents = file_get_contents($controllersDirectory . '/' . $file);

            // Create the index.php file inside the deepest directory
            file_put_contents($destinationDir . '/index.php', $controllerContents);
        }
    }

    echo "Assembler completed successfully." . PHP_EOL;
} else {
    echo "Controllers directory not found." . PHP_EOL;
}