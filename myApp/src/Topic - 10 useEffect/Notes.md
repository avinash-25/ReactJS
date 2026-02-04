# useEffect Hook

It is a Hook that lets you synchronize a component with an external system.

**Syntax :**
useEffect(function, dependency array)

component call --> fetch  -->  Render (Before useEffect we all follow this way)
(Before useEffect we all done this using javascript and after call the ui screen become freezed until response)

component call --> default UI & API call. --> original Render (Using useEffect)
(But in case of useEffect when we call the API, so instead of freezed screen we show the default UI and when we get back the response then the response is rendered).


