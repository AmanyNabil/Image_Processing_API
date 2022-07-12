# Image Processing API Project

> ## **Short description for the project**

> > The target of this project is to display the image with the requested width and height and if this image was resized before so display it without needing to resize it again.

> > ## _Images available_
> >
> > - encenadaport.jpg
> > - fjord.jpg
> > - icelandwaterfall.jpg
> > - palmtunnel.jpg
> > - santamonica.jpg

> > ## _How the API work_
> >
> > - npm install
> > - npm run start
> > - type localhost:3000/api/images?filename=[@imagename]&width=[@width]&height=[@height]
> > - I use the middleware to check if this image was resized before in thumb folder
> > - If found in thumb folder it will return with this image
> > - If not found in thumb folder then will go to resize image and put it in thumb folder

> ## The packages I used with dependencies

> - Prettier
> - EsLint
> - Typesript
> - Express
> - Sharp
> - Nodemon
> - Jasmine
> - Supertest

> ## The scripts needed in this project
>
> - npm run prettier
> - npm run lint
> - npm run build
> - npm run start
> - npm run test
> - node build/.

> ## How to test this Project
>
> - There are some tests that test the endpoints
> - thare are some test that test resize functions

> ## Notes
>
> - if node_modules folder not exict so you need to inntall all packages in [Package.json] by npm install.
> - I use the middleware for caching to check if image is exist.
> - I use dependencies for routing and testing
> - No issuses Accure in [npm run test] and [npm run Test]
