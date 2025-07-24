import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBanner from "../components/TopBanner/TopBanner";
import content from "../data/site_content";
import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";

const ContactPage = () => {
  useMeta({
    title: "Contact Us | Devtech Labs - Let’s Build Something Great Together",
    description: "Get in touch with Devtech Labs for custom software development, technology consulting, and digital innovation solutions. We'd love to hear about your project!",
    keywords: "Devtech Labs contact, software consultation, tech support, project inquiry, software development contact, IT services, digital solutions, hire developers"
  });

 const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Request submitted successfully!");
    setForm({ name: "", email: "", service: "", message: "" });
  };
  return (
    <>
    <ToastContainer />
    <TopBanner
            title="Contact Us"
            breadcrumbs={[
                { label: 'Home', path: '/', active: false },
                { label: 'Contact Us', active: true }
            ]}
        />
    <section className="contact-section section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 col-12 me-auto mb-lg-0 mb-5">
                             <h2 className="my-3">Get IT HELP ?</h2>
                            <p>
                              At DevTech Labs, we build end-to-end web and mobile solutions, from concept to production.
                            </p>

                             {content.footer.office && (
                            <div className="contact-info bg-white shadow-lg">
                                <h3 className="mb-4">Contact Information</h3>
                                
                                {content.footer.office.addressLine1 && content.footer.office.cityStateZip && (
                                <p className="d-flex mt-3 mb-3">
                                    <i className="bi-geo-alt-fill custom-icon me-3"></i>
                                     {content.footer.office.addressLine1}, {content.footer.office.cityStateZip}
                                </p>
                                )}

                                {content.footer.office.phone && (
                                <h5 className="d-flex mb-3">
                                    <i className="bi-telephone-fill custom-icon me-3"></i>

                                    <Link to={`tel: ${content.footer.office.phone}`} className="site-footer-link">
                                        {content.footer.office.phone}
                                    </Link>
                                </h5>
                                )}

                                {content.footer.office.email && (
                                <h5 className="d-flex">
                                    <i className="bi-envelope-fill custom-icon me-3"></i>

                                    <Link to={`mailto:${content.footer.office.email}`} className="site-footer-link">
                                      {content.footer.office.email}
                                  </Link>
                                </h5>
                                )}
                            </div>
                             )}
                        </div>

                        <div className="col-lg-6 col-12">
                            <form className="custom-form consulting-form bg-white shadow-lg mb-5 mb-lg-0" action="#" method="post" role="form" onSubmit={handleSubmit}>
                                <div className="consulting-form-header d-flex align-items-center">
                                    <h3 className="mb-4">Get a Free Quotation</h3>
                                </div>

                                <div className="consulting-form-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            className="form-control" 
                                            placeholder="John Walker" 
                                            value={form.name}
                                            onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12">
                                            <input 
                                              type="email" 
                                              name="email" 
                                              id="email" 
                                              pattern="[^ @]*@[^ @]*" 
                                              className="form-control" 
                                              placeholder="yours@gmail.com"  
                                              value={form.email}
                                              onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <select
                                      className="form-select form-control" 
                                      name="service"
                                      value={form.service}
                                      onChange={handleChange}
                                    >
                                      <option value="">Select Service</option>
                                      <option value="web">Web Development</option>
                                      <option value="mobile">Mobile App Development</option>
                                      <option value="uiux">UI/UX Design</option>
                                      <option value="cloud">Cloud Consulting</option>
                                    </select>

                                    <textarea name="message" rows="3" className="form-control" id="message" placeholder="Comment (Optional)"
                                     value={form.message}
                                    onChange={handleChange}
                                    ></textarea>

                                    <div className="col-lg-6 col-md-10 col-8 mx-auto">
                                        <button type="submit" className="form-control">Submit Request</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
    </>
  );
};

export default ContactPage;
