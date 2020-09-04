# Assignment

A project create as backend assignment for an IT company.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.3

    $ npm --version
    6.14.6

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
## Install

    $ git clone https://github.com/crusuer/assignment.git
    $ cd assignment
    $ npm install

## Running the project

    $ npm start

## Simple build for production

    $ npm build

# Local deploy
POST http://localhost:3000/api/fetch

# Cloud deploy
POST https://assignment-robson.herokuapp.com/api/fetch

## Request Payload
The request payload will include a JSON with 4 fields.
● “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “createdAt”
● “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.
Sample:
```json
{
"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000
}
```

## Response Payload
Response payload should have 3 main fields.
● “code” is for status of the request. 0 means success. Other values may be used for errors that you define.
● “msg” is for description of the code. You can set it to “success” for successful requests. For unsuccessful requests, you should use explanatory messages.
● “records” will include all the filtered items according to the request. This array should include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts” array in the document.
Sample:
```json
{
"code":0,
"msg":"Success",
"records":[
{
"key":"TAKwGc6Jr4i8Z487",
"createdAt":"2017-01-28T01:22:14.398Z",
"totalCount":2800
},
{
"key":"NAeQ8eX7e5TEg7oH",
"createdAt":"2017-01-27T08:19:14.135Z",
"totalCount":2900
}
]
}
```