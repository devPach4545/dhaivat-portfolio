import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
const formRef = useRef();
const [form, setForm] = useState({
name: "",
email: "",
message: "",
 });
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const handleChange = (e) => {
const { name, value } = e.target;
setForm({ ...form, [name]: value });
 };
const handleSubmit = (e) => {
e.preventDefault();
setLoading(true);
setError(false);
setSuccess(false);
// You'll need to sign up for EmailJS and replace these with your actual service ID, template ID, and public key
emailjs.sendForm(
'service_tuqtmv9',
'template_2m1q4l6',
formRef.current,
'ibd1iEWta70EZH2gE'
 )
 .then(() => {
setLoading(false);
setSuccess(true);
setForm({
name: "",
email: "",
message: "",
 });
 }, (error) => {
setLoading(false);
setError(true);
console.log(error);
 });
 };
return (
<footer id="contact" className={styles.container}>
<div className={styles.text}>
<p>Feel free to reach out!</p>
</div>
<div className={styles.formContainer}>
<form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
<div className={styles.formField}>
<label className={styles.label}>Your Name</label>
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Name"
className={styles.input}
required
/>
</div>
<div className={styles.formField}>
<label className={styles.label}>Your Email</label>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email"
className={styles.input}
required
/>
</div>
<div className={styles.formField}>
<label className={styles.label}>Your Message</label>
<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Message"
className={styles.textarea}
required
/>
</div>
<button type="submit" className={styles.submitButton}>
{loading ? "Sending..." : "Send Message"}
</button>
{success && (
<p className={styles.successMessage}>
 Thank you. I will get back to you as soon as possible.
</p>
 )}
{error && (
<p className={styles.errorMessage}>
 Something went wrong. Please try again.
</p>
 )}
</form>
</div>
<ul className={styles.links}>

<li className={styles.link}>
<img
src={getImageUrl("contact/linkedinIcon.png")}
alt="LinkedIn icon"
/>
<a href="https://www.linkedin.com/in/dhaivat-pachchigar-b58493242">linkedin.com/Dhaivat</a>
</li>
<li className={styles.link}>
<img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
<a href="https://github.com/devPach4545">github.com/DevPach</a>
</li>
</ul>
</footer>
 );
};
