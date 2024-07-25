# URI CREATIVE
## Overview
This a simple NestJS app to demonstrate OAuth 2.0 authentication with the Meta/Facebook API. The app uses Prisma ORM and
uses in-memory(Sqlite) for storage
## Features
- Authentication Endpoint:
    - User signin with facebook
    - Facebook callback URL
- Logging:
    - Captures important events, request an errors.
## Prerequisites
- NodeJs
- ExpressJS
- Sqlite
- Prisma
- Swagger for API documentation
## Getting Started
### Clone the Repository
```shell
git clone https://github.com/Daud94/uri-creative.git
cd petaverse-assessment
```
### Configuration
Create a `.env` file in the root directory with the following content:
```dotenv
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
API_PORT=4000
BASE_URL=http://localhost:
DATABASE_URL="file:./dev.db"
```
`FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET` from signing up on Meta/Facebook Developer page.
`API_PORT` is the port number you want the run e.g 3000.
`BASE_URL` is the base url of the server. Since the app is ran locally, it is set the value shown above
`DATABASE_URL` url path for the database; leave as it is.

### Installation
Install all dependencies from the `package.json` file:
```shell
npm install
```
Run the application:
```shell
npm run start:dev
```
### Database Migration
Apply migrations to the SQLite database:
```shell
npx prisma migrate dev
```

### API Endpoints
**Authentication Endpoint**
GET `/auth/facebook`
- Allows user to signup/signin with facebook
  GET `/auth/facebook/callback`
- Fallback Url after signing up or signing in with facebook
  PUT `/api/auth/verify-otp`