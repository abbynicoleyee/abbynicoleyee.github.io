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
  //$('.content').removeAttr('style');
  $('.content').css("background-color", "#fff");
  $('.content').css("color", "#000");
  $("a").removeAttr('style');
}
function sortdate(){
sortUsingNestedText($('#timeline'),"li","span.date",true);
  $('.wc').css("visibility", "hidden");
  $('.date').css("visibility", "visible");
  $('.color').css("visibility", "hidden");
  //$('.content').removeAttr('style');
  $('.content').css("background-color", "#fff");
  $('.content').css("color", "#000");
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


<div style="float:left;"><img src="assets/book.png" style="width:120px; height:149px;"></div><div>
<br><br><p>Chapbook <a href="https://radixmedia.org/product/hard-mother-by-hal-y-zhang/"><em>Hard Mother, Spider Mother, Soft Mother</em></a> is published by Radix Media!</p></div>


<div style="clear:both;"></div>
<ul id='timeline'>

<li class='work'>
<span class='date' id='2019-07-17'>July 2019</span><span class='wc'>200</span><span class='color colordark' id="552colorFCE47B">secret canary</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://commons.wikimedia.org/wiki/File:The_Wikimedia_Foundation%27s_Heart_of_Knowledge_Contest_Magazine.pdf">Signal to Noise</a>, Wikimedia Heart of Knowledge Contest</span>
<p><em>They’re singing a chanson outside.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-06-24'>June 2019</span><span class='wc'>90</span><span class='color colordark' id="005colorA7BDDA">lacquered jewel</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="http://www.liminalitypoetry.com/issue-20-summer-2019/pearling/">Pearling</a>, Liminality</span>
<p><em>I've gone and cast your words into the sea.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-05-27'>May 2019</span><span class='wc'>180</span><span class='color colordark' id="531colorC6F312">isotopic fantasy</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poems, two
</p>
<span class='title'><a href="https://www.bookxi.org/science-fiction">new mass | Only Found in Dreams</a>, Book XI: A Journal of Literary Philosophy</span>
<p><em>the body is light and fruit./the mind is color and water.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-05-18'>May 2019</span><span class='wc'>360</span><span class='color' id="100color213435">charcoal ruins</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://reclaimresist.weebly.com/">seven heads</a>, RECLAIM: An Anthology of Women's Poetry</span>
<p><em>why did she take residence in you, how did she grow?</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-05-15'>May 2019</span><span class='wc'>220</span><span class='color' id="671colorBB5C5A">bitter dusk</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://throughthegate.net/31/">sundown</a>, Through the Gate</span>
<p><em>the clock chimes six and/you transform into a different person.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-05-01'>May 2019</span><span class='wc'>230</span><span class='color' id="682color730000">bleeding jewel</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poems, two
</p>
<span class='title'><a href="https://www.astralwatersreview.com/current-issue">Firelight, Firebright | runes, ruins</a>, Astral Waters Review</span>
<p><em>I have seen the light,/and you will be struck blind.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-05-01'>May 2019</span><span class='wc'>80</span><span class='color colordark' id="549colorDBCD89">new coin</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://www.prolitmag.com/issue-one/zhang">____sheet</a>, Prolit</span>
<p><em>once you get through/the nerves there is no pain.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-04-30'>April 2019</span><span class='wc'>230</span><span class='color colordark' id="498color00FCF4">crystalline elements</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poems, two
</p>
<span class='title'><a href="https://thehellebore.com/sun-caves-sea-child-sea-mother/">sun caves | sea-child, sea-mother</a>, The Hellebore</span>
<p><em>without/light there are no things, there/is no shadow.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-04-26'>April 2019</span><span class='wc'>120</span><span class='color' id="679colorBC2711">candle red</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://www.westminstercollege.edu/campus-life/publications/ellipsis">Sunday Cleansing</a>, ellipsis...Literature & Art</span>
<p><em>I can tell you're/thinking of your heart things again.</em></p>
</div>
</li>



<li class='work'>
<span class='date' id='2019-04-08'>April 2019</span><span class='wc'>190</span><span class='color colordark' id="532color00FF41">code green</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poems, three
</p>
<span class='title'><a href="https://fillingstation.myshopify.com/products/filling-station-issue-71-science-tech">metaflor 01 | metaflor 10 | Things I&rsquo;m Not</a>, filling Station</span>
<p><em>myself a vessel for/the eternal things.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-03-20'>March 2019</span><span class='wc'>63</span><span class='color colordark' id="599colorEDAF00">anamorphic honey</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://softsurface.org/current">man drawn</a>, soft surface</span>
<p><em>she goes between/the flat and real with//a thought.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-03-20'>March 2019</span><span class='wc'>400</span><span class='color colordark' id="001colorFFE0E0">
compound eye
</span>
<span class='circle'></span>
<div class='content' style=' background-image: linear-gradient(45deg, rgba(255,255,255,0.001) 20%, #fff 25%, rgba(255,255,255,0.001) 25%), 
                    linear-gradient(-45deg, rgba(255,255,255,0.001) 20%, #fff 25%, rgba(255,255,255,0.001) 25%), 
                    linear-gradient(-45deg, rgba(255,255,255,0.001) 75%, #fff 80%, rgba(255,255,255,0.001) 0),
                    radial-gradient(#fff 2px, rgba(255,255,255,0.001) 0);
  background-size: 30px 30px, 30px 30px;'>
<p style="visibility: visible;">
prose/poem
</p>
<span class='title'><a href="https://syntaxandsalt.com/2019/03/20/outfield-by-hal-y-zhang/">Outfield</a>, Syntax & Salt</span>
<p><em>On the tarpaulin I lay your body, cold and rigid as the geometry you love.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-03-12'>March 2019</span><span class='wc'>3200</span><span class='color' id="900color480202">red, not red</span>
<span class='circle'></span>
<div class='content' style='
  background-image:
  repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 20px, transparent 20px, transparent 32px, rgba(255,255,255,0.1) 32px, rgba(255,255,255,0.1) 44px, transparent 44px, transparent 44px, rgba(255,255,255,0.1) 44px, rgba(255,255,255,0.1) 68px, transparent 68px, transparent 80px, rgba(255,255,255,0.1) 0),
  repeating-linear-gradient(-45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 20px, transparent 20px, transparent 32px, rgba(255,255,255,0.1) 32px, rgba(255,255,255,0.1) 44px, transparent 44px, transparent 44px, rgba(255,255,255,0.1) 44px, rgba(255,255,255,0.1) 68px, transparent 68px, transparent 80px, rgba(255,255,255,0.1) 0);'

>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://www.barelifereview.org/in-print">Ruby, Ruby, Black Sand</a>, The Bare Life Review</span>
<p><em>The neighbor&rsquo;s girl coughs rubies and sapphires.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-03-05'>March 2019</span><span class='wc'>5000</span><span class='color colordark' id="421color69AEEB">baby blue</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://parvuspress.com/itgo/">But for Grace</a>, If This Goes On</span>
<p><em>Vivian clutched the bag in her lap and thought of winged things.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-02-15'>February 2019</span><span class='wc'>900</span><span class='color' id="660colorFF2D47">floral offering</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://www.amazon.com/dp/B07N7PB75R/">Dark the Sky, Rust the Earth</a>, Gorgon: Stories of Emergence</span>
<p><em>There is something...a beat beneath his feet, a quickening in his pulse.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-02-05'>February 2019</span><span class='wc'>200</span><span class='color colordark' id="499color95CFDB">looped light</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="http://strangehorizons.com/poetry/majorana-back-again/">Majorana, Back Again</a>, Strange Horizons (<a href="http://strangehorizons.com/podcasts/podcast-majorana-back-again/">audio</a>)</span>
<p><em>“What do you mean, backwards?”</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-02-04'>February 2019</span><span class='wc'>180</span><span class='color' id="578colorD69754">burial clay</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="http://theknicknackery.com/issue-six-winter-2018/">something resembling good news</a>, The Knicknackery</span>
<p><em>why we only love people after they die/I don't understand.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-02-01'>February 2019</span><span class='wc'>400</span><span class='color' id="399color3D5759">unsettled</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poems, four
</p>
<span class='title'><a href="http://lockjawmagazine.com/vol6/zhang">f/loss | specific heat | knight to mate in one | beldam? bedlam?</a>, Lockjaw Magazine</span>
<p><em>I need.</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2019-01-04'>January 2019</span><span class='wc'>300</span><span class='color' id="400color790F5B">violent mauve</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poems, three
</p>
<span class='title'><a href="https://www.argotmagazine.com/poetry-and-fiction/hal-zhang-three-poems">Shelly Scully | litotes | five forms of tigers</a>, Argot Magazine</span>
<p><em>I am thinking of a sharp thing.</em></p>
</div>
</li>



<li class='work'>
<span class='date' id='2019-01-04'>January 2019</span><span class='wc'>150</span><span class='color' id="050color0C0F04">black oil</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://califragile.org/2019/01/04/gas-light-by-hal-y-zhang/">Gas, Light</a>, Califragile</span>
<p><em>You whisper sweet crude nothings.</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2019-01-01'>January 2019</span><span class='wc'>300</span><span class='color colordark' id="535colorDCE199">perfumed tea</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://uncannymagazine.com/article/steeped-in-stars/">Steeped in Stars</a>, Uncanny Magazine (<a href="https://uncannymagazine.com/article/uncanny-magazine-podcast-26b/">audio</a>)</span>
<p><em>roots, not wings.</em></p>
</div>
</li>



<li class='work'>
<span class='date' id='2018-12-26'>December 2018</span><span class='wc'>110</span><span class='color colordark' id="580colorF6BB16">primordial yolk</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="http://www.truancymag.dreamhosters.com/2018/12/26/sky-king-toast-by-hal-y-zhang/">sky king toast</a>, Truancy Magazine</span>
<p><em>my egg opens over the breakfast/pan</em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2018-11-26'>November 2018</span><span class='wc'>100</span><span class='color colordark' id="002colorC2BEC7">remote dust</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
microfiction
</p>
<span class='title'><a href="https://themartianmagazine.wordpress.com/2018/11/26/peripheral-13-by-hal-y-zhang/">Peripheral #13</a>, Martian Magazine</span>
<p><em>Are you oriented?</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2018-11-15'>November 2018</span><span class='wc'>1400</span><span class='color' id="403color0D539A">blue giant</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://heliosquarterly.com/do-you-love-me-more-than-the-stars-by-hal-y-zhang/">Do you love me more than the stars?</a>, Helios Quarterly Magazine</span>
<p><em>I laughed at your question in the glittery grass, our only cover the mantle of twilight. </em></p>
</div>
</li>


<li class='work'>
<span class='date' id='2018-11-06'>November 2018</span><span class='wc'>61</span><span class='color' id="670colorDE0404">oxygenated crimson</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://uncannymagazine.com/article/cardioid/">cardioid</a>, Uncanny Magazine (<a href="https://uncannymagazine.com/article/uncanny-magazine-podcast-25a/">audio</a>)</span>
<p><em>slip between the grating of my/ribs</em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2018-10-23'>October 2018</span><span class='wc'>110</span><span class='color colordark' id="010colordddddd">strained silver</span>
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
<span class='date' id='2018-03'>March 2018</span><span class='wc'>100</span><span class='color colordark' id="570colorFECC99">keen peach</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://uncannymagazine.com/article/swallow/">Swallow</a>, Uncanny Magazine</span>
<p><em><a href="notes/swallow">At night we dream of falling.</a></em></p>
</div>
</li>

<li class='work'>
<span class='date' id='2017-09'>September 2017</span><span class='wc'>4000</span><span class='color colordark' id="422color32cbff">clear sky</span>
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
<span class='date' id='2017-08'>August 2017</span><span class='wc'>24</span><span class='color colordark' id="530color66b266">gene green</span>
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
<span class='title'><a href="https://www.nature.com/nature/journal/v546/n7660/full/546696a.html">Jurassic Jaws Jones</a>, Nature Futures</span>
<p><em>So you want to be an actor, huh?</em></p>
</div>
</li>

</ul>


### Forthcoming

* __what we gain in translation__ to appear in [Kweli Journal](http://kwelijournal.org)
* __Pomegranate--Persephone__ and __Summer, scalloped dredges of (colorized)__ to appear in [Muse/A Journal](http://www.museajournal.com/)
* __lapis__ to appear in [Spillway](http://www.spillway.org/)
* __fear cat__ to appear in [Uncanny](https://uncannymagazine.com/)
* __To the Astronomer Aspiring__ to appear in [Rosalind's Siblings](https://galli-books.co.uk/2019/05/28/rosalinds-siblings-table-of-contents/)
* __Saoirse__ to appear in [Banshee](https://bansheelit.tumblr.com/)
* __oubliette__ to appear in [NewMyths.com](http://NewMyths.com)
* __How to leave the planet__ to appear in [Fireside](https://firesidefiction.com/)
* __The Specular Boy__ to appear in [DreamForge Magazine](https://dreamforgemagazine.com/)
* __The Quantum Robin__ to appear in [Story Seed Vault](https://storyseedvault.com/)
* __The Handover of the Scepter of Greatest Regret__ to appear in [Cirsova Magazine](https://cirsova.wordpress.com/cirsova-magazine/)

