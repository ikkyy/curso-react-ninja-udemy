'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title name="Reinaldo" lastname={{ first: "Bo", last: "rin" }} />
            </div>
        )
    }
}

export default App
