import './Shop.css'
export function Shop() {
    let Shop = [
      {
        ListadoDeProductos: "Camisetas",
        imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20camiseta.webp?alt=media&token=75f18f59-f934-44a6-928e-9904bf72d392 img-fluid w-100",
        precioproductos:"$ 35.00 USD",
  
        
        id:1
        
      },
      {
        ListadoDeProductos: "Hoody",
        imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20hoody.webp?alt=media&token=65f094d6-a01b-4e7f-b22d-28f54c2c4765 img-fluid w-100",
        precioproductos:"$ 60.00 USD",
         id:2
      },
      {
        ListadoDeProductos: "Sudaderas",
        imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20sweatpants.webp?alt=media&token=5cb00c69-489d-4994-af94-61fd69a626c1 img-fluid w-100",
        precioproductos:"$ 50.00 USD",
        
      
        id:3
      },
  
      {
        ListadoDeProductos: "Gorra",
        imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/Gorra%20NF.webp?alt=media&token=be11ae3e-c594-463d-8043-4726052bc7ee img-fluid w-100",
        precioproductos:"$ 30.00 USD",
      id:4
          
        },
  
        {
          ListadoDeProductos: "Gorro",
          imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20Beanie.webp?alt=media&token=3879f807-ab83-421f-bf21-89f8c7d0fdde img-fluid w-100",
          precioproductos:"$ 25.00 USD",
          id:5
        },
  
        {
          ListadoDeProductos: "Vinyl",
          imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20Vinyl.webp?alt=media&token=22c94470-dcc2-4b8c-9157-7dd7f8156686 img-fluid w-100",
          precioproductos:"$ 30.00 USD",
          id:6
        },
  
        {
          ListadoDeProductos: "CD ",
          imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20CD.webp?alt=media&token=d40c2025-19c7-4e00-9aa8-2f1bd17fae78 img-fluid w-100",
          precioproductos:"$ 10.00 USD",
          id:7
        },
        {
          ListadoDeProductos: "Camisa manga larga",
          imagendeproducto:"https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20Longsleeve.webp?alt=media&token=4f54c8f8-7576-4790-b72d-4b8e2bbc852a img fluid w-100",
          precioproductos:"$ 40.00 USD",
          id:8
        },
    ];       
         
             
          
             
         
  return( 
       { ListadoDeProductos: "Tienda",
               
              },
              
      
      
         
  
  
          <>
          <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/mansion.jpg?alt=media&token=c271e21c-0a0e-4d83-8fc5-a1d6df4920bb" className="img-fluid d-block w-100" alt=""/>
        <div class="carousel-caption d-none d-md-block">
          
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20face.jpg?alt=media&token=ab75e3ce-9c26-46f0-8782-c66f3a9f3211" className="img-fluid d-block w-100  " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
         
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/react-baa97.appspot.com/o/NF%20HD.png?alt=media&token=9ea09a43-ff2f-4256-b373-0af37cc9aa39" className="img-fluid d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
         
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
          
       <div className="row row-cols-1 row-cols-md-3 g-3">
          {
  
              
              Shop.map(function(Shop){
                  return(
                      <div key={Shop.id}>
                          <div className="col">
                              <div className="card h-100 shadow">
                                  <h3 className="text-center fw-bold">{Shop.ListadoDeProductos}</h3>
                                  <img src={Shop.imagendeproducto} alt="imagen" className="img-fluid w-100" />
                                  
                                  <h3 className="text-center fw-bold">{Shop.nacimiento}</h3>
                               
                                  <h4 className="text-center fw-bold">{Shop.hola}</h4>
                               
                                  <h4 className="text-center fw-bold">Precio:{Shop.precioproductos}</h4>
  
                              </div>
                          </div>
                      </div>
                  )
              })
          }
       </div>
  
      </>
  
      )
    }