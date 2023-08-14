import React from 'react'
import { useContext } from 'react'
import { UsuarioContext } from 'common/context/Usuario'

export default function AlteraSaldo({}) {
    const { saldo, setSaldo } = useContext(UsuarioContext)

    return (
        setSaldo()
    )
}
