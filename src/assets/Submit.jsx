export default function Submit(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <button className="buttonComponent" onClick={handleSubmit}>{ props.button }</button>
    )
};
