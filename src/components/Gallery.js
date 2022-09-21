import React from 'react'
import '../styling/gallery.scss'

function Gallery() {
  return (
    <>
       <section class="page-section bg-dark" id="gallery">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Gallery</h2>
                    <h3 class="section-subheading text-muted">A glimpse of the culture here at IIIT Bhopal</h3>
                </div>
                <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                        {/* gallery item 1*/}
                        <div class="gallery-item">
                                <img class="img-fluid" src="../assets/teachers.jpg" alt="..."  height="250px" width="360px"/>
                            <div class="gallery-caption">
                                <div class="gallery-caption-heading">Teachers' Day</div>
                                <div class="gallery-caption-subheading text-muted">On the auspicious occasion of Teachers' Day, also named "Dronacharya day 2k22", teachers were honoured and appreciated</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* gallery item 2*/}
                        <div class="gallery-item">
                            <img class="img-fluid" src="../assets/event1.jpeg" alt="..." height="250px"/>
                            <div class="gallery-caption">
                                <div class="gallery-caption-heading">Independence Day</div>
                                <div class="gallery-caption-subheading text-muted">Azadi ka Amrit Mahotsav was celebrated with great pomp and show by IIIT Bhopal in collaboration with MANIT Bhopal</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/*  gallery item 3*/}
                        <div class="gallery-item">
                                <img class="img-fluid" src="../assets/soon2.gif" alt="..." height="250px"/>
                            <div class="gallery-caption">
                                <div class="gallery-caption-heading">Event 3</div>
                                <div class="gallery-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    </>
  )
}

export default Gallery