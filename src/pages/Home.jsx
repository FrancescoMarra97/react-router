import Jumbotron from "../components/Jumbotron";


export default function Home() {
    const pageTitle = "Welcome to my Blog"
    const pageDescription = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nulla consequatur nam voluptatem dolor? Facilis enim aperiam repellat, omnis delectus neque consequatur itaque possimus temporibus saepe! Aut corrupti veritatis veniam?"

    return (
        <>
            <Jumbotron title={pageTitle} description={pageDescription} ></Jumbotron>
        </>
    )
}