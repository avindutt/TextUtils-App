import React, {useState} from 'react'

function TextForm (props) {

    const handleUpClick = (event) => {
        console.log('Your text was changed to uppercase: ', text);
        event.preventDefault()
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here...");
    return (
    <>
    <div className='container mb-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <form>
        <div className="form-group">
            <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="9"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </form>
    </div>

    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
       <h3> Your text Summary </h3> 
        <p>{text.length} characters and {text.split(" ").length} words.</p>
        <p>{0.008 * text.length} Minutes read</p>
    </div>
    </>
    )
}

export default TextForm;