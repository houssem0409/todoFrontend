import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const AddTodoForm = props => {
    return (
        <div className='App-form' >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Add Todo ...</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">do it perfectly !</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                     <button className='App-button-add'> <AddBoxIcon/></button>
                </Grid>

            </Grid>



        </div>
    );
};

export default AddTodoForm;