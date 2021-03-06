/*
This is a fake database that stores the credentials for the user.
In a real projects, this would be stored in a database (these data should not be exposed).
*/

export let credentials = [
    {
        id: 'sarahedo',
        name: 'Sarah Edo',
        password: 'jsrocks',
    },
    {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        password: 'reactrocks',
    },
    {
        id: 'johndoe',
        name: 'John Doe',
        password: 'reduxrocks',
    },
];

export const _addCredentials = (newCredential) => {

    const indexOfUser = credentials.findIndex(
        credential => credential.id === newCredential.id
    );

    return new Promise((res, rej) => {
        setTimeout(() => {

            if (indexOfUser === -1)
                credentials.push(newCredential);
            else
                credentials[indexOfUser] = newCredential;

            res();
        }, 1000);
    });
}