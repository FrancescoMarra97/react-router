
import { Outlet } from "react-router-dom"
import AppArticleForm from "../components/ApparticleForm"
import AppHeader from "../components/AppHeader"
import MainMenu from "../components/MainMenu"


export default function DefaultLayout() {


    return (
        <>
            <header>
                <AppHeader ></AppHeader>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}