( 草稿 )

ldstate - 將狀態抽象化. 比如說比下狀態

 - active    ( 啟用 )
 - running   ( 動作中 )
 - disabled  ( 互動 )
 - readonly  ( 編輯 )
 - visible   ( 可見 )

抽象方法是透過函式呼叫:

    ldstate.toggle(node, ldstate.active, true)
    ldstate.toggle(node, ldstate.readonly, false)


用戶可以自行定義 toggle 的行為:

    state = new ldstate do
      toggle: (node, state, v) ->
        if state == ldstate.active => node.classList.toggle \active, v
    state.toggle(node, ldstate.active, true)

也可以使用預設集:

    state = new ldstate preset: \bootstrap
