import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__subtitle">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__contact">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title"></h3>
                        <span className="contact__card-data"></span>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your idea</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact