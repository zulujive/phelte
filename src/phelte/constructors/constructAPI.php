<?php
$argMethod = $argv[1];
$argEndpoint = $argv[2];
$argClass = $argv[3];

$apiConfig = [
    [
        'endpoint' => $argEndpoint,
        'controller' => $argClass,
        'method' => $argMethod,
    ],
];

foreach ($apiConfig as $api) {
    $endpoint = $api['endpoint'];
    $controller = $api['controller'];
    $method = $api['method'];

    // Generate PHP code for the endpoint
    $apiCode = <<<PHP
<?php
class $controller {
    public function handle() {
        // Add your API logic here
        // For example, you can fetch data from a database or perform any other action
        \$data = ['message' => 'Hello from API endpoint: $endpoint'];

        // Send response as JSON
        header('Content-Type: application/json');
        echo json_encode(\$data);
    }
}

if (\$_SERVER['REQUEST_METHOD'] === '$method') {
    (new $controller())->handle();
}
PHP;

    // Create the API file
    $filename = __DIR__ . '/../../app/api/' . str_replace('/', '_', trim($endpoint, '/')) . '.php';
    file_put_contents($filename, $apiCode);
}
