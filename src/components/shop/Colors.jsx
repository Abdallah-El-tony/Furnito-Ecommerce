// ** css
import './shop.css'

const Colors = ({handleGetColor}) => {

  const handleClick = (e,color)=>{
    handleGetColor(color)

    // vars
    let elements = document.querySelectorAll('.colors span')
    
      elements.forEach(item=>{
        item.classList.remove('checked')
      })

      e.target.classList.add('checked')
    

  }
  return (
    <div className='d-flex gap-2 flex-wrap mt-3 colors'>
        <span onClick={(e)=>handleClick(e,'red')} style={{backgroundColor:"#FF383A",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px",cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'black')} style={{backgroundColor:"#000000",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px",cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'white')} style={{backgroundColor:"#ffff",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px",cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'darkblue')} style={{backgroundColor:"#0984E4",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'green')} style={{backgroundColor:"#55EFC5",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'warning')} style={{backgroundColor:"#feca39",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'penk')} style={{backgroundColor:"#e82fa7",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'lightred')} style={{backgroundColor:"#e84393",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'violet')} style={{backgroundColor:"#a600ff",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'lightblue')} style={{backgroundColor:"#54a0ff",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
        <span onClick={(e)=>handleClick(e,'yellow')} style={{backgroundColor:"#c4e538",border:'1px solid #d8d8d8',borderRadius:"5px",height:"27px",width:"27px", cursor:"pointer"}}></span>
    </div>
  )
}

export default Colors