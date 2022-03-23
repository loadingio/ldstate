# ldstate

state control abstraction for cross-framework ui state update.


example:

    state = new ldstate({preset: "bootstrap"})
    state.active mybtn


## Installation

    npm install --save ldstate


## Usage

    state = new ldstate(...)

constructor options:

 - `preset`: predefined state controller. e.g., `bootstrap`
 - `toggle`: custom toggle function. see `customized toggle` section


## API

 - `active(n, v)`: update the active state, with following params:
   - `n`: the element to update the state.
   - `v`: default true. toggle the state on when true, otheriwse toggle the state off.
 - `running(n, v)`: update the running state. check `active(n,v)` for params definition.
 - `disabled(n, v)`: update the disabled state. check `active(n,v)` for params definition.
 - `readonly(n, v)`: update the readonly state. check `active(n,v)` for params definition.
 - `visible(n, v)`: update the visible state. check `active(n,v)` for params definition.


## Customized toggle

You can customize the toggle function directly:

    state = new ldstate do
      toggle: (node, state, v) ->
        if state == ldstate.active => node.classList.toggle \active, v
    state.active(node)


## License

MIT
