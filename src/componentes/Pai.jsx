import React from 'react'
import { filhoComProps } from '../util/Utilitario'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>{filhoComProps(props)}</ul>
    </div>