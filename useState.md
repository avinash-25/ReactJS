## Rules for useState Hook

- Always call useState at the top level of your component. Do not call it inside loops, conditions, or nested functions.
- only call at the top level of your React function components. Do not call Hooks from regular JavaScript functions.
- State update are asynchronous.
- useState prepares linked list internally if order not matched from previous one then error occurs.
- Don't mutate the state directly. Always use the state updater function provided by useState to update the state.
- Don't use useState inside the loops.

### This is to be prepared

1. useState
2. useEffect
3. useMemo
4. useCallback
5. useRef
6. useLayoutEffect
7. useReducer
8. forwardRef
9. context API
10. Redux toolkit
11. Zustand
12. React Testing Library