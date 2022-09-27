import React from 'react'
import '../styling/footer.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div id="footer">
        <div class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="footer">Copyright &copy; Your Website 2022</div>
                    <div class="icons">
                            <a class="btn btn-dark btn-social mx-2" href="#!" ><LinkedInIcon fontSize="large"/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" ><InstagramIcon fontSize="large"/></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" ><TwitterIcon fontSize="large"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer