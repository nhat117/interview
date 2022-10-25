This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Challenge
```
- Build a mini chat app using NextJS:
     - 2 pages: Home and chat
- Home:

     - Display 1 image using Image optimization from Next framework
     - A button that will redirect user to the chat page using routing mechanism from Next

- Chat:

     - Display chat name of the sender, content of the message
     - Data of the message is included in data.json
     - You must add more messages (> 20)
     - Save the data in localStorage
     - Input field to enter new message
     - Button to send new message
     - Do not load all messages when init -> scroll to top to load more
     - On init -> scroll to latest message

- Styling:

     - Feel free to style in your own design but this will not be marked as an important skill
     - All CSS must be written in Stitches (CSS in JS Framework)

- Coding convention:
     - Clean code
     - Reusable components must live inside components folder

/////////////////////////////////////////////////////////////////////////////////////

The goal of this test is to test your adaptability to new technologies as well as your coding skill. Happy hacking!
```

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:4000/](http://localhost:4000/) with your browser to see the result.


## Attention !!! When first run the app, populate data using json-server, then run the app

```bash
json-server --watch db.json --port 3000
```

## App Images

![Screen Shot 2022-10-25 at 20 52 03](https://user-images.githubusercontent.com/72547907/197792844-65741df4-8d75-4247-aa91-0e6290be9a1d.png)
![Screen Shot 2022-10-25 at 20 52 41](https://user-images.githubusercontent.com/72547907/197792858-0cf76d0e-f028-4d2a-b355-f3be51a7653d.png)
![Screen Shot 2022-10-25 at 20 54 04](https://user-images.githubusercontent.com/72547907/197792867-fb7b4738-7e5d-4ce1-92ea-2faadb140a1c.png)

## Assumption
* Provided json file is being use and serve using json server to simulate API call
* User B: receipient
* User A: sender
* Chat data in 
* New chat data is stored in local storage
 `db.json` file is use once when the application is instantiated
