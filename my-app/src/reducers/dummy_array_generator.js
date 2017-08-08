export default function dummyColorArray(){
  const newRandomColor=()=>{
    const dot = [];
    [0,0,0].forEach(x=>dot.push(255))
    // [0,0,0].forEach(x=>dot.push(Math.floor(Math.random()*255)))
    return {backgroundColor:`rgb(${dot[0]},${dot[1]},${dot[2]})`}
  }
  const makeDummyArray=()=>{
    const initialState = []
    for (let i = 0; i < 2048; i++){
      initialState.push(newRandomColor())
    }
    return initialState
  }
  return makeDummyArray()
}
