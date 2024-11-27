import Jumbotron from "../components/Jumbotron"

export default function About() {
    const title = "About Us"
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum laudantium doloremque aliquid similique commodi dolor veritatis animi! Nihil, mollitia."
    return (
        <>
            <Jumbotron title={title} description={description}></Jumbotron>
        </>


    )
}