const SelectedDeveloper = ({developer, handleDelete}) => {
    const {id,name, image,role, skills, hiringCost} = developer;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={`${image}`}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Role: {role}</p>
                <p>Skills: {skills}</p>
                <p>Price: {hiringCost}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleDelete(id, hiringCost)}>Delete Now</button>
                </div>
            </div>
        </div>
    );
};
export default SelectedDeveloper;