
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hello? Feel free to reach out. I'd love to hear from you!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Location */}
                    <div className="flex flex-col items-center">
                        <span className="bg-blue-100 text-blue-500 rounded-full p-4 mb-4 flex items-center justify-center">
                            <MapPin size={32} />
                        </span>
                        <h4 className="font-semibold text-lg mb-1">Location</h4>
                        <p className="text-muted-foreground text-center">Gampaha, Sri Lanka</p>
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col items-center">
                        <span className="bg-blue-100 text-blue-500 rounded-full p-4 mb-4 flex items-center justify-center">
                            <Phone size={32} />
                        </span>
                        <h4 className="font-semibold text-lg mb-1">Phone</h4>
                        <p className="text-muted-foreground text-center">0759163821</p>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <span className="bg-blue-100 text-blue-500 rounded-full p-4 mb-4 flex items-center justify-center">
                            <Mail size={32} />
                        </span>
                        <h4 className="font-semibold text-lg mb-1">Email</h4>
                        <p className="text-muted-foreground text-center">sandeepasubashini6@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}