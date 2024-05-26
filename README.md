<div align="center">
  <h1>Dating Web App</h1>
</div>

### 🧐 I. Overview
![image](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/121dad6e-1bfc-436c-9fad-9286b5a11d82)

This is a dating website app project built using Ruby on Rails, React.js, & Azure Database for PostgreSQL. The app mimics how tinder works with a few modifications. 

##

### ⛓️ II. Features

✅ Create an account

![Create an account](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/d290fdd6-91d0-4a1c-8bc3-e9400ad23852)

✅ Sign-in

![Sign in](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/b891bd9a-ddf9-4aa3-b53b-9734559e773a)

✅ Edit account profile/details

![Edit account](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/b14ed513-4c2d-4e86-b633-8f9f65f45db6)

✅ Edit sign-in credentials

![Edit sign in](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/437b6c05-b99a-46fc-b9ae-095e44667718)

✅ Match users

![Match Users](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/f8c43416-8814-4561-b2e8-7038bd1825a3)

✅ View user profiles

![View user](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/876ad43c-4123-4d5b-af0c-407da59331fe)

✅ Message/chat with users in real-time

![Message](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/9db83ab3-a7cf-4f02-be18-31b6bce43211)

##

### 💻 III. Tech Stack

- Front-end: ``JavaScript`` ``React``

- Back-end: ``Ruby`` ``Ruby on Rails`` ``Azure Database for PostgreSQL``

##

### 🛠️ IV. Use this repository

**1. Make sure that you have the following prerequisites & requirements:**

- **Ruby** (v3.2.2) - the programming language used for the back-end of the app.
- **Ruby on Rails** (v7.0.4.3) - the web framework used for the back-end of the app. 
- **Bundler** - manages Ruby gem dependencies within the app.
- **Node.js (v20.11.0)** - utilized for managing front-end dependencies (JavaScript, React) & running build tools such as the Webpacker.
- **PostgreSQL** (14) - the database used by the app. 
- **Azure Subscription** - required for provisioning cloud resources, particularly Azure Database for PostgreSQL. 
- **Ubuntu WSL** - for running Linux commands.
- **Azure Data Studio** (Optional) - for convenient database management.

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

![azuredb](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/efeca963-5a7b-438c-9fb0-cf7c4ec6d10d)

Note: Make sure that you have an active Azure subscription.

(*Refer to this [link](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) for more instructions.*)
   
**5. Go to "config/database.yml" & configure the database connection:**

    default: &default
        adapter: postgresql
        database: <name_of_database_on_azure>
        host: <name_of_server_on_azure>.postgres.database.azure.com
        port: 5432
        username: <your_username>
        password: <your_password>
    

(*Refer to this [link](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal#get-the-connection-information) for more instructions.*)

**6. For convenience, you can also use Azure Data Studio to manage the database. (Optional)**

![azuredata](https://github.com/m3mentomor1/Dating_Web-App/assets/95956735/909bbbbe-037e-4bf5-b7d7-b617570e47d3)

(*Refer to this [link](https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio) to download & install Azure Data Studio.*)

**7. Run database migrations.**

   Run this command in your terminal: 
   ```
   rails db:migrate
   ```

**8. Install client-side dependencies for React.**

   Run this command in your terminal: 
   ```
   npm install --prefix client
   ```

**9. Start rails server.**

   Run this command in your terminal: 
   ```
   rails server
   ```

**10. Start development server for React, to run the app.**

   Run this command in your terminal: 
   ```
   npm start --prefix client
   ```

##

### 📄 V. License

👉 [Project License](https://github.com/m3mentomor1/Dating_Web-App/blob/main/LICENSE)
