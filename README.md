# project_game - Platform game
Created with CodeSandbox

Viia Mäntymäki

22.10.2022

# Introduction
This is my course project work (CT30A2910 Introduction to Web Programming). Along the course I learned basics of HTML, CSS and Javascrip. For the course project I decided to do game because it inspired me the most out of the options given. It is simple platform game where player tries to collect stars and wacth out for black stars as they give minus points and look out for the deadly bombs.

## Tools
I used CodeSandbox as a coding platform and it's browser to display the game. In the game I took advantage the Phaser framework. For the game sounds I used freesound website (https://freesound.org/) to download sound effects and AudioMass (https://audiomass.co/) to edit/convert them to mp3. I also used Pixlr (https://pixlr.com/fi/x/) to personalize the game objects to little bit them.

## The game structure
The game starts at main menu page where the player can choose the desired difficulty level (easy, medium, hard) by clicking it. The player controls the game character with the arrow keys. In the hard level player need to use mouse to move a platform horizontally. The game end when player hits a bomb. 

### The code structure
The game mainly followed the platformer course material and all the js codes were in one js file. When I started to add Main menu page I realized it was going to be too jumbled and messy to read. I divided my code to five js files: index, config, PreloadScene, GameScene, GameSceneMedium and GameSceneHard. For the game object images and sounds I created folder 'assets' keeping the main directory clean.

The index file creates new game(config) and in the config file I define config objects for the game and import the scenes. I also use the scale Manager to make the game responsive for different devices. I had little bit trouble to decide the scale mode between the SMOOTH and the FIT. In the end I decided to go with the SMOOTH because it looked more suitable for me. 

In the preloadScene I loaded couple images to make the main menu page and added some texts. At first I could not get the background image to fit the frame but luckely I found help in the internet. Gamer can choose the level by clicking the wanted button starting the new scene. 

The GameScene, GamesceneMedium and GameSceneHard all have the same code base that I modified to the different level. I created black stars that gives minus points using the star collecting function as a guide. When the player hits a bomb gamer get the text "Game over" and gamer's total score. In the GameScene the platforms do not move unlike the GamesceneMedium and GameSceneHard. The GameSceneMedium has two moving platforms that makes the star collecting and watching out for the bombs little bit harder. The GameSceneHard has movable paltform that gamer need's to use to get to the all stars.



## The game

![image](https://user-images.githubusercontent.com/87257685/197357773-498cca7d-aa67-4180-992a-920bb7711315.png)

1.image: Main menu

![image](https://user-images.githubusercontent.com/87257685/197357802-4eb8b6b3-e0a5-4531-aa8c-2166b7886c49.png)

2.image: Easy level

![image](https://user-images.githubusercontent.com/87257685/197357879-1e0795f2-c626-4203-8a3e-1c2afa5a8be8.png)

3. image: Medium level, Game over








# Points for the project
![image](https://user-images.githubusercontent.com/87257685/197349706-f2eb5d06-b5fc-4315-8a23-06ce60ac9c66.png)

-The report is comprehensive it has required information and images of the game.

-The game is responsive. User can use it desktop, tablet and mobile view without bigger problems.

-It has no trouble to work in different browsers.

-The game plot is to collect stars (points) until player hits bomb and dies.

-Player collects tries to collect the yellow stars and avoid black stars as they give minus points.

-In the medium level there are two platforms that moves horizontally and hard level there is one platform that moves horizontally and one platform that user can move with a mouse click.

-There are 3 different maps in total.

-In hard level there is a movable platform can be moved by clicking the mouse.

-The enemies are the bombs that will kill the palyer if they are hit.

-There can be found three different sound effects when collecting star, black star and hitting a bomb.
