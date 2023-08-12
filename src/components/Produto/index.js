import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { priceFormatter } from 'utils/formatadores';


function Produto({
  nome,
  foto,
  id,
  valor = 0,
  unidade
}) {
  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - {priceFormatter(valor)} <span>Kg</span>
              <strong style={{ padding: '0 1rem' }}>(1)</strong>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)