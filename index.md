---
layout: default
title: Words
weight: 2
---

Words
-------

Sort by <input type="radio" name="sort" class="radio" id="recency" checked><label for='recency' onclick='sortdate();'>recency</label>
<input type="radio" name="sort" id='verbosity' class="radio"><label for='verbosity' onclick='sortwc();'>verbosity</label>
<input type="radio" name="sort" id='wavelength' class="radio"><label for='wavelength' onclick='sortcolor();'>color</label>



<script>

function sortUsingNestedText(parent, childSelector, keySelector,isdate) {
    var items = parent.children(childSelector).sort(function(a, b) {
      if(isdate){
        var vA = $(keySelector, a).attr('id');
        var vB = $(keySelector, b).attr('id');
      } else {
        var vA = parseInt($(keySelector, a).text());
        var vB = parseInt($(keySelector, b).text());
    }
        return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
      
    });
    parent.append(items);
}


function sortwc(){
sortUsingNestedText($('#timeline'),"li","span.wc",false);
  $('.date').css("visibility", "hidden");
  $('.wc').css("visibility", "visible");
  $('.color').css("visibility", "hidden");
  $('.content').removeAttr('style');
  $("a").removeAttr('style');
}
function sortdate(){
sortUsingNestedText($('#timeline'),"li","span.date",true);
  $('.wc').css("visibility", "hidden");
  $('.date').css("visibility", "visible");
  $('.color').css("visibility", "hidden");
  $('.content').removeAttr('style');
  $("a").removeAttr('style');
}

function sortcolor(){
sortUsingNestedText($('#timeline'),"li","span.color",true);
  $('.date').css("visibility", "hidden");
  $('.wc').css("visibility", "hidden");
  $('.date').css("visibility", "hidden");
  $('.color').css("visibility", "visible");
  $('.color').each(function() {
    var bgcolor=this.id.split("color")[1];
    $(this).css("text-decoration", "underline #" + bgcolor);
    $(this).siblings("div").css("background-color", "#" + bgcolor);
    //$(this).css("background-color","#" + bgcolor);
    if($(this).hasClass("colordark")){
      $(this).siblings("div").css("color", "#000");
      $(this).siblings("div").find("a").css("color", "#000");
    } else{
      $(this).siblings("div").css("color", "#fff");
      $(this).siblings("div").find("a").css("color", "#fff");
    }
    
});
  
  $('.wc').css("visibility", "hidden");
}
</script>

<ul id='timeline'>

<li class='work'>
<span class='date' id='2018-11-26'>November 2018</span><span class='wc'>100</span><span class='color colordark' id="300colorC2BEC7">remote dust</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
microfiction
</p>
<span class='title'><a href="https://themartianmagazine.wordpress.com/2018/11/26/peripheral-13-by-hal-y-zhang/">Peripheral #13</a>, Martian</span>
<p><em>Are you oriented?</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2018-11-06'>November 2018</span><span class='wc'>61</span><span class='color colordark' id="670colorDE0404">oxygenated crimson</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://uncannymagazine.com/article/cardioid/">cardioid</a>, Uncanny</span>
<p><em>slip between the grating of my/ribs</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2018-10-23'>October 2018</span><span class='wc'>110</span><span class='color colordark' id="100colorDDDDDD">strained silver</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://isacoustic.com/2018/10/23/person-hal-y-zhang-one-poem/">Sievelike</a>, Isacoustic</span>
<p><em>The lump on the back of my skull is not/draining</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2018-06-29'>June 2018</span><span class='wc'>190</span><span class='color colordark' id="550colorFFE600">blinding sunbeam</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="http://www.liminalitypoetry.com/issue-16-summer-2018/seraphima/">Seraphima</a>, Liminality</span>
<p><em><a href="notes/seraphima">I did not know it would hurt/this much to turn into an angel.</a></em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2018-06-19'>June 2018</span><span class='wc'>3200</span><span class="color colordark" id="405color8484ff">frayed periwinkle</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://firesidefiction.com/cast-off-tight">Cast Off Tight</a>, Fireside</span>
<p><em><a href="notes/castofftight">It is all an accident.</a></em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2018-03'>March 2018</span><span class='wc'>100</span><span class='color colordark' id="540colorFECC99">keen peach</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://uncannymagazine.com/article/swallow/">Swallow</a>, Uncanny</span>
<p><em><a href="notes/swallow">At night we dream of falling.</a></em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2017-09'>September 2017</span><span class='wc'>4000</span><span class='color colordark' id="422color32cbff">clear sky blue</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://seat14c.com/future_ideas/15F">The Noctilucent Paradox in E Minor</a>, Seat 14c</span>
<p><em>The cello is her voice box and she lets it out.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2017-08'>August 2017</span><span class='wc'>24</span><span class='color colordark' id="532color66b266">gene green</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
microfiction
</p>
<span class='title'><a href="https://storyseedvault.com/2017/08/16/46/">Tattooed Helix</a>, Story Seed Vault</span>
<p><em>When her allergies flare...</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2017-06'>June 2017</span><span class='wc'>1000</span><span class='color colordark' id="600colorFF9900">fused orange</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://www.nature.com/nature/journal/v546/n7660/full/546696a.html">Jurassic Jaws Jones</a>, Nature</span>
<p><em>So you want to be an actor, huh?</em></p>
</div>
</li>

</ul>


### Forthcoming

* __Hard Mother, Spider Mother, Soft Mother__ to be published by [Radix Media](https://radixmedia.org/call-for-submissions-futures/)
* __But for Grace__ to appear in [If This Goes On](https://parvuspress.com/itgo/)
* __sky king toast__ to appear in [Truancy](http://www.truancymag.dreamhosters.com/)
* __Pearling__ to appear in [Liminality](http://www.liminalitypoetry.com)
* __Majorana, Back Again__ to appear in [Strange Horizons](http://strangehorizons.com/)
* __Steeped in Stars__ to appear in [Uncanny](https://uncannymagazine.com/)
* __Dark the Sky, Rust the Earth__ to appear in [Pantheon](https://pantheonmag.com/)
* __The Quantum Robin__ to appear in [Story Seed Vault](https://storyseedvault.com/)
* __The Handover of the Scepter of Greatest Regret__ to appear in [Cirsova](https://cirsova.wordpress.com/cirsova-magazine/)

