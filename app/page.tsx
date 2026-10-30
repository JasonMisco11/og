import Image from "next/image";

const media = {
  logo: "/og-assets/WhatsApp-Image-2026-03-09-at-8.25.25-AM-Photoroom.png",
  classroom: "/products/clevertouch-classroom.png",
  projector: "/products/hitachi-projector.jpg",
  xploris: "/products/xploris.jpg",
};

const brands = ["CleverTouch", "SMART Board", "Boxlight", "ViewSonic", "Epson", "BenQ"];

const products = [
  {
    name: "Clevertouch Edge",
    category: "INTERACTIVE DISPLAY",
    image: "/products/clevertouch-edge.jpg",
    description: "A flagship touch display built for ambitious teaching and collaboration.",
  },
  {
    name: "IMPACT Lux 2",
    category: "INTERACTIVE DISPLAY",
    image: "/products/impact-lux-2.jpg",
    description: "Premium collaborative display with Google EDLA certification and powerful built-in tools.",
  },
  {
    name: "Clevertouch X5",
    category: "INTERACTIVE DISPLAY",
    image: "/products/clevertouch-x5.jpg",
    description: "A practical 4K interactive screen for everyday lessons, meetings and shared work.",
  },
  {
    name: "Hitachi Projectors",
    category: "PROJECTION",
    image: media.projector,
    description: "Projection options for engaging presentations, lessons and larger spaces.",
  },
  {
    name: "Xploris STEAM Solution",
    category: "HANDS-ON STEM",
    image: media.xploris,
    description: "A portable learning kit for science experiments, coding, animation and music.",
  },
  {
    name: "Labdisc Science Lab",
    category: "HANDS-ON STEM",
    image: "/products/labdisc.jpg",
    description: "A wireless, all-in-one science lab that makes classroom experiments easier to run.",
  },
];

const services = [
  {
    number: "01",
    title: "Smart classrooms & AV",
    description: "Interactive displays, projectors and classroom technology, thoughtfully selected and professionally integrated.",
    icon: "display",
  },
  {
    number: "02",
    title: "Education consultancy",
    description: "Practical teacher training, assessment for learning and hands-on support for technology-rich teaching.",
    icon: "education",
  },
  {
    number: "03",
    title: "Cybersecurity & IT",
    description: "Trusted guidance and modern protection to help your people, systems and data stay secure.",
    icon: "shield",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="arrow-icon">
      {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  if (name === "display") {
    return <svg aria-hidden="true" viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="25" rx="3"/><path d="M17 40h14m-7-7v7M13 15h22M13 21h12"/></svg>;
  }
  if (name === "education") {
    return <svg aria-hidden="true" viewBox="0 0 48 48" fill="none"><path d="m5 18 19-10 19 10-19 10L5 18Z"/><path d="M13 23v10c7 6 15 6 22 0V23M42 19v12"/><circle cx="42" cy="34" r="2"/></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 48 48" fill="none"><path d="M24 5 40 11v12c0 10-6.5 16-16 20C14.5 39 8 33 8 23V11l16-6Z"/><path d="m17 24 5 5 10-11"/></svg>;
}

export default function Home() {
  return (
    <main>
      <div className="topline">
        <div className="topline-inner">
          <span>Technology for better learning and working</span>
          <div className="topline-contact">
            <a href="mailto:ogandassociates@icloud.com">ogandassociates@icloud.com</a>
            <span className="topline-divider" />
            <a href="tel:+233553378943">+233 55 337 8943</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="OG and Associates Tech home">
            <Image src={media.logo} alt="OG & Associates" width={220} height={127} priority />
            <span className="brand-divider" />
            <span className="brand-tech">TECH<br />LIMITED</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#solutions">Solutions</a>
            <a href="#products">Products</a>
            <a href="#about">About us</a>
            <a href="#approach">Our approach</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="mailto:ogandassociates@icloud.com?subject=Let%E2%80%99s%20talk%20technology">
            Let’s talk <Arrow diagonal />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#about">About us</a>
              <a href="#approach">Our approach</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> WEST AFRICAN EDTECH & AV PARTNER</div>
          <h1>Make room<br />for <span>what’s next.</span></h1>
          <p className="hero-intro">The right technology can change how we teach, learn and work. We help schools and organisations make that change with confidence.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#solutions">Explore our solutions <Arrow /></a>
            <a className="text-link" href="tel:+233553378943">Speak with us<Arrow /></a>
          </div>
          <div className="hero-note"><span className="note-spark">✳</span><span>Thoughtful technology.<br /><strong>Made to make a difference.</strong></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image src={media.classroom} alt="A student using a large interactive display during a classroom lesson" fill priority sizes="(max-width: 760px) 100vw, 53vw" className="cover-image" />
          </div>
          <div className="hero-stamp"><span className="stamp-star">✳</span><span>Ideas into<br />impact</span></div>
          <div className="hero-caption"><span>Clevertouch case study</span><span>Interactive learning in practice</span></div>
          <div className="hero-orbit" aria-hidden="true" />
        </div>
        <div className="hero-index" aria-hidden="true">OG<span>—</span>01</div>
      </section>

      <section className="partner-strip" aria-label="Technology brands">
        <p>Technology from<br />brands you trust</p>
        <div className="partner-list">{brands.map((brand) => <span key={brand}>{brand}</span>)}</div>
        <a href="#solutions" aria-label="Explore our technology partners"><Arrow diagonal /></a>
      </section>

      <section className="products-section" id="products">
        <div className="section-label"><span>01</span> / A LOOK AT OUR PRODUCTS</div>
        <div className="products-heading">
          <h2>Tools for better<br /><em>learning & work.</em></h2>
          <div><p>From interactive displays to hands-on science tools, we help you find the right fit for your space and your people.</p><a className="underlined-link" href="mailto:ogandassociates@icloud.com?subject=Product%20enquiry">Ask us about a product <Arrow /></a></div>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-visual product-visual-${index + 1}`}>
                <Image src={product.image} alt={`${product.name} product`} fill sizes="(max-width: 680px) 46vw, (max-width: 1000px) 46vw, 31vw" className="product-image" />
              </div>
              <div className="product-info"><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p>
                <a href={`mailto:ogandassociates@icloud.com?subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`}>Request a quote <Arrow diagonal /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="products-note">A selection of products available through OG & Associates Tech. Ask us about displays, projectors, compatible accessories, configurations and availability.</p>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label"><span>01</span> / WHO WE ARE</div>
        <div className="intro-main">
          <h2>Technology should<br />open <em>doors.</em></h2>
          <div className="intro-text">
            <p>OG & Associates Tech, also known as TAAGO, brings people and technology together. We design smart learning environments, supply trusted AV solutions and help organisations get more from the tools they use every day.</p>
            <p>From the first conversation to installation, training and ongoing support, we stay close to the details that make a solution work in real life.</p>
            <a className="underlined-link" href="#approach">A partner from start to finish <Arrow /></a>
          </div>
        </div>
        <div className="experience-strip">
          <div className="experience-years"><strong>14+</strong><span>years of experience</span></div>
          <p>From product selection and installation to training and ongoing support, one team helps you put your technology to work.</p>
          <a href="#approach" aria-label="See our approach"><Arrow diagonal /></a>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="section-label section-label-light"><span>02</span> / WHAT WE DO</div>
        <div className="solutions-heading"><h2>Good technology.<br /><em>Thoughtfully chosen.</em></h2><p>Practical expertise for the spaces where people learn, collaborate and grow.</p></div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top"><span>{service.number}</span><ServiceIcon name={service.icon} /></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <a href={`mailto:ogandassociates@icloud.com?subject=${encodeURIComponent(`Tell me about ${service.title}`)}`} aria-label={`Ask us about ${service.title}`}><Arrow diagonal /></a>
            </article>
          ))}
        </div>
        <div className="solutions-foot"><span>Also here when you need us</span><p>Web design & development <i>·</i> Project support & maintenance <i>·</i> Technology upgrades</p></div>
      </section>

      <section className="feature-section">
        <div className="feature-image product-feature-image"><div className="feature-product-tag">CLEVERTOUCH<br />INTERACTIVE DISPLAY</div><Image src="/products/clevertouch-edge.jpg" alt="Clevertouch Edge interactive display" fill sizes="(max-width: 760px) 100vw, 50vw" className="feature-product" /><div className="feature-image-caption">A more interactive way to share ideas.</div></div>
        <div className="feature-copy">
          <div className="section-label"><span>03</span> / WHY OG & ASSOCIATES</div>
          <h2>Good work starts<br />with <em>good listening.</em></h2>
          <p>Every organisation is different. We take time to understand your goals, recommend what fits and deliver it with care—so the technology feels useful from day one.</p>
          <ul><li><span>01</span> Advice shaped around your needs</li><li><span>02</span> Trusted technology, sourced with care</li><li><span>03</span> Practical installation, training & support</li></ul>
          <a className="underlined-link" href="#approach">See how we work <Arrow /></a>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-heading"><div className="section-label"><span>04</span> / OUR APPROACH</div><h2>Clear steps.<br /><em>Lasting impact.</em></h2><p>Good outcomes come from good collaboration. Here’s how we get there together.</p></div>
        <div className="steps-list">
          <div className="step"><span className="step-num">01</span><div><h3>Listen & understand</h3><p>We learn about your goals, your people and the challenges you want to solve.</p></div><span className="step-symbol">↘</span></div>
          <div className="step"><span className="step-num">02</span><div><h3>Plan what fits</h3><p>We recommend a clear, considered solution for your space and your budget.</p></div><span className="step-symbol">↘</span></div>
          <div className="step"><span className="step-num">03</span><div><h3>Deliver with care</h3><p>We install, configure and help your team feel confident using the new technology.</p></div><span className="step-symbol">↘</span></div>
          <div className="step"><span className="step-num">04</span><div><h3>Stay by your side</h3><p>We’re here for ongoing support, practical training and what comes next.</p></div><span className="step-symbol">↗</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-bg-orbit" aria-hidden="true" />
        <div className="contact-copy"><div className="section-label section-label-light"><span>05</span> / START A CONVERSATION</div><h2>Let’s make<br />something <em>work.</em></h2><p>Planning a new learning space? Looking for the right display? We’d be glad to hear what you have in mind.</p><a className="button button-light" href="mailto:ogandassociates@icloud.com?subject=Let%E2%80%99s%20make%20something%20work">Tell us what you need <Arrow /></a></div>
        <div className="contact-card"><span className="contact-card-label">GET IN TOUCH</span><a href="tel:+233553378943" className="contact-item"><span>PHONE</span><strong>+233 55 337 8943</strong><Arrow diagonal /></a><a href="mailto:ogandassociates@icloud.com" className="contact-item"><span>EMAIL</span><strong>ogandassociates@icloud.com</strong><Arrow diagonal /></a><div className="contact-item address"><span>HEAD OFFICE</span><strong>128 City Road<br />London, EC1V 2NX<br />United Kingdom</strong></div><a className="contact-save" href="/og-associates.vcf" download>Save our contact <span>＋</span></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><a className="brand" href="#home" aria-label="Back to top"><Image src={media.logo} alt="OG & Associates" width={165} height={95} /><span className="brand-divider" /><span className="brand-tech">TECH<br />LIMITED</span></a><p>Thoughtful technology for learning and work.</p></div>
        <div className="footer-links"><a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#about">About us</a><a href="#approach">Our approach</a><a href="mailto:ogandassociates@icloud.com">Email us</a></div>
        <div className="footer-meta"><span>Accra · West Africa</span><span>© {new Date().getFullYear()} OG & Associates Tech Limited</span></div>
      </footer>
    </main>
  );
}
