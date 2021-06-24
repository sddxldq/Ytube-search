import React, {useState} from 'react';

const SearchBar = ({onTermSubmit})=>{
    const [term, setterm] = useState('')

    const onFormSubmit=(event)=>{
        event.preventDefault();
        onTermSubmit(term);
    }
    return(
        <div className='searchbar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Search</label>
                    <input 
                        type='text' 
                        value={term}
                        onChange={(e)=>setterm(e.target.value)}>
                    </input>
                </div>
            </form>
        </div>
    );
        
}
export default SearchBar;