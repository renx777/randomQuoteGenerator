function ranq(){
    
    var quotes=["You have to do something in your life that is honorable and not cowardly if you are to live in peace with yourself","The five S’s of sports training are: stamina, speed, strength, skill, and spirit; but the greatest of these is spirit","Winning takes talent, to repeat takes character","A champion is afraid of losing. Everyone else is afraid of winning","Nothing is black-and-white, except for winning and losing, and maybe that's why people gravitate to that so much.","Winning is only half of it. Having fun is the other half.","Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose. Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday."
    
    
    ];
     
     var ran=Math.floor(Math.random() * quotes.length);
      
     q=quotes[ran];
      quotzElement=document.getElementById("quotz");
      quotzElement.innerHTML=q;
     }
     
    
     function tweetIt () {
       alert("hd")
      var phrase = q;
      var tweetUrl = 'https://twitter.com/share?text=' +
        encodeURIComponent(phrase) +
        '.' +
        '&url=' +
        'http://www.cookbooktitlegenerator.com/';
        
      window.open(tweetUrl);
     }
    