

import AppArticleForm from "../components/ApparticleForm";
import AppListPost from "../components/AppListPost";
import Jumbotron from "../components/Jumbotron";

export default function Posts() {
    const title = "Add new Post"
    const description = "complete the form below"
    return (
        <>
            <Jumbotron title={title} description={description}></Jumbotron>
            <AppArticleForm></AppArticleForm>
            < AppListPost />
        </>
    )
}