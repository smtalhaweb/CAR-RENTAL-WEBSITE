import 'font-awesome/css/font-awesome.min.css';
import Img from "@/assets/Img.png"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-20">
      <div className="justify-between mx-auto w-5/6 gap-10 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Img} alt="Car-rental-image" />
          <p className="my-5 text-2xl font-bold">
            CAR RENTAL .
          </p>
          <p className='my-5'>MAIN HEADOFFICE:<br /> <span>U.A.E <br />123 Main Street,
            Dubai Marina, Dubai, UAE <br />Phone: (+971) 456-7890</span></p>
          <p className='my-5'>Email: info@rentalcarcompany.com </p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="text-2xl font-bold">Our Branches </p>
          <p className="my-5">karachi(PAK):Dha phase 2,street 12,near jamia masjid</p>
          <p className="my-5">Islamabad:F-11,G markaz</p>
          <p className="my-5">lahore:1234, street 34, near dha</p>

        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h3 className="text-2xl font-bold">Office Hours</h3>
          <p className="mt-2">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
          <h4 className="text-lg font-bold my-5">Connect With Us</h4>
          <div className="flex space-x-10">
            <a href="#" className="text-white"><i className="fa fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fa fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</a>
      </div>
      <div className="text-center mt-2">&copy; {new Date().getFullYear()} Rental Car Company</div>
    </footer>
  )
}
export default Footer;

