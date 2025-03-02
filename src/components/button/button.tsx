import './button.css'

export default function Button({text, href}: {text:string, href: string}) {
    
    function handleClick() {
        window.location.href = href
    }
    
    return(
        <button id='btn-component' onClick={handleClick}>
            {text}
        </button>
    )
}