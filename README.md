README

This version of minesweeper is built using Angular 4, and has only been properly tested on Google Chrome. The versions of the core softwares/libraries used to build the app are;

@angular/cli: 1.0.2
npm: 3.10.10
node: 6.11.2
os: win32 x64
@angular/common: 4.4.6
@angular/compiler: 4.4.6
@angular/core: 4.4.6
@angular/forms: 4.4.6
@angular/http: 4.4.6
@angular/platform-browser: 4.4.6
@angular/platform-browser-dynamic: 4.4.6
@angular/router: 4.4.6
@angular/cli: 1.0.2
@angular/compiler-cli: 4.4.6

Below are the instructions to launch the game and run the tests. 

-------------------------------------------------------------------------------------------

TO SIMPLY PLAY THE GAME:

The app is located in the folder 'dist' in the root directory. 
To launch the app, open the 'index.html' file in browser (preferably Google Chrome).
If, for any reason the app does not launch properly from your local computer, I uploaded it to aws so you can also access it at http://minesweeperviv.s3-website-us-west-2.amazonaws.com/

--------------------------------------------------------------------------------------------
TO RUN THROUGH ANGULAR CLI:

In command prompt in root directory run the following command "npm install" followed by "ng serve --port 4200". 
This will run the app on port 4200, and you can access it by going to localhost:4200

--------------------------------------------------------------------------------------------
TO RUN THE TESTS:

In command prompt in root directory run the following command "npm install" followed by "ng test".
This should open your browser and run the tests. 

Below are the unit tests that I wrote to try and cover some of the common cases;

GameLogicService
	should set correct counter when method checkNeightbors is called and no recursions are made
  should set correct counter when method checkNeightbors is called on a corner square
  should call checkNeightbors recursively correct number of times if empty square
  should return false when method checkIfColumnInBoard is called with out of board column
  should return false when method checkIfRowInBoard is called with out of board column
MinesweeperComponent
  should initialize values correctly when method setupGame is called
  should call method prepareBoard when method setupGame is called
  should set values correctly when method restartGame is called
  should set mineLocations correctly when method prepareBoard is called
ErrorHandlerService
  should return true if any value less than or equal to zero
  should return set correct error message if any value less than or equal to zero
  should return true if more mines than squares
  should return set correct error message if more mines that squares	
  
  --------------------------------------------------------------------------------------------
STRUCTURE OF THE CODE:

I created a separate module minesweeper which is imported by the main appmodule, to keep all of the minesweeper related components/services etc.
The two main data classes in the app are Board which has properties of the whole board and Square which has the properties of a single square.
The component minesweeper deals with the template showing the game grid, while the component sidebar shows the score and allows you to change game settings.
Since sidebar is a child element of minesweeper, data is shared between them using the Input and Output features of angular components. 
The service game-logic handles all the game logic and the service error-handler handles all the errors. 

With this architecture I tried to separate concerns and ensure that components were kept as simple as possible with all the logic being handled by 
appropriate services. This leads to a code that is easily readable, testable and scalable. To keep the interface as simple as possible I did not 
use any external packages not included in a basic Angular project already. 

src/app/core: Contains the parts of the app that are necessary for the correct functionality of the whole app
		repeat.pipe: A pipe I used to repeat the squares in the grid a given number of times

src/app/top-nav: contains the top Navigation bar component which just displays the title

src/app/minesweeper: This module that contains everything related to the minesweeper game
	classes:
		Board.ts: The class containing the properties of the whole minesweeper board
		Square.ts: The class containing properties of a single minesweeper square
	Constants:
		MineClasses.ts: css view class for the individual minesweeper square
		Result.ts: result enum
	Services:
		error-handler.service.ts: Error handling service
		game-logic.service.ts: Handles all the logic for the minesweeper game
	Components:
		minesweeper: The minesweeper game board component
		sidebar: The sidebar component showing the game info and settings
