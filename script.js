function randomQuotes() {
 let quotes = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sint iste optio placeat dolor labore, reprehenderit ipsum aspernatur blanditiis maiores.',
  'The price of anything is the amount of life you exchange for it.',
  'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we\'ve got',
  'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',

  'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.'
 ];
 let randomNum = Math.floor(Math.random() * 5);
 //random number 0 - 5 
 document.getElementById('myQuotes').innerHTML = quotes[randomNum];

}
