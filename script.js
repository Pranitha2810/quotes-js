function generate(){
    var quotes={
        "-G.K. Nielson" : '"Successful people are not gifted; they just work hard, then succeed on purpose."',
        "-Dwayne Johnson" : '"Success is not always about greatness. It is about consistency. Consistent hard work leads to success. Greatness will come."',
        "-Robert Collier" : '"Success is the sum of small efforts, repeated day in and day out."'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("q").innerHTML=quote;
    document.getElementById("a").innerHTML=author;
}