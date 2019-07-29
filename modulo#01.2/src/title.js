'use strict'

import React from 'react'

const Title = React.createClass({
    getDefaultProps: function(){
        return {
            name: "Desconhecido",
            lastname: "Sem sobrenome"
        }
    },
    render: function(){
        return (
            <div>
               <h1>Olá, {this.props.name + ' ' + this.props.lastname}!</h1>
            </div>
        )
    }
})

export default Title