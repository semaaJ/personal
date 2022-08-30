function App() {

  return (
      <div  className="bg-black flex flex-col h-screen w-screen justify-center items-center">
        <div className="flex flex-col w-full max-w-5xl">
          <div style={{"--td": "0.6s"}}>
            <h1 className="block-reveal text-4xl font-bold max-w-fit">
              <div className="block-reveal" style={{ "--bc": "#7f00ff", "--d": ".1s"}}>HEY, I'M JAMES</div>
            </h1>
          </div>
          <div style={{"--td": "0.8s"}}>
            <h1 className="block-reveal text-4xl font-bold max-w-fit">
              <div className="block-reveal" style={{ "--bc": "#bf4060", "--d": ".2s"}}>A 24 YEAR OLD</div>
            </h1>
          </div>
          <div style={{"--td": "0.9s"}}>
            <h1 className="block-reveal text-4xl font-bold max-w-fit">
              <div className="block-reveal" style={{ "--bc": "#4040bf", "--d": ".3s"}}>FULL STACK DEVELOPER</div>
            </h1>
          </div>
          <div style={{"--td": "1s"}}>
            <h1 className="block-reveal text-4xl font-bold max-w-fit">
              <div className="block-reveal" style={{ "--bc": "#7f00ff", "--d": ".4s"}}>BASED IN DUBLIN</div>
            </h1>
          </div>
        </div>
        
        <div className="flex flex-col w-full max-w-5xl items-end">
          <div style={{"--td": "1s"}}>
            <h1 className="block-reveal text-4xl font-bold">
              <div className="block-reveal" style={{ "--bc": "#4040bf", "--d": ".1s"}}>APP DEVELOPER</div>
            </h1>
          </div>
          <div style={{"--td": "0.8s"}}>
            <h1 className="block-reveal text-4xl font-bold">
              <div className="block-reveal" style={{ "--bc": "#bf4060", "--d": ".5s"}}>@ MARSH MCLENNAN</div>
            </h1>
          </div>
        </div>

        <div className="flex w-full max-w-5xl">
          <div className="flex flex-col w-full">
            <div style={{"--td": "0.7s"}}>
              <h1 className="block-reveal text-4xl font-bold max-w-fit">
                <a href="https://www.github.com/semaaJ" className="block-reveal hover:bg-white" style={{ "--bc": "#7f00ff", "--d": ".1s"}}>GITHUB</a>
              </h1>
            </div>
            
            <div style={{"--td": "0.8s"}}>
              <h1 className="block-reveal text-4xl font-bold max-w-fit">
                <a href="https://www.linkedin.com/in/james-miles-a57867182/" className="block-reveal hover:bg-white" style={{ "--bc": "#bf4060", "--d": ".3s"}}>LINKEDIN</a>
              </h1>
            </div>

            <div style={{"--td": "1s"}}>
              <h1 className="block-reveal text-4xl font-bold max-w-fit">
                <a href="https://www.google.com" className="block-reveal hover:bg-white" style={{ "--bc": "#4040bf", "--d": ".3s"}}>CV</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;