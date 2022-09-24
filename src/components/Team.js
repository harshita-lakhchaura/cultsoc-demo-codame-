import React from 'react'
import '../styling/team.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Team() {
  return (
    <div>
        <section class="page-section " id="team">
            <div class="container" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Crew</h2>
                    <h3 class="section-subheading text-muted">Let's introduce you to the hardworking and brilliant team working day and night behind the progress of Cult-Soc</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../assets/girl.png" alt="..." />
                            <h4>Akansha Parihar</h4>
                            <p class="text-muted">Cult-Soc Head </p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><LinkedInIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><InstagramIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><TwitterIcon/></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../assets/boy.png" alt="..." />
                            <h4>Tushar Gupta</h4>
                            <p class="text-muted">Cult-Soc Head and Singing Coordinator</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><LinkedInIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><InstagramIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><TwitterIcon/></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../assets/boy.png" alt="..." />
                            <h4>Siddhant Verma </h4>
                            <p class="text-muted">Dancing Head</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><LinkedInIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><InstagramIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><TwitterIcon/></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../assets/girl.png" alt="..." />
                            <h4>Sanskriti Saraswat </h4>
                            <p class="text-muted">Dancing Head</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><LinkedInIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><InstagramIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><TwitterIcon/></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../assets/boy.png" alt="..." />
                            <h4>Tanmay Chauhan </h4>
                            <p class="text-muted">Literature Head</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><LinkedInIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><InstagramIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><TwitterIcon/></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../assets/boy.png" alt="..." />
                            <h4>Himanshu Kumar </h4>
                            <p class="text-muted">Drama Head</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><LinkedInIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><InstagramIcon/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><TwitterIcon/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
