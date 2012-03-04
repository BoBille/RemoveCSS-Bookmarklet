# RemoveCSS Bookmarklet
Very simple bookmarklet to remove all linked css styling form a site. I'm not sure if this bookmarklet is useful for anything, but it does make it easy to se how a site looks without css styling. What it does not do is remove inline styling.
  
## Install
Just head over to [this site](http://bobille.github.com/RemoveCSS-Bookmarklet/) for a drag and drop install or make this js a bookmark:
`javascript:void(function(){for(i=document.styleSheets.length-1;i>=0;i--){document.styleSheets[i].disabled=true;}})();`

## This is the script:
```javascript
(function(){
  for( i = document.styleSheets.length-1; i>=0; i--){
    document.styleSheets[i].disabled = true;
  }
})();
```