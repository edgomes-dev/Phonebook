import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Homepage } from './pages/Homepage'
import { ContactGroup } from './pages/ContactGroup'
import { NewContact } from './pages/newContact'

export const Router = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/contactgroup/:id" element={<ContactGroup />} />
                <Route path="/new" element={<NewContact />} />
            </Routes>
        </BrowserRouter>
    )
}