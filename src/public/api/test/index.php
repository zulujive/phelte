<?php
class DataController {
    public function handle() {
        // Add your API logic here
        // For example, you can fetch data from a database or perform any other action
        $data = ['message' => 'Hello from API endpoint: /api/test'];

        // Send response as JSON
        header('Content-Type: application/json');
        echo json_encode($data);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    (new DataController())->handle();
}