# Dating Web App

### 🧐 I. Overview
This project contains a dating website app built using Ruby on Rails, React.js, & Azure Database for PostgreSQL. The app mimics how tinder works with a few modifications. 

##

### ⛓️ II. Features

✅ Create an account

✅ Sign-in

✅ Edit account profile/details

✅ Edit account sign-in credentials

✅ Match users

✅ Message users

##

### 💻 III. Tech Stack
``Ruby`` ``JavaScript`` ``React`` ``Ruby on Rails`` ``Azure Database for PostgreSQL``

##

### 🛠️ IV. How to use this repository?

**1. Clone this repository.**

   Run this command in your terminal: 
   ```
   git clone https://github.com/m3mentomor1/Dating_Web-App.git
   ```
(Optional: You can also ```Fork``` this repository before cloning.)

**2. Go to the repository's main directory.**

   Run this command in your terminal: 
   ```
   cd Dating_Web-App
   ```

**3. Install back-end dependencies.**

   Run this command in your terminal: 
   ```
   bundle install
   ```

**4. On the Azure portal, create a resource & an instance for Azure Database for PostgreSQL.**

(Refer to this [link](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) for more instructions.)
   
**5. Go to "config/database.yml" & configure the database connection:**

    default: &default
        adapter: postgresql
        database: <name_of_database_on_azure>
        host: <name_of_server_on_azure>.postgres.database.azure.com
        port: 5432
        username: <your_username>
        password: <your_password>
    

(Refer to this [link](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal#get-the-connection-information) for more instructions.)

**6. Run database migrations.**

   Run this command in your terminal: 
   ```
   rails db:migrate
   ```

**7. Install client-side dependencies for React.**

   Run this command in your terminal: 
   ```
   npm install --prefix client
   ```

**8. Start rails server.**

   Run this command in your terminal: 
   ```
   rails server
   ```

**8. Start development server for React, to run the app.**

   Run this command in your terminal: 
   ```
   npm start --prefix client
   ```
