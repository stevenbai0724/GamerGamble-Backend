import './App.css';
import {useState, useEffect, useRef, React} from 'react'
import axios from 'axios'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import League from "./league.svg"
import Refresh from "./refresh.png"

const useStyles = makeStyles((theme) => ({

  app: {
    textAlign: "center",
    backgroundColor: "#1D2025",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  appBox: {
    width: "1200px",
    marginTop: "200px",
  },
  background: {
    width: "100%",
    backgroundColor : "#102a43",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "calc(100% - 40px)",
    width :  "calc(100% - 40px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textBox: {

    textAlign: "left",
    marginLeft: "20px",
    color: "#AEEE98",

  },
  money: {
    height: "120px",
    width : "175px",
    backgroundColor: "#2E445B",
    display: "flex",
    borderRadius: "5px",
    marginLeft: '40px',
    alignItems: "center",
    justifyContent: "center",
    
  },
  outcome: {
    textAlign: "left",
    color: "#AEEE98",
    marginLeft: "60px",
    width: "200px",
  },
  img: {
    height: "100%",

  },
  text: {
    color: "white",
  },

}))

function App() {
  const classes = useStyles();

  const [obj, setObj] = useState({

      match:{

         teams:[
            {
               id:"",
               name:"",
               code:"",
               image:"",
               result:{
                  gameWins: 0
               }
            },
            {
               id:"",
               name:"",
               code:"",
               image:"",
               result:{
                  gameWins: 0
               }
            }
         ],
        
      
      }
  });
  const A = obj.match.teams[0].result.gameWins;
  const B = obj.match.teams[1].result.gameWins;

  const [step, setStep] = useState(0); 
  const isMounted = useRef(false);

  useEffect(() => {
    if(isMounted.current){

      async function fetchData(){
        const req = await axios.get('/api/todo');
  
        setObj(req.data.data.event)
        console.log(req.data);
      }
      fetchData();
    
      console.log("useffect ran " + step)
      


    }
    else{
      isMounted.current = true;
    }

  }, [step])

  return (


    <div className = {classes.app}>  
      <div className = {classes.appBox}>

       

        <div className = {classes.background}>

          <div className = {classes.container}>

            <img className = {classes.img} src = {League}></img>

            <div className = {classes.textBox}>
                <h1>LCS Academy 2022 Spring</h1>

                <h2>C9 Academy</h2>

                <h2>Bet Placed: -$100 CAD</h2>

            </div>
            <div className={classes.outcome}>
              <h1>Outcome:</h1>

              <h2>{A} - {B}</h2>

              <h2>&nbsp;</h2>
            </div>

            <div className = {classes.money}>

              {
                A === B &&
                <h1 style = {{color: "#ed4420"}}>-$100</h1>
              }
              {
                A > B && 
                <h1 style = {{color: "#53f23f"}}>+$275</h1>
              }
              

            </div>

            <ButtonBase onClick = {() => setStep(step + 1)} style = {{borderRadius: "50%", width: "40px", height: "40px", marginLeft: "30px"}}><img style = {{ width: "100%", height: "100%"}} src = {Refresh}></img></ButtonBase>

          </div>

        
        </div>

      </div>
      

    </div>
  );
}

export default App;