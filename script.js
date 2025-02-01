const apiurl = 'https://thequoteshub.com/api/';
const genQuo = document.getElementById('genQuo');
const quo = document.getElementsByTagName('blockquote');
const author = document.getElementsByTagName('span');
x = document.getElementById('x');
x.addEventListener('click',tweet());
genQuo.addEventListener('click', getQuote);
async function getQuote() {
  const response = await fetch(apiurl);
  const data = await response.json();
  console.log(data);
  quo[0].innerText = data.text;
  author[0].innerText = data.author;
}
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quo[0].innerHTML+"---by"+author[0].innerText ,"Tweet Window","width=600,height=400");
}