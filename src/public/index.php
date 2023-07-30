<?php
$path = $_SERVER['REQUEST_URI'];
define("SVELTE", "/../../svelte_app/public/");

if ($path === '/') {
    require __DIR__ . '/index.html';
} else {
    echo "404 - not found";
}