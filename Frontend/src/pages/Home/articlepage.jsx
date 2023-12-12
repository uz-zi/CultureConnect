import React from 'react'
import pic9 from "../../assets/light2.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'; 



export default function articlepage() {
  return (
    <div>
      <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-10 col-xl-10">
                        <h1 className='my-5' style={{fontSize: '36px'}}>Welcome to CultureConnect!!</h1>
                        <p style={{fontSize: '24px'}}>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
                        <p style={{fontSize: '24px'}}>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
                        <p style={{fontSize: '24px'}}>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>
                        <br />
                        <h2 class="section-heading" style={{fontSize: '34px'}}>The Final Frontier</h2>
                        <br />
                        <p style={{fontSize: '24px'}}>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
                        <p style={{fontSize: '24px'}}>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
                        <p style={{fontSize: '24px'}}>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
                        <br />
                        <h2 class="section-heading" style={{fontSize: '34px'}}>Reaching for the Stars</h2>
                        <br />
                        <p style={{fontSize: '24px'}}>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
                        <br />
                        <a href="#!"><img class="img-fluid" src={pic9} alt="..." /></a>
                        <br />
                        <p style={{fontSize: '24px'}}>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>
                        <p style={{fontSize: '24px'}}>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>
                        <br />
                        <p>
                            Placeholder text by &middot; 
                            <a href="">Muhammad Ahmad</a>
                            &middot; Images by
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
  )
}
