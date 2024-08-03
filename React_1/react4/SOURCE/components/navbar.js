const NavBar=({text, handleChange})=>{
    return <nav><input value={text} onChange={handleChange}/></nav>
};

export default NavBar