import React from 'react'
import '../styling/events.scss'

function Events() {
  return (
    <div className='event' id='event'>
        <div className='container-event'>
            <div className='top-section'>
                <h1>Events</h1>
                <p>A summary of successful events conducted by Cultural Society of IIIT Bhopal</p>
            </div>
            <div className='timeline'>
                <div className='line'></div>
                <div className='section'>
                    <div className='bead'></div>
                    <div className='content1'>
                    <img class="rounded-circle img-fluid" src="../assets/teachers.jpg" alt="..."/>
                        <h2>Teachers' Day</h2>
                        <h3>5 September, 2022</h3>
                        <p>On the auspicious occasion of Teachers Day also named "Dronacharya day 2k22", techers were honoured and 
                            appreciated for their consistent hard work for betterment of student's future.Event started with lamp lighting and geeting techers with bouquet. Student 
                            council members took the oath to work for the betterment of the institute. Our director Prof N.S Raghuwanshi sir was invited up on the stage to share his 
                            inspiring words with everyone. The oath was followed by a cultural programme prepared by the students which included the choir of 2nd and 3rd year and also 
                            had graceful dance of the students. To refresh their childhood memories, teachers were made to play interesting games where winners got the prize. Games were 
                            followed by a cake cutting ceremony where all the honourable teachers were made to celebrate trachers day by cutting cake.</p>
                    </div>
                </div>
                <div className='section'>
                    <div className='bead'></div>
                    <div className='content2'>
                    <img class="rounded-circle img-fluid" src="../assets/masthead-bg.jpg" alt="..."/>
                        <h2>Independence Day</h2>
                        <h3>15 August, 2022</h3>
                        <p>
                        On 15th August, the students of MANIT and IIIT came together
                                to celebrate “Azadi ka Amrit Mahotsav” at the Learning
                                Resource Center. The flag was hoisted by the Dr. N.S
                                Raghuwanshi, the Director of MANIT. It was followed by the
                                inspiring words of the Director which filled the students with
                                patriotism. The address was followed by cultural program by
                                the students of MANIT which included songs by students as
                                well as faculty and dance by the students.
                                IIIT also actively participated in the cultural events. Firstly, the
                                mellifluous choir presented 3 songs, namely Teri Mitti, Desh
                                Mere and Vande Mataram. Following this harmonic
                                performance was the drama interspersed with dance. The
                                drama depicted the major turning events in the struggle for
                                independence. The powerful, expressive and enthusiastic dance
                                intensified the feelings put forth in the drama. The
                                performance of IIIT was completed with a formation of the
                                Indian Flag along with the slogan of “Bharat Mata ki Jai”.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default Events