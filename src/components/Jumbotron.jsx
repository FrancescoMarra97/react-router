export default function Jumbotron({ title, description, children }) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div
                    className=" p-5 text-white bg-success "
                >
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            {children}
        </div>

    )
}