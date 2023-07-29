document.addEventListener('DOMContentLoaded', function () {
    const menuSection = document.getElementById('menu-section');
    const characterSelectionSection = document.getElementById('character-selection-section');
    const gameSection = document.getElementById('game-section');
    const mainMenuBtn = document.getElementById('main-menu-btn');
    const backBtn = document.getElementById('back-btn')

     // function to show main selection section and hide others
     function showMainSection() { 
        menuSection.classList.add('flex');
        menuSection.classList.remove('hidden');
        characterSelectionSection.classList.add('hidden');
        gameSection.classList.add('hidden')
    } 

    // function to show character selection section and hide others
    function showCharacterSection() { 
        menuSection.classList.remove('flex');
        menuSection.classList.add('hidden');
        characterSelectionSection.classList.remove('hidden');
    } 

    //  function to show the game section and hide the others
    function showGameSection() {
        menuSection.classList.remove('flex');
        menuSection.classList.add('hidden');
        gameSection.classList.remove('hidden')
    }
   
    // button click to show character select section
    mainMenuBtn.addEventListener('click', function () {
        showCharacterSection();
     })

    //  button click to show game select section

    // back button on character selection page
    backBtn.addEventListener('click', function () {
       location.reload();
     })


// setting the variables to show the avatars 
    const crocodile = document.getElementById('crocodile-animation');
    const llama = document.getElementById('llama-animation');
    const sheep = document.getElementById('sheep-animation');
    const panda = document.getElementById('panda-animation');
    const turtle = document.getElementById('turtle-animation');
  
    const crocodilePath = 'animations/croc-animation.json';
    const llamaPath = 'animations/llama-animation.json';
    const sheepPath = 'animations/sheep-animation.json';
    const pandaPath = 'animations/panda-animation.json';
    const turtlePath = 'animations/turtle-animation.json';
  
    

 function showAnimation(animal, path) {
       
         lottie.loadAnimation({
          container: animal,
          renderer: 'svg', // Choose 'svg', 'canvas', or 'html' as per your preference.
          loop: true,      // Set to 'true' if you want the animation to loop.
          autoplay: true,  // Set to 'true' if you want the animation to start playing automatically.
          path: path, // Replace with the path to your downloaded JSON file.
        });
}

// calling function to show avatars
    showAnimation(crocodile, crocodilePath);
    showAnimation(llama, llamaPath);
    showAnimation(sheep, sheepPath);
    showAnimation(panda, pandaPath);
    showAnimation(turtle, turtlePath);


    // store player one's data
    let playerOne = {
        avatar: '',
        name: 'playerOne',
    };

     // store player two's data
    let playerTwo = {
        avatar: '',
        name: 'playerTwo',
    };

    // function to show which players have selected avatars


    // function to update each player's data
    function updatePlayerData(player, avatar){
       player.avatar = avatar;
       alert(player.name + " has selected " + avatar);
    }

    // Keep track of player selections
let playerOneSelected = false;
let playerTwoSelected = false;

      // Function to mark the selected character and update player data
  function selectCharacter(player, character) {
    if (avatarSelectionEnabled) {
      const selectedCharacter = character.getAttribute('data-character');
      updatePlayerData(player, selectedCharacter);

      const characterDivs = document.querySelectorAll('.character_item');
      for (const div of characterDivs) {
        if (div === character) {
          div.classList.add('selected');
        } 
      }
      // Mark both players as selected once they make their selections
    if (player === playerOne) {
        playerOneSelected = true;
      } else {
        playerTwoSelected = true;
      }
      // Gray out and disable the avatars of both players after their selections
    if (playerOneSelected && playerTwoSelected) {
        for (const div of characterDivs) {
            if (!div.classList.contains('selected')){
                div.classList.add('disabled');
            }
        
        }
        avatarSelectionEnabled = false; // Disable further avatar selection
      }
    }
  }
  

       // Character selection
       let currentPlayer = playerOne;
       let avatarSelectionEnabled = true; // Flag to enable/disable avatar selection
       const characterDivs = document.querySelectorAll('.character_item');
          for (const div of characterDivs) {
             div.addEventListener('click', function() {
               selectCharacter(currentPlayer, div);
               currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
                // Check if both players have made their selections
      if (playerOne.avatar && playerOne.name && playerTwo.avatar && playerTwo.name) {
        avatarSelectionEnabled = false; // Disable further avatar selection
      }
       });
     }

    // next button to proceed to the game section
    const nextButton = document.getElementById('game-section-btn');
    nextButton.addEventListener('click', function(){
        if (playerOne.avatar && playerTwo.avatar) {
            // Check if both players have selected avatars
            showGameSection(); // Show the game section (You need to define the showGameSection function)
          } else {
            // Display a message to ask both players to complete their selections
            alert('Please select avatars and enter names for both players.');
            console.log(playerOne);
            console.log(playerTwo);
          }
    })

})




    
    

   

 