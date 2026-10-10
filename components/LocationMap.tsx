export default function LocationMap() {
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      <div className="card shadowx p-6 md:p-8">
        <h3 className="text-xl font-black text-[#0b1f4d]">Our Location</h3>
        <p className="mt-4 text-slate-700">📍 Bhavnath Taleti Rd, Bhavnath, Junagadh, Gujarat 362001</p>
        <p className="mt-3 text-slate-700">📞 <b><a href="tel:+919023556476">+91 90235 56476</a></b> (Call / WhatsApp)</p>
        <p className="mt-3 text-slate-700">✉️ <a href="mailto:nataraj.yatra1@gmail.com">nataraj.yatra1@gmail.com</a></p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a className="btn btn-orange" href="tel:+919023556476">Call Now</a>
          <a className="btn bg-[#25d366] text-white" target="_blank" rel="noopener" href="https://wa.me/919023556476">WhatsApp</a>
        </div>
      </div>
      <iframe
        title="NATARAJ.YATRA location on Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.3935297352577!2d70.50010637349678!3d21.531462470326403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958016fb5e8fd97%3A0x3a50364e68dd44ae!2sNATARAJ.YATRA!5e0!3m2!1sen!2sin!4v1782391488502!5m2!1sen!2sin"
        className="w-full h-full min-h-[320px] rounded-2xl border-0 shadowx"
      />
    </div>
  );
}
