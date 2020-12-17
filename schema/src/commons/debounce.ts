export default function debounce(func: Function, wait: number, immediate?: boolean) {
    var timeout:any;
  
    return function executedFunction(this: any) {
      var context: any = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      if(timeout)
        window.clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };