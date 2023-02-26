import React, {useState} from 'react'

function TextForm (props) {

    const [text, setText] = useState("Enter text here...");

    const handleUpClick = (event) => {
        console.log('Your text was changed to uppercase: ', text);
        event.preventDefault()
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert(": Converted to uppercase!", "success");
    }

    const handleDownClick = (event) => {
        console.log('Your text was changed to lowercase', text);
        event.preventDefault();
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to lowercase!", "success");
    }

    const handleCopy = (event) => {
        event.preventDefault();
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(": Copied to Clipboard!", "success");
    }

    const handleClearText = (event) => {
        event.preventDefault();
        setText('');
        props.showAlert(": Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
    <>
    <div className='container mb-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <form aria-required>
        <div className="form-group">
            <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="9" ></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleClearText}>Clear Text</button>
        </form>
    </div>

    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
       <h3> Your text Summary </h3> 
        <p>{text.length} characters and {text.split(" ").filter((element)=> {return element.length!= 0}).length} words.</p>
        <p>{0.008 * text.length} Minutes read</p>
    </div>
    </>
    )
}

export default TextForm;