import { TextField, Button } from '@material-ui/core'
import useStyles from './style'

export default function SearchItem({ searchPokemon, setSearchPokemon, handleFindPokemon }) {

  const classes = useStyles()

  return (

    <div className={classes.root}>
    
      <TextField
        label="Search a new Pokemon"
        variant="outlined"
        value={ searchPokemon }
        onChange={ e => setSearchPokemon(e.target.value) }        
      />
      
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={ handleFindPokemon }        
      >     
              
        Search         
      </Button>

    </div>
  )
}