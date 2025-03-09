import ContactForm from "@components/sections/Home/ContactSection/ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-primary xl:px-30 mt-10 flex flex-col justify-between gap-10 px-5 py-10 md:flex-row md:px-10 lg:px-20">
      <div className="md:1/2 flex-auto xl:max-w-lg">
        <h2 className="mb-5 lg:mb-8">
          Let us handle your project, professionally.
        </h2>
        <p className="body-base text-secondary">
          With well written codes, we build amazing apps for all platforms,
          mobile and web apps in general.
        </p>
      </div>
      <div className="flex-auto md:w-1/2 xl:max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
