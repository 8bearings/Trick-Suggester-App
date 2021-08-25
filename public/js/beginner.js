const beginnerTricks = [
    { 
      name: "Ollie",
      logo: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/08/skateboard-trick-tipp-ollie.jpg"
    },
    { 
      name: "Backside 180",
      logo: "https://skateslate.com/wp-content/uploads/2017/11/huey-fshj-1735.jpg"
    },
    { 
      name: "Frontside 180",
      logo: "https://www.surfertoday.com/images/stories/frontside-180.jpg"
    },
    { 
      name: "Shuvit",
      logo: "https://coresites-cdn-adm.imgix.net/sidewalk/wp-content/uploads/2014/04/360-shove-sequence-8.jpg?fit=crop&w=500&h=333"
    },
    { 
      name: "Drop In",
      logo: "https://coresites-cdn-adm.imgix.net/sidewalk/wp-content/uploads/2009/05/Drop-In2.jpg?fit=crop&w=620&h=390"
    },
    { 
      name: "Manual",
      logo: "https://www.surfertoday.com/images/stories/manual-skateboard.jpg"
    },
    { 
      name: "Pumping",
      logo: "https://i.ytimg.com/vi/5QsCWEE8hBQ/maxresdefault.jpg"
    },
   ];
  
  var dist = {};
    
  function addDist(i) {
    if (!dist[i]) {
      dist[i] = 0
    }
    dist[i]++;
  var printArray = []
  for (var i = 0; i < beginnerTricks.length; i++) {
    printArray.push(beginnerTricks[i].name+": "+(dist[i] || 0));
  }
  console.log(printArray);
  }

window.onload=function(){
    const random = document.querySelector('.random')
  
    random.addEventListener('click', randoFunction);

    function randoFunction(){
      let index = Math.floor(Math.random()*beginnerTricks.length);
      addDist(index);
      document.querySelector('.name').innerText = beginnerTricks[index].name
      document.querySelector('.logo').innerHTML = ("<img src='"+beginnerTricks[index].logo+"'/>");
      console.log(beginnerTricks[index].name)
    };
  }

 