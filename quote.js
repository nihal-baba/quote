//variables
let quotebox = document.querySelector('.quotebox');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let button = document.getElementById('nxt-btn');
let body =document.querySelector('body');

//data
let quotes = [

    { quote: "You know, Hobbes, some days even my lucky rocketship underpants don't help", person: "-Bill Watterson" },
    { quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.", person: "-Stephen Chbosky" },
    { quote: "And now that you don't have to be perfect, you can be good.", person: "-John Steinbeck" },
    { quote: "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.", person: "-Ilona Andrews" },
    { quote: "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone", person: "-Holly Black" },
    { quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.", person: "-J.K. Rowling" },
    { quote: "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.", person: "-Charles Darwin" },
    { quote: "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out", person: "-Ray Bradbury" },
    { quote: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it", person: "-Maya Angelou" },
    { quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not", person: "-Oscar Wilde" },
    { quote: "Maybe it\’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them", person: "-Anna White" },
    { quote: "I've had the sort of day that would make St. Francis of Assisi kick babies.", person: "-Douglas Adams" },
    { quote: "Don't cry because it's over. Smile because it happened", person: "-Dr. Seuss" },
    { quote: "Everything is hard before it is easy", person: "-Johann Wolfgang von Goethe" },
    { quote: "Anyone who has never made a mistake has never tried anything new", person: "-Albert Einstein" },
    { quote: "These worst mornings with cold floors and hot windows and merciless light — the soul's certainty that the day will have to be not traversed but sort of climbed, vertically, and then that going to sleep again at the end of it will be like falling, again, off something tall and sheer", person: "-David Foster Wallace" },
    { quote: "Don't let your happiness depend on something you may lose", person: "-C.S. Lewis" },
    { quote: "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.", person: "-Chuck Palahniuk" },
    { quote: "We are all broken, that's how the light gets in", person: "-Ernest Hemingway" },
    { quote: "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win", person: "-Stephen King" },
    { quote: "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day", person: "-Brad Meltzer" },
    { quote: "It hurt because it mattered", person: "-John Gree" },
    { quote: "Life's not fair; why should I be?", person: "-Margaret Atwood" },
    { quote: "Never look back unless you are planning to go that way", person: "-​Henry David Thoreau" }
];

let rand = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[rand]["quote"];
person.innerText = quotes[rand]["person"];
// styling

// document.querySelector(".header").style.margin="0rem 25rem";

let height=window.screen.availHeight;
let width=window.screen.availWidth;
// console.log(url);
// body.style.backgroundImage="url(url)";
// body.style.backgroundRepeat="no-repeat";
// body.style.backgroundSize="cover";
body.style.fontSize='2rem';
body.style.backgroundPosition="center";
button.style.margin='0rem 25rem';
const key="TTLObLjkizT4WyVrUDzn2NS3miSha7oa8h8QuuH8-Sk";
let url= `https://api.unsplash.com/photos/?client_id=${key}`;

//eventlistners
button.addEventListener('click', function () {
    
    let rand = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[rand]["quote"];
    person.innerText = quotes[rand]["person"];
});

