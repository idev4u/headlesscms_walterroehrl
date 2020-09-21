Requirements:

Setup:
- setup express (add link to express-setup)
- npm install

Start the application on 'localhost:3000':
```
Development (with nodemon): npm run dev
Production: npm run prod
```

File-System:
- services: includes all services which are provided and can be embedded 
- routes: definition of urls and the content which gets displayed by the views
- views: definition of how the content from the routes are displayed in the UI


Services:
- quotes
- heading
- ..... (mehr Services machen, als verwendet werden, um weitere Möglichkeiten aufzuzeigen)

Dependencies:
- nodemon: adapts changes on runtime (in this case only for dev)
- cross-env: run scripts that set and use environment variables across platforms