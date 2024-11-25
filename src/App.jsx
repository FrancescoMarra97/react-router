import { useEffect, useState } from 'react'
import AppHeader from "./components/AppHeader.jsx"
import './App.css'
import AppArticleForm from './components/ApparticleForm.jsx'

const article = [

]

/* const initialFormData = {
  title: "",
  image: "",
  content: "",
  category: "",
  tags: [],
  published: false,
} */
function App() {
  const [postsData, setPostsData] = useState([])
  const [titles, setTitle] = useState(article)
  //  const [newTitle, setNewTitle] = useState("") 
  //const [formData, setFormData] = useState(initialFormData) 

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

  function handleTrashTitleClick(e) {

    const titleIndexToTrash = Number(e.target.getAttribute("data-index"))
    console.log(titleIndexToTrash);
    const removeTitles = titles.filter((index) => index != titleIndexToTrash)
    console.log(removeTitles);
    setTitle(removeTitles)
  }


  function fetchData(url = "http://localhost:3001/posts") {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPostsData(data)
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>


      <div className="container">
        <AppHeader />

        <AppArticleForm />
        <div>
          {/* <form onSubmit={addArticle}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add new article title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            /*  required 
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              placeholder="arcticle content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>
          <div className="input-group mb-3 d-flex align-items-center">
            <label className='m-2'>Category: </label>
            <select className='form-select' value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
              <option></option>
              <option value="Sports">Sports</option>
              <option value="Tech">Tech</option>
              <option value="Health">Health</option>
              <option value="Coding">Coding</option>
              <option value="Games">Videogames</option>
            </select>
          </div>
          <div className="m-3 d-flex align-items-center">
            <label>Tags:</label>
            <div className='d-flex'>
              <div className='mx-1'>
                <input
                  type="checkbox"
                  value="Tech"
                  checked={formData.tags.includes('Tech')}
                  onChange={(e) => {
                    const updatedTags = e.target.checked
                      ? [...formData.tags, 'Tech']
                      : formData.tags.filter(tag => tag !== 'Tech');
                    setFormData({ ...formData, tags: updatedTags });
                  }}
                />
                Tech
              </div>
              <div className='mx-1'>
                <input
                  type="checkbox"
                  value="Sports"
                  checked={formData.tags.includes("Sports")}
                  onChange={(e) => {
                    const updatedTags = e.target.checked
                      ? [...formData.tags, 'Sports']
                      : formData.tags.filter(tag => tag !== 'Sports');
                    setFormData({ ...formData, tags: updatedTags });
                  }}
                />Sports
              </div>
              <div className='mx-1'>
                <input
                  type="checkbox"
                  value="Games"
                  checked={formData.tags.includes("Games")}
                  onChange={(e) => {
                    const updatedTags = e.target.checked
                      ? [...formData.tags, 'Games']
                      : formData.tags.filter(tag => tag !== 'Games');
                    setFormData({ ...formData, tags: updatedTags });
                  }}
                />Videogames
              </div>
              <div className='mx-1'>
                <input
                  type="checkbox"
                  value="Health"
                  checked={formData.tags.includes("Health")}
                  onChange={(e) => {
                    const updatedTags = e.target.checked
                      ? [...formData.tags, 'Health']
                      : formData.tags.filter(tag => tag !== 'Health');
                    setFormData({ ...formData, tags: updatedTags });
                  }}
                />Health
              </div>
              <div className='mx-1'>
                <input
                  type="checkbox"
                  value="Coding"
                  checked={formData.tags.includes("Coding")}
                  onChange={(e) => {
                    const updatedTags = e.target.checked
                      ? [...formData.tags, 'Coding']
                      : formData.tags.filter(tag => tag !== 'Coding');
                    setFormData({ ...formData, tags: updatedTags });
                  }}
                />Coding
              </div>

            </div>
          </div>
          <div className="form-check mb-3">
            <input
              id="published"
              name='published'
              type="checkbox"
              className="form-check-input"
              value={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}

            />
            <label className="form-check-label" htmlFor=""> Published </label>
          </div>
          <div className='d-flex'>
            <div><button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button></div>
            {//            <div className='fetch-button'><button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={handleClickSend}>fetch</button></div>}


        </form > */}</div>

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
        <section className='posts'>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 m-3">




              {
                postsData.data &&

                postsData.data.map((post, index) => (

                  <div className="col" key={post.id}>
                    <div className="card p-2">
                      <div className="card-header">
                        <img src={`http://localhost:3001/imgs/posts/${post.image}`} alt="" />
                      </div>
                      <div className="card-body">
                        <p>
                          {post.title}
                        </p>
                        <p>{post.content}</p>
                        <p>{post.tags.join([", "])}</p>
                      </div>
                      <div className='card-footer'>
                        <button className="btn btn-sm btn-danger" onClick={handleTrashTitleClick} data-index={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                ))

              }


            </div>
          </div>

        </section>
      </div >
    </>
  )
}

export default App
