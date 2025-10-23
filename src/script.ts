// // let gameName : string = "EarthDefender!";
// // console.log(gameName);

// // const CANVAS_WIDTH = 900;
// // const CANVAS_HEIGHT = 500;

// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d");

// // canvas.width = CANVAS_WIDTH;
// // canvas.height = CANVAS_HEIGHT;

// // context.fillStyle = "#141414";  // HexaDecimal Gris foncé
// // context.fillRect(
// //     0,0,            // [x,y] supérieur gauche
// //     CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
// // );

// // context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

// window.onload = main;

// // function main(){
// //     const CANVAS_WIDTH = 900;
// //     const CANVAS_HEIGHT = 500;

// //     const canvas = document.querySelector("canvas");
// //     const context = canvas.getContext("2d");

// //     canvas.width = CANVAS_WIDTH;
// //     canvas.height = CANVAS_HEIGHT;

// //     context.fillStyle = "#141414";  // HexaDecimal Gris foncé
// //     context.fillRect(
// //         0,0,            // [x,y] supérieur gauche
// //         CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
// //     );

// //     const image : HTMLImageElement = document.querySelector("img.alien");
// //     let position = {
// //         x : 0,
// //         y : 0
// //     };
// //     context.drawImage(
// //         image,
// //         position.x,  
// //         position.y,
// //         image.width,
// //         image.height
// //     );
// // }


// window.onload = main;

// function main(){
//     const CANVAS_WIDTH = 900;
// const CANVAS_HEIGHT = 500;

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = CANVAS_WIDTH;
// canvas.height = CANVAS_HEIGHT;

// const alienImg : HTMLImageElement = document.querySelector("img.alien");

// let alienPos = {
//     x : 0,
//     y : 0
// };

// const playerImg : HTMLImageElement = document.querySelector("img.player");

//     const playerPos = {
//     x : CANVAS_WIDTH/2,
//     y : CANVAS_HEIGHT - 100
// };
//   let direction = 0;
// setInterval(()=>{
//     // Clear context
//     context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
//     // Draw back background color
//     context.fillStyle = "#141414";
//     context.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

//     // Draw alien
//     context.drawImage(
//         alienImg,
//         alienPos.x,  
//         alienPos.y,
//         alienImg.width,
//         alienImg.height
//     );

//     context.drawImage(
//         playerImg,
//         playerPos.x,  
//         playerPos.y,
//         playerImg.width,
//         playerImg.height
//     );
//      // Move the alien for the next loop
//     alienPos.y+=1;
// playerPos.x+=10*direction;   

//    // Immobile
// },10); 
// }

// function main() {
//     const CANVAS_WIDTH = 900;
//     const CANVAS_HEIGHT = 500;
//     const canvas = document.querySelector("canvas");
//     canvas.width = CANVAS_WIDTH;
//     canvas.height = CANVAS_HEIGHT;
//     const alienImg: HTMLImageElement = document.querySelector("img.alien");



//     let alienPos = {
//         x: 0,
//         y: 0
//     };
//     // Typescript permet de créer des types à partir des types primitif du langage JavaScript.
//     type Direction = 0 | 1 | -1;
//     let direction: Direction = 0;
//     // Le type Direction ne peut avoir comme valeurs exlusivement 0, 1 ou -1.
//     const context = canvas.getContext("2d");

//     const playerImg: HTMLImageElement = document.querySelector("img.player");
//     const playerPos = {
//         x: CANVAS_WIDTH / 2,
//         y: CANVAS_HEIGHT - 100
//     };

//     const nbAliens: number = 10;
//     const alienImage: HTMLImageElement = document.querySelector("img.alien");

//     const aliens: GameObject[] = [];

//     const starImage: HTMLImageElement = document.querySelector("img.star");

//     const groundImg: HTMLImageElement = document.querySelector("img.sol");

//     const ground = new GameObject(
//         groundImg,
//         { x: 0, y: CANVAS_HEIGHT - groundImg.height }
//     );

//     const missileImg: HTMLImageElement = document.querySelector("img.missile");
//     const missiles: GameObject[] = [];

//     // Game event loop -------------------------//
//     setInterval(() => {
//         // Clear context
//         context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         // Draw back background color
//         context.fillStyle = "#141414";
//         context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


//         // Dessiner le sol
//         context.drawImage(
//             ground.image,
//             ground.position.x,
//             ground.position.y,
//             ground.image.width,
//             ground.image.height
//         );
//         /* Draw and move alien
//         * ...
//         */

//         // Draw and move Player
//         context.drawImage(
//             playerImg,
//             playerPos.x,
//             playerPos.y,
//             playerImg.width,
//             playerImg.height
//         );

//         // Move the player depending on the direction pressed by 
//         // the player
//         // Draw alien
//         context.drawImage(
//             alienImg,
//             alienPos.x,
//             alienPos.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition1 = {
//             x: Math.random() * 500,
//             y: 0
//         };

//         context.drawImage(
//             alienImg,
//             alienPosition1.x,
//             alienPosition1.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition2 = {
//             x: Math.random() * 500,
//             y: 0
//         };

//         context.drawImage(
//             alienImg,
//             alienPosition2.x,
//             alienPosition2.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition3 = {
//             x: Math.random() * 500,
//             y: 0
//         };

//         context.drawImage(
//             alienImg,
//             alienPosition3.x,
//             alienPosition3.y,
//             alienImg.width,
//             alienImg.height
//         );

//         const alienPosition4 = {
//             x: Math.random() * 500,
//             y: 0
//         };
//         context.drawImage(
//             alienImg,
//             alienPosition4.x,
//             alienPosition4.y,
//             alienImg.width,
//             alienImg.height
//         );

//         for (let i = 0; i < 50; i++) {
//             context.drawImage(
//                 starImage,
//                 Math.random() * CANVAS_WIDTH,
//                 Math.random() * CANVAS_HEIGHT,
//                 starImage.width,
//                 starImage.height
//             );
//         }
//         for (const alien of aliens) {
//             context.drawImage(
//                 alien.image,
//                 alien.position.x,
//                 alien.position.y,
//                 alien.image.width,
//                 alien.image.height
//             );
//         }
//         alienPos.y += 1;
//         playerPos.x += 10 * direction;
//     }, 10);

//     // Input Handling--------------------------------//
//     // Key Down
//     document.addEventListener("keydown", (event) => {
//         switch (event.key) {
//             // Go right
//             case "d":
//             case "D":
//                 direction = 1;
//                 break;
//             // Go left
//             case "q":
//             case "Q":
//                 direction = -1;
//                 break;
//             default:
//                 break;
//         }
//     });

//     // Key Released
//     document.addEventListener("keyup", (event) => {
//         switch (event.key) {
//             // Player Stops
//             case "d":
//             case "D":
//             case "q":
//             case "Q":
//                 direction = 0;
//                 break;

//             default:
//                 break;
//         }
//     });
// // Dessiner et déplacer les missiles
// for (const missile of missiles) {
//     missile.position.y -= 5; // Monte vers le haut
//     context.drawImage(
//         missile.image,
//         missile.position.x,
//         missile.position.y,
//         missile.image.width,
//         missile.image.height
//     );
// }

// //le missile qui se déplace avec le joueur
// document.addEventListener("keydown", (event) => {
//     switch (event.key) {
//         case " ":
//             // Crée un missile à la position du joueur
//             missiles.push(
//                 new GameObject(
//                     missileImg,
//                     {
//                         x: playerPos.x + playerImg.width / 2 - missileImg.width / 2,
//                         y: playerPos.y - missileImg.height
//                     }
//                 )
//             );
//             break;

//         case "d":
//         case "D":
//             direction = 1;
//             break;

//         case "q":
//         case "Q":
//             direction = -1;
//             break;
//     }
// });

// --- CLASS GAMEOBJECT --- //
// class GameObject {
//     image: HTMLImageElement;
//     position: Position;
//     constructor(image: HTMLImageElement, position: Position) {
//         this.image = image;
//         this.position = position;
//     }
//     move() {
//         this.position.y += 1; // Par défaut, descend d’un pixel par frame
//     }
// }

// interface Position {
//     x: number;
//     y: number;
// }
// }

// //--- CLASS GAMEOBJECT --- //
// class GameObject {
//     image: HTMLImageElement;
//     position: Position;
//     width: number;
//     height: number;

//     constructor(image: HTMLImageElement, position: Position) {
//         this.image = image;
//         this.position = position;
//         this.width = image.width;
//         this.height = image.height;
//     }

//     move(speed: number = 1) {
//         this.position.y += speed; // Mouvement vertical par défaut
//     }
// }

// interface Position {
//     x: number;
//     y: number;
// }

// // ---------------------------------------------------- //

// window.onload = main;

// function main() {
//     const CANVAS_WIDTH = 900;
//     const CANVAS_HEIGHT = 500;
//     const canvas = document.querySelector("canvas") as HTMLCanvasElement;
//     const context = canvas.getContext("2d")!;
//     canvas.width = CANVAS_WIDTH;
//     canvas.height = CANVAS_HEIGHT;


//     // --- Chargement des images --- //
//     const alienImg: HTMLImageElement = document.querySelector("img.alien")!;
//     const playerImg: HTMLImageElement = document.querySelector("img.player")!;
//     const starImage: HTMLImageElement = document.querySelector("img.star")!;
//     const groundImg: HTMLImageElement = document.querySelector("img.sol")!;
//     const missileImg: HTMLImageElement = document.querySelector("img.missile")!;
//     const ennemiKilled: HTMLImageElement = document.querySelector("ennemi-killed")!;




//     // --- Variables de jeu --- //
//     type Direction = -1 | 0 | 1;
//     let direction: Direction = 0;
//     let gameOver = false;

//     const playerPos = {
//         x: CANVAS_WIDTH / 2 - playerImg.width / 2,
//         y: CANVAS_HEIGHT - playerImg.height - 20
//     };

//     const ground = new GameObject(
//         groundImg,
//         { x: 0, y: CANVAS_HEIGHT - groundImg.height + 90 }

//         // Je ne peux déplacer comme en css il fau faire ici le -50 pour déplacer le sol
//     );

//     const aliens: GameObject[] = [];
//     const missiles: GameObject[] = [];

//     // Génération initiale d’aliens
//     const nbAliens = 10;
//     for (let i = 0; i < nbAliens; i++) {
//         aliens.push(new GameObject(alienImg, {
//             x: Math.random() * (CANVAS_WIDTH - alienImg.width),
//             y: Math.random() * -200
//         }));
//     }

//     // Vies de la Terre
//     let earthLives = 3;

//     //vies du joueur

//     let livesPlayer = 10;
//     // Il faut en tuer 15 pour gagner
//     let ennemiSkilledlive = 15;

//     // --- Boucle de jeu --- //
//     setInterval(() => {
//         // Nettoyer le canvas
//         context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//         context.fillStyle = "#141414";
//         context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


//         // Fond étoilé
//         for (let i = 0; i < 30; i++) {
//             context.drawImage(
//                 starImage,
//                 Math.random() * CANVAS_WIDTH,
//                 Math.random() * CANVAS_HEIGHT,
//                 starImage.width,
//                 starImage.height
//             );
//         }

//         // Sol
//         context.drawImage(
//             ground.image,
//             ground.position.x,
//             ground.position.y,
//             ground.image.width,
//             ground.image.height
//         );

//         // Si plus de vies → afficher Game Over
//         if (livesPlayer <= 0) {
//             gameOver = true;
//             context.fillStyle = "white";
//             context.font = "bold 50px Arial";
//             context.textAlign = "center";
//             context.fillText("💀 GAME OVER 💀", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
//             context.font = "24px Arial";
//             context.fillText("Appuie sur F5 pour rejouer", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
//             return; // stoppe l’affichage
//         }

//         // Si plus de vie pour la Terre Game over
//         if (earthLives <= 0) {
//             gameOver = true;
//             context.fillStyle = "white";
//             context.font = "bold 50px Arial";
//             context.textAlign = "center";
//             context.fillText("💀 GAME OVER 💀", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
//             context.font = "24px Arial";
//             context.fillText("Appuie sur F5 pour rejouer", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
//             return; // stoppe l’affichage
//         }



//         // Si plus de vie des ennemis le joueur gagne
//         if (ennemiSkilledlive <= 0) {
//             gameOver = true;
//             context.fillStyle = "white";
//             context.font = "bold 50px Arial";
//             context.textAlign = "center";
//             context.fillText("🪖  Humans win ! 🪖 ", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
//             context.font = "24px Arial";
//             context.fillText("Appuie sur F5 pour rejouer", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
//             return; // stoppe l’affichage
//         }



//         // Aliens
//         for (let i = aliens.length - 1; i >= 0; i--) {
//             const alien = aliens[i];
//             alien.move(1); // Descente des aliens
//             context.drawImage(
//                 alien.image,
//                 alien.position.x,
//                 alien.position.y,
//                 alien.image.width,
//                 alien.image.height
//             );

//             // Collision alien ↔ sol
//             if (alien.position.y + alien.image.height >= ground.position.y) {
//                 earthLives = Math.max(0, earthLives - 1);
//                 alien.position.y = -alien.image.height;
//                 alien.position.x = Math.random() * (CANVAS_WIDTH - alien.image.width);
//             }

//             // Collision missile ↔ alien
//             for (let j = missiles.length - 1; j >= 0; j--) {
//                 const missile = missiles[j];
//                 if (isColliding(missile, alien)) {
//                     // Supprimer le missile et l’alien touché
//                     missiles.splice(j, 1);
//                     aliens.splice(i, 1);
//                     // Recréer un nouvel alien
//                     aliens.push(new GameObject(alienImg, {
//                         x: Math.random() * (CANVAS_WIDTH - alienImg.width),
//                         y: -alienImg.height
//                     }));
//                     break;
//                 }
//             }
//         }





//         // Missiles
//         for (let i = missiles.length - 1; i >= 0; i--) {
//             const missile = missiles[i];
//             missile.position.y -= 8;
//             context.drawImage(
//                 missile.image,
//                 missile.position.x,
//                 missile.position.y,
//                 missile.image.width,
//                 missile.image.height
//             );

//             // Supprimer les missiles sortis du haut
//             if (missile.position.y + missile.image.height < 0) {
//                 missiles.splice(i, 1);
//             }


//         }




//         // Affichage des vies ("10 ❤️")
//         context.fillStyle = "white";
//         context.font = "24px Arial";
//         context.textAlign = "center";
//         context.fillText(`${livesPlayer} ❤️`, CANVAS_WIDTH / 2, ground.position.y - 20);

//         // Affichage des 3 vies de  la Terre ("3 🌍")
//         context.fillStyle = "white";
//         context.font = "24px Arial";
//         context.textAlign = "right";
//         context.fillText(`${earthLives} 🌍`, 340, 430);


//              // ennemis killed lives position
//             //Si 15 ennemis  tués le joueur passe devant le boss ça après
//         // context.drawImage(
//         //     ennemiKilled.image,
//         //     ennemiKilled.position.x,
//         //     ennemiKilled.position.y,
//         //     ennemiKilled.image.width,
//         //     ennemiKilled.image.height
//         // );


//         // Affichage des 15 vies des aliens ("15 👽 ")
//         context.fillStyle = "white";
//         context.font = "24px Arial";
//         context.textAlign = "right";
//         context.fillText(`${ennemiSkilledlive} ennemiKilled`, 100, 70);



//         // Joueur
//         playerPos.x += 10 * direction;
//         playerPos.x = Math.max(0, Math.min(playerPos.x, CANVAS_WIDTH - playerImg.width));

//         context.drawImage(
//             playerImg,
//             playerPos.x,
//             playerPos.y,
//             playerImg.width,
//             playerImg.height
//         );

//     }, 30);

//     // --- Gestion des touches --- /


//     // quand je tire un missile la musique s'active

//     const shootMusicsound = document.getElementById('shoot-music') as HTMLAudioElement;
//     function shootMusiques() {
//         if (shootMusicsound.paused) {
//             shootMusicsound.currentTime = 0;
//             shootMusicsound.volume = 0.5;
//             shootMusicsound.play();
//         } else {

//             shootMusicsound.currentTime = 0;
//         }

//         document.addEventListener('keydown', shootMusiques);
//     }

//     document.addEventListener("keydown", (event) => {
//         if (gameOver) return; // Bloque le contrôle après game over

//         switch (event.key) {
//             case "d":
//             case "D":
//                 direction = 1;
//                 break;
//             case "q":
//             case "Q":
//                 direction = -1;
//                 break;
//             case " ":
//                 // Tirer un missile
//                 missiles.push(new GameObject(
//                     missileImg,
//                     {
//                         x: playerPos.x + playerImg.width / 2 - missileImg.width / 2,
//                         y: playerPos.y - missileImg.height
//                     }
//                 ));
//                 shootMusiques();
//                 break;
//         }
//     });

//     document.addEventListener("keyup", (event) => {
//         if (["d", "D", "q", "Q"].includes(event.key)) {
//             direction = 0;
//         }
//     });
// }





// // --- Détection de collision rectangle --- //
// function isColliding(a: GameObject, b: GameObject): boolean {
//     return (
//         a.position.x < b.position.x + b.width &&
//         a.position.x + a.width > b.position.x &&
//         a.position.y < b.position.y + b.height &&
//         a.position.y + a.height > b.position.y
//     );
// }

// Chapitre 1 – Classe et Instance
// Exercice 1
// Crée une classe Person avec deux propriétés firstName et lastName.
// Ajoute une méthode sayHello() qui affiche un message de salutation.
// Crée une instance de la classe et appelle la méthode.
// Une classe, un patron de conception de personne
// class Person {
//     // Attributs
//     name: string;
//     firstname: string;


//     // Méthodes
//     constructor(Name: string, firstName: string) {
//         this.name = Name;
//         this.firstname = firstName;
//     }

//     sayHello() {
//         console.log("Bonjour, je m'appelle", this.name, this.firstname);
//     }
// }
// // Instanciation d'une classe via l'opérateur new
// const person = new Person("Duplouich","Marie-Sophie");
// person.sayHello();   // Appel d'une méthode de la classe Person

// Exercice 2
// Ajoute une troisième propriété age à la classe Person.
// Affiche son contenu à l’aide d’une méthode showInfo()

// class Person {
//     // Attributs
//     name: string;
//     firstname: string;
//     age: number;


//     // Méthodes
//     constructor(Name: string, firstName: string, age: number) {
//         this.name = Name;
//         this.firstname = firstName;
//         this.age = age;
//     }

//     // sayHello() {
//     //     console.log("Bonjour, je m'appelle", this.name, this.firstname);
//     // }
//     showInfo(){
//          console.log("Bonjour, je m'appelle", this.name, this.firstname, "J'ai", this.age,"ans.");
//     }
// }
// Instanciation d'une classe via l'opérateur new
// const person = new Person("Duplouich","Marie-Sophie");
// person.sayHello();   // Appel d'une méthode de la classe Person

// const age = new Person("Duplouich","Marie-Sophie",34);

// age.showInfo();


// Exercice 3
// Crée une classe Animal avec une propriété species.
// Ajoute une méthode makeSound() qui affiche un son typique de cet animal.

// class Animal {
//     // Attributs
//     name: string;
//     species : string;
//     cri:string;


//     // Méthodes
//     constructor(Name: string, Species: string, Cri:string) {
//         this.name = Name;
//         this.species = Species;
//         this.cri = Cri;

//     }


//     makeSound(){
//          console.log("Bonjour, je suis un", this.name, "et je suis de l'espèce des  ",this.species, "Et je ", this.cri);
//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const cris = new Animal("coucou","oiseaux","coucoule");

// cris.makeSound();

// Exercice 4
// Crée une classe Book avec les propriétés title et author.
// Instancie deux livres différents et affiche leurs informations dans la console

// class Book {
//     // Attributs
//     title: string;
//     author: string;



//     // Méthodes
//     constructor(Title: string, Author: string) {
//         this.title = Title;
//         this.author = Author;
//     }


//     makeBook(){
//          console.log("Voici le premier livre", this.title, "et l'auteur ",this.author);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const livreun = new Book("Bible","Dieu");
// const livredeux = new Book("Livre dont vous êts le héros","Aucuneidée");
// livreun.makeBook();
// livredeux.makeBook();

// Exercice 5
// Crée une classe Rectangle avec les propriétés width et height.
// Ajoute une méthode getArea() qui calcule et affiche l’aire du rectangle.

// class Rectangle {
//     // Attributs
//     width: number;
//     height: number;


//     // Méthodes
//     constructor(Width: number, Height: number) {
//         this.width = Width;
//         this.height = Height;
//     }


//   getArea(){
//          console.log(this.width * this.height);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const calculusRectanglearea = new Rectangle(8,9);

// calculusRectanglearea.getArea();


// Exercice 6
// Crée une classe Student avec name, grade.
// Ajoute une méthode displayStudent() pour afficher les informations.

// class Student {
//     // Attributs
//     name: string;
//     grade: string;


//     // Méthodes
//     constructor(Name: string, Grade: string) {
//         this.name = Name;
//         this.grade = Grade;
//     }


//  displayStudent(){
//          console.log("Etudiant", this.name,this.grade);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const student = new Student("Nicolas","CP");

// student.displayStudent();

// Exercice 7
// Crée une classe Movie avec title et year.
// Ajoute une méthode getInfo() qui affiche les détails du film.

// class Movie {
//     // Attributs
//     title: string;
//     year: number;


//     // Méthodes
//     constructor(Title: string, Year: number) {
//         this.title = Title;
//         this.year = Year;
//     }


// getInfo(){
//          console.log("Film choisi", this.title,this.year);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const film = new Movie("Harry Potter à l'école des sorciers", 2001);

// film.getInfo();

// Exercice 8
// Crée une classe Product avec name et price.
// Crée plusieurs instances et affiche leurs noms et prix.

// class Product {
//     // Attributs
//     name: string;
//     price: number;


//     // Méthodes
//     constructor(Name: string, Price: number) {
//         this.name = Name;
//         this.price = Price;
//     }


// getInfo(){
//          console.log("Produit choisi :", this.name,"Prix :",this.price, "€");

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const banane = new Product("Banane bleue d'Asie",8);

// banane.getInfo();

// const bananer = new Product("Banane rouge d'Asie",90);

// bananer.getInfo();


// const bananej = new Product("Banane",1);

// bananej.getInfo();


// Exercice 9
// Crée une classe City avec name et population.
// Ajoute une méthode describe() qui affiche une phrase descriptive.

// class City {
//     // Attributs
//     city: string;
//     population: number;
//     describe:string;

//     // Méthodes
//     constructor(City: string, Population: number, Describe: string) {
//         this.city = City;
//         this.population = Population;
//         this.describe = Describe;
//     }


//     getDescribe(){
//       console.log("Ville choisie :", this.city,"Population (millions) :",this.population, "description",this.describe);

// }
// }


// Instanciation d'une classe via l'opérateur new
// const person = new Person("Duplouich","Marie-Sophie");
// person.sayHello();   // Appel d'une méthode de la classe Person

// const cityblois = new City("Blois", 47092,"Elle a une grande histoire. C'était une ville monarchiste.");
// cityblois.getDescribe();

// const citycracow = new City("Cracovie", 804237,"Cracovie est la mailleure ville de Pologne");
// citycracow.getDescribe();


// Exercice 10
// Crée une classe Computer avec brand et ram.
// Affiche dans la console les détails d’un ordinateur.


// class Computer {
//     // Attributs
//     brand: string;
//     ram: number;


//     // Méthodes
//     constructor(Brand: string, Ram: number) {
//         this.brand = Brand;
//         this.ram = Ram;
//     }


// getInfo(){
//          console.log("Ordinateur choisi :", this.brand,"Ram :",this.ram, "Go");

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const ordi = new Computer("Predator",8);

// ordi.getInfo();


// Chapitre 2 – Constructor
// Exercice 1
//Reprends la classe Person et ajoute un constructeur qui initialise firstName et lastName.

// class Person {
//     // Attributs
//     name: string;
//     firstname: string;


//     // Méthodes
//     constructor(Name: string, firstName: string) {
//         this.name = Name;
//         this.firstname = firstName;
//     }

//     sayHello() {
//         console.log("Bonjour, je m'appelle", this.name, this.firstname);
//     }
// }
// // Instanciation d'une classe via l'opérateur new
// const person = new Person("Duplouich","Marie-Sophie");
// person.sayHello();   // Appel d'une méthode de la classe Person



// Exercice 2
// Crée une classe Car avec un constructeur qui initialise brand et year.
// Ajoute une méthode showInfo().


// class Car {
//     // Attributs
//     brand : string;
//     year: number;


//     // Méthodes
//     constructor(Brand: string, Year: number) {
//         this.brand = Brand;
//         this.year = Year;
//     }

//     showInfo() {
//         console.log("Voiture : ", this.brand,"Année : ", this.year);
//     }
// }
// // Instanciation d'une classe via l'opérateur new
// const car = new Car("Audi", 1990);
// car.showInfo();   // Appel d'une méthode de la classe Person


// Exercice 3
// Crée une classe Dog avec un constructeur prenant name et breed.
// Ajoute une méthode bark().

// class Dog {
//     // Attributs
//     name: string;
//     breed : string;

//     // Méthodes
//     constructor(Name: string, Breed: string) {
//         this.name = Name;
//         this.breed = Breed;
//     }


//     bark(){
//          console.log("Bonjour, je suis ", this.name,"de l'espèce des ",this.breed);
//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const cris = new Dog("BB","bergers allemands");

// cris.bark();



// Exercice 4
// Crée une classe Circle avec radius.
// Ajoute une méthode getPerimeter() et un constructeur pour initialiser radius.


// class Circle {
//     // Attributs
//      rayon : number;


//     // Méthodes
//     constructor(Rayon: number) {
//         this.rayon = Rayon;
//     }


//   getPerimeter(){
//          console.log( 2 * 3.14 * this.rayon);


//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const calculusCircleperimeter = new Circle(8);
// calculusCircleperimeter.getPerimeter();


// Exercice 5
// Crée une classe User avec username et email.
// Utilise le constructeur pour les initialiser.



// class User {
//     // Attributs
//     username: string;
//     email: string;


//     // Méthodes
//     constructor(Username: string, Email: string) {
//         this.username = Username;
//         this.email = Email;
//     }


//  displayUser(){
//          console.log("Utilisateur", this.username,this.email);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const user = new User("Nicolaslepigeondalmatien","nicolaspigeondalmatien@gmail.com");

// user.displayUser();



// Exercice 6
// Crée une classe Course avec title et duration (en heures).
// Ajoute une méthode describeCourse().


// class Course {
//     // Attributs
//     title: string;
//     duration: number;


//     // Méthodes
//     constructor(Title: string, Duration: number) {
//         this.title = Title;
//         this.duration = Duration;
//     }


//  describeCourse(){
//          console.log("Course ", this.title,this.duration, "heures");

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const course = new Course("Formule1",6);

// course.describeCourse();



// Exercice 7
// Crée une classe Laptop avec brand, processor, price.
// Initialise-les dans le constructeur.

// class Laptop {
//     // Attributs
//     brand: string;
//     price: number;
//     processor: string;



//     // Méthodes
//     constructor(Brand: string, Price: number, Processor: string) {
//         this.brand = Brand;
//         this.price = Price;
//         this.processor = Processor;
//     }

//     getInfo() {
//         console.log("Ordinateur choisi :", this.brand, "prix :", this.price, "Processor", this.processor);

//     }

// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const ordi = new Laptop("Predator", 888, "Intel Core i9-14900KF");

// ordi.getInfo();



// Exercice 8
// Crée une classe Book avec title, author, pages.
// Ajoute une méthode summary() qui affiche une courte description.


// class Book {
//     // Attributs
//     title: string;
//     author: string;
//     pages: number;



//     // Méthodes
//     constructor(Title: string, Author: string, Pages:number) {
//         this.title = Title;
//         this.author = Author;
//          this.pages = Pages;
//     }


//     summary(){
//          console.log("Voici le premier livre", this.title, "et l'auteur ",this.author);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const livreun = new Book("Bible","Dieu",1254);

// livreun.summary();



// Exercice 9
// Crée une classe Employee avec name, position, salary.
// Ajoute une méthode introduce().


// class Employee {
//     // Attributs
//     name: string;
//     position: string;
//     salary: number;



//     // Méthodes
//     constructor(Name: string, Position: string, Salary:number) {
//         this.name = Name;
//         this.position = Position;
//          this.salary = Salary;
//     }


//     introduce(){
//          console.log("Informations", this.name, "métier et position dans l'entreprise ",this.position,"salaire en euros par mois brut",this.salary);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const employeecdbp = new Employee("Combey","Chirurgien-orthodontiste conventionné secteur 2",12854);

// employeecdbp.introduce();



// Exercice 10
// Crée une classe Plane avec model et capacity.
// Ajoute une méthode fly() qui affiche un message.

// class Plane {
//     // Attributs
//     model: string;
//     capacity: number;




//     // Méthodes
//     constructor(Model: string, Capacity: number) {
//         this.model = Model;
//         this.capacity = Capacity;

//     }


//     fly() {
//         console.log("Informations", this.model, "peut comporter un nombre maximal de passagers de : ", this.capacity);

//     }
// }
// // Instanciation d'une classe via l'opérateur new
// // const person = new Person("Duplouich","Marie-Sophie");
// // person.sayHello();   // Appel d'une méthode de la classe Person

// const airbus = new Plane("Airbus A-390", 1000);

// airbus.fly();


// Chapitre 3 – Public et Private

// Exercice 1
// Crée une classe BankAccount avec une propriété privée balance.
// Ajoute une méthode publique showBalance().


// class BankAccount{
//     private balance : number;


//     constructor(balance : number){
//         this.balance = balance;       
//     }
//     /**
//      * La méthode accelerer doit être publique pour que la voiture se
//      * déplace lors de l'appui d'une touche du clavier. 
//      */
//     public showBalance(){

//     console.log (this.balance);
//     }
// }  
// // Instanciation
// const account = new BankAccount(3000);
// account.showBalance();



// Exercice 2
// Crée une classe SafeBox avec une propriété privée secretCode.
// Ajoute une méthode publique open(code: string) qui vérifie si le code est correct.
// let code = prompt("Put your password,please."); //méthode meiko

// class SafeBox {
//     private secretCode: string;

//     constructor(code: string) {
//         this.secretCode = code;
//     }
//     /**
//      * La méthode accelerer doit être publique pour que la voiture se
//      * déplace lors de l'appui d'une touche du clavier. 
//      */
//     public open(code: string) {
//         if (this.secretCode === code) {
//             // La voiture accélère.

//             console.log("Bienvenue MS");
//             // return true; méthode bérangère
//         }
//         else {
//             console.log("Try again !")
//             // return false;  méthode bérangère
//         }
//     }
// }
// // // Instanciation
// const codes = new SafeBox("Barakah_3000");
// codes.open(code);

// codes.open("fuax"); // mauvais mot de passe  méthode bérangère

// codes.open("Barakah_3000");// bon mot de passe méthodes meiko et bérangère

// Exercice 3
// Crée une classe Email avec une propriété privée content.
// Ajoute une méthode publique read() pour l’afficher.


// class Email{
//     private content : string;


//     constructor(content : string){
//         this.content = content;       
//     }
//     /**
//      * La méthode accelerer doit être publique pour que la voiture se
//      * déplace lors de l'appui d'une touche du clavier. 
//      */
//     public read(){

//     console.log (this.content);
//     }
// }  
// // Instanciation
// const emailme = new Email("Coucou, c'est moi signé moi");
// emailme.read();




// Exercice 4
// Crée une classe Thermostat avec une température privée.
// Ajoute une méthode publique showTemperature().



// class Thermostat {
//     private temperature: number;


//     constructor(temperature: number) {
//         this.temperature = temperature;
//     }
//     /**
//      * La méthode accelerer doit être publique pour que la voiture se
//      * déplace lors de l'appui d'une touche du clavier. 
//      */
//     public showTemperature() {

//         console.log("Il fait,aujoud'hui", this.temperature, "°.");
//     }
// }
// // Instanciation
// const weather = new Thermostat(30);
// weather.showTemperature();




// Exercice 5
// Crée une classe Door avec un état privé isLocked.
// Ajoute une méthode unlock() et une méthode lock().


// class Door {
//     private isLocked: string;


//     constructor(temperature: number) {
//         this.temperature = temperature;
//     }
//     /**
//      * La méthode accelerer doit être publique pour que la voiture se
//      * déplace lors de l'appui d'une touche du clavier. 
//      */
//     public unlock() {

//         console.log("Il fait,aujoud'hui", this.temperature, "°.");
//     }
// }
// // Instanciation
// const weather = new Thermostat(30);
// weather.showTemperature();



// Exercice 6
// Crée une classe Score avec une propriété privée points.
// Ajoute une méthode addPoints(value: number) et showScore().





// Exercice 7
// Crée une classe Light avec une propriété privée isOn.
// Ajoute des méthodes turnOn() et turnOff().





// Exercice 8
// Crée une classe Car avec une vitesse privée.
// Ajoute une méthode showSpeed().



// class Car {
//     // Attributs
//        private vitesse : number;
//     // Méthodes
//     constructor(vitesse : number) {
//       this.vitesse = vitesse;           // On initialise la vitesse à 0 km/h
//     }

//     showSpeed() {
//         console.log("Voiture : ",this.vitesse,"km/h");
//     }
// }
// // Instanciation d'une classe via l'opérateur new
// const car = new Car(300);
// // car.showInfo();   // Appel d'une méthode de la classe Person
// car.showSpeed();


// Exercice 9
// Crée une classe Password avec une propriété privée value.
// Ajoute une méthode check(password: string) pour vérifier la correspondance.



// Exercice 10
// Crée une classe Wallet avec une somme privée money.
// Ajoute des méthodes addMoney() et showMoney()


// class Wallet{
//     private money : number;


//     constructor(money : number){
//         this.money = money;       
//     }
//     /**
//      * La méthode accelerer doit être publique pour que la voiture se
//      * déplace lors de l'appui d'une touche du clavier. 
//      */
//     public showMoney(){

//     console.log (this.money);
//     }
//       public addMoney(){

//     console.log (this.money + 300);
//     }
// }  
// // Instanciation
// const account = new  Wallet(30000);
// account.showMoney();
// account.addMoney();


// Chapitre 4 – Constructor, Public, Private, Setter & Getter (sans syntaxe get / set)
// Exercice 1
// Crée une classe User avec un username public et un password privé.
// Ajoute une méthode checkPassword(pass: string) qui retourne vrai si le mot de passe est correct.

// Exercice 2
// Crée une classe Car avec brand privé et speed privé.
// Ajoute setSpeed(newSpeed: number) et getSpeed().

// Exercice 3
// Crée une classe Student avec name public et average privé.
// Ajoute des méthodes setAverage(value: number) et getAverage().

// Exercice 4
// Crée une classe Account avec un solde privé.
// Ajoute une méthode deposit(amount: number) et getBalance().

// Exercice 5
// Crée une classe Book avec un title public et un price privé.
// Ajoute setPrice(newPrice: number) et getPrice().

// Exercice 6
// Crée une classe Laptop avec brand et batteryLevel privés.
// Ajoute des méthodes pour augmenter ou diminuer le niveau de batterie.

// Exercice 7
// Crée une classe Person avec name et age privés.
// Ajoute des méthodes setAge(newAge: number) et getAge().

// Exercice 8
// Crée une classe Phone avec number privé et owner public.
// Ajoute des méthodes pour modifier le numéro et le lire.

// Exercice 9
// Crée une classe GameCharacter avec name public et health privé.
// Ajoute des méthodes pour infliger des dégâts (takeDamage) et afficher la santé (getHealth).

// Exercice 10
// Crée une classe BankAccount avec un owner public et un balance privé.
// Ajoute deposit(amount: number), withdraw(amount: number), et getBalance().

// 📘 Conseil final : Teste tous tes exercices dans un fichier .ts, puis exécute-les avec la commande :

// tsc nom_du_fichier.ts && node nom_du_fichier.js
