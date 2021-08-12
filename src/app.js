import { useState } from "react";



function App() {


  return (
    <div className="App">

      <h1>hello</h1>
      <Folder name="desktop" isOpen={false} >
        <Folder name="Music" >
          <File name="Al_star.mp4" />
          <File name="some.mp4" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.jpeg" />
      </Folder>
      <Folder name="Application" />

    </div>
  );
}

const Folder = ({ name, children }) => {
  const [isOpen, setOpen] = useState(true)
  const direction = isOpen ? 'down' : 'right'
  const handleClick = () => {
    setOpen(!isOpen)

  }
  return (
    <div >
      <span onClick={handleClick}><i className="red folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: '17px' }}>
        {isOpen ? children : null}
      </div>

    </div>
  )
}

const File = ({ name }) => {
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'image'
  }
  return (
    <>
      <div>
        <i className={` ${fileIcons[fileExtension]} icon`}></i>
        {name}</div>
    </>
  )

}

export default App;
