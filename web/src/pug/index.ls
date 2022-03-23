console.log \ok

state = new ldstate!

view = new ldview do
  root: document.body
  action: click:
    btn: ({node}) -> state.active node


/*
get
set
toggle

    state.active
 
 state.active.toggle node
 state.active.get node

 state.active node, true
 state.active node, false
 state.is-active node

 state.toggle-active 
  state.active node, !state.is-active(node)
*/
