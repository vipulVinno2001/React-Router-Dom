import { useSearchParams } from "react-router-dom"


const Filter = () => {
    const [searchParam , setSearchParam] = useSearchParams();
    console.warn(searchParam.get('age'))
    const age = searchParam.get('age')
  return (
    <div>
        <h1>My age is {age}</h1>
        <input  type="text" onChange={(e) => setSearchParam({'text':e.target.value})}/>
        <button onClick={() => setSearchParam({'age':40})}>Set Age in Query Params</button>
    </div>
  )
}

export default Filter