import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
if (header != null){
  var sticky = header.offsetTop;
}
function myFunction() {
    if (header != null){
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      }
      else {
          header.classList.remove("sticky");
      }
    }
}