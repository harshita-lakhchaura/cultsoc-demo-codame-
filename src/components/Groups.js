import React from 'react'
import '../styling/groups.scss'
function Groups() {
  return (
    <>
    <section class="page-section" id="groups">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Groups</h2>
                    <h3 class="section-subheading text-muted">The subsets of our society</h3>
                </div>
                <div class="texts-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="../assets/download.jpg" alt="dance" height="150px"></img>
                        </span>
                        <h2 class="my-3">Dance CLub</h2>
                        <p class="text-muted">Get mesmerised by the enthralling footwork of our dancers</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="../assets/music.jpg" height="145px"></img>
                        </span>
                        <h2 class="my-3">Music Club</h2>
                        <p class="text-muted">Come and get lost in the mellifluous voices of our talented musicians</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="../assets/drama.png" height="150px"></img>
                        </span>
                        <h2 class="my-3">Theatre</h2>
                        <p class="text-muted">You will get moved performance by the gifted actors of our institute</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="../assets/literature.png" alt="dance" height="150px"></img>
                        </span>
                        <h2 class="my-3">Literature</h2>
                        <p class="text-muted">Come and be amazed by the Shakespeare's of IIIT Bhopal</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Groups