import Jumbotron from "../components/Jumbotron";
import AppArticleForm from "../components/ApparticleForm";

export default function PostCreatePage() {


    return (
        <>
            <Jumbotron title="Add Post" description='Fill the form below to add a new post to the list'></Jumbotron >
            <div className="container">
                <div className="card bg-dark p-3 text-white">
                    <AppArticleForm></AppArticleForm>
                </div>
            </div>
        </>
    )
}