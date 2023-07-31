# Phelte
A PHP framework with Svelte

## Your Application's Glue
Phelte uses a novel approach to handling frontend and backend development. 
It allows for JavaScript and PHP to interface seamlessly by using the 
incredible power of Svelte and the backend capabilities of PHP.

### Constructors and Assemblers
Phelte makes using APIs easy. "Constructors" are our built-in tools to 
help generate APIs. You choose where to listen for requests, who can 
make them and how it'll interact with your backend.

The "assembler" will compile your APIs into the final Svelte build. 
Using the assembler means you don't need to worry about routing, 
URI paths and other application headaches.

### Less boilerplate, less hassle, better code
Behind everything build into Phelte, the aim is to let you write the 
functionality, not the boilerplate. Focused on simplicity, Phelte 
allows you to use your existing programming skills in two of the web's 
most popular languages.

## Instructions
Make sure you have npm, nodejs and PHP installed. This is designed for use on a UNIX-like (Linux, MacOS) system only.

You can go into the src/svelte_app for Svelte, it's like any other Svelte project you may want to use.

To create a PHP API to communicate with Svelte, just use this command in the project's root directory:

```php phelte construct```

You will be prompted with the method, path and the name for the controller itself. After this, you should see the API appear in src/app/api. The filename will be the path with "_" instead of "/". You can change the path at any time by simply editing the file's name.

You can then use the API to call your application's backend script. We recommend placing this within the "app" folder as it is near your APIs and will not interfere with the framework.

To compile your app, simply use this command in the project's root directory:
```php phelte update```

This will compile your APIs and Svelte to the src/public directory. You can serve this directory by using a web server or PHP's built-in development server.

## Further Roadmap
As the project grows, the hope is to add even more useful features such as model creation, an ORM, etc. We plan to add a built-in library for various databases and backends such as PostgreSQL, MariaDB/MySQL, PocketBase, FireBase and many more!