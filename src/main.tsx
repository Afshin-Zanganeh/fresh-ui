import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import { AvocadoPage } from '../themes/avocado/showcase/AvocadoPage'
import { StrawberryPage } from '../themes/strawberry/showcase/StrawberryPage'
import './styles.css'

const collections = [
  { slug: 'strawberry', name: 'Strawberry', Page: StrawberryPage },
  { slug: 'avocado', name: 'Avocado', Page: AvocadoPage },
]

function HomePage() {
  return (
    <>
      <h1>Fresh UI</h1>
      <p>A React design system inspired by fruits and vegetables.</p>
      <nav aria-label="Collections">
        <ul className="collections">
          {collections.map(({ slug, name }) => (
            <li key={slug}>
              <Link to={`/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {collections.map(({ slug, Page }) => (
        <Route
          key={slug}
          path={slug}
          element={
            <>
              <Link to="/">All collections</Link>
              <Page />
            </>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <>
            <h1>Page not found</h1>
            <Link to="/">All collections</Link>
          </>
        }
      />
    </Routes>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <main>
        <App />
      </main>
    </BrowserRouter>
  </StrictMode>,
)
