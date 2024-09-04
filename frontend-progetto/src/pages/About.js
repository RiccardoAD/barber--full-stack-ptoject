import React, { useEffect } from 'react'
import scrollToTop from '../helpers/scrollToTop'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-vh-100">
      <div className="position-relative">
        <img
          className="img-fluid w-100 h-40 object-cover object-left-bottom"
          style={{ filter: 'brightness(75%) grayscale(100%)', height: '40vh' }}
          src="https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg"
          alt="About Us"
        />
        <h2 className="position-absolute top-0 start-50 translate-middle-x d-flex align-items-center justify-content-center h-100 text-center py-4 display-1 text-danger">
          About Us
        </h2>
      </div>
      
      <section className="py-5 d-flex justify-content-center text-dark">
        <h2 className="display-1 d-none d-lg-block position-absolute" style={{ top: '13rem', left: '-12rem', color: '#8B0000', transform: 'rotate(90deg)' }}>How We Started</h2>
        <img
          src="https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="d-none d-md-block w-25 grayscale"
          alt="Our Story"
        />
        <div className="d-flex flex-column gap-3 px-3">
          <p className="display-4">How We Started</p>
          <p className="fst-italic"> Since 2000</p>
          <p className="lead mx-auto">
            our journey began with a deep passion for the art of barbering and a strong commitment to serving our community. Our story unfolds in a small, modest barbershop where Billy, our founder, honed his craft and built lasting relationships with our very first clients.
          </p>
          <p className="lead mx-auto">
            From those early days, word quickly spread about the quality of service and the welcoming atmosphere we offered. As our reputation grew, so did our barbershop. We expanded our team of skilled barbers, always focusing on delivering precision haircuts and classic shaves that left our clients feeling confident and looking their best.
          </p>
          <p className="lead mx-auto">
            We proudly uphold the same values that guided us from the start: exceptional craftsmanship, a warm and inviting atmosphere, and an unwavering dedication to helping our clients achieve their desired look and maintain their personal style.
          </p>
        </div>
      </section>
      
      <section className="py-5 d-flex justify-content-center text-dark bg-danger bg-opacity-10">
        <h2 className="display-1 d-none d-lg-block position-absolute" style={{ top: '16rem', left: '-12rem', color: '#8B0000', transform: 'rotate(90deg)' }}>Our Story</h2>
        <div className="d-flex flex-column gap-3 px-3">
          <p className="display-4">Who We Are</p>
          <p className="fst-italic">Dedicated Professionals</p>
          <p className="lead mx-auto">
            In the heart of our town, a small, unassuming barbershop opened its doors. It was in this modest space that Billy embarked on his journey, armed with his trusty scissors, razors, and a relentless pursuit of perfection. From the very beginning, it was clear that Billy's dedication to his craft set him apart.
          </p>
          <p className="lead mx-auto">
            As time went on,  reputation as a master barber grew. He built not only a thriving business but also strong, lasting relationships with his clients. The barbershop became a place where friends gathered, stories were shared, and laughter echoed through the air.
          </p>
          <p className="lead mx-auto">
            Today our commitment to excellence remains unchanged. We've expanded our team of talented barbers, each handpicked for their skill and dedication to the art of barbering. Our barbers are not just professionals; they're artists, craftsmen who understand that a great haircut is more than just a service - it's an experience.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="d-none d-md-block w-25 object-cover"
          alt="Our Team"
        />
      </section>
    </div>
  );
}

export default About;

