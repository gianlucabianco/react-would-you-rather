# π Would You Rather Project π 

This is the code for the final assessment project for Udacity's React & Redux nano degree.

___

## π©π»βπ»π¨π»βπ» Installation

Clone the repository into your local machine.

```bash

# install dependencies
$ npm install

# serve at localhost:3000
$ npm start

```
___

The following paragraphs are the original instructions for the project.

At the bottom of the README.md file, you could find the extra features which I added to the project besides the original instructions.

```bash

# WARNING
To signin into an already registered account, you should use one of the credentials written inside the `credentials` file (see EXTRA FEATURES below).

```
# π Assessment instructions and project details


The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so youβll need to add the path to each userβs avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## ποΈ Data

There are two types of objects stored in our database:

* Users
* Questions

### π₯ Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The userβs unique identifier |
| name          | String           | The userβs first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### β Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The questionβs unique identifier |
| author        | String | The authorβs unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### π³οΈ Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the userβs id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the questionβs id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

# EXTRA FEATURES

## π Signin / π Signup / π Reset password

Users credentials for login are stored in the `credentials.js` file.

Througout the project, the user could reset their password by clicking on the βForgot Passwordβ link.

The user could also sign up for a new account by clicking on the βSign Upβ link.
The new user will be able to log in after signing up.

## π· Filters

The user can toggle the answered/not answered filters by clicking on the βansweredβ and βnot answeredβ buttons, located at the top of the page.

These buttons toggle the visibility of the questions (any combinations of βansweredβ / βnot answeredβ).

The state of the filters is handled via redux.
Please see `filters.js` reducer and action for more details.
