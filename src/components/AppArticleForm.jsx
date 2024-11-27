import { useState } from "react";
import AppArticleCard from "./AppArticleCard";

export default function AppArticleForm() {
    const initialFormData = {
        title: "",
        image: "",
        content: "",
        category: "",
        tags: [],
        published: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [articles, setArticles] = useState([]);

    // Funzione per aggiungere un articolo
    function addArticle(e) {
        e.preventDefault();

        setArticles([
            ...articles,
            { id: Date.now(), ...formData }
        ]);

        // Reset del form dopo l'invio
        setFormData({
            title: "",
            image: "",
            content: "",
            category: "",
            tags: [],
            published: false
        });
    }

    function handleTrashClick(id) {
        // Filtra gli articoli, escludendo quello con l'ID specificato
        const updatedArticles = articles.filter(article => article.id !== id);
        setArticles(updatedArticles);  // Aggiorna lo stato con la lista degli articoli modificata
    }

    return (
        <>
            <div className="container" id="form">
                <h1 className="m-4">New Article</h1>
                <form onSubmit={addArticle}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add new article title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Article content"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <label>Category:</label>
                        <select
                            className="form-select"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="">Select Category</option>
                            <option value="Sports">Sports</option>
                            <option value="Tech">Tech</option>
                            <option value="Health">Health</option>
                            <option value="Coding">Coding</option>
                            <option value="Games">Games</option>
                        </select>
                    </div>

                    <div className="m-3">
                        <label>Tags:</label>
                        <div className="d-flex">
                            {["Tech", "Sports", "Games", "Health", "Coding"].map(tag => (
                                <div className="mx-1" key={tag}>
                                    <input
                                        type="checkbox"
                                        value={tag}
                                        checked={formData.tags.includes(tag)}
                                        onChange={(e) => {
                                            const updatedTags = e.target.checked
                                                ? [...formData.tags, tag]
                                                : formData.tags.filter(t => t !== tag);
                                            setFormData({ ...formData, tags: updatedTags });
                                        }}
                                    />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-check mb-3">
                        <input
                            id="published"
                            type="checkbox"
                            className="form-check-input"
                            checked={formData.published}
                            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                        />
                        <label className="form-check-label">Published</label>
                    </div>

                    <div>
                        <button className="btn btn-outline-secondary" type="submit">Add Article</button>
                    </div>
                </form>

                <AppArticleCard articles={articles} handleTrashClick={handleTrashClick} />
            </div>
        </>
    );
}
