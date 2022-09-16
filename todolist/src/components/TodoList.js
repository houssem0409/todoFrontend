import * as React from 'react';
import List from '@mui/material/List';

import TodoItem from './TodoItem';

export default function TodoList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className='App-list'>

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
         <TodoItem key={value} props = {value}/>
        );
      })}
    </List>
    </div>
  );
}
