/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 0;
let num1 = 10;
let num2 = 20;
sum = num1 + num2;
//console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = 0;
random = Math.ceil(Math.random() * 21);
//console.log(random); /* ESERCIZIO C
//Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.

let me = {
  name: "gabriele",
  surname: "lucarelli",
  age: 26,
};
//console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
//console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["skills : css , html , js"];
//console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("angular");
//console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
//console.log(me);
// NON COMMENTO QUESTI PRIMI ESERCIZI PER GIUSTA CAUSA

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  let random = Math.ceil(Math.random() * 7);
  return random;
};
//console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(whoIsBigger(564854, 854515));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (str) {
  return str.split(" "); // lo spazio all'interno serve per separare le parole
};
//console.log(splitMe("vamos carrajo"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (str, istrue) {
  if (istrue === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};
//console.log(deleteOne("Romania"));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i] === Number)) {
      str.replace(" ");
    }
    //console.log(onlyLetters("ho 4 gatti e 5 cani "));
  }
};
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  if (str.includes("@" && ".")) {
    // includes lo uso per verificare se effettivamente è un email
    return true;
  } else if (str.includes(" ")) {
    // se c'è uno spazio nel campo ritorno false "email sbagliata"
    return false;
  } else {
  }
};
//console.log(isThisAnEmail("l-gabri1998@live.it"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  let days = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"]; // fatto un array di tutti i giorni della settimana
  let today = new Date(-1);
  let day = today.getDay();
  return days[day];
};
//console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
// const rollTheDices = function (num) {
//   let risultato = [];
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     let values = dice();
//     values.push(risultato);
//     sum += values;
//   }
//   return {
//     sum: sum,
//     values: risultato,
//   };
// };
// console.log(rollTheDices());

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let howManyDays = function () {
  let today = new Date();
  let pastDate = new Date(Date);
  let timeDifference = today.getTime() - pastDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};
//console.log(howManyDays("2001-09-12"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  let myMonth = 8;
  let myBirthday = 18;
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  return todayMonth === myMonth && myBirthday === todayDay; // confronto le date attuali con quelle del mio compleanno e in console stampo il valore booleano
};
//console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let newest = movies[0].Year;

  for (let i = 1; i < movies.length; i++) {
    if (newest < movies[i].Year) {
      newest = movies[i].Year;
    }
  }
  return newest;
};

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    let total = movies.length + sum;
    return total;
  }
};
/* ESERCIZIO 14
 Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
 */
const onlyTheYears = function () {
  let years = [];
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year);
    return years;
  }
};

/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotti nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function () {
  let last = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year >= "2000") {
      last.push(movies[i]);
    } else {
    }
  }
  return last;
};
/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    sum = sum + year;
  }
  return sum;
};

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (string) {
  const movies = [];
  const search = string.toLowerCase();

  for (let i = 0; i < movies.length; i++) {
    // non sono uscite
    const any = movies[i];
    if (any.Title.toLowerCase().includes(search)) {
      movies.push(any);
    }
  }

  return movies;
};
//console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (string) {
  const match = [];
  const unMatch = [];
  const low = string.toLowerCase();

  for (let i = 0; i < movies.length; i++) {
    // non è uscita
    const newMovies = movies[i];
    if (newMovies.Title.toLowerCase().includes(low)) {
      match.push(newMovies);
    } else {
      unMatch.push(newMovies);
    }
  }

  return { match, unMatch };
};
//console.log(searchAndDivide("Avengers"));

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
//
const removeIndex = function (n) {
  return movies.splice(i);
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const select = function () {
  let container = document.getElementById("container");
  return container;
};
//console.log(select());
/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectAll = function () {
  let get = document.querySelectorAll("td");
  return get;
};
//console.log(selectAll());

/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const cicle = function () {
  let get = document.querySelectorAll("td");
  for (let i = 0; i < get.length; i++) {
    console.log(get[i].textContent);
  }
};
//cicle();

/* ESERCIZIO 23
Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const color = function () {
  const ancor = document.querySelectorAll("a");
  for (let i = 0; i < ancor.length; i++) {
    ancor[i].style.backgroundColor = "red";
  }
};
//color();

/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const add = function () {
  let li = document.createElement("li");
  li.innerText = "pizza";
  let ul = document.getElementById("myList");
  ul.appendChild(li);
  return ul;
};
//console.log(add());
/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const white = function () {
  const li = document.getElementById("myList");
  for (let i = 0; i < li.length; i++) {
    const finish = li.removeChild();
    return finish;
  }
};
//console.log(white());

/* ESERCIZIO 26
Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const classe = function () {
  const get = document.querySelectorAll("tr");
  for (let i = 0; i < get.length; i++) {
    get[i].classList.add("test");
  }
};
//classe();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

Esempio:
halfTree(3)

*
**
***

*/
const halfTree = function (height) {
  for (let i = 1; i <= height; i++) {
    // parto da indice 1
    console.log("*".repeat(i) + ""); // uso repeat per ripetere gli asterischi
  }
};
halfTree(3);

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****

*/
const bigTree = function () {
  const tree = function (height) {
    for (let i = 1; i <= height; i++) {
      console.log("*".repeat(i));
    }
  };
  const aTree = function (height) {
    for (let j = 2; j <= height; j++) {
      console.log("*".repeat(j) + "*"); // ho cittato signor stefano mi perendo le mie colpe  ma non sapevo come fare HAHAHAHAH
    }
  };
  const bTree = function (height) {
    for (let k = 3; k <= height; k++) {
      console.log("*".repeat(k) + "**");
    }
  };
  tree(1);
  aTree(2);
  bTree(3);
};
bigTree();
/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
// const isItPrime = function (Number) {
//   for (let i = 2; i < number.length; i++) {
//     if (number % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };
// console.log(isItPrime(10));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
//console.log(newestMovie());
//console.log(countMovies());
//console.log(onlyTheYears());
//console.log(onlyInLastMillennium());
//console.log(sumAllTheYears());
