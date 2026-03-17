import '../styles/home.css';

export default function Home() {
    return (
        <>
            <div className="home-hero">
                <div className="hero-text">
                    <h1>Your Choice Plumbing</h1>
                    <p>Your number 1 Plumbing and reparing services</p>
                </div>
            </div>
            <div className="services">
                <div>
                    <img src="/assets/images/homepage/pluming-hero.png" alt="Plumbing" />
                    <p>Plumbing</p>
                </div>
                <div>
                    <img src="/assets/images/homepage/bathroom-remodeling-hero.png" alt="Bathroom Remodeling" />
                    <p>Bathroom Remodeling</p>
                </div>
                <div>
                    <img src="/assets/images/homepage/pipe-works.png" alt="Pipe Works" />
                    <p>Pipe Works</p>
                </div>
            </div>
            <div className="hero-info">
                <div className="hero-info-text">
                    <h1>Plumbing Company in East Legon, Ghana.</h1>
                    <p>
                        Your Choice Plumbing Services is a fully-licensed plumbing company dedicated to providing top-notch residential and commercial plumbing solutions.
                        Whether facing a minor repair or a major installation, our skilled team ensures prompt and dependable service every time.
                        Our experienced technicians guarantee that each task is completed accurately on the first attempt, leaving your plumbing and water systems functioning flawlessly and efficiently.
                    </p>
                </div>
                <img src="/assets/images/homepage/plumbing-tools.jpg" alt="Plumbing Tools" />
            </div>
            <div className="recent-work">
                <div id="recent-work-img">
                    <img src="/assets/images/homepage/work1.webp" alt="Recent Work" />
                </div>
                <div>
                    <h1>Your Choice Plumbing Services Shower Work</h1>
                    <p>
                        At Your Choice Plumbing Services, we recently completed a full shower system installation for a residential client seeking both functionality and modern aesthetics.
                        The project involved replacing outdated fixtures with a sleek, water-efficient showerhead, installing a thermostatic mixing valve for precise temperature control, and upgrading the drainage system to ensure optimal water flow.
                        Our team handled every step—from demolition to final polish—with precision and care. We ensured all plumbing connections were leak-free, compliant with local codes, and built to last.
                        The result was a beautifully finished shower space that not only enhances the bathroom’s appeal but also delivers a reliable and comfortable experience for years to come.
                    </p>
                </div>
            </div>
            <div className="apprenticeship">
                <div>
                    <h1>We offer apprenticeship</h1>
                    <p>
                        At Your Choice Plumbing Services, we believe in building the future of plumbing through hands-on training and mentorship.
                        Our apprenticeship program is designed for individuals eager to learn the trade, gain real-world experience, and grow into skilled professionals.
                        Apprentices work alongside experienced technicians on residential and commercial projects, learning everything from basic repairs to complex installations.
                        We provide structured guidance, safety training, and opportunities to develop both technical and customer service skills.
                        Whether you're just starting out or looking to transition into a rewarding career, our program offers a solid foundation and a pathway to certification and long-term employment.
                    </p>
                </div>
                <img src="/assets/images/homepage/pipe-apprenticeship.png" alt="Apprenticeship" />
            </div>
        </>
    );
}
