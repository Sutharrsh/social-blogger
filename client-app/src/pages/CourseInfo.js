import { Button } from '@mui/material'
import * as React from 'react'
import "./CourseInfo.css"

export default function CourseInfo() {
    return (
        <>
            <div id='header'>
            </div>

            <div id='course'>
                <img src='/assets/Simply explained.jpeg'></img>
                <div id='info'>
                    <p id='c-title'>PHOTOSHOP TUTORIAL</p>
                    A 360 degree complete guide on how to become a YouTube content creator.
                    Insights from Ankur Warikoo and his team that grew the channel from 7k subscribers to 2M+ subscribers in less than 2 years.
                    <p id='c-info'> 20+ Hours of Content<br />
                        Instructed by warikoo & Team<br />
                        Live Q&A Sessions<br />
                        14-day Return Policy </p>
                </div>
            </div>

            <div id='about'>

                <p id='a-title'>About the course</p>

                <p>You love YouTube videos. And now you’re considering starting your own YouTube channel. Or maybe you already have one.</p>

                <p>This course will give you everything that goes into running and growing a YouTube channel, starting from:</p>

                <ol>
                    <li>Scripting and designing your video, and NEVER running out of ideas.</li>
                    <li>Growing your channel WITHOUT paid ads.</li>
                    <li>Mastering data and using it to grow your channel.</li>
                    <li>Monetizing your channel and effectively creating multiple sources of revenue.</li>
                </ol>

                <p>All of this, while understanding...</p>

                <p>YouTube as a science.<br />
                    Not Virality. Not Luck.<br />
                    Pure Science.</p>

                <p>You put in the right inputs, and you INVARIABLY will get the right outputs!</p>
            </div>

            <div id='chapters'>
                <p id='ch-title'>Chapters</p>
                <div id='ch'>
                    <p>Chapter 1: Understanding Photoshop's Layout</p>
                </div>
                <div id='ch'>
                    <p>Chapter 2: Tools to convert your Imagination into Reality</p>
                </div>
                <div id='ch'>
                    <p>Chapter 3: Understanding Photoshop's Layout</p>
                </div>
                <div id='ch'>
                    <p>Chapter 4: Tools to convert your Imagination into Reality</p>
                </div>
            </div>

            <div id='why'>
                <p id='w-title'>Why this course is Best for you?</p>
                <div id='w-container'>
                    <div id='w1'>
                        <p id='w1-title'>TO TRANSFORM YOURSELF FROM BEGINNER TO ADVANCE IN PHOTOSHOP</p>
                    </div>
                    <div id='w1'>
                        <p id='w1-title'>TO TRANSFORM YOURSELF FROM BEGINNER TO ADVANCE IN PHOTOSHOP</p>
                    </div>
                    <div id='w1'>
                        <p id='w1-title'>TO TRANSFORM YOURSELF FROM BEGINNER TO ADVANCE IN PHOTOSHOP</p>
                    </div>
                    <div id='w1'>
                        <p id='w1-title'>TO TRANSFORM YOURSELF FROM BEGINNER TO ADVANCE IN PHOTOSHOP</p>
                    </div>
                </div>
            </div>

            <div id='instructor'>
                <div id='i-info'>
                    <p id='i-title1'>MEET YOUR INSTRUCTOR</p>
                    <p id='i-title2'>ROCKY BHAI</p>
                
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

                <img src='/assets/yash beardo.png'></img>
            </div>

            <div id='enroll-button'>
                <Button variant='contained' sx={{fontSize: "1.5rem", fontWeight: 'bolder', padding: 3}}>Enroll Now</Button>
            </div>

            <div id='certificate'>
                <img src='/assets/warikoo certificate.png'></img>
                <div id='ce-info'>
                    <p id='ce-title'>CERTFICATE</p>
                    Share your certificate on LinkedIn, Twitter, Instagram and tag Ankur Warikoo. You can also share it in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.
                </div>
            </div>

            <div id='footer'>
                THIS IS FOOTER
            </div>
        </>
    )
}