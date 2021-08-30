const intermediteTricks = [
    { 
      name: "Switch Kickflip",
      logo: "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTcyMjQ2MTQyMDY5Nzc3OTQ1/nyjah-huston-3.webp"
    },
    { 
      name: "Switch Heelflip",
      logo: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/dLcOoO5Tfs8cfq0BK0gZ"
    },
    { 
      name: "Switch Backside Boardslide",
      logo: "http://www.skateboardtricksforbeginners.com/wp-content/uploads/2017/02/boardslide-.png"
    },
    { 
      name: "Switch Frontside Boardslide",
      logo: "https://media.istockphoto.com/videos/skater-make-frontside-boardslide-on-rail-in-skatepark-closeup-view-video-id1059099984?s=256x256"
    },
    { 
      name: "Switch Frontside 50-50 Grind",
      logo: "https://drscdn.500px.org/photo/147473893/q%3D80_m%3D1500_of%3D1/v2?sig=32b87ea8fb588eefccb91376988df9d047164e86f296c34e10786d00ad41db7e"
    },
    { 
      name: "Switch 360 Kick Flip",
      logo: "https://i.vimeocdn.com/video/813666342_1920x1080.jpg?r=pad"
    },
    { 
      name: "Switch Ollie",
      logo: "https://www.skatedeluxe.com/blog/wp-content/uploads/2016/09/trick-tip-switch-kickflip-4.jpg"
    },
    { 
      name: "Frontside 50-50 Grind a Handrail",
      logo: "https://i.ytimg.com/vi/JB9uHsStkfA/maxresdefault.jpg"
    },
    { 
      name: "Backside 50-50 Grind a Handrail",
      logo: "https://boiltheocean.files.wordpress.com/2019/05/jamie_foy_90_10.jpg"
    },
    { 
      name: "Backside Boardslide Handrail",
      logo: "https://live.staticflickr.com/5226/5608331842_03139e8296_b.jpg"
    },
    { 
      name: "Switch Noseslide",
      logo: "https://www.wikihow.com/images/thumb/6/6f/Noseslide-Step-9-Version-2.jpg/550px-nowatermark-Noseslide-Step-9-Version-2.jpg"
    },
    { 
      name: "Big Spin Kick Flip",
      logo: "https://everskate.com/wp-content/uploads/2017/11/big-flip-skateboard.jpg"
    },
    { 
      name: "Lazer Flip",
      logo: "https://www.thrashermagazine.com/mediaV2/k2/items/cache/be4dc40b1051f1eba662e07861b8aec1_M.jpg?t=1549663377"
    },
    { 
      name: "Nollie 360 Kick Flip",
      logo: "https://i.ytimg.com/vi/YQec9B9UXN4/hqdefault.jpg"
      },
    { 
      name: "Big Spin Heel Flip",
      logo: "https://live.staticflickr.com/4523/25198582758_689f185a21_b.jpg"
      },  
   ];
  
  var dist = {};
    
  function addDist(i) {
    if (!dist[i]) {
      dist[i] = 0
    }
    dist[i]++;
  var printArray = []
  for (var i = 0; i < intermediteTricks.length; i++) {
    printArray.push(intermediteTricks[i].name+": "+(dist[i] || 0));
  }
  console.log(printArray);
  }

window.onload=function(){
    const random = document.querySelector('.random')
  
    random.addEventListener('click', randoFunction);

    function randoFunction(){
      let index = Math.floor(Math.random()*intermediteTricks.length);
      addDist(index);
      document.querySelector('.name').innerText = intermediteTricks[index].name
      document.querySelector('.logo').innerHTML = ("<img src='"+intermediteTricks[index].logo+"'/>");
      console.log(intermediteTricks[index].name)
    };
  }

 