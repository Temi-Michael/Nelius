export default function SubmitDark(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <button className="buttonComponent" onClick={handleSubmit}>{ props.button }</button>
    )
};
