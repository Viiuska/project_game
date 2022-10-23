# project_game - Platform game
Created with CodeSandbox  
Viia Mäntymäki  
22.10.2022  

# Introduction
This is my course project work (CT30A2910 Introduction to Web Programming). Along the course I learned basics of HTML, CSS and Javascrip. For the course project I decided to do game because it inspired me the most out of the options given. It is simple platform game where player tries to collect stars and wacth out for black stars as they give minus points and look out for the deadly bombs.

## Tools
I used CodeSandbox as a coding platform and it's browser to display the game. In the game I took advantage the Phaser framework. For the game sounds I used freesound website (https://freesound.org/) to download sound effects and AudioMass (https://audiomass.co/) to edit/convert them to mp3. I also used Pixlr (https://pixlr.com/fi/x/) to personalize the game objects.

## The game structure
The game starts at main menu page where the gamer can choose the desired difficulty level (easy, medium, hard) by clicking it. The gamer controls the game character with the arrow keys. The gamer tries to collect as many stars they can until they die. There are two types of stars: yellow and black. The yellow stars give points and the black stars minus points. In the hard level player need to use mouse to move a platform horizontally to be able collect all yellow stars. The game end when player hits a bomb. 

### The code structure
The game mainly followed the platform game example given in the course material and all the js codes were in one js file and the "Making your first Phaser 3 game" in the Phaser websites. When I started to add Main menu page I realized it was going to be too jumbled and messy to read. I divided my code to five js files: index, config, PreloadScene, GameScene, GameSceneMedium and GameSceneHard. For the game object images and sounds I created folder 'assets' keeping the main directory clean.

The index file creates new game(config) and in the config file I define config objects for the game and import the scenes. I also use the scale Manager to make the game responsive for different devices. I had little bit trouble to decide the scale mode between the SMOOTH and the FIT. In the end I decided to go with the SMOOTH because it looked more suitable for me. 

In the preloadScene I loaded couple images to make the main menu page and added some texts. At first I could not get the background image to fit the frame but luckely I found help in the internet. In the main menu gamer can choose the level by clicking the wanted button starting the new scene. 

The GameScene, GamesceneMedium and GameSceneHard all have the same code base that I modified to suit the different levels. I created black stars that gives minus points using the star collecting function as a guide. When the player hits a bomb gamer get the text "Game over" and gamer's total score. In the GameScene the platforms do not move unlike the GamesceneMedium and GameSceneHard. The GameSceneMedium has two moving platforms that makes the star collecting and watching out for the bombs little bit harder. The GameSceneHard has a movable platform that gamer need's to use to get to the all stars. In retrospect I could have made a class that has the basic game structure and child classes to inherit it.



## The game

![image](https://user-images.githubusercontent.com/87257685/197357773-498cca7d-aa67-4180-992a-920bb7711315.png)  
1.image: Main menu


![image](https://user-images.githubusercontent.com/87257685/197357802-4eb8b6b3-e0a5-4531-aa8c-2166b7886c49.png)  
2.image: Easy level


![image](https://user-images.githubusercontent.com/87257685/197357879-1e0795f2-c626-4203-8a3e-1c2afa5a8be8.png)  
3. image: Medium level, Game over


# Points for the project
![image](https://user-images.githubusercontent.com/87257685/197399277-1d77136a-caed-4157-aad0-7cceb1dd773c.png)

1. The report is comprehensive it has required information and images of the game.  
2. The game is responsive. User can use it desktop, tablet and mobile view without bigger problems.  
3. It has no trouble to work in different browsers.  
4. The game plot is to collect stars (points) until player hits bomb and dies.  
5. Player tries to collect the yellow stars and avoid black stars as they give minus points.  
6. In the medium level there are two platforms that moves horizontally and hard level there is one platform that moves horizontally and one platform that user can move with a mouse click.  
7. There are 3 different maps in total.  
8. In hard level there is a movable platform can be moved by clicking the mouse.  
9. The enemies are the bombs that will kill the palyer if they are hit.  
10. There can be found three different sound effects when collecting star, black star and hitting a bomb.  


### Help and guidance used in code (can be found also in the code)
https://www.youtube.com/watch?v=O6zoZAq86io  
https://phaser.io/tutorials/making-your-first-phaser-3-game/part1  
https://www.youtube.com/playlist?list=PLoN_ejT35AEhY4icjiEJ5t2qdunwmQj1R  
https://www.youtube.com/watch?v=SRqKOccMWbc  
https://phaser.discourse.group/t/how-to-stretch-background-image-on-full-screen/1839  
https://phaser.io/examples/v3/view/physics/arcade/basic-platform   

