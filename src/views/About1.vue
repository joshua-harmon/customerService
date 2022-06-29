<template>
  <section id="about1">
  <div class="box">
  <ul id="bookmarks">
  <li><a href="#">support</a>
   <ul class="sites">
    <li><a href="https://outsourcely.com/">oscely</a></li>
    <li><a href="https://cloudpeeps.com">cloud</a></li>
    <li><a href="https://workingnomads.com">nomads</a></li>
    <li><a href="https://workew.com">workew</a></li>
    <li><a href="https://nexrep.com">nexrep</a></li>
    <li><a href="https://wrrk.com">wrrk</a></li>
    <li><a href="https://search.yahoo.com/search?fr=mcafee&type=E211US1289G0&p=call+center">callCenter</a></li>
  </ul>
 </li>
  <li><a href="#">remote</a>
   <ul class="sites">
    <li><a href="https://5ca.com/">5ca</a></li>
    <li><a href="https://www.sitel.com/">sitel</a></li>
    <li><a href="https://www.support.com/">support</a></li>
    <li><a href="https://www.ttecjobs.com/">ttec</a></li>
    <li><a href="https://jobs.workingsolutions.com/">ws</a></li>
    <li><a href="https://www.fiverr.com/">fiverr</a></li>
    <li><a href="https://upwork.com/">upwork</a></li>
    <li><a href="https://idealist.org/">idealist</a></li>
    <li><a href="https://remote4me.com/">remote</a></li>
  </ul>
 </li>
  <li><a href="#">gigs</a>
   <ul class="sites">
    <li><a href="https://affiliate-program.amazon.com">affiliate</a></li>
    <li><a href="https://progressive.com">progressive</a></li>
    <li><a href="https://magoosh.com">magoosh</a></li>
    <li><a href="https://www.liveworld.com/careers/?job=1#jobs">liveworld</a></li>
    <li><a href="https://onlinewritingjobs.com">writing</a></li>
    <li><a href="https://writeraccess.com">writer</a></li>
    <li><a href="https://peopleperhour.com">perhour</a></li>
    <li><a href="https://percepta.com">percepta</a></li>
  </ul>
 </li>
  <li><a href="#">mentors</a>
   <ul class="sites">
    <li><a href="https://www.dreamhomebasedwork.com">mentor</a></li>
    <li><a href="https://www.micromentor.org/">microMentor</a></li> 
    <li><a href="https://www.youtube.com/watch?v=b5INK8IWfLE">bigmarkTV</a></li>
  </ul>
 </li>
  <li><a href="#">freelancing</a>
   <ul class="sites">
    <li><a href="https://www.upwork.com/">upwork</a></li>
    <li><a href="https://www.freelancer.com/">freelancer</a></li>
    <li><a href="https://www.toptal.com/">toptal</a></li>
    <li><a href="https://www.patreon.com/">patreon</a></li>
    <li><a href="https://www.wwork.com/">wwork</a></li>
    <li><a href="https://www.fiverr.com/">fiverr</a></li>
    <li><a href="https://selly.io/">sellOnline</a></li> 
  </ul>
 </li>
  <li><a href="#">dropshipping</a>
   <ul class="sites">
    <li><a href="https://www.oberlo.com/?gclid=EAIaIQobChMIy43NvMzU3wIVexetBh2-xgqTEAEYASAAEgL52PD_BwE">Oberlo</a></li> 
    <li><a href="https://sell.amazon.com/learn/what-is-dropshipping">Amazon</a></li>
    <li><a href="https://dropshiplifestyle.com">videos</a></li>
  </ul>
 </li>
  <li><a href="#">typing</a>
   <ul class="sites">
    <li><a href="1888typeitupcom">typeItUp</a></li>
    <li><a href="ratatype.com">ratatype</a></li>
    <li><a href="typing.com">typing</a></li>
  </ul>
 </li>
  <li><a href="#">mre</a>
   <ul class="sites">
    <li><a href="tst1"></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
 </li>
</ul>
</div>

</section>
</template>


<script>
export default {
  name: "About1",
};
</script>


<style scoped>
*{
    margin:0;
    padding:0;
}
body {
    font:14px/1.3 Arial,sans-serif;
}
.box {
    height: 571px;
    margin: 30px auto;
    padding: 15px;
    width: 771px;
}
#bookmarks,#bookmarks ul {
    background-color: #8899AA;
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
#bookmarks {
    display: block;
    padding: 5px;
    position: relative;
    width: 112px;
    -moz-perspective: 200px;
    -ms-perspective: 200px;
    -webkit-perspective: 200px;
    -o-perspective: 200px;
    perspective: 200px;
}
#bookmarks ul {
    left: -9999px;
    opacity:0;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: -9999px;
    -moz-transform: rotateY(70deg);
    -ms-transform: rotateY(70deg);
    -o-transform: rotateY(70deg);
    -webkit-transform: rotateY(70deg);
    transform: rotateY(70deg);
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -moz-transition: -moz-transform 0.3s linear, opacity 0.3s linear;
    -ms-transition: -ms-transform 0.3s linear, opacity 0.3s linear;
    -o-transition: -o-transform 0.3s linear, opacity 0.3s linear;
    -webkit-transition: -webkit-transform 0.3s linear, opacity 0.3s linear;
    transition: transform 0.3s linear, opacity 0.3s linear;
}
#bookmarks li {
    background-color: #FFFFFF;
    position: relative;
}
#bookmarks > li {
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
#bookmarks li a {
    background-color: #AABBCC;
    border-color: #DDDDDD #555555 #555555 #DDDDDD;
    border-style: solid;
    border-width: 1px;
    color: #000000;
    display: block;
    font-size: 15px;
    padding: 8px 10px 8px 5px;
    text-decoration: none;
    width:95px;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
#bookmarks li:hover > a {
    background-color: #8899AA;
    border-color: #8899AA;
    color: #FFFFFF;
}
#bookmarks li:hover ul.sites {
    left: 114px;
    opacity:1;
    top: 0;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
#bookmarks ul li {
    width: 100%;
}

</style>