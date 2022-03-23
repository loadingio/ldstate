toggler =
  bootstrap: (s, n, v) -> 
    if s in <[disabled readonly]> =>
      if !(v?) => v = !n.hasAttribute(s)
      if v => n.setAttribute s
      else n.removeAttribute s
      return
    else if s == \visible =>
      [s, v] = [\d-none, if v? => !v else v]
    n.classList.toggle s, v

ldstate = (opt = {}) ->
  @toggle = opt.toggle or toggler[opt.preset] or (->)
  @

ldstate.prototype = Object.create(Object.prototype) <<<
  active:   (n, v = true) -> @toggle \active,   n, v
  running:  (n, v = true) -> @toggle \running,  n, v
  disabled: (n, v = true) -> @toggle \disabled, n, v
  readonly: (n, v = true) -> @toggle \readonly, n, v
  visible:  (n, v = true) -> @toggle \visible,  n, v

if module? => modue.exports = ldstate
else if window? => window.ldstate = ldstate
