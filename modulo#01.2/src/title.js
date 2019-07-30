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

export default Title