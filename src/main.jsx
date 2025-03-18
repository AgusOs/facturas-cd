import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import UploadInvoices from './components/UploadInvoices'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadInvoices/>
  </StrictMode>,
)
