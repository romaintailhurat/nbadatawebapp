import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

function Perfs() {

  const dates = ["2023-01-03", "2023-01-04"] //FIXME feed from DB
  
  return (
    <div>
      <h1>Perfs</h1>
      <List>
        {dates.map(date => {
          const link = "/perfs/" + date;

          return(
            <ListItem key={date}>
							<ListItemButton>
								<Link href={link}>
                  <ListItemText primary={date}/>
                </Link>
							</ListItemButton>
						</ListItem>
          )
        })}
      </List>
      
    </div>
  )
}

export default Perfs;