import React from 'react'

const Home = () => {
  return (
 <>
 <div class="categories">
         <div class="small-container">
           <div class="row">
               <div class="col-3">
                   <img src="imgs/mob.png"/>
               </div> 
               <div class="col-3">
                  <img src="imgs/one.png"/>
               </div> 
               <div class="col-3">
                   <img src="imgs/beni.jpg"/>
               </div> 
           </div>
       </div>
     </div>
       
{/* <!-------------- Our Featured Products --------------> */}
  
  
  <div class="small-container">
        <h2 class="title">Featured Products</h2>
           <div class="row">
               <div class="col-4">
                   
                   <a href="product-details.html"><img src="imgs/UZU.jpg"/></a>
                   <h4><a href="product-details.html">Uzumaki</a></h4>
                   <div class="rating">
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star-o"></i>
                   </div>
                   <p>$50.00</p>
               </div> 
               <div class="col-4">
                   <img src="imgs/SYTE.jpg"/>
                   <h4>Parasyte</h4>
                   <div class="rating">
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star-half-o"></i>
                   </div>
                   <p>$75.00</p>
               </div> 
               <div class="col-4">
                   <img src="imgs/PAA.jpg"/>
                   <h4>Pyscho Pass</h4>
                   <div class="rating">
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star-half-o"></i>
                   </div>
                   <p>$45.00</p>
               </div> 
                <div class="col-4">
                   <img src="imgs/ONE.jpg"/>
                   <h4>One Punch Man</h4>
                   <div class="rating">
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star-o"></i>
                   </div>
                   <p>$55.00</p>
               </div> 
           </div>
       </div>
       
{/* <!----------offer---------------> */}
  
   <div class="offer">
       <div class="small-container">
           <div class="row">
           <div class="col-2">
               <img src="imgs/hunterlic.jpg" class="offer-img"/>
           </div>
           <div class="col-2">
               <p>Only on MANGAMODE</p>
               <h1>Hunter License</h1>
               <small>As seen in 2013's Hunter x Hunter</small>
               <br/>
               <a href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1" class="btn">Buy Now &#8594;</a>
           </div>
       </div>
       </div>
       
   </div>
   
{/* <!----------testimonial--------------->    */}
  
   <div class="testimonial">
       <div class="small-container">
       <div class="row">
           <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                      <p>I love this site!</p>
                      <div class="rating">
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star-o"></i>
                       </div>
                       <img src="imgs/GR.jpg"/>
                       <h3>Gojo Satoru</h3>
           </div>
            <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                      <p>Its cool I guess</p>
                      <div class="rating">
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star-o"></i>
                       </div>
                       <img src="imgs/suk.jpg"/>
                       <h3>Sukuna</h3>
           </div>
            <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                      <p>This site is fire!</p>
                      <div class="rating">
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star-o"></i>
                       </div>
                       <img src="imgs/ren.jpg"/>
                       <h3>Rengoku</h3>
           </div>
       </div>
       </div>
   </div>
{/* <!----------Brands--------------->      */}
    <div class="brands">
        <div class="small-container">
            <div class="row">
                <div class="col-5">
                    <img src="imgs/fun.png"/>
                </div>
                <div class="col-5">
                    <img src="imgs/vrv.png"/>
                </div>
                <div class="col-5">
                    <img src="imgs/crunch.png"/>
                </div>
            </div>
        </div>
    </div>
 </>

  )
}

export default Home