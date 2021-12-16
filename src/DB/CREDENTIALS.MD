
# credential.js - FAKE DATABASE

credentials.js is a fake database that stores the credentials for the user.

In a real projects, this would be stored in a database.
When updated, credentials.js is not pushed to the repository (gitignore).

```js
export const credentials = [
    /*
    DATA STRUCTURE EXAMPLE:
    {
        id: '', // USER ID
        password: '', // USER PASSWORD
    }
    */
];
```