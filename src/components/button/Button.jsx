
function Button( {isDisabled, children} ) {
    function handleClick(textInput) {
        console.log(textInput);
    }

    return (
        <button type="button" onClick={() => handleClick(children)} disabled={isDisabled}>
            {children}
        </button>
    )
}

export default Button;