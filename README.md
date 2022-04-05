# Beatix🎧
> 🎵Create your own music playlist!🎵
## About.
Beatix is a full stack NodeJS(Express) application with a MongoDB database. This apllication is designed for music lovers to collect their music in one place



## Instructions.

### To run this app:
Install all the dependencies

`
npm instal
`
### Run the app locally:

`
npm start
`
Here you will get a link to a localhost link. For example https://localhost:3000
### List of dependencies:

- **Express** : 4.17.3
- **Mongoose** : 6.2.9
- **Morgan** : 1.10.0
- **Nodemon** : 2.0.15
- **DotEnv** : 16.0.0
- **Body-Parser** : 1.19.2
- **EJS** : 3.1.6

### Links
[Github Repository](https://github.com/Salokhiddinov/music-playlist-app)                        
[Link to a deployed site on Heroku](https://music-playlist-node-app.herokuapp.com/)
## Project Structure.
The following structure is a bit different from the one that is recommended, but for personal convenience the files were separated by folders that makes the code of an application easier to track. All of the scripts are located in separate .js files and in my opinion this structure is more professional and more appropriate for bigger projects.

--📁application                                             
------📄app.js                                      
------📁node-modules                                   
------📁assets                                           
-----------📁css                                          
----------------📄style.css                                         
-----------📁js                                             
----------------📄index.js                                              
------📁server                                         
-----------📁database                                        
----------------📄connection.js                                       
-----------📁controller                                           
----------------📄controller.js                               
-----------📁model                                            
----------------📄model.js                                          
-----------📁service                                                                           
----------------📄render.js                                                 
-----------📁routers                                           
----------------📄router.js                                                       
-------📁view                                                                 
-----------📄index.ejs             	                                       	
-----------📄add-song.ejs                                            
-----------📄update-song.ejs                                                               
-----------📁templates                                                    
-----------------📄theHeader.ejs                                  
-----------------📄theFooter.ejs                                              

00011256 || Web Technology CW2

This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service
