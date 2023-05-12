import { Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as React from 'react'
import "./Courses.css"

export default function Courses() {
    return (
        <>
            <div id='course-header'>
                <div id='h-info'>
                    <p id='h-title1'>Courses</p>
                    <p>Most affordable courses with no compromise in quality of content, helping you to level up yourself by learning from things which can be helpful to you.</p>
                    <Button sx={{ bgcolor: 'orangered', color: 'white', p: '0.5rem 1rem', fontSize: 30 }}>Login</Button>
                </div>
            </div>

            <div id='speciality'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block" src="/assets/VFX.jpg" alt="First slide"></img>
                            <p id='column-title'>VFX TUTORIAL</p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block" src="/assets/Simply explained.jpeg" alt="Second slide"></img>
                            <p id='column-title'>PHOTOSHOP TUTORIAL</p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block" src="/assets/YouTube originals.jpg" alt="Third slide"></img>
                            <p id='column-title'>YOUTUBE TUTORIAL</p>
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
                    <p id='s-title1'>QUALITY COURSES</p>
                    <p id='s-title2'>at affordable prices</p>
                    Most affordable courses with no compromise in quality of content, helping you to level up yourself by learning from things which can be helpful to you.
                    <Button variant='outlined' sx={{ border: '1px solid white', color: 'white', fontSize: 30, width: 200, marginTop: 2 }}>EXPLORE</Button>
                </div>
            </div>

            <div id='course-list'>
                <p id='cl-main-title'>EXPLORE THE COURSES</p>

                <p id='cl-title1'>Graphics designing</p>
                <div id='cl-details'>
                    <div id='cl1'>
                        <img src='/assets/VFX.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                    <div id='cl1'>
                        <img src='/assets/Simply Explained.jpeg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                    <div id='cl1'>
                        <img src='/assets/YouTube Originals.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                    <div id='cl1'>
                        <img src='/assets/Moon landing.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                </div>
                <Button variant='outlined' sx={{ border: '1px solid orangered', color: 'orangered', fontSize: 20, margin: '0.5rem 7rem' }}>EXPLORE MORE GRAPHICS DESIGNING COURSES</Button>

                <p id='cl-title1'>VFX Tutorial</p>
                <div id='cl-details'>
                    <div id='cl1'>
                        <img src='/assets/VFX.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                    <div id='cl1'>
                        <img src='/assets/VFX.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                    <div id='cl1'>
                        <img src='/assets/VFX.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                    <div id='cl1'>
                        <img src='/assets/VFX.jpg'></img>
                        <div id='cl1-info'>
                            <p>125 students</p>
                            <p>1h 25m</p>
                        </div>
                        <p id='cl1-name'>Photoshop:A step-by-step guide to King Graphics tool</p>
                        <p id='cl1-author'>Harsh Suthar</p>
                    </div>
                </div>
                <Button variant='outlined' sx={{ border: '1px solid orangered', color: 'orangered', fontSize: 20, margin: '0.5rem 7rem' }}>EXPLORE MORE VFX COURSES</Button>

            </div>

            <div id='mentor'>
                <p id='m-title'>MEET YOUR MENTORS</p>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div id='container'>
                                <img class="d-block" src="/assets/yash beardo.png" alt="First slide"></img>
                                <div id='m-info'>
                                    <p id='m-name'>ROCKY BHAI</p>
                                    <p id='m-work'>Actor, Producer</p>

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
                                <div id='m-info'>
                                    <p id='m-name'>HARSH SUTHAR</p>
                                    <p id='m-work'>YouTuber, Graphics Designer</p>

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
                                <div id='m-info'>
                                    <p id='m-name'>NIKHIL FAGWANI</p>
                                    <p id='m-work'>YouTuber, Graphics Designer, SpaceGeek</p>

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

            <div id='impact'>
                <div id='im-info'>
                    <p id='im-title'>Short courses, Big impact</p>
                    Executive Education courses are market-led and equip you with expertise to expand your impact. Designed with a data-driven focus, they assist business leaders in addressing organizational challenges and help professionals adapt or advance their careers. These Courses are presented by GetSmarter, a 2U, Inc. brand, in collaboration with the world's most reputable institutions.
                </div>
                <img src='/assets/Moon landing.jpg'></img>
            </div>

            <div id='footer'>
                THIS IS FOOTER
            </div>
        </>
    )
}