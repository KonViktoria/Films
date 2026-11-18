export const Form=({handelSubmit,name,handelInput,clearInut,ref})=>{
    return<form onSubmit={handelSubmit}>
    <input
    type='text'
    value={name}
    onChange={handelInput}
    ref={ref}
    />
    <button type='submit'>Search
    </button>
    <button type='button' onClick={clearInut}>Clear</button>
    </form>
}