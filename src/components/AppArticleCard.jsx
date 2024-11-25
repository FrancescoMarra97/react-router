import { useState } from "react"
export default function AppArticleCard() {
    const article = [

    ]

    const initialFormData = {
        title: "",
        image: "",
        content: "",
        category: "",
        tags: [],
        published: false,
    }
    const [formData, setFormData] = useState(initialFormData)
    const [titles, setTitle] = useState(article)

    function addArticle(e) {
        e.preventDefault()


        setTitle([
            ...titles,
            { id: Date.now(), ...formData }
        ])

        setFormData({
            ...formData,
            title: "",
            image: "",
            content: "",
            category: "",
            tags: [],
            published
        })
    }
    return (
        <>


            <div className='row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 m-2'>
                {titles.map((formData, index) =>
                    <div key={index} className='card d-flex justify-content-between p-2'>
                        <div className="cardHeader">
                            <img src={formData.image} alt={formData.title} />
                        </div>
                        <div className="card-body">
                            <h3>{formData.title}</h3>
                            <p>{formData.content}</p>
                            <p><strong>Category:</strong> {formData.category}</p>
                            <p><strong>Tags:</strong> {formData.tags}</p>
                            <p><strong>Published:</strong> {formData.published ? 'Yes' : 'No'}</p>
                        </div>

                        <button className="btn btn-sm btn-danger" onClick={handleTrashTitleClick} data-index={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                            </svg>
                        </button>
                    </div>)}

            </div>

        </>
    )
}