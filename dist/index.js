(function(){
  var toggler, ldstate, ref$;
  toggler = {
    bootstrap: function(s, n, v){
      var ref$;
      if (s === 'disabled' || s === 'readonly') {
        if (!(v != null)) {
          v = !n.hasAttribute(s);
        }
        if (v) {
          n.setAttribute(s);
        } else {
          n.removeAttribute(s);
        }
        return;
      } else if (s === 'visible') {
        ref$ = ['d-none', v != null ? !v : v], s = ref$[0], v = ref$[1];
      }
      return n.classList.toggle(s, v);
    }
  };
  ldstate = function(opt){
    opt == null && (opt = {});
    this.toggle = opt.toggle || toggler[opt.preset] || function(){};
    return this;
  };
  ldstate.prototype = (ref$ = Object.create(Object.prototype), ref$.active = function(n, v){
    v == null && (v = true);
    return this.toggle('active', n, v);
  }, ref$.running = function(n, v){
    v == null && (v = true);
    return this.toggle('running', n, v);
  }, ref$.disabled = function(n, v){
    v == null && (v = true);
    return this.toggle('disabled', n, v);
  }, ref$.readonly = function(n, v){
    v == null && (v = true);
    return this.toggle('readonly', n, v);
  }, ref$.visible = function(n, v){
    v == null && (v = true);
    return this.toggle('visible', n, v);
  }, ref$);
  if (typeof module != 'undefined' && module !== null) {
    modue.exports = ldstate;
  } else if (typeof window != 'undefined' && window !== null) {
    window.ldstate = ldstate;
  }
}).call(this);
