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
- routes: definition of urls and the content which gets delivered to the views
- views: definition of how the content from the routes are displayed in the UI


Services:
- contentfulClient - creates a Client of the contentful-space which is used by all services which include contentful-related requests
- quotes
  - getQuotes - returns all quotes
  - getQuote - returns specific quote by entry-id
- heading

Routers:
- index
- quotes

Dependencies:
- nodemon: adapts changes on runtime (in this case only for dev)
- cross-env: run scripts that set and use environment variables across platforms
- ...

Hints:
- router.use: invoked for any requests which pass this router
- console.logs are irrelevant, just there to debug if smth went wrong with the contentful connection

Troubleshoot:
- SOLVED: mixinst don't work in other .pugs: was due to missing reference in the layout.pug
- SOLVED: quotes won't load (even if the contentful connection is provided): issued by bad .pug design
- SOLVED: /quotes/:id won't load images: issued by missing a at the start / in layout.pug when the images are linked -> without the / it won't work for sub-pages (image not found)
- quoteofTheDay.length doesnt work in index.js router somehow -> returns NaN (Not a Number)