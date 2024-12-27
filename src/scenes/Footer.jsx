import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-150 bg-brown pt-8 pb-8">
      <div className="w-5/6 mx-auto">
        <div className="text-center"> {/* Removed justify-center */}
          <img className="mx-auto pb-4" src="../assets/footer-image.png" alt="contact" /> {/* Added mx-auto to center the image */}
          <p className="font-playfair text-md text-white">©2024 TRUONG. All Rights Reserved.</p>
          <p className="font-playfair text-md text-yellow">
            Built using React, Tailwind, Framer-Motion, React Hook Form, Components, Git, Github, and Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;