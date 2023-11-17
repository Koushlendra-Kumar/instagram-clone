import { Avatar, Button, Card, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import "./Suggestions.css";

const Suggestion = () =>{
    return (
      <div className="suggestion-container">
        <Card sx={{ maxWidth: 345, borderRadius: 0, boxShadow: 'none' }}>
          <CardHeader
            avatar={<Avatar aria-label="avatar" />}
            title="Logged in user"
            subheader="Logged in user bio"
          />
        </Card>
        <div className="Suggestions">
          {["Rajesh", "Mark", "John", "Nikhil", "Alice"].map((person, index) => (
            <Card key={index} sx={{ maxWidth: 345, borderRadius: 0, boxShadow: 'none'  }}>
              <CardHeader
                avatar={<Avatar sx={{bgcolor: red[400]}} aria-label="avatar" >{person[0]}</Avatar>}
                title={person}
                subheader="Suggested for you"
                action={<Button variant="text">Follow</Button>}
              />
            </Card>
          ))}
        </div>
      </div>
    );
}

export default Suggestion;