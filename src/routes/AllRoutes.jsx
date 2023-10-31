import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { AboutUs } from '../pages/About/AboutUs'
import { Login } from '../pages/Auth/Login'
import { Register } from '../pages/Auth/Register'
import { ForgetPassword } from '../pages/Auth/ForgetPassword'
import { Classes } from '../pages/Classes/Classes'
import { ClassSingle } from '../pages/Classes/ClassSingle'
import { Blog } from '../pages/Blog/Blog'
import { BlogSingle } from '../pages/Blog/BlogSingle'
import { Contact } from '../pages/Contact/Contact'
import { News } from '../pages/News/News'
import { Trainers } from '../pages/Trainer/Trainers'
import { TrainerSingle } from '../pages/Trainer/TrainerSingle'
import { BMI } from '../pages/BMI'
import { Changelog } from '../pages/Changelog'
import { Licenses } from '../pages/Licenses'
import { PageNotFound404 } from '../pages/PageNotFound404'
import { Schedule } from '../pages/Schedule'
import { Headers } from '../components/Headers'
import { Footer } from '../components/Footer'

export const AllRoutes = () => {
  return (
    <div>
        <Headers/>
    <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/forgot_password' element={<ForgetPassword/>}></Route>
        <Route path='/classes' element={<Classes/>}></Route>
        <Route path='/classes/:id' element={<ClassSingle/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:id' element={<BlogSingle/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/trainers' element={<Trainers/>}></Route>
        <Route path='/trainers/:id' element={<TrainerSingle/>}></Route>
        <Route path='/bmi' element={<BMI/>}></Route>
        <Route path='/changelog' element={<Changelog/>}></Route>
        <Route path='/licences' element={<Licenses/>}></Route>
        <Route path='/trainers/:id' element={<TrainerSingle/>}></Route>
        
        <Route path='/schedule' element={<Schedule/>}></Route>
        <Route path='*' element={<PageNotFound404/>}></Route>
        
    </Routes>
    <Footer/>
    </div>
  )
}
