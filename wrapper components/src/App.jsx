import { useState } from 'react'


function App() {

  return (
    <>
      {/* <Wrappercomp>
        hey there
      </Wrappercomp> */}
      <br></br>
      <Wrappercomp>
        <Wrappercomp>
          <Wrappercomp><Wrappercomp>sanjeet thakur </Wrappercomp></Wrappercomp>
        </Wrappercomp>
        
      </Wrappercomp>
    </>
  )
  function Wrappercomp({children}){
    return <div style={{border:"5px solid black",textAlign:"center",padding:10}}>
      {children}
    </div>
  }
}




export default App
