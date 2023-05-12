import * as React from 'react'
import { Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './consultancy.css'

export default function PremiumConsultancy() {
    return (
        <>
            <div id='consultancy-header'>
                <div id='h-info'>
                    <p id='h-title'>Are you in search for your Dream Career?</p>
                    <p>Come on! We are here to guide you in finding your dream career by conducting Premium Individual Sessions just with you.</p>
                    <Button variant='outlined' sx={{ bgcolor: 'orangered', border: 'none', color: 'white', p: '0.5rem 1rem', fontSize: 30 }}>Book a session</Button>
                </div>
            </div>

            <div id='specialities'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block" src="/assets/yash beardo.png" alt="First slide"></img>
                            <p id='s-name'>Yash Kgf</p>
                            <p id='s-position'>(Actor, Producer)</p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block" src="/assets/yash beardo (1).png" alt="Second slide"></img>
                            <p id='s-name'>Harsh Suthar</p>
                            <p id='s-position'>(Cofounder, CTO, COO, YouTuber)</p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block" src="/assets/yash kgf.png" alt="Third slide"></img>
                            <p id='s-name'>Nikhil Fagwani</p>
                            <p id='s-position'>(Cofounder, CFO, CMO, YouTuber)</p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block" src="/assets/yash beardo (1).png" alt="Third slide"></img>
                            <p id='s-name'>Kunal Patel</p>
                            <p id='s-position'>(Cofounder, CEO)</p>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div id='s-info'>
                    <p id='s-title1'>ONE TO ONE SESSIONS</p>
                    <p id='s-title2'>with our mentors</p>
                    Here you will get chance to conduct a one-to-one sessions with our Smart Mentors, who will guide you towards your Dream career.
                    <Button variant='outlined' sx={{ border: '1px solid white', color: 'white', fontSize: 30, width: 200, marginTop: 2 }}>EXPLORE</Button>
                </div>
            </div>

            <div id='interest'>
                <p id='i-title'>SELECT YOUR INTEREST</p>

                <div id='i-list'>
                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>

                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>

                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>
                </div>

                <div id='i-list'>
                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>

                    <div id='i2'>
                        <img src='/assets/mascot.png'></img>
                        COMONK
                    </div>

                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>
                </div>

                <div id='i-list'>
                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>

                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>

                    <div id='i1'>
                        <img src='/assets/tech clip art.png'></img>
                        TECH
                    </div>
                </div>
            </div>

            <div id='counsellor'>
                <div id='c-title'>
                    MEET YOUR MENTORS
                    <p id='c-subtitle'>(RELATED TO YOUR TECH INTEREST)</p>
                </div>

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div id='container'>
                                <img class="d-block" src="/assets/yash beardo.png" alt="First slide"></img>
                                <div id='c-info'>
                                    <p id='c-name'>ROCKY BHAI</p>
                                    <p id='c-work'>Actor, Producer</p>

                                    I am Ankur Warikoo, an entrepreneur, angel investor, startup mentor and public speaker. Became an entrepreneur in 2009 with secondshaadi.com (yeah! long story. fun story) and gaadi.com. Started Groupon's India business in 2011; ran APAC along with India until 2015. Founded nearbuy.com in 2015. Raised $40Mn+ from Sequoia and Paytm. Was CEO until 2019.
                                    <br />
                                    <br />
                                    As an angel investor, I have invested in 20+ startups and I am a mentor/coach to several first-time entrepreneurs.
                                    <br />
                                    <br />
                                    I am also a public speaker and communicator - and share my content through my social media channels (8Mn+ followers across Linkedin, Twitter, TikTok, Instagram, Facebook and Youtube)
                                    <br />
                                    <br />
                                    FORTUNE India featured me in their 40 Under 40 list for India and am part of LinkedIn India's PowerProfiles list.
                                    <br />
                                    <br />
                                    More than anything else, I am passionate about helping first-time founders avoid the same mistakes that I made when I became one.

                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div id='container'>
                                <img class="d-block" src="/assets/yash beardo (1).png" alt="First slide"></img>
                                <div id='c-info'>
                                    <p id='c-name'>HARSH SUTHAR</p>
                                    <p id='c-work'>YouTuber, Graphics Designer</p>

                                    I am Ankur Warikoo, an entrepreneur, angel investor, startup mentor and public speaker. Became an entrepreneur in 2009 with secondshaadi.com (yeah! long story. fun story) and gaadi.com. Started Groupon's India business in 2011; ran APAC along with India until 2015. Founded nearbuy.com in 2015. Raised $40Mn+ from Sequoia and Paytm. Was CEO until 2019.
                                    <br />
                                    <br />
                                    As an angel investor, I have invested in 20+ startups and I am a mentor/coach to several first-time entrepreneurs.
                                    <br />
                                    <br />
                                    I am also a public speaker and communicator - and share my content through my social media channels (8Mn+ followers across Linkedin, Twitter, TikTok, Instagram, Facebook and Youtube)
                                    <br />
                                    <br />
                                    FORTUNE India featured me in their 40 Under 40 list for India and am part of LinkedIn India's PowerProfiles list.
                                    <br />
                                    <br />
                                    More than anything else, I am passionate about helping first-time founders avoid the same mistakes that I made when I became one.

                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div id='container'>
                                <img class="d-block" src="/assets/yash kgf.png" alt="First slide"></img>
                                <div id='c-info'>
                                    <p id='c-name'>NIKHIL FAGWANI</p>
                                    <p id='c-work'>YouTuber, Graphics Designer, SpaceGeek</p>

                                    I am Ankur Warikoo, an entrepreneur, angel investor, startup mentor and public speaker. Became an entrepreneur in 2009 with secondshaadi.com (yeah! long story. fun story) and gaadi.com. Started Groupon's India business in 2011; ran APAC along with India until 2015. Founded nearbuy.com in 2015. Raised $40Mn+ from Sequoia and Paytm. Was CEO until 2019.
                                    <br />
                                    <br />
                                    As an angel investor, I have invested in 20+ startups and I am a mentor/coach to several first-time entrepreneurs.
                                    <br />
                                    <br />
                                    I am also a public speaker and communicator - and share my content through my social media channels (8Mn+ followers across Linkedin, Twitter, TikTok, Instagram, Facebook and Youtube)
                                    <br />
                                    <br />
                                    FORTUNE India featured me in their 40 Under 40 list for India and am part of LinkedIn India's PowerProfiles list.
                                    <br />
                                    <br />
                                    More than anything else, I am passionate about helping first-time founders avoid the same mistakes that I made when I became one.

                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div id='plans'>
                <p id='p-title'>BEST PLANS FOR YOU</p>
                Here we try to provide you the best plans possible so that you can get best guidance at most affordable prices
            
                <div id='p-info'>
                    <div id='p1'>
                        <p id='main-title'>STANDARD</p>
                        <p id='price'>999 Rs.</p>
                        <Button variant='outlined' sx={{ bgcolor: '#3e1428', color: 'white', p: '0.5rem 1rem', fontSize: 30 }}>Book a session</Button>
                    
                        <div id='p1-info'>
                            <p><CheckCircleIcon />Best Career Guidance</p>
                            <p><CheckCircleIcon />Best Career Guidance</p>
                            <p><CheckCircleIcon />Best Career Guidance</p>
                            <p><CheckCircleIcon />Best Career Guidance</p>
                            <p><CheckCircleIcon />Best Career Guidance</p>
                        </div>
                    </div>
                    <div id='p2'>
                        <p id='main-title'>PREMIUM</p>
                        <p id='price'>1999 Rs.</p>
                        <Button variant='outlined' sx={{ bgcolor: 'white', border: 'none', color: '#3e1428', p: '0.5rem 1rem', fontSize: 30 }}>Book a session</Button>
                        
                        <div id='p2-info'>
                            <p><CheckCircleOutlineIcon />Best Career Guidance</p>
                            <p><CheckCircleOutlineIcon />Best Career Guidance</p>
                            <p><CheckCircleOutlineIcon />Best Career Guidance</p>
                            <p><CheckCircleOutlineIcon />Best Career Guidance</p>
                            <p><CheckCircleOutlineIcon />Best Career Guidance</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='waiting'>
                <img src='/assets/boss baby.png'></img>

                <div id='w-info'>
                    <p id='w-title'>SO WHAT ARE YOU WAITING FOR??</p>
                    Book a Session now and give your Career a new Guidance.
                    <Button variant='outlined' sx={{ bgcolor: 'white', color: 'orangered', p: '0.5rem 1rem', fontSize: 30, margin: 5 }}>Book a session</Button>
                </div>
            </div>

            <div id='consultancy-footer'>
                THIS IS FOOTER
            </div>
        </>
    )
}