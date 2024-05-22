# Dating Web App

### 🧐 I. Overview
This is a dating website app built using Ruby on Rails, React.js, & Azure Database for PostgreSQL. This app mimics how tinder works with a few modifications. 

##

### 💻 II. Tech Stack
``JavaScript`` ``Ruby`` ``React`` ``Ruby on Rails`` ``Azure Database for PostgreSQL``

##

### ⏯️ III. Demo

Creating an account:

Account sign-in:

Edit account profile/details:

Edit account sign-in credentials:

Matching users:

##

### 🛠️ IV. How to use this repository?

**1. Clone this repository**

   Copy & paste this command into your terminal: 
   ```
   git clone https://github.com/m3mentomor1/Dating_Web-App.git
   ```

**2. Go to the repository's main directory**

   Copy & paste this command into your terminal: 
   ```
   cd Dating_Web-App
   ```

**3. Install back-end dependencies**

   Copy & paste this command into your terminal: 
   ```
   bundle install
   ```

**4. Setup the database**

> A. On the Azure portal, create a resource & an instance for Azure Database for PostgreSQL.

   Refer to this link for more instructions: 
   https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal
   
> B. Go to "config/database.yml" & configure the database connection:
    
    ```
    default: &default
        adapter: postgresql
        database: <name_of_database_on_azure>
        host: <name_of_server_on_azure>.postgres.database.azure.com
        port: 5432
        username: <your_username>
        password: <your_password>
    ```

    Refer to this link for more instructions: 
    https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal#get-the-connection-information

