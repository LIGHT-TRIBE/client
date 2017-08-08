import React, {Component} from 'react'

class Thumbnail extends Component {
  constructor(props) {
    super(props)
    this.makeThumbnail = this.makeThumbnail.bind(this)
  }
  componentDidMount(){
    const canvas = this.refs.canvas
    const context = canvas.getContext('2d')
    this.makeThumbnail(canvas, context)
  }
  componentDidUpdate(){
    const canvas = this.refs.canvas
    const context = canvas.getContext('2d')
    const thumb = this.makeThumbnail(canvas, context)
    // context.drawImage(thumb,0,0,64,32)
    this.refs.img.src = thumb
  }


  converter(matrix){
    return matrix.map((each,index)=>{
      const color = each.backgroundColor
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
      const rgb = color.match(/\d+/g)
      const i = index
      const iX = findMultiDimArray(index).x
      const iY = findMultiDimArray(index).y
      const r = parseInt(rgb[0])
      const g = parseInt(rgb[1])
      const b = parseInt(rgb[2])
      const output = {i, iX, iY, r, g, b}
      return output
    })
  }



  makeThumbnail(c2, ctx2){
    const rgb = this.converter(this.props.data())
    const thumb = document.createElement('img')
    console.log(rgb);
    const c1 = document.createElement('canvas')
    c1.width=64
    c1.height=32
    c2.width=64
    c2.height=32
    const ctx1 = c1.getContext('2d')
    const imgData = ctx1.createImageData(64,32)

    for (var i=0; i<imgData.data.length; i+=4){
      const i2 = i==0? 0 : i/4
      imgData.data[i] = rgb[i2].r
      imgData.data[i+1] = rgb[i2].g
      imgData.data[i+2] = rgb[i2].b
      imgData.data[i+3] = 255
    }
    console.log(imgData);

    ctx1.putImageData(imgData,0,0)
    ctx2.putImageData(imgData,0,0)


    thumb.src = c1.toDataURL('image/thumb')
    thumb.width=64
    thumb.height=32

    ctx2.imageSmoothingEnabled=false

    console.log(c1, ctx1, ctx2,thumb);
    ctx2.drawImage(thumb,0,0,64,32,0,0,64,32)
    return thumb.src
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={64} height={32}>
          <img ref="img"/>
        </canvas>
      </div>
    )
  }
}

export default Thumbnail
