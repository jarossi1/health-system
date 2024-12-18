# Health Project
12/17/24

Summary of Progress

- Set up the backend of the project using Express and connected it to a MySQL database (health_db).

- Created the MySQL database and added a users table with 5 sample users, including fields for ID, name, email, and age.

- Created basic CRUD API routes to interact with the users table in the MySQL database.

- Secured sensitive information, such as database credentials, by using a .env file and loading it with the help of dotenv.

- Configured the project to ignore sensitive and unnecessary files using a .gitignore file (including .env, .idea, and node_modules).

- Successfully tested the backend by running it on a different port (5000) and fetching data from the MySQL database.
# Screenshot of the MySQL database:
![Screenshot](./images/SQLscreenshot123.png)

12/18/24

Summary of Progress

- Initialized the project frontend using React and successfully connected it to the backend via Axios for data fetching.

- Updated the UserTable component to display user information in a structured table format & updated styling.

- Successfully tested the frontend by running it on a separate port (3000) and verifying data fetching from the MySQL database.

# Screenshot of the frontend interface:
![Screenshot](./images/screenshot2.png)