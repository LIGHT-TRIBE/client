export default function dummyColorArray(color){
  const newRandomColor=()=>{
    const dot = [];
    [0,0,0].forEach(x=>dot.push(color))
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
