---
layout: default
title: Stories
weight: 1
---

Stories
-------


Sort by <button onclick='sortdate();'>Time</button> <button onclick='sortwc();'>Words</button>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>

function sortUsingNestedText(parent, childSelector, keySelector,isint) {
    var items = parent.children(childSelector).sort(function(a, b) {
    	if(isint){
    		var vA = parseInt($(keySelector, a).text());
        	var vB = parseInt($(keySelector, b).text());
    	} else {
        var vA = $(keySelector, a).text();
        var vB = $(keySelector, b).text();
    }
        return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
    });
    parent.append(items);
}



function sortwc(){
sortUsingNestedText($('#timeline'),"li","span.wc",true);
  $('.date').css("visibility", "hidden");
  $('.wc').css("visibility", "visible");
}
function sortdate(){
sortUsingNestedText($('#timeline'),"li","span.date",false);
  $('.wc').css("visibility", "hidden");
  $('.date').css("visibility", "visible");
}
</script>



<ul id='timeline'>


<li class='work'>
<span class='date'>2018/3</span><span class='wc'>100</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
poem
</p>
<span class='title'><a href="https://uncannymagazine.com/article/swallow/" target="_blank">Swallow</a>, Uncanny</span>
<p><em><a href="notes/swallow.html">At night we dream of falling.</a></em></p>
</div>
</li>

<li class='work'>
<span class='date'>2017/9</span><span class='wc'>4000</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://seat14c.com/future_ideas/15F" target="_blank">The Noctilucent Paradox in E Minor</a>, Seat 14c</span>
<p><em>The cello is her voice box and she lets it out.</em></p>
</div>
</li>


<li class='work'>
<span class='date'>2017/8</span><span class='wc'>24</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
microfiction
</p>
<span class='title'><a href="https://storyseedvault.com/2017/08/16/46/" target="_blank">Tattooed Helix</a>, Story Seed Vault</span>
<p><em>When her allergies flare...</em></p>
</div>
</li>

<li class='work'>
<span class='date'>2017/6</span><span class='wc'>1000</span>
<span class='circle'></span>
<div class='content'>
<p style="visibility: visible;">
short story
</p>
<span class='title'><a href="https://www.nature.com/nature/journal/v546/n7660/full/546696a.html" target="_blank">Jurassic Jaws Jones</a>, Nature</span>
<p><em>So you want to be an actor, huh?</em></p>
</div>
</li>

</ul>


### What's next?

Seraphima, forthcoming in Liminality<br>

cardioid, forthcoming in Uncanny<br>

But for Grace, forthcoming in [If This Goes On](https://www.kickstarter.com/projects/1022337672/if-this-goes-on-political-sf-anthology){:target="_blank"}

Cast Off Tight, forthcoming in Fireside

