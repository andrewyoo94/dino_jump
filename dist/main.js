/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dino.js":
/*!*********************!*\
  !*** ./src/dino.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Dino\n/* harmony export */ });\nconst CONSTANTS = {\n    DINO_WIDTH: 70,\n    DINO_HEIGHT: 72,\n    GRAVITY: 0.25,\n    TERMINAL_VEL: 10,\n    JUMP_SPEED: 12,\n    FRAME_X: 0,\n    FRAME_Y: 0\n};\n\nconst dinoSprite = new Image();\ndinoSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_sprite.png\";\n\nconst dinoLeftSprite = new Image();\ndinoLeftSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_left.png\";\n\nclass Dino {\n\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n        this.x = 205;\n        this.y = 450;\n        this.vel = 0;\n        this.width = CONSTANTS.DINO_WIDTH;\n        this.height = CONSTANTS.DINO_HEIGHT;\n        this.direction = \"\";\n    }\n\n    drawDino(ctx) { \n        // ctx.fillStyle = \"grey\";\n        // ctx.fillRect(this.x, this.y, CONSTANTS.DINO_WIDTH, CONSTANTS.DINO_HEIGHT);\n        \n        if(this.direction===\"left\") {\n            ctx.drawImage(dinoLeftSprite, 411 + (CONSTANTS.FRAME_X * 88), 6, 88, 94, this.x, this.y, 70, 75);\n        } else {\n            ctx.drawImage(dinoSprite, 1678 + (CONSTANTS.FRAME_X * 88), 6, 88, 94, this.x, this.y, 70, 75);\n        }\n    }\n\n    moveDino() {\n        //for each frame, the bird should move by it's current velocity\n        //velocity is 'pixels per frame', so each frame it should update position by vel\n        this.y += this.vel;\n        //the acceleration of gravity is in pixels per second per second\n        //so each second, it changes the velocity by whatever the gravity constant is\n        this.vel += CONSTANTS.GRAVITY;\n        //we set a 'terminal velocity', a maximum speed the bird can travel\n        //this keeps the game from becoming too wild because the bird is moving too fast to control\n        if (Math.abs(this.vel) > CONSTANTS.TERMINAL_VEL) {\n            //if the terminal velocity is exceeded, we set it to the terminal velicty\n            if (this.vel > 0) {\n                this.vel = CONSTANTS.TERMINAL_VEL;\n            } else {\n                this.vel = CONSTANTS.TERMINAL_VEL * -1;\n            }\n        }\n    }\n\n    jump() {\n        //if this were a more realistic bird simulation, we would be adding to the velocity\n        //instead of just assigning it outright\n        //to make the experience more fun and 'bouncy' we just set it directly\n        this.vel = -1 * (this.vel + CONSTANTS.JUMP_SPEED);\n    }\n\n    animate(ctx) {\n        this.moveDino();\n\n        this.drawDino(ctx);\n    }\n\n    controlDino(direction) {\n        let acc = 0;\n\n        if(direction==\"left\" && this.x > 35) {\n            this.direction=\"left\";\n            \n            acc = 9;\n\n            this.x -= acc;\n            CONSTANTS.FRAME_X += 1;\n            \n            if(CONSTANTS.FRAME_X == 4) {\n                CONSTANTS.FRAME_X = 0;\n            }\n        } \n\n        if(direction==\"right\" && this.x < 430) {\n            this.direction = \"right\";\n            acc = 9;\n\n            this.x += acc;\n            CONSTANTS.FRAME_X += 1;\n            if (CONSTANTS.FRAME_X == 4) {\n                CONSTANTS.FRAME_X = 0;\n            }\n        }\n    }\n\n    isOutOfBounds() {\n        if (this.y + CONSTANTS.DINO_HEIGHT > 640) {\n            return true;\n        };\n    };\n\n    // reduceGravity() {\n    //     this.vel += 0.002;\n    // }\n}\n\n\n//# sourceURL=webpack://trex_jump/./src/dino.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Game\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _dino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dino */ \"./src/dino.js\");\n;\n\n\nconst CONSTANTS = {\n    SCORE_WIDTH: 20\n};\n\nconst scoreSprite = new Image();\nscoreSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_sprite.png\";\n\nconst topBorderSprite = new Image();\ntopBorderSprite.src = \"/home/andrew/Desktop/dino_jump/img/cactus.png\";\n\nvar jumpAudio = new Audio();\nif (jumpAudio.canPlayType(\"audio/mp3\")) {\n    jumpAudio = new Audio(\"/home/andrew/Desktop/dino_jump/sounds/jump.mp3\");\n} else {\n    jumpAudio = new Audio(\"/home/andrew/Desktop/dino_jump/sounds/jump.wav\");\n}\n\nvar deathAudio = new Audio();\nif (deathAudio.canPlayType(\"audio/mp3\")) {\n    deathAudio = new Audio(\"/home/andrew/Desktop/dino_jump/sounds/death.mp3\");\n} else {\n    deathAudio = new Audio(\"/home/andrew/Desktop/dino_jump/sounds/death.wav\");\n}\n\nclass Game {\n    constructor(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        this.registerEvents();\n        this.score = 0;\n        this.start_game = false;\n        \n        this.scorePlaceValues = [\n            Math.floor(this.score % 10),\n            Math.floor(this.score / 10 % 10),\n            Math.floor(this.score / 100 % 10),\n            Math.floor(this.score / 1000 % 10),\n            Math.floor(this.score / 10000 % 10)\n        ];\n        \n        this.restart();\n    } \n\n    drawTopBorder(ctx) {\n        ctx.drawImage(\n            titleSprite,\n            1000, 2,  //sX, sY      lessen height to move line up\n            480, 24,  //           lessen this height after to shorten bottem\n            0, 0,\n            480, 24\n        )\n    }\n\n    bonusPoints() {\n        this.score += 1;\n    }\n\n    increaseDifficulty() {\n        this.level.cactus.push(this.level.newCactus());\n    }\n\n    updateScore() {\n        this.scorePlaceValues = [\n            Math.floor(this.score / 10000 % 10),\n            Math.floor(this.score / 1000 % 10),\n            Math.floor(this.score / 100 % 10),\n            Math.floor(this.score / 10 % 10),\n            Math.floor(this.score % 10)\n        ];\n    }\n\n\n    // CHANGEPLACEMENT \n    drawScore(ctx) {\n        for(let i = 0; i < 5; i++) {\n            ctx.drawImage(\n                scoreSprite, \n                1294 + (CONSTANTS.SCORE_WIDTH * this.scorePlaceValues[i]), 2,  //sX, sY\n                18, 21, \n                this.dimensions.width - (125) + (25 * i), 10, \n                18, 21\n            )\n        }\n    }\n\n    isGameOver() {\n        return (\n            this.dino.isOutOfBounds() || this.level.collidesWith(this.dino) === \"cactus\"\n        );\n    }\n\n    // CHANGEPLACEMENT\n    drawGameOver(ctx) {\n        ctx.drawImage(\n            scoreSprite,\n            1294, 29,\n            381, 21,\n            77.5, 100,\n            381, 21\n        );\n\n        ctx.drawImage(\n            scoreSprite,\n            2, 2,\n            72, 64,\n            232, 175,\n            72, 64\n        );\n    }\n    \n    animate() {\n        this.level.animate(this.ctx);\n        \n        if (this.level.start_game === true) {\n            this.dino.animate(this.ctx);\n            // this.drawTopBorder(this.ctx);\n            this.drawScore(this.ctx);\n            this.score += 0.2;\n            if(this.level.bonus) {\n                this.bonusPoints();\n                this.level.bonus = false;\n            }\n            this.updateScore();\n            \n            if (this.level.collidesWith(this.dino)) {\n                this.dino.jump();\n                jumpAudio.play();\n            }\n\n            if (this.isGameOver()) {\n                deathAudio.play();\n                this.drawGameOver(this.ctx);\n                this.running = false;\n            }\n        \n        }\n\n        if (this.running) {\n            requestAnimationFrame(this.animate.bind(this));\n        }\n    }\n\n    restart() {\n        this.running = true;\n        this.score = 0;\n        \n        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n        this.dino = new _dino__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n        \n        this.animate();\n    }\n    \n    play() {\n        this.running = true;\n        this.animate();\n    }\n\n    registerEvents() {\n        this.boundClickHandler = this.input.bind(this);\n        document.addEventListener(\"keydown\", this.boundClickHandler);\n        document.addEventListener(\"keyup\", this.boundClickHandler);\n    }\n\n    input(event) {\n        let leftKey = event.keyCode === 65 || event.keyCode === 37; // A or Arrow_Left\n        let rightKey = event.keyCode === 68 || event.keyCode === 39; // D or Arrow_Right\n        let spaceKey = event.keyCode === 32 // Spacebar\n\n        if (leftKey) {\n            this.dino.controlDino(\"left\");\n        }\n        if (rightKey) {\n            this.dino.controlDino(\"right\");\n        }\n\n        if (event.type === \"keyup\" && ( leftKey || rightKey)) {\n            this.dino.controlDino(\"\")\n        }\n\n        if (this.running === false && spaceKey) {\n            this.restart();\n        }\n    }\n}\n\n//# sourceURL=webpack://trex_jump/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const canvas = document.getElementById('game');\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n});\n\n//# sourceURL=webpack://trex_jump/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Level\n/* harmony export */ });\nconst CONSTANTS = {\n    PLAT_WIDTH: 100,\n    PLAT_HEIGHT: 15,\n    PLAT_START_HEIGHT: 450,\n    MIN_PLAT_DIST: 330,\n    PLAT_SPEED: 1,\n    BIRD_WIDTH: 74,\n    BIRD_HEIGHT: 54,\n    BIRD_SPEED: 2,\n    FRAME_X: 0,\n    COUNTER: 0,\n    STARTING_SX: 260,\n    STARTING_SX_LEFT: 1997,\n    CLOUD_SPEED: 0.5,\n    PLAT_ARR: [1, 103, 205, 307],\n    PLAT_COUNTER: 0,\n    DIFFICULTY_TIMER: 0,\n    BORDER_WIDTH: 37,\n    BORDER_HEIGHT: 2385,\n    BORDER_SPEED: 3\n};\n\nconst sideBorderSprite = new Image();\nsideBorderSprite.src = \"/home/andrew/Desktop/dino_jump/img/border.png\";\n\nconst birdSprite = new Image();\nbirdSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_sprite.png\";\n\nconst birdLeftSprite = new Image();\nbirdLeftSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_left.png\";\n\nconst deadBirdSprite = new Image();\ndeadBirdSprite.src = \"/home/andrew/Desktop/dino_jump/img/deadBird.png\";\n\nconst cloudSprite = new Image();\ncloudSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_sprite.png\";\n\nconst groundSprite = new Image();\ngroundSprite.src = \"/home/andrew/Desktop/dino_jump/img/dino_left.png\";\n\nconst cactusSprite = new Image();\ncactusSprite.src = \"/home/andrew/Desktop/dino_jump/img/cactus.png\";\n\nconst platformSprite = new Image();\nplatformSprite.src = \"/home/andrew/Desktop/dino_jump/img/platforms.png\";\n\nconst titleSprite = new Image();\ntitleSprite.src = \"/home/andrew/Desktop/dino_jump/img/titleSprite.png\";\n\nclass Level {\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n        this.bonus = false;\n        this.start_titleAnimation = false;\n        this.start_game = false;\n        this.registerEvents();\n        \n        this.platforms = [\n            this.startPlat(),\n            this.randomPlat(CONSTANTS.MIN_PLAT_DIST),\n            this.randomPlat(CONSTANTS.MIN_PLAT_DIST / 2),\n            this.randomPlat(CONSTANTS.MIN_PLAT_DIST / 6)\n        ];\n        \n        this.birds = [\n            this.newBird()\n        ];\n        \n        this.clouds = [\n            this.randomCloud(1),\n            this.randomCloud(Math.random() * (12 - 10) + 10),\n            this.randomCloud(Math.random() * (24 - 20) + 20)\n        ];\n\n        this.cactus = [\n            this.newCactus()\n        ];\n\n        this.borderLeft = [\n            this.newBorder(\"left\")\n        ];\n\n        this.borderRight = [\n            this.newBorder(\"right\")\n        ];\n\n        this.title = [\n            this.newTitle()\n        ];\n    }\n\n    newTitle() {\n        const title = {\n            x: 44,\n            y: 0,\n            width: 448,\n            height: 52\n        };\n        return title;\n    }\n\n    drawTitleScreen(ctx, title) {\n\n        ctx.drawImage(\n            titleSprite,\n            0, 0,  //sX, sY      lessen height to move line up\n            498, 52,  //           lessen this height after to shorten bottem\n            title.x, title.y,\n            title.width, title.height\n        )\n    }\n\n    moveTitleScreen() {\n        if (this.title[0].y < 640 && this.start_titleAnimation === true) {\n            this.title[0].y += 3;\n        }\n\n        if(this.title[0].y > 640) {\n            this.title.shift();\n            this.start_game = true;\n        }\n    }\n\n    registerEvents() {\n        this.boundClickHandler = this.input.bind(this);\n        document.addEventListener(\"keydown\", this.boundClickHandler);\n    }\n\n    input(event) {\n        let spaceKey = event.keyCode === 32 // Spacebar\n\n        if (this.start_game === false && spaceKey) {\n            this.start_titleAnimation = true;\n        }\n\n        // if (spaceKey) { \n        //     this.start_titleAnimation = true;\n        // }\n    }\n\n    drawBorder(ctx) {\n        this.eachBorderLeft(function (border) {\n            ctx.drawImage(\n                sideBorderSprite,\n                12, 12,  //sX, sY      \n                37, 2380,  // sW, sH\n                border.x, border.y,\n                border.width, border.height\n            );\n        });\n\n        this.eachBorderRight(function (border) {\n            ctx.drawImage(\n                sideBorderSprite,\n                90, 8,  //sX, sY       \n                138, 2380,  // sW, sH\n                border.x, border.y,\n                border.width, border.height\n            );\n        });\n    }\n\n    // CHANGEPLACEMENT\n    newBorder(side, dY) {\n        let dX = side === \"left\" ? -1 : 500;\n        let width = side === \"left\" ? 37 : 138\n        dY = (typeof dY !== 'undefined') ? dY : -1750;\n\n        const border = {\n            x: dX,\n            y: dY,\n            width: width,\n            height: CONSTANTS.BORDER_HEIGHT\n        }\n        return border;\n    }\n\n    eachBorderLeft(callback) {\n        this.borderLeft.forEach(callback.bind(this));\n    }\n\n    eachBorderRight(callback) {\n        this.borderRight.forEach(callback.bind(this));\n    }\n\n    moveBorders() {\n        this.eachBorderLeft(function (border) {\n            border.y += CONSTANTS.BORDER_SPEED;\n        });\n\n        this.eachBorderRight(function (border) {\n            border.y += CONSTANTS.BORDER_SPEED;\n        });\n\n        //if top of border drops into frame push new border\n        if (this.borderLeft[0].y + 640 >= 640 && this.borderLeft.length < 2) {\n            this.borderLeft.push(this.newBorder(\"left\", -2380));\n        }\n\n        if (this.borderRight[0].y + 640 >= 640 && this.borderRight.length < 2) {\n            this.borderRight.push(this.newBorder(\"right\", -2380));\n        }\n\n        if (this.borderLeft[0].y >= 640) {\n            this.borderLeft.shift();\n            this.borderRight.shift();\n        }\n    }\n    \n    eachCactus(callback) {\n        this.cactus.forEach(callback.bind(this));   \n    }\n\n    drawCactus(ctx) {\n        this.eachCactus(function(cactus) {\n            if(cactus.timer % 6 && cactus.timer < 50) {\n                ctx.drawImage(\n                    cactusSprite,\n                    1791,\n                    60,\n                    32,\n                    70,\n                    cactus.x,\n                    cactus.y,\n                    cactus.width,\n                    cactus.height\n                );\n            } \n            if(cactus.timer >= 50) {\n                ctx.drawImage(\n                    cactusSprite,\n                    1791,\n                    60,\n                    32,\n                    70,\n                    cactus.x,\n                    cactus.y,\n                    cactus.width,\n                    cactus.height\n                );\n            }\n            cactus.timer += 1;\n        });\n    } \n\n    // CHANGEPLACEMENT\n    newCactus() {\n        let randX = Math.floor(Math.random() * (460 - 35 + 1) + 35);\n\n        const cactus = {\n            x: randX,\n            y: 0,\n            width: 37,\n            height: 63,\n            timer: 0\n        }\n        return cactus; \n    }\n\n    moveCactus() {\n        this.eachCactus(function (cactus) {\n            if(cactus.timer > 55) {\n                cactus.y += 7;\n            }\n        });\n\n        if (this.cactus[0].y > this.dimensions.height) {\n            this.cactus.shift();\n            this.cactus.push(this.newCactus());\n        };\n\n        if (CONSTANTS.DIFFICULTY_TIMER === 5) {\n            this.cactus.push(this.newCactus());\n            CONSTANTS.DIFFICULTY_TIMER = 6;\n        };\n\n        if (CONSTANTS.DIFFICULTY_TIMER === 50) {\n            this.cactus.push(this.newCactus());\n            CONSTANTS.DIFFICULTY_TIMER = 51;\n        };\n    }\n        \n    moveBirds() {\n        this.eachBird(function (bird) {\n            if(bird.pos == \"left\") {\n                bird.x += CONSTANTS.BIRD_SPEED;\n            } if(bird.pos == \"right\") {\n                bird.x -= CONSTANTS.BIRD_SPEED;\n            } if(bird.pos == \"dead\") {\n                bird.y += 7;\n            }\n        })\n        \n        if (this.birds[0].x + CONSTANTS.BIRD_WIDTH < 0 || this.birds[0].x > 525 || this.birds[0].y > this.dimensions.height) {\n            this.birds.shift();\n            this.birds.push(this.newBird());\n        }\n    }\n    \n    eachBird(callback) {\n        this.birds.forEach(callback.bind(this));\n    }\n    \n    // 60 y for platform\n\n    newBird() {\n        let dX = Math.random() < 0.5 ? -74 : 515;\n        let randY = Math.floor(Math.random() * (586 - 90 + 1) + 90);    // returns a random integer from 25 to 586\n\n        let pos = \"\"\n        \n        if(dX === -74) {\n            pos = \"left\";\n        } else {\n            pos = \"right\";\n        }\n         \n        const bird = {\n            x: dX,\n            y: randY,\n            width: CONSTANTS.BIRD_WIDTH,\n            height: CONSTANTS.BIRD_HEIGHT,\n            pos: pos\n        }\n        return bird;\n    }\n    \n    drawBirds(ctx) {\n        if(CONSTANTS.COUNTER < 5) {\n            CONSTANTS.STARTING_SX = 260;\n            CONSTANTS.STARTING_SX_LEFT = 1997;\n        } else {\n            CONSTANTS.STARTING_SX = 352;\n            CONSTANTS.STARTING_SX_LEFT = 2089;\n        }\n        \n        this.eachBird(function (bird) {\n            if(bird.pos == \"left\") {\n                ctx.drawImage(\n                    birdLeftSprite,\n                    CONSTANTS.STARTING_SX_LEFT,\n                    14,\n                    92,\n                    70,\n                    bird.x,\n                    bird.y,\n                    CONSTANTS.BIRD_WIDTH,\n                    CONSTANTS.BIRD_HEIGHT\n                );\n            } if(bird.pos == \"right\") {\n                ctx.drawImage(\n                    birdSprite, \n                    CONSTANTS.STARTING_SX, \n                    14, \n                    92, \n                    70, \n                    bird.x, \n                    bird.y,\n                    CONSTANTS.BIRD_WIDTH, \n                    CONSTANTS.BIRD_HEIGHT\n                );\n            } if (bird.pos == \"dead\") {\n                this.bonus = true;\n                ctx.drawImage(\n                    deadBirdSprite,\n                    2,\n                    2089,\n                    80,\n                    92,\n                    bird.x,\n                    bird.y,\n                    64,\n                    74\n                );\n            }\n        });\n\n        CONSTANTS.COUNTER += 1;\n        if (CONSTANTS.COUNTER >= 10) {\n            CONSTANTS.COUNTER = 0;\n        }\n    }\n\n    randomCloud(buffer) {\n        let randX = Math.floor(Math.random() * 450);\n        let y = -30 * buffer; //draw cloud above canvas so it drops down into view\n\n        const cloud = {\n            x: randX,\n            y: y,\n            width: 84,\n            height: 27\n        }\n        return cloud;\n    }\n\n    eachCloud(callback) {\n        this.clouds.forEach(callback.bind(this));\n    }\n    \n    moveClouds() {\n        this.eachCloud(function (cloud) {\n            cloud.y += CONSTANTS.CLOUD_SPEED;\n        });\n\n        //if a cloud has left the bottom of the screen add a new one to the end\n        if (this.clouds[0].y >= this.dimensions.height) {\n            this.clouds.shift();\n            this.clouds.push(this.randomCloud(1));\n        }\n    }\n\n    drawClouds(ctx) {\n        this.eachCloud(function (cloud) {\n\n            if(cloud.y >= 15) {\n                ctx.drawImage(\n                    cloudSprite,\n                    174,\n                    2,\n                    cloud.width,\n                    cloud.height,\n                    cloud.x,\n                    cloud.y,\n                    cloud.width,\n                    cloud.height\n                );\n            }\n        });\n    }\n\n    startPlat() {\n        const plat = {\n            x: 190,\n            y: 550,\n            width: CONSTANTS.PLAT_WIDTH,\n            height: CONSTANTS.PLAT_HEIGHT,\n            counter: 0\n        }\n\n        CONSTANTS.PLAT_COUNTER += 1;\n        \n        return plat\n    }\n    \n    randomPlat(minPlatDistance) {\n        let randX = Math.floor(Math.random() * (400 - 35) + 35);\n        let randY = Math.floor(Math.random() * (100 - 50)) + minPlatDistance;\n\n        if (CONSTANTS.PLAT_COUNTER > 3) {\n            CONSTANTS.PLAT_COUNTER = 0;\n        }\n        \n        const plat = {\n            x: randX,\n            y: randY,\n            width: CONSTANTS.PLAT_WIDTH,\n            height: CONSTANTS.PLAT_HEIGHT,\n            counter: CONSTANTS.PLAT_COUNTER\n        }\n\n        CONSTANTS.PLAT_COUNTER += 1;\n\n        return plat;\n    }\n    \n    pushNewPlat() {\n        let randX = Math.floor(Math.random() * (400 - 35) + 35);\n\n        if (CONSTANTS.PLAT_COUNTER > 3) {\n            CONSTANTS.PLAT_COUNTER = 0;\n        }\n        \n        const plat = {\n            x: randX,\n            y: -15,\n            width: CONSTANTS.PLAT_WIDTH,\n            height: CONSTANTS.PLAT_HEIGHT,\n            counter: CONSTANTS.PLAT_COUNTER\n        }\n\n        CONSTANTS.PLAT_COUNTER += 1;\n        CONSTANTS.DIFFICULTY_TIMER += 1;\n\n        return plat;\n    }\n    \n    eachPlat(callback) {\n        this.platforms.forEach(callback.bind(this));\n    }\n \n    drawPlatforms(ctx) {\n        this.eachPlat(function (plat) {\n\n            let x = CONSTANTS.PLAT_ARR[plat.counter]\n\n            ctx.drawImage(\n                platformSprite,\n                x,\n                1,\n                100,\n                15,\n                plat.x,\n                plat.y,\n                plat.width,\n                plat.height\n            );\n            \n        }); \n    }\n\n    movePlats() {\n        this.eachPlat(function (plat) {\n            plat.y += CONSTANTS.PLAT_SPEED;\n        });\n\n        if (this.platforms[0].y >= this.dimensions.height) {\n            this.platforms.shift();\n            const newY = this.platforms[1].y + CONSTANTS.MIN_PLAT_DIST;\n            this.platforms.push(this.pushNewPlat());\n        }\n    }\n    \n    drawBackground(ctx) {\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    }\n\n    collidesWith(dino) {\n        //this function returns true if the the rectangles overlap\n        const platformCheck = (plat, dino) => {\n            //check that they don't overlap in the x axis\n            if(plat.x > dino.x + dino.width || plat.x + plat.width < dino.x) {\n                return false;\n            }\n\n            //check that they don't overlap in the y axis\n            if (dino.y + 60 > plat.y + plat.height || dino.y + 60 < plat.y ) {\n                return false;\n            }\n            \n            return true;\n        };\n        \n        const cactusCheck = (cactus, dino) => {\n            //check that they don't overlap in the x axis\n            if (cactus.x + 20 > dino.x + dino.width || cactus.x + cactus.width - 20 < dino.x) {\n                return false;\n            }\n\n            //check that they don't overlap in the y axis\n            if (dino.y + 25 > cactus.y + cactus.height || dino.y + dino.height < cactus.y) {\n                return false;\n            }\n\n            return true;\n        };\n\n        let collision = false;\n\n        this.eachPlat((plat) => {\n            if (platformCheck(plat, dino)) { \n                collision = true; \n            } \n        });\n\n        this.eachBird((bird) => {\n            if (platformCheck(bird, dino)) {\n                collision = true;\n                bird.pos = \"dead\";\n            }\n        });\n\n        this.eachCactus((cactus) => {\n            if (cactus.timer > 55) {\n                if (cactusCheck(cactus, dino)) {\n                    collision = \"cactus\";\n                }\n            }\n        });\n        \n        return collision;\n    }\n\n    // deathFromBirdCheck(dino) {\n    //     // const check = (bird, dino) => {\n    //     //     // let dinoTopBirdBottom = \n    //     //     //     bird.y + CONSTANTS.BIRD_HEIGHT > dino.y &&\n    //     //     //     (bird.x < dino.x + dino.width || bird.x + CONSTANTS.BIRD_WIDTH > dino.x);\n\n    //     //     const adjustedHitboxBottom = 2;\n    //     //     const adjustedHitboxRight = 2;\n            \n    //     //     // if (bird.y + CONSTANTS.BIRD_HEIGHT - adjustedHitbox > dino.y) {\n    //     //     //     debugger\n    //     //     //     return true;\n    //     //     // }\n\n    //     //     let testCollision = 0;\n    //     //     let test1 = 0;\n    //     //     let test2 = 0;\n    //     //     let test3 = 0;\n    //     //     let test4 = 0;\n\n    //     //     if (bird.y + CONSTANTS.BIRD_HEIGHT - 25 > dino.y && dino.y > bird.y + CONSTANTS.BIRD_HEIGHT - 25) {\n    //     //         testCollision += 1; \n    //     //         test1 += 1;\n    //     //     }\n\n    //     //     if (bird.x < dino.x + dino.width) {\n    //     //         testCollision += 1;\n    //     //         test2 += 1;\n    //     //     }\n\n    //     //     if (bird.x + CONSTANTS.BIRD_WIDTH > dino.x) {\n    //     //         testCollision += 1;\n    //     //         test3 += 1;\n    //     //     }\n\n    //     //     // if ( bird.y < (dino.y + 50) < bird.y + 60) {\n    //     //     //     test4 += 1;\n    //     //     //     testCollision += 1;\n    //     //     // }\n\n    //     //     // if (dinoTopBirdBottom) {\n    //     //     //     debugger\n    //     //     //     return true;\n    //     //     // }\n\n    //     //     if (testCollision === 3) {\n    //     //         debugger\n    //     //         console.log(test1,test2,test3,test4)\n    //     //         return true;\n    //     //     }\n\n    //     //     return false;\n    //     // };\n\n\n    //     const check = (bird, dino) => {\n\n    //         const adjustedHitboxRightOfBird = 10;\n\n    //         //check that they don't overlap in the x axis\n    //         if (bird.x + adjustedHitboxRightOfBird > dino.x + dino.width || bird.x + CONSTANTS.BIRD_WIDTH - adjustedHitboxRightOfBird < dino.x) {\n    //             return false;\n    //         }\n\n    //         //check that they don't overlap in the y axis\n    //         if (dino.y + 25 > bird.y + CONSTANTS.BIRD_HEIGHT || dino.y + dino.height < bird.y - 25) {\n    //             return false;\n    //         }\n\n    //         return true;\n    //     };\n    //     let collision = false;\n\n    //     this.eachBird((bird) => {\n    //         if (check(bird, dino)) {\n    //             collision = true;\n    //         } \n    //         // return check(bird, dino);\n    //     });\n\n    //     return collision;\n    // }\n    \n    animate(ctx) {\n        if (this.start_game === true) {\n            this.drawBackground(ctx);\n            this.drawClouds(ctx);\n            this.drawPlatforms(ctx);\n            this.drawCactus(ctx);\n            this.drawBirds(ctx);\n            this.movePlats();\n            this.moveBirds();\n            this.moveCactus();\n            this.moveClouds();\n            this.moveBorders();\n        }\n        \n        this.drawBorder(ctx);\n\n        if(this.title.length === 1) {\n            this.drawTitleScreen(ctx, this.title[0]);\n\n            // if (this.start_titleAnimation) { \n                this.moveTitleScreen();\n            // }\n        }\n\n    }\n}\n\n//# sourceURL=webpack://trex_jump/./src/level.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;