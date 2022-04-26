import React,{useState} from 'react'
import './SearchBar.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export const SearchBar=({MyData,setMyData})=> {
    
    const [wordEntered,serWordEntered]=useState('')
    const [filteredData,setFilteredMyData]=useState([])
    const [open, setOpen] = useState(false);

    //const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleFilter=(event)=>{
        console.log("ok");
        const word=event.target.value
        serWordEntered(word)
        console.log("szó",wordEntered)
        const newArr=MyData.filter(obj=>obj.Categories.toLowerCase().includes(word.toLowerCase()))
        console.log("new array",newArr,word);
        if(word!=='')
            setFilteredMyData(newArr)
        else
            setFilteredMyData([])
        setOpen(true);
    }
    const handleClear=()=>{
        setFilteredMyData([])
        serWordEntered('')
        setOpen(false);
        serWordEntered('')
    }
    const handleSelected=(ctg)=>{
        const newArr=MyData.filter(obj=>obj.Categories.toLowerCase()==ctg.toLowerCase())
        setMyData(newArr)
        setOpen(false);
    }
    console.log('filtered data:',filteredData)
  return (
    <div>
        <div id="beatgenresdiv">
            Genre : <input  className="beatgenres" type="text" value={wordEntered} onChange={handleFilter}/>
        
               
        </div>
        {/*modal*/}
       {filteredData.length!=0 && (
            <Modal open={open} onClose={onCloseModal} center
                classNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
              animationDuration={800}
              closeIcon="🔥"
            >
                <div className="border rounded p-3">
                    {filteredData.map(obj=>
                        <div role="button" onClick={()=>handleSelected(obj.Categories)}>{obj.Categories}</div>
                        )}
                </div>
            </Modal>)}
    </div>
  )
}
