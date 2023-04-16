import { useState} from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export default function SearchBar(){
    let { term, handleSearch} = useContext(SearchContext)
  
    let onSearchSumbit = e =>{
        e.preventDefault()
        handleSearch(term.current.value)
        term.current.value = ''
    }

    return(
        <form onSubmit={onSearchSumbit} >
            <input 
            type="text" 
            ref={term}
            placeholder="Enter a search term here" 
            />
            <input type="submit"/>
        </form>
    )

}