
const HEAD = <div style={{
  border: "10px solid black",
  borderRadius: "50px",
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "30px",
  right: "-20px"
}}></div>

const BODY = <div style={{
  width: "10px",
  height: "80px",
  backgroundColor: "black",
  position: "absolute",
  top: "70px",
  right: 0
}}></div>

const RIGHT_ARM = <div style={{
  width: "60px",
  height: "10px",
  backgroundColor: "black",
  position: "absolute",
  top: "80px",
  right: "-50px",
  rotate: "30deg",
  transformOrigin: "left bottom"
}}></div>

const LEFT_ARM = <div style={{
  width: "60px",
  height: "10px",
  backgroundColor: "black",
  position: "absolute",
  top: "80px",
  right: "0",
  rotate: "-30deg",
  transformOrigin: "right bottom"
}}></div>

const RIGHT_LEG = <div style={{
  width: "80px",
  height: "10px",
  backgroundColor: "black",
  position: "absolute",
  top: "140px",
  right: "-70px",
  rotate: "60deg",
  transformOrigin: "left bottom"
}}></div>

const LEFT_LEG = <div style={{
  width: "80px",
  height: "10px",
  backgroundColor: "black",
  position: "absolute",
  top: "145px",
  right: "10px",
  rotate: "-60deg",
  transformOrigin: "right top"
}}></div>

const deadTrain: JSX.Element[] = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type DrawingProps = {
  misses: number
}

const Drawing = ({misses}: DrawingProps) => {
  return (
    <div style={{position: "relative"}}>
      {...deadTrain.slice(0, misses)}
      <div style={{
        width: "10px",
        height: "30px",
        marginLeft: "150px",
        backgroundColor: "black",
        position: "absolute",
        top: 0,
        right: 0
      }}></div>
      <div style={{
        width: "150px",
        height: "10px",
        marginLeft: "100px",
        backgroundColor: "black",
      }}></div>
      <div style={{
        width: "10px",
        height: "250px",
        marginLeft: "100px",
        backgroundColor: "black",
      }}></div>
      <div style={{
        width: "200px",
        height: "10px",
        backgroundColor: "black",
      }}></div>
    </div>
  )
}

export default Drawing