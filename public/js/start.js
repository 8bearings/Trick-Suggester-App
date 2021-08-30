const ezTricks = [
        { 
          name: "Falling",
          logo: "https://www.liveabout.com/thmb/OK3A5zaRcXH1SwnT3-PX0o-IQko=/1002x1002/smart/filters:no_upscale()/GettyImages-970172544-5c70070dc9e77c00016bfd61.jpg"
        },
        { 
          name: "Step On",
          logo: "https://i.ytimg.com/vi/iku4YmdRUuE/maxresdefault.jpg"
        },
        { 
          name: "Pushing",
          logo: "https://i.pinimg.com/originals/32/15/90/32159076377b8e796eb48b79dc4e620b.jpg"
        },
        { 
          name: "Rolling",
          logo: "https://cdn.vox-cdn.com/thumbor/D_0bBpvAhy7ViWgWa4NTTX91GMY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18306834/DSCF2213.jpg"
        },
        { 
          name: "Stopping",
          logo: "https://www.liveabout.com/thmb/Vqssjb9bxz0jnXISAePJZXoyEdo=/2121x1416/filters:no_upscale():max_bytes(150000):strip_icc()/485935107-56a878513df78cf7729e325f.jpg"
        },
        { 
          name: "Turning",
          logo: "https://www.thelongboardstore.com/product_images/uploaded_images/weelbite-article-wheelbite.jpg"
        },
        { 
          name: "Kickturn",
          logo: "https://images.squarespace-cdn.com/content/v1/57d2e53244024362fbb647c6/1522342259025-M4OHWR30U7ORE6HMGSXP/Deep+end+kick+turn"
        },
       ];
      
      var dist = {};
        
      function addDist(i) {
        if (!dist[i]) {
          dist[i] = 0
        }
        dist[i]++;
      var printArray = []
      for (var i = 0; i < ezTricks.length; i++) {
        printArray.push(ezTricks[i].name+": "+(dist[i] || 0));
      }
      console.log(printArray);
      }
    
    window.onload=function(){
        const random = document.querySelector('.random')
      
        random.addEventListener('click', randoFunction);
    
        function randoFunction(){
          let index = Math.floor(Math.random()*ezTricks.length);
          addDist(index);
          document.querySelector('.name').innerText = ezTricks[index].name
          document.querySelector('.logo').innerHTML = ("<img src='"+ezTricks[index].logo+"'/>");
          console.log(ezTricks[index].name)
        };
      }
    
     