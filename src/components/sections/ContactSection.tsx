import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Contact
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:asantos@vicomtech.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      asantos@vicomtech.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Office</p>
                    <p className="text-muted-foreground">
                      Vicomtech, Digital Media & Communications
                      <br />
                      Donostia – San Sebastián
                      <br />
                      Basque Country, Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Section */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Updates
                </h3>
                <p className="text-foreground/80 text-sm">
                  I will be sharing news, research updates, and announcements here. Stay tuned for the latest from my work at Vicomtech and Deusto University.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
