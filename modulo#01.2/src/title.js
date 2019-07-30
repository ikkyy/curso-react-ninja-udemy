'use strict'

import React from 'react'

const Title = ({name, lastname}) => (
    <h1>Olá, {`${name} ${lastname.first}${lastname.last}!`}</h1>
)

Title.defaultProps = {
    name: "Desconhecido",
    lastname: {
        first: "Sem",
        last: " Sobrenome"
    }
}

/* const Title = React.createClass({
    getDefaultProps: function () {
        return {
            name: "Desconhecido",
            lastname: {
                first: "Sem",
                last: " Sobrenome"
            }
        }
    },

    render: function () {
        return (
            <div>
                <h1>Olá, {this.props.name + ' ' + this.props.lastname.first + this.props.lastname.last}!</h1>
            </div>
        )
    }
}) */

export default Title