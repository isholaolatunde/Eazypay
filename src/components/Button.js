const Button = (props) => {
    const text = props.text;
    return (
        
      <button type='button'
      className='px-6 
      font-popins font-medium
      text[18px] text-white outline-none rounded-full bg-buttoncolor ms-8 w-52 h-12' >
       {text}
      </button>
    )
  }
  
  export default Button