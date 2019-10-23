# COSC412Triangles
COSC 412 project repo

For the database:
 - The model is expecting a database calls "bands" with a collection called "bandsCollection"

There are 2 pages:
 1. The default page, http://localhost:3000 currently just displays "Welcome to Music Suggester" 
 2. A page that queries the database for band information. It will display this in JSON format in the browser for now. Accessed at http://localhost:3000/api/bands

Requirements for development:
 - MongoDB installed with bands database and bandsCollection collection with content
 - Node.js installed
 - `git clone https://github.com/Catchco1/COSC412Triangles.git`
 - `git checkout ConnorBranch`
 - Open terminal inside musicSuggester directory and run `npm install`
 - To start web app run `npm start`
