Yotpo Email Templates
=======

An express server that uses liquid to render the Yotpo email templates in the browser, which makes for easier styling. I would advise agains changing too much in the snippets and templates unless you know which elements are and aren't read only (there are A LOT).

##HOW TO USE

First you'll need to clone the repo and change into the directory. In your terminal, navigate to whatever folder you keep all of your projects stored in and run the following command:

```shell
git clone https://github.com/salexzee/YotpoEmailTemplates && cd YotpoEmailTemplates && npm install
```

This will clone the library, change you into the directory that was created, and install all of the required dependencies. From there you just need to run the server.

To start the server run `npm run devStart` in your console then in your browser go to `localhost:3000`.

If you're working in a file, READ THE COMMENTS. The comments will tell you things like: what sections are read only, what code should not be included in Yotpo, and other useful things.

##MORE INFO

**REMEMBER**: *This is mainly for styling emails. Not all email clients support some of the advanced HTML5/CSS3 things modern browsers do. Keep that in mind when making alterations.*
