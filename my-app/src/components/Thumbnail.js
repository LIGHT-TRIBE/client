import React, {Component} from 'react'

const dummyColorArray=()=>{
  const newRandomColor=()=>{
    const dot = [];
    [0,0,0].forEach(x=>dot.push(Math.floor(Math.random()*255)))
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

export default class Thumbnail extends Component {
  constructor(props) {
    super(props)
    this.makeThumbnail = this.makeThumbnail.bind(this)
  }
  componentDidMount(){
    const {canvas} = this.refs
    const context = canvas.getContext('2d')
    this.makeThumbnail(context)

  }
  converter(matrix){
    if(matrix != undefined){
      if (matrix.length > 0){
        return matrix.map((each,index)=>{
          const findMultiDimArray=(i)=>{
            const RGBdata = {x:0,y:0}
            if (i<64){
              RGBdata.x=i
              RGBdata.y=0
            } else {
              RGBdata.x= i %64
              RGBdata.y = (i-RGBdata.x)/64
            }
            return RGBdata
          }
          const rgb = each.backgroundColor.match(/\d+/g)
          const r = parseInt(rgb[0])
          const g = parseInt(rgb[1])
          const b = parseInt(rgb[2])

          return {r, g, b}
        })
      }
    }

  }

  makeThumbnail(ctx2){
    // const rgb = this.converter(dummyColorArray())
    const rgb = this.converter(this.props.data)
    const imgData = ctx2.createImageData(64,32)
    for (var i=0; i<imgData.data.length; i+=4){
      const i2 = i==0? 0 : i/4
      imgData.data[i] = rgb[i2].r
      imgData.data[i+1] = rgb[i2].g
      imgData.data[i+2] = rgb[i2].b
      imgData.data[i+3] = 255
    }
    ctx2.putImageData(imgData,0,0)
  }
  render() {
    return (
      <div
        onClick={()=>{!this.props.submit ? this.props.viewThumbFullSize(this.props.data) : console.log('');}}
        className="thumbnail">
        <canvas ref="canvas" width={64} height={32}/>
      </div>
    )
  }
}
