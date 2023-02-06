# Node.js Backend Example with Prisma and PostgreSQL

This just simple Node.js backend app show how to getting started with Prisma and PostgreSQL using Typescript.

# Getting Started

1. Add your DATABASE_URL in **.env** file:

```sh
DATABASE_URL="RBRACE_TO_YOUR_POSTRGRESQL_URL"
```
2. Run this command:
```
npx prisma migrate dev
```
3. And run this command:
```
npx prisma generate
```
4. And run this command to add default data to database:
```
npx prisma db seed
```
5. If you want to run the project run this command:
```
npm run dev
```