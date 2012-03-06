(function(){
      for(var i=document.styleSheets.length-1; i>=0; i--){
        document.styleSheets[i].disabled=true;
      }

      // If jQuery is on the site I'll just let it remove the inline css
      try{
        if($){
          $('[style]').removeAttr('style');
        } else {
          console.log('not $');
        }
      
      // jQuery is not here... Then we have to do the work.  
      } catch(e){
        // at some point I have to do this..
      }
      
})();