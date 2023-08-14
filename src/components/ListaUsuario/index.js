import React from 'react';
import styles from 'index.css';

export default function ListaUsuario() {
  return (
    <li className={styles.usuario}>
        <tr className={styles.dados}>
            <th>nome</th>
            <th>saldo</th>
            <th>id</th>
            <th>quantidade itens carrinho</th>
        </tr>
    </li>
  )
}
