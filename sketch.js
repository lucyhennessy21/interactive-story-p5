// Lucy Hennessy
// Creative Coding
// December 2024
// My project is a take on the interactive story option. I wanted to create a day in my life story that gives the user choices that I regularly face every day. I put in most of my daily activities, with other options that are more random choices. I used media like photos and sounds to make the story more understandable, and make it so that the user feels like they are actually there. It was difficult to get all of my pictures and sounds in because I had so many.

// Declare global variables
let pages = [];
let currentPageNum = 0;
let previousPageNum = 0;

// Arrays to hold images and sounds
let images = [];
let sounds = [];

function preload() {
  // Load background images
  images[0] = loadImage("title.jpg"); // Title page
  images[1] = loadImage("morning.jpg"); // Morning
  images[2] = loadImage("kitchen.jpeg"); // Kitchen
  images[3] = loadImage("snooze.jpg"); // Snoozing
  images[4] = loadImage("refresher.jpg"); // Refresher
  images[5] = loadImage("breakfast.jpg"); // Breakfast
  images[6] = loadImage("class.jpg"); // Class
  images[7] = loadImage("home.jpg"); // Staying home
  images[8] = loadImage("discussion.jpg"); // Class participation
  images[9] = loadImage("notes.jpg"); // Taking notes
  images[10] = loadImage("project.jpeg"); // Project work
  images[11] = loadImage("work.jpg"); // Work (added)
  images[12] = loadImage("friends.jpeg"); //Spending time with friends
  images[13] = loadImage("reflection.jpg"); //Reflection
  images[14] = loadImage("restaurant.jpeg"); //Dinner With friends

  // Load sounds
  sounds[1] = loadSound("clock-alarm-8761.mp3"); // Morning
  sounds[2] = loadSound("sound-effect-004-frying-egg-kitchen-263594.mp3"); // Kitchen sounds
  sounds[3] = loadSound("snore-250959.mp3"); // Snoozing

  sounds[4] = loadSound("ambience-coffee-shop-1-49769.mp3"); // Coffee
  sounds[5] = loadSound("hotel-breakfast-73079.mp3"); // Breakfast
  sounds[6] = loadSound("classroom-sounds-98343.mp3"); // Classroom
  sounds[7] = loadSound("keyboard-typing-5997.mp3"); // Staying home

  sounds[8] = loadSound("people-chatting-at-an-outdoors-restaurant-130902.mp3"); // Class discussion
  sounds[9] = loadSound("pencil-29272.mp3"); // Taking notes
  sounds[10] = loadSound("group-talk-of-a-crowd-99763.mp3"); // Project work

  sounds[11] = loadSound("restaurant-40843.mp3"); // Work
  sounds[12] = loadSound("shopping-cart-rattle-34651.mp3"); // Friends

  sounds[13] = loadSound("rainy-window-sleep-sounds-12-asmr-242741.mp3"); // Reflection
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define global layout variables
  pageMarginLeft = windowWidth * 0.1;
  pageMarginRight = pageMarginLeft;
  pageMarginTop = pageMarginLeft;
  middleMargin = windowHeight * 0.2;
  contentWidth = windowWidth - pageMarginLeft - pageMarginRight;
  pageTextHeight = windowHeight * 0.4;
  choicesHeight = windowHeight * 0.2;

  pageTextX = pageMarginLeft;
  pageTextY = pageMarginTop;

  choicesTextX = pageMarginLeft;
  choicesTextY = pageMarginTop + pageTextHeight + middleMargin;

  // Defining each page
  pages[0] = {
    pageText: "A Day in the Life\nAn Interactive Story by Lucy Hennessy",
    choices: "To begin press [1]",
    consequences: [1],
    bgImage: 0,
  };

  pages[1] = {
    pageText: "Your alarm rings. It's 7:00 AM.\nDo you hit snooze or get up?",
    choices:
      "Press [1] to get up;\nPress [2] to snooze;\nPress [b] to go back.",
    consequences: [2, 3],
    bgImage: 1,
    bgSound: 1,
  };

  pages[2] = {
    pageText:
      "You get up, stretch, and head to the kitchen.\nDo you make coffee or eat breakfast?",
    choices:
      "Press [1] for refresher;\nPress [2] for breakfast;\nPress [b] to go back.",
    consequences: [4, 5],
    bgImage: 2,
    bgSound: 2,
  };

  pages[3] = {
    pageText:
      "You snooze and wake up late!\nDo you rush to get ready or skip class?",
    choices: "Press [1] to rush;\nPress [2] to skip;\nPress [b] to go back.",
    consequences: [6, 7],
    bgImage: 3,
    bgSound: 3,
  };

  pages[4] = {
    pageText: "You make a refresher from Starbucks.\nTime to head to class.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [8],
    bgImage: 4,
    bgSound: 4,
  };

  pages[5] = {
    pageText:
      "You eat a quick breakfast of the Costco mexican bowls. The fuel helps you focus later.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [8],
    bgImage: 5,
    bgSound: 5,
  };

  pages[6] = {
    pageText:
      "You rush to get ready and make it just in time.\nYour professor starts the lecture.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [8],
    bgImage: 6,
    bgSound: 6,
  };

  pages[7] = {
    pageText:
      "You skip class and stay home.\nNow you feel a bit guilty. What's next?",
    choices:
      "Press [1] to catch up on work;\nPress [2] to relax;\nPress [b] to go back.",
    consequences: [9, 10],
    bgImage: 7,
    bgSound: 7,
  };

  pages[8] = {
    pageText:
      "In class, your professor discusses an interesting topic.\nDo you participate or take notes quietly?",
    choices:
      "Press [1] to participate;\nPress [2] to take notes;\nPress [b] to go back.",
    consequences: [11, 12],
    bgImage: 6,
    bgSound: 6,
  };

  pages[9] = {
    pageText: "You catch up on work at home. It feels productive but lonely.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [13],
    bgImage: 7,
    bgSound: 7,
  };

  pages[10] = {
    pageText:
      "You relax at home. It's nice to unwind but you fall behind on tasks.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [13],
    bgImage: 7,
    bgSound: 7,
  };

  pages[11] = {
    pageText:
      "You engage in the class discussion and feel good about contributing.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [13],
    bgImage: 8,
    bgSound: 8,
  };

  pages[12] = {
    pageText:
      "You take thorough notes and feel well-prepared for the next assignment.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [13],
    bgImage: 9,
    bgSound: 9,
  };

  pages[13] = {
    pageText:
      "The day is winding down.\nDo you work on a project or spend time with friends?",
    choices:
      "Press [1] for project;\nPress [2] for friends;\nPress [b] to go back.",
    consequences: [14, 15],
    bgImage: 10,
    bgSound: 10,
  };

  pages[14] = {
    pageText:
      "It's 3:00 PM, and you're done with class.\nDo you have work tonight?",
    choices: "Press [1] for yes, you have work;\nPress [2] for no, you relax.",
    consequences: [17, 18],
    bgImage: 11,
    bgSound: 11,
  };

  pages[15] = {
    pageText:
      "You spend time with friends, shopping and having fun.\nWhat do you do next?",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [19],
    bgImage: 12,
    bgSound: 12,
  };

  pages[16] = {
    pageText:
      "You work on a project. It's challenging, but you make good progress.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [19],
    bgImage: 13,
    bgSound: 13,
  };

  pages[17] = {
    pageText: "You finish your work and head to dinner with friends.",
    choices: "Press [1] to continue;\nPress [b] to go back.",
    consequences: [19],
    bgImage: 14,
    bgSound: 8,
  };

  pages[18] = {
    pageText: "You finish your project, and it's time to relax and reflect.",
    choices: "Press [1] to reflect;\nPress [b] to go back.",
    consequences: [19],
    bgImage: 13,
    bgSound: 13,
  };

  pages[19] = {
    pageText:
      "The day ends, and you think back on your experiences. It's time to sleep.",
    choices: "Press [1] to finish;\nPress [b] to go back.",
    consequences: [20],
    bgImage: 13,
    bgSound: 13,
  };
  pages[20] = {
    pageText: "The End!",
    choices: "Press [1] to restart",
    consequences: [0],
    bgImage: [0],
  };
}
function draw() {
  background(255);
  // Helping load in my media according to its specific page
  let page = pages[currentPageNum];
  if (page.bgImage !== undefined) {
    image(images[page.bgImage], 0, 0, windowWidth, windowHeight);
  }

  // Organizing the text, changing the size and position
  stroke(0);
  strokeWeight(0);
  fill(255, 200);
  // Add padding around the text
  rect(pageTextX - 10, pageTextY - 10, contentWidth + 20, pageTextHeight + 20);
  // Draw the text
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0); // Black text color
  text(page.pageText, pageTextX, pageTextY, contentWidth, pageTextHeight);

  // Setting styles for the choices text border
  stroke(0);
  fill(255, 200);
  rect(
    choicesTextX - 10,
    choicesTextY - 10,
    contentWidth + 20,
    choicesHeight + 20
  );

  // Drawing the choices text
  textSize(18);
  fill(0);
  text(page.choices, choicesTextX, choicesTextY, contentWidth, choicesHeight);
}
function playMediaForPage(pageNum) {
  sounds.forEach((sound, i) => {
    if (sound.isPlaying()) sound.stop();
  });

  let pageSound = pages[pageNum].bgSound;
  if (pageSound !== undefined && sounds[pageSound]) {
    sounds[pageSound].loop();
  }
}

function keyPressed() {
  // Making it interactive with the keyboard
  let page = pages[currentPageNum];
  if (key === "1") {
    previousPageNum = currentPageNum;
    currentPageNum = page.consequences[0];
  } else if (key === "2") {
    previousPageNum = currentPageNum;
    currentPageNum = page.consequences[1];
  } else if (key === "b") {
    currentPageNum = previousPageNum;
  }
  playMediaForPage(currentPageNum);
}
