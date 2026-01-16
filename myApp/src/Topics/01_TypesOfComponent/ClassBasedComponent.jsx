import { Component } from 'react'

export class ClassBasedComponent extends Component{

    render() {
        return (
            <div>
                <h1>I am class component</h1>
            </div>
        )
    }
}

/**
 * Both class component and functional component have render method but render() of class return bydefault
 */

