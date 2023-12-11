import React from 'react'

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Home from './Home';

import Features from './features';
import Good from './good';

import Classics from './classics';




function Navigations(){
    return <BrowserRouter>
    <div>


<nav  class="navbar navbar-expand-lg navbar-light bg-light ">
<div class="container-fluid">
<a class="navbar-brand" href="#"><img src="/image/logo.png" className='hello'></img></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav ms-auto">
<li class="nav-item">
 <Link to='/Home' class="nav-link" aria-current="page" href="#">Sales</Link>
</li>
<li class="nav-item">
 <Link to='/features' class="nav-link" href="#">Skateboarding</Link>
</li>
<li class="nav-item">
 <Link to='/good' class="nav-link" href="#">Customs</Link>
</li>
<li class="nav-item">
 <Link to='/classics' class="nav-link" href="#" >Classics</Link>
</li>


</ul>
</div>
</div>
</nav>
</div>

<div>
<Routes>

<Route path='/Home' element={<Home/>}></Route>
<Route path='/features' element={<Features/>} ></Route>
<Route path='/good' element={<Good/>}></Route>
<Route path='/classics' element={<Classics/>}></Route>


</Routes>
</div>




    </BrowserRouter>
   
       
}

export default Navigations